from pydantic import BaseModel

class AgentCreate(BaseModel):
    id: str
    name: str
    model: str
    agent_type: str