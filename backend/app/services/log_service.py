from datetime import datetime
from app.schemas.log_schema import AgentLog

LOGS = []

def store_log(log: AgentLog):

    if not log.timestamp:
        log.timestamp = datetime.utcnow()

    LOGS.append(log)

    return log


def get_logs():
    return LOGS