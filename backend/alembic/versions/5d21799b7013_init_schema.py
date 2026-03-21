"""init schema

Revision ID: 5d21799b7013
Revises: 
Create Date: 2026-03-21 19:09:34.701486

"""

from typing import Sequence, Union
from alembic import op
import sqlalchemy as sa
from sqlalchemy.dialects import postgresql

revision: str = '5d21799b7013'
down_revision: Union[str, Sequence[str], None] = None
branch_labels = None
depends_on = None


def upgrade() -> None:

    # -------------------------
    # TABLES
    # -------------------------

    op.create_table(
        'tenants',
        sa.Column('id', sa.UUID(), primary_key=True),
        sa.Column('name', sa.Text(), nullable=False),
        sa.Column('created_at', sa.TIMESTAMP(), server_default=sa.text('now()')),
    )

    op.create_table(
        'agents',
        sa.Column('id', sa.String(), primary_key=True),
        sa.Column('tenant_id', sa.UUID(), sa.ForeignKey('tenants.id')),
        sa.Column('name', sa.Text()),
        sa.Column('agent_type', sa.Text()),
        sa.Column('model_provider', sa.Text()),
        sa.Column('status', sa.String(), nullable=False),
        sa.Column('created_at', sa.TIMESTAMP(), server_default=sa.text('now()')),
        sa.Column('deleted_at', sa.TIMESTAMP()),
    )

    op.create_table(
        'agent_runs',
        sa.Column('id', sa.UUID(), primary_key=True),
        sa.Column('agent_id', sa.String(), sa.ForeignKey('agents.id')),
        sa.Column('tenant_id', sa.UUID()),
        sa.Column('status', sa.String()),
        sa.Column('trigger_type', sa.String()),
        sa.Column('started_at', sa.TIMESTAMP()),
        sa.Column('ended_at', sa.TIMESTAMP()),
        sa.Column('deleted_at', sa.TIMESTAMP()),
    )

    op.create_table(
        'agent_events',
        sa.Column('id', sa.UUID(), primary_key=True),
        sa.Column('run_id', sa.UUID(), sa.ForeignKey('agent_runs.id')),
        sa.Column('agent_id', sa.String()),
        sa.Column('tenant_id', sa.UUID()),
        sa.Column('event_type', sa.String()),
        sa.Column('step_name', sa.Text()),
        sa.Column('input', sa.Text()),
        sa.Column('output', sa.Text()),
        sa.Column('latency_ms', sa.Integer()),
        sa.Column('risk_score', sa.Float()),
        sa.Column('is_flagged', sa.Boolean(), nullable=False, server_default=sa.text('false')),
        sa.Column('event_metadata', postgresql.JSONB()),
        sa.Column('created_at', sa.TIMESTAMP(), server_default=sa.text('now()')),
        sa.Column('deleted_at', sa.TIMESTAMP()),
    )

    op.create_table(
        'policy_violations',
        sa.Column('id', sa.UUID(), primary_key=True),
        sa.Column('event_id', sa.UUID(), sa.ForeignKey('agent_events.id')),
        sa.Column('agent_id', sa.String()),
        sa.Column('policy_name', sa.Text()),
        sa.Column('severity', sa.String()),
        sa.Column('description', sa.Text()),
        sa.Column('created_at', sa.TIMESTAMP(), server_default=sa.text('now()')),
    )

    op.create_table(
        'actions',
        sa.Column('id', sa.UUID(), primary_key=True),
        sa.Column('agent_id', sa.String()),
        sa.Column('run_id', sa.UUID()),
        sa.Column('action_type', sa.String()),
        sa.Column('status', sa.String()),
        sa.Column('reason', sa.Text()),
        sa.Column('payload', postgresql.JSONB()),
        sa.Column('created_at', sa.TIMESTAMP(), server_default=sa.text('now()')),
        sa.Column('executed_at', sa.TIMESTAMP()),
    )

    op.create_table(
        'alerts',
        sa.Column('id', sa.UUID(), primary_key=True),
        sa.Column('tenant_id', sa.UUID()),
        sa.Column('agent_id', sa.String()),
        sa.Column('type', sa.Text()),
        sa.Column('severity', sa.String()),
        sa.Column('message', sa.Text()),
        sa.Column('is_resolved', sa.Boolean(), nullable=False, server_default=sa.text('false')),
        sa.Column('created_at', sa.TIMESTAMP(), server_default=sa.text('now()')),
        sa.Column('deleted_at', sa.TIMESTAMP()),
    )

    op.create_table(
        'audit_logs',
        sa.Column('id', sa.UUID(), primary_key=True),
        sa.Column('tenant_id', sa.UUID()),
        sa.Column('user_id', sa.UUID()),
        sa.Column('entity_type', sa.Text()),
        sa.Column('entity_id', sa.Text()),
        sa.Column('action', sa.Text()),
        sa.Column('before', postgresql.JSONB()),
        sa.Column('after', postgresql.JSONB()),
        sa.Column('created_at', sa.TIMESTAMP(), server_default=sa.text('now()')),
    )

    # -------------------------
    # INDEXES
    # -------------------------
    op.create_index('idx_agents_tenant', 'agents', ['tenant_id'])
    op.create_index('idx_runs_agent_time', 'agent_runs', ['agent_id', 'started_at'])
    op.create_index('idx_events_agent_time', 'agent_events', ['agent_id', 'created_at'])
    op.create_index('idx_events_run', 'agent_events', ['run_id'])
    op.create_index('idx_events_risk', 'agent_events', ['risk_score'])
    op.create_index('idx_violations_agent', 'policy_violations', ['agent_id'])
    op.create_index('idx_alerts_tenant_time', 'alerts', ['tenant_id', 'created_at'])


def downgrade() -> None:

    op.drop_index('idx_alerts_tenant_time', table_name='alerts')
    op.drop_index('idx_violations_agent', table_name='policy_violations')
    op.drop_index('idx_events_risk', table_name='agent_events')
    op.drop_index('idx_events_run', table_name='agent_events')
    op.drop_index('idx_events_agent_time', table_name='agent_events')
    op.drop_index('idx_runs_agent_time', table_name='agent_runs')
    op.drop_index('idx_agents_tenant', table_name='agents')

    op.drop_table('audit_logs')
    op.drop_table('alerts')
    op.drop_table('actions')
    op.drop_table('policy_violations')
    op.drop_table('agent_events')
    op.drop_table('agent_runs')
    op.drop_table('agents')
    op.drop_table('tenants')