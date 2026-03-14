from pydantic import BaseModel
from datetime import datetime
from typing import Optional

class AgentLog(BaseModel):
    agent_id: str
    prompt: str
    response: str
    latency_ms: int
    error: Optional[str] = None
    timestamp: Optional[datetime] = None