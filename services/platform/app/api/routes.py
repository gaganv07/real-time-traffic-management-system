from fastapi import APIRouter

from app.schemas.domain import DetectionRequest, LoginRequest, TrafficFeatures
from app.services.auth import create_access_token
from app.services.dashboard import build_dashboard_context
from app.services.detector import detect_incident
from app.services.predictor import predict_density
from app.services.simulation import (
    generate_analytics_summary,
    generate_incidents,
    generate_mock_simulation,
    generate_signal_plans,
    generate_traffic_snapshots,
)

router = APIRouter(prefix="/api/v1")


@router.get("/health")
def health() -> dict:
    return {"status": "ok", "service": "traffic-platform", "mode": "python-first"}


@router.post("/auth/login")
def login(payload: LoginRequest) -> dict:
    return {
        "access_token": create_access_token("user-001", "admin"),
        "token_type": "bearer",
        "profile": {
            "id": "user-001",
            "name": "Central Traffic Command",
            "role": "admin",
            "email": payload.email,
        },
    }


@router.get("/traffic/overview")
def traffic_overview() -> dict:
    return {"items": [item.model_dump(mode="json") for item in generate_traffic_snapshots()]}


@router.get("/signals/overview")
def signals_overview() -> dict:
    return {"items": [item.model_dump(mode="json") for item in generate_signal_plans()]}


@router.get("/incidents/overview")
def incidents_overview() -> dict:
    return {"items": [item.model_dump(mode="json") for item in generate_incidents()]}


@router.get("/analytics/overview")
def analytics_overview() -> dict:
    return generate_analytics_summary()


@router.get("/dashboard/context")
def dashboard_context() -> dict:
    return build_dashboard_context()


@router.get("/simulate/traffic")
def simulate_traffic(seed_count: int = 6) -> dict:
    return {"items": generate_mock_simulation(seed_count)}


@router.post("/predict/traffic")
def predict_traffic(features: TrafficFeatures) -> dict:
    return predict_density(features).model_dump(mode="json")


@router.post("/detect/incident")
def detect_incident_endpoint(payload: DetectionRequest) -> dict:
    return detect_incident(payload.frame_reference).model_dump(mode="json")
