from sqlalchemy.orm import Session
from fastapi import HTTPException

from app.db.models import Agent, AgentConfig
from app.core.security import encrypt


# =======================
# AGENT CORE (DB-BASED)
# =======================

class AgentService:

    @staticmethod
    def register_agent(db: Session, payload):
        existing = (
            db.query(Agent)
            .filter(
                Agent.id == payload.id,
                Agent.tenant_id == payload.tenant_id,
                Agent.deleted_at.is_(None),
            )
            .first()
        )

        if existing:
            raise HTTPException(status_code=400, detail="Agent already exists")

        agent = Agent(
            id=payload.id,
            tenant_id=payload.tenant_id,
            name=payload.name,
            agent_type=payload.agent_type,
            model_provider=payload.model_provider,
            status=payload.status,
        )

        db.add(agent)
        db.commit()
        db.refresh(agent)

        return agent

    @staticmethod
    def list_agents(db: Session, tenant_id):
        return (
            db.query(Agent)
            .filter(
                Agent.tenant_id == tenant_id,
                Agent.deleted_at.is_(None),
            )
            .all()
        )

    @staticmethod
    def get_agent(db: Session, agent_id: str, tenant_id):
        agent = (
            db.query(Agent)
            .filter(
                Agent.id == agent_id,
                Agent.tenant_id == tenant_id,
                Agent.deleted_at.is_(None),
            )
            .first()
        )

        if not agent:
            raise HTTPException(status_code=404, detail="agent not found")

        return agent


# ==================
# AGENT CONFIG 
# ==================

class AgentConfigService:

    @staticmethod
    def create_config(db: Session, payload):
        encrypted_key = encrypt(payload.api_key) if payload.api_key else None

        config = AgentConfig(
            agent_id=payload.agent_id,
            tenant_id=payload.tenant_id,
            provider=payload.provider,
            model_name=payload.model_name,
            encrypted_api_key=encrypted_key,
            config=payload.config,
            editable_fields=payload.editable_fields,
        )

        db.add(config)
        db.commit()
        db.refresh(config)

        return config

    @staticmethod
    def get_config(db: Session, agent_id: str, tenant_id):
        config = (
            db.query(AgentConfig)
            .filter(
                AgentConfig.agent_id == agent_id,
                AgentConfig.tenant_id == tenant_id,
            )
            .first()
        )

        if not config:
            raise HTTPException(status_code=404, detail="config not found")

        return config

    @staticmethod
    def update_config(db: Session, config, payload):
        if payload.provider:
            config.provider = payload.provider

        if payload.model_name:
            config.model_name = payload.model_name

        if payload.api_key:
            config.encrypted_api_key = encrypt(payload.api_key)

        if payload.config:
            config.config = payload.config

        if payload.editable_fields is not None:
            config.editable_fields = payload.editable_fields

        db.commit()
        db.refresh(config)
        return config

    @staticmethod
    def agent_update_config(db: Session, config, payload):
        allowed_fields = config.editable_fields or []
        new_config = config.config.copy()

        for key, value in payload.config.items():
            if key not in allowed_fields:
                raise HTTPException(
                    status_code=403,
                    detail=f"agent cannot modify '{key}'"
                )
            new_config[key] = value

        config.config = new_config

        db.commit()
        db.refresh(config)
        return config