from pydantic import BaseModel
from typing import Optional
from uuid import UUID


class AgentBase(BaseModel):
    id: str
    tenant_id: UUID
    name: Optional[str] = None
    agent_type: Optional[str] = None
    model_provider: Optional[str] = None


class AgentCreate(AgentBase):
    status: str


class AgentOut(AgentBase):
    status: str

    class Config:
        from_attributes = True