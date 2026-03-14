from fastapi import APIRouter, HTTPException
from app.schemas.agent_schema import AgentCreate
from app.services.agent_service import register_agent, list_agents

router = APIRouter()


@router.post("/register")
def register(agent: AgentCreate):

    try:
        result = register_agent(agent)
        return {"message": "agent registered", "agent": result}

    except ValueError as e:
        raise HTTPException(status_code=400, detail=str(e))


@router.get("/")
def get_agents():
    return list_agents()