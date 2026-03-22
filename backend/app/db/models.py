from sqlalchemy import (
    Column, String, Text, Integer, Float, Boolean,
    ForeignKey, TIMESTAMP, Enum
)
from sqlalchemy.dialects.postgresql import UUID, JSONB
from sqlalchemy.orm import declarative_base
import sqlalchemy as sa
import uuid
from datetime import datetime
import enum
from sqlalchemy.sql import func

Base = declarative_base()


# -------------------------
# ENUMS
# -------------------------

class UserRole(str, enum.Enum):
    admin = "admin"
    operator = "operator"
    viewer = "viewer"


class AgentStatus(str, enum.Enum):
    active = "active"
    inactive = "inactive"


class RunStatus(str, enum.Enum):
    running = "running"
    success = "success"
    failed = "failed"


class TriggerType(str, enum.Enum):
    manual = "manual"
    api = "api"
    scheduled = "scheduled"


class EventType(str, enum.Enum):
    input = "input"
    output = "output"
    tool = "tool"
    error = "error"


class ActionType(str, enum.Enum):
    restart = "restart"
    block = "block"
    patch = "patch"


class ActionStatus(str, enum.Enum):
    pending = "pending"
    executed = "executed"
    failed = "failed"


class Severity(str, enum.Enum):
    low = "low"
    medium = "medium"
    high = "high"
    critical = "critical"


# -------------------------
# HELPERS
# -------------------------

def now():
    return datetime.utcnow()


# -------------------------
# TENANTS
# -------------------------

class Tenant(Base):
    __tablename__ = "tenants"

    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    name = Column(Text, nullable=False)
    created_at = Column(TIMESTAMP, server_default=sa.text("now()"))


# -------------------------
# USERS
# -------------------------

class User(Base):
    __tablename__ = "users"

    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    tenant_id = Column(UUID(as_uuid=True), ForeignKey("tenants.id"))

    username = Column(Text, unique=True, nullable=False)
    password_hash = Column(Text, nullable=False)

    role = Column(Enum(UserRole), nullable=False, default=UserRole.viewer)

    created_at = Column(TIMESTAMP, server_default=sa.text("now()"))
    deleted_at = Column(TIMESTAMP, nullable=True)


# -------------------------
# API KEYS
# -------------------------

class APIKey(Base):
    __tablename__ = "api_keys"

    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    tenant_id = Column(UUID(as_uuid=True), ForeignKey("tenants.id"))
    agent_id = Column(String, nullable=True)

    key_hash = Column(Text, nullable=False)
    name = Column(Text)

    created_at = Column(TIMESTAMP, server_default=sa.text("now()"))
    expires_at = Column(TIMESTAMP)
    deleted_at = Column(TIMESTAMP, nullable=True)


# -------------------------
# AGENTS
# -------------------------

class Agent(Base):
    __tablename__ = "agents"

    id = Column(String, primary_key=True)
    tenant_id = Column(UUID(as_uuid=True), ForeignKey("tenants.id"))

    name = Column(Text)
    agent_type = Column(Text)
    model_provider = Column(Text)

    status = Column(Enum(AgentStatus), nullable=False, default=AgentStatus.active)

    created_at = Column(TIMESTAMP, server_default=sa.text("now()"))
    deleted_at = Column(TIMESTAMP, nullable=True)


# -------------------------
# AGENT RUNS
# -------------------------

class AgentRun(Base):
    __tablename__ = "agent_runs"

    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    agent_id = Column(String, ForeignKey("agents.id"))
    tenant_id = Column(UUID(as_uuid=True))

    status = Column(Enum(RunStatus))
    trigger_type = Column(Enum(TriggerType))

    started_at = Column(TIMESTAMP)
    ended_at = Column(TIMESTAMP)
    deleted_at = Column(TIMESTAMP, nullable=True)


# -------------------------
# AGENT EVENTS
# -------------------------

