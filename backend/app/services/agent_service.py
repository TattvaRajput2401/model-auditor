from app.schemas.agent_schema import AgentCreate

AGENTS = []

def register_agent(agent: AgentCreate):

    if any(a.id == agent.id for a in AGENTS):
        raise ValueError("Agent already exists")

    AGENTS.append(agent)

    return agent


def list_agents():
    return AGENTS