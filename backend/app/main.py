from fastapi import FastAPI
from app.api.routes import agents, logs, auth

app = FastAPI(
    title="Model Auditor",
    version="1.0.0"
)

app.include_router(auth.router, prefix="/auth", tags=["auth"])
app.include_router(agents.router, prefix="/agents", tags=["agents"])
app.include_router(logs.router, prefix="/logs", tags=["logs"])

@app.get("/health")
def health():
    return {"status": "ok"}
