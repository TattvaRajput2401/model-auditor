from cryptography.fernet import Fernet
import base64

from app.core.config import settings


SECRET_KEY = settings.ENCRYPTION_KEY

key = base64.urlsafe_b64encode(SECRET_KEY.encode().ljust(32)[:32])
cipher = Fernet(key)


def encrypt(value: str) -> str:
    return cipher.encrypt(value.encode()).decode()


def decrypt(value: str) -> str:
    return cipher.decrypt(value.encode()).decode()