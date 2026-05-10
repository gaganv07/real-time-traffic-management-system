from pydantic_settings import BaseSettings


class Settings(BaseSettings):
    app_name: str = "Smart City Traffic Command"
    app_version: str = "2.0.0"
    environment: str = "development"
    jwt_secret: str = "change-me"
    access_token_ttl_minutes: int = 30


settings = Settings()

