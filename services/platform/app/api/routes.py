from fastapi import APIRouter

from app.schemas.domain import DetectionRequest, TrafficFeatures
from app.services.auth import create_access_token
from app.services.detector import detect_incident
from app.services.predictor import predict_density
from app.services.simulation import (
    generate_analytics_summary,
    generate_incidents,
    generate_signal_plans,
    generate_traffic_snapshots,
)

router = APIRouter(prefix="/api/v1")


@router.get("/health")
def health() -> dict:
    return {"status": "ok", "service": "traffic-platform", "mode": "python-first"}


@router.post("/auth/login")
def login() -> dict:
    return {
        "access_token": create_access_token("user-001", "admin"),
        "token_type": "bearer",
        "profile": {
            "id": "user-001",
            "name": "Central Traffic Command",
            "role": "admin",
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


@router.post("/predict/traffic")
def predict_traffic(features: TrafficFeatures) -> dict:
    return predict_density(features).model_dump(mode="json")


@router.post("/detect/incident")
def detect_incident_endpoint(payload: DetectionRequest) -> dict:
    return detect_incident(payload.frame_reference).model_dump(mode="json")

