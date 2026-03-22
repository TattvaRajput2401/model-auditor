from pydantic import BaseModel
from typing import Dict, Any, List, Optional
from uuid import UUID


class AgentConfigBase(BaseModel):
    agent_id: str
    tenant_id: UUID


class AgentConfigCreate(AgentConfigBase):
    provider: str
    model_name: str
    api_key: Optional[str] = None

    config: Dict[str, Any]
    editable_fields: List[str] = []


class AgentConfigUpdate(BaseModel):
    provider: Optional[str] = None
    model_name: Optional[str] = None
    api_key: Optional[str] = None
    config: Optional[Dict[str, Any]] = None
    editable_fields: Optional[List[str]] = None


class AgentConfigAgentUpdate(BaseModel):
    config: Dict[str, Any]


class AgentConfigOut(BaseModel):
    agent_id: str
    tenant_id: UUID
    provider: str
    model_name: str
    config: Dict[str, Any]
    editable_fields: List[str]

    class Config:
        from_attributes = True