from fastapi import APIRouter
from app.schemas.user_schema import UserCreate

router = APIRouter()

USERS = []

@router.post("/register")
def register(user: UserCreate):

    USERS.append(user)

    return {
        "message": "User created"
    }