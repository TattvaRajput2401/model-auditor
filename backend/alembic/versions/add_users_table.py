"""add users table

Revision ID: add_users_table
Revises: 90772c8075ae
Create Date: 2026-03-22 18:00:00.000000

"""

from typing import Sequence, Union
from alembic import op
import sqlalchemy as sa

revision: str = 'add_users_table'
down_revision: Union[str, Sequence[str], None] = '90772c8075ae'
branch_labels = None
depends_on = None


def upgrade() -> None:
    op.create_table(
        'users',
        sa.Column('id', sa.UUID(), nullable=False),
        sa.Column('tenant_id', sa.UUID(), nullable=True),
        sa.Column('username', sa.Text(), nullable=False, unique=True),
        sa.Column('email', sa.Text(), nullable=False, unique=True),
        sa.Column('full_name', sa.Text(), nullable=True),
        sa.Column('password_hash', sa.Text(), nullable=False),
        sa.Column('role', sa.String(), nullable=False, server_default='viewer'),
        sa.Column('is_active', sa.Boolean(), nullable=False, server_default='true'),
        sa.Column('created_at', sa.TIMESTAMP(), server_default=sa.text('now()')),
        sa.Column('deleted_at', sa.TIMESTAMP(), nullable=True),
        sa.ForeignKeyConstraint(['tenant_id'], ['tenants.id'], ),
        sa.PrimaryKeyConstraint('id'),
    )


def downgrade() -> None:
    op.drop_table('users')
