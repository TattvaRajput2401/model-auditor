#!/usr/bin/env python3
"""Initialize database with users table"""

from sqlalchemy import create_engine
from sqlalchemy.sql import text
import uuid

# Create engine for SQLite
engine = create_engine("sqlite:///./test.db")

# Create tables and add default tenant
with engine.connect() as conn:
    try:
        # Check if table exists
        conn.execute(text("SELECT name FROM sqlite_master WHERE type='table' AND name='tenants'"))
    except:
        pass
    
    # Create tenants table first if it doesn't exist
    conn.execute(text("""
        CREATE TABLE IF NOT EXISTS tenants (
            id TEXT PRIMARY KEY,
            name TEXT NOT NULL,
            created_at DATETIME DEFAULT CURRENT_TIMESTAMP
        )
    """))
    
    # Create users table
    conn.execute(text("""
        CREATE TABLE IF NOT EXISTS users (
            id TEXT PRIMARY KEY,
            tenant_id TEXT,
            username TEXT UNIQUE NOT NULL,
            email TEXT UNIQUE NOT NULL,
            full_name TEXT,
            password_hash TEXT NOT NULL,
            role TEXT NOT NULL DEFAULT 'viewer',
            is_active BOOLEAN NOT NULL DEFAULT 1,
            created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
            deleted_at DATETIME,
            FOREIGN KEY (tenant_id) REFERENCES tenants(id)
        )
    """))
    
    # Insert default tenant if it doesn't exist
    default_tenant_id = "default"
    conn.execute(text("""
        INSERT OR IGNORE INTO tenants (id, name, created_at)
        VALUES (:id, :name, CURRENT_TIMESTAMP)
    """), {"id": default_tenant_id, "name": "Default Tenant"})
    
    conn.commit()
    
    print("✓ Users table created successfully!")
    print("✓ Default tenant created!")
