from fastapi import APIRouter
from datetime import datetime
from app.schemas.log_schema import AgentLog

router = APIRouter()

LOGS = []

@router.post("/")
def ingest_log(log: AgentLog):

    if not log.timestamp:
        log.timestamp = datetime.utcnow()

    LOGS.append(log)

    return {
        "message": "Log stored",
        "log": log
    }


@router.get("/")
def get_logs():
    return LOGS