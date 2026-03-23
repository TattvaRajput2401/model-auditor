from sqlalchemy.orm import Session
from sqlalchemy import or_
from app.db.models import User, Tenant
from app.schemas.auth_schema import UserCreate, UserResponse
from app.core.security import hash_password, verify_password, create_access_token
import uuid
from typing import Optional


def create_user(db: Session, user_data: UserCreate, tenant_id: Optional[str] = None) -> dict:
    """Create a new user with bcrypt hashed password"""
    
    # Create default tenant if not provided
    if not tenant_id:
        tenant = db.query(Tenant).first()
        if not tenant:
            tenant = Tenant(id=uuid.uuid4(), name="default")
            db.add(tenant)
            db.commit()
        tenant_id = tenant.id
    
    # Check if user already exists
    existing_user = db.query(User).filter(
        or_(User.username == user_data.username, User.email == user_data.email)
    ).first()
    
    if existing_user:
        raise ValueError("Username or email already exists")
    
    # Hash password
    password_hash = hash_password(user_data.password)
    
    # Create user
    new_user = User(
        id=uuid.uuid4(),
        tenant_id=tenant_id,
        username=user_data.username,
        email=user_data.email,
        full_name=user_data.full_name,
        password_hash=password_hash,
        is_active=True,
    )
    
    db.add(new_user)
    db.commit()
    db.refresh(new_user)
    
    # Generate token
    token = create_access_token(data={"sub": str(new_user.id), "username": new_user.username})
    
    user_response = UserResponse(
        id=str(new_user.id),
        username=new_user.username,
        email=new_user.email,
        full_name=new_user.full_name,
        is_active=new_user.is_active,
    )
    
    return {
        "access_token": token,
        "token_type": "bearer",
        "user": user_response,
    }


def authenticate_user(db: Session, username: str, password: str) -> dict:
    """Authenticate user and return token if credentials are valid"""
    
    # Find user by username or email
    user = db.query(User).filter(
        or_(User.username == username, User.email == username)
    ).first()
    
    if not user or not verify_password(password, user.password_hash):
        raise ValueError("Invalid username or password")
    
    if not user.is_active:
        raise ValueError("User account is inactive")
    
    # Generate token
    token = create_access_token(data={"sub": str(user.id), "username": user.username})
    
    user_response = UserResponse(
        id=str(user.id),
        username=user.username,
        email=user.email,
        full_name=user.full_name,
        is_active=user.is_active,
    )
    
    return {
        "access_token": token,
        "token_type": "bearer",
        "user": user_response,
    }


def get_user_by_id(db: Session, user_id: str) -> Optional[User]:
    """Get user by ID"""
    return db.query(User).filter(User.id == user_id).first()


def get_user_by_username(db: Session, username: str) -> Optional[User]:
    """Get user by username"""
    return db.query(User).filter(User.username == username).first()
