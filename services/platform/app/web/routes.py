from pathlib import Path

from fastapi import APIRouter, Request
from fastapi.responses import HTMLResponse
from fastapi.templating import Jinja2Templates

from app.services.dashboard import build_dashboard_context

router = APIRouter()
templates = Jinja2Templates(directory=str(Path(__file__).resolve().parents[1] / "templates"))


@router.get("/", response_class=HTMLResponse)
def dashboard(request: Request):
    context = build_dashboard_context()
    context["request"] = request
    return templates.TemplateResponse(request, "dashboard.html", context)
