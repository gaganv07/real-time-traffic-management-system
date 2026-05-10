from pathlib import Path

from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles

from app.api.routes import router as api_router
from app.core.config import settings
from app.web.routes import router as web_router
from app.ws.routes import router as ws_router

BASE_DIR = Path(__file__).resolve().parent

app = FastAPI(title=settings.app_name, version=settings.app_version)
app.mount("/static", StaticFiles(directory=str(BASE_DIR / "static")), name="static")
app.include_router(api_router)
app.include_router(web_router)
app.include_router(ws_router)
