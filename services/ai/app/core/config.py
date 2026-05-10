from pydantic_settings import BaseSettings


class Settings(BaseSettings):
    service_name: str = "traffic-ai-service"
    service_version: str = "1.0.0"


settings = Settings()

