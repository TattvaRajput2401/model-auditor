"""add agent_configs

Revision ID: 90772c8075ae
Revises: 5d21799b7013
Create Date: 2026-03-22 15:08:34.834814

"""
from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa

from sqlalchemy.dialects import postgresql

# revision identifiers, used by Alembic.
revision: str = '90772c8075ae'
down_revision: Union[str, Sequence[str], None] = '5d21799b7013'
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None



def upgrade() -> None:
    op.create_table(
        "agent_configs",
        sa.Column("id", sa.UUID(), primary_key=True),
        sa.Column("agent_id", sa.String(), sa.ForeignKey("agents.id"), nullable=False),
        sa.Column("tenant_id", sa.UUID(), nullable=False),

        sa.Column("provider", sa.Text(), nullable=False),
        sa.Column("model_name", sa.Text(), nullable=False),

        sa.Column("encrypted_api_key", sa.Text()),

        sa.Column("config", postgresql.JSONB(), nullable=False),
        sa.Column("editable_fields", postgresql.JSONB(), nullable=False),

        sa.Column("created_at", sa.TIMESTAMP(), server_default=sa.text("now()")),
        sa.Column("updated_at", sa.TIMESTAMP(), server_default=sa.text("now()")),
    )

    op.create_index("idx_agent_config_agent", "agent_configs", ["agent_id"])
    op.create_index("idx_agent_config_tenant", "agent_configs", ["tenant_id"])


def downgrade() -> None:
    op.drop_index("idx_agent_config_tenant", table_name="agent_configs")
    op.drop_index("idx_agent_config_agent", table_name="agent_configs")
    op.drop_table("agent_configs")