class AgentEvent(Base):
    __tablename__ = "agent_events"

    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    run_id = Column(UUID(as_uuid=True), ForeignKey("agent_runs.id"))
    agent_id = Column(String)
    tenant_id = Column(UUID(as_uuid=True))

    event_type = Column(Enum(EventType))
    step_name = Column(Text)

    input = Column(Text)
    output = Column(Text)

    latency_ms = Column(Integer)

    risk_score = Column(Float)
    is_flagged = Column(
        Boolean,
        nullable=False,
        default=False,
        server_default=sa.text("false")
    )

    event_metadata = Column(JSONB)

    created_at = Column(TIMESTAMP, server_default=sa.text("now()"))
    deleted_at = Column(TIMESTAMP, nullable=True)


# -------------------------
# ERRORS
# -------------------------

class AgentError(Base):
    __tablename__ = "agent_errors"

    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    event_id = Column(UUID(as_uuid=True), ForeignKey("agent_events.id"))
    agent_id = Column(String)

    error_type = Column(Text)
    error_message = Column(Text)
    stack_trace = Column(Text)

    created_at = Column(TIMESTAMP, server_default=sa.text("now()"))


# -------------------------
# POLICY VIOLATIONS
# -------------------------

class PolicyViolation(Base):
    __tablename__ = "policy_violations"

    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    event_id = Column(UUID(as_uuid=True), ForeignKey("agent_events.id"))
    agent_id = Column(String)

    policy_name = Column(Text)
    severity = Column(Enum(Severity))
    description = Column(Text)

    created_at = Column(TIMESTAMP, server_default=sa.text("now()"))


# -------------------------
# ACTIONS
# -------------------------

class Action(Base):
    __tablename__ = "actions"

    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    agent_id = Column(String)
    run_id = Column(UUID(as_uuid=True))

    action_type = Column(Enum(ActionType))
    status = Column(Enum(ActionStatus))

    reason = Column(Text)
    payload = Column(JSONB)

    created_at = Column(TIMESTAMP, server_default=sa.text("now()"))
    executed_at = Column(TIMESTAMP)


# -------------------------
# ALERTS
# -------------------------

class Alert(Base):
    __tablename__ = "alerts"

    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    tenant_id = Column(UUID(as_uuid=True))
    agent_id = Column(String, nullable=True)

    type = Column(Text)
    severity = Column(Enum(Severity))

    message = Column(Text)

    is_resolved = Column(
        Boolean,
        nullable=False,
        default=False,
        server_default=sa.text("false")
    )

    created_at = Column(TIMESTAMP, server_default=sa.text("now()"))
    deleted_at = Column(TIMESTAMP, nullable=True)


# -------------------------
# AUDIT LOGS
# -------------------------

class AuditLog(Base):
    __tablename__ = "audit_logs"

    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)

    tenant_id = Column(UUID(as_uuid=True))
    user_id = Column(UUID(as_uuid=True), nullable=True)

    entity_type = Column(Text)
    entity_id = Column(Text)

    action = Column(Text)

    before = Column(JSONB)
    after = Column(JSONB)

    created_at = Column(TIMESTAMP, server_default=sa.text("now()"))

# -------------------------
# AGENTCONFIG
# -------------------------
class AgentConfig(Base):
    __tablename__ = "agent_configs"

    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)

    agent_id = Column(String, ForeignKey("agents.id"), nullable=False)
    tenant_id = Column(UUID(as_uuid=True), nullable=False)

    provider = Column(Text, nullable=False)
    model_name = Column(Text, nullable=False)

    encrypted_api_key = Column(Text, nullable=True)

    # flexible configs
    config = Column(JSONB, nullable=False, default=dict)

    # controls what agent can edit
    editable_fields = Column(JSONB, nullable=False, default=list)

    created_at = Column(TIMESTAMP, server_default=func.now())
    updated_at = Column(TIMESTAMP, server_default=func.now(), onupdate=func.now())