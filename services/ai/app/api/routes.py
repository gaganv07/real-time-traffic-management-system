from fastapi import APIRouter
from pydantic import BaseModel

from app.schemas.traffic import TrafficFeatures
from app.services.detector import detect_incident
from app.services.predictor import predict_density
from app.services.simulation import generate_simulation

router = APIRouter()


class DetectionRequest(BaseModel):
    frame_reference: str


@router.get("/health")
def health():
    return {"status": "ok", "service": "traffic-ai"}


@router.post("/predict/traffic")
def predict_traffic(features: TrafficFeatures):
    return predict_density(features)


@router.post("/detect/incident")
def detect(request: DetectionRequest):
    return detect_incident(request.frame_reference)


@router.get("/simulate/traffic")
def simulate(seed_count: int = 6):
    return {"items": generate_simulation(seed_count)}

