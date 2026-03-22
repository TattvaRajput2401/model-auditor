from fastapi import APIRouter, HTTPException, Depends, Query
from sqlalchemy.orm import Session

from app.db.session import get_db
from app.services.agent_service import AgentService, AgentConfigService

from app.schemas.agent_schema import AgentCreate
from app.schemas.agent_config import (
    AgentConfigCreate,
    AgentConfigUpdate,
    AgentConfigAgentUpdate,
    AgentConfigOut,
)

router = APIRouter()


# ========================
# AGENT ROUTES (DB BASED)
# ========================

@router.post("/register")
def register_agent(
    payload: AgentCreate,
    db: Session = Depends(get_db),
):
    return AgentService.register_agent(db, payload)


@router.get("/")
def get_agents(
    tenant_id: str = Query(...),
    db: Session = Depends(get_db),
):
    return AgentService.list_agents(db, tenant_id)


# =====================
# AGENT CONFIG ROUTES
# =====================

@router.post("/config", response_model=AgentConfigOut)
def create_config(
    payload: AgentConfigCreate,
    db: Session = Depends(get_db),
):
    return AgentConfigService.create_config(db, payload)


@router.get("/{agent_id}/config", response_model=AgentConfigOut)
def get_config(
    agent_id: str,
    tenant_id: str = Query(...),
    db: Session = Depends(get_db),
):
    return AgentConfigService.get_config(db, agent_id, tenant_id)


@router.put("/{agent_id}/config", response_model=AgentConfigOut)
def update_config(
    agent_id: str,
    payload: AgentConfigUpdate,
    tenant_id: str = Query(...),
    db: Session = Depends(get_db),
):
    config = AgentConfigService.get_config(db, agent_id, tenant_id)
    return AgentConfigService.update_config(db, config, payload)


@router.patch("/{agent_id}/config/agent", response_model=AgentConfigOut)
def agent_update_config(
    agent_id: str,
    payload: AgentConfigAgentUpdate,
    tenant_id: str = Query(...),
    db: Session = Depends(get_db),
):
    config = AgentConfigService.get_config(db, agent_id, tenant_id)
    return AgentConfigService.agent_update_config(db, config, payload)