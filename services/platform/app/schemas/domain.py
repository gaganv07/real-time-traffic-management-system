from datetime import datetime
from pydantic import BaseModel, Field


class Coordinates(BaseModel):
    lat: float
    lng: float


class TrafficSnapshot(BaseModel):
    intersection_id: str
    density_score: float = Field(ge=0, le=1)
    average_speed_kph: float = Field(ge=0)
    queue_length: int = Field(ge=0)
    lane_occupancy: float = Field(ge=0, le=1)
    congestion_level: str
    updated_at: datetime


class SignalPlan(BaseModel):
    intersection_id: str
    phase: str
    green_duration_seconds: int
    amber_duration_seconds: int
    red_duration_seconds: int
    adaptive_mode: bool


class IncidentRecord(BaseModel):
    id: str
    type: str
    severity: str
    status: str
    location: Coordinates
    detected_at: datetime
    description: str


class TrafficFeatures(BaseModel):
    intersection_id: str
    hour_of_day: int = Field(ge=0, le=23)
    day_of_week: int = Field(ge=0, le=6)
    vehicle_count: int = Field(ge=0)
    average_speed_kph: float = Field(ge=0)
    lane_occupancy: float = Field(ge=0, le=1)
    weather_factor: float = Field(default=1.0, ge=0.2, le=2.0)
    event_factor: float = Field(default=1.0, ge=0.2, le=3.0)


class PredictionResponse(BaseModel):
    intersection_id: str
    predicted_density: float
    congestion_level: str
    recommended_green_seconds: int


class DetectionRequest(BaseModel):
    frame_reference: str


class DetectionResponse(BaseModel):
    label: str
    confidence: float
    severity: str


class LoginRequest(BaseModel):
    email: str
    password: str = Field(min_length=8)
