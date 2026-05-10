from pydantic import BaseModel, Field


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


class DetectionResponse(BaseModel):
    label: str
    confidence: float
    severity: str

