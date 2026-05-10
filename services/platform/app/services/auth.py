from datetime import datetime, timedelta, timezone

import jwt

from app.core.config import settings


def create_access_token(user_id: str, role: str) -> str:
    expires_at = datetime.now(timezone.utc) + timedelta(minutes=settings.access_token_ttl_minutes)
    payload = {"sub": user_id, "role": role, "exp": expires_at}
    return jwt.encode(payload, settings.jwt_secret, algorithm="HS256")

