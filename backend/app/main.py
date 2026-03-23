from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.api.routes import agents, logs, auth

app = FastAPI(
    title="Model Auditor",
    version="1.0.0"
)

# Add CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000", "http://localhost:8000", "http://127.0.0.1:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(auth.router)
app.include_router(agents.router, prefix="/agents", tags=["agents"])
app.include_router(logs.router, prefix="/logs", tags=["logs"])

@app.get("/health")
def health():
    return {"status": "ok"}
