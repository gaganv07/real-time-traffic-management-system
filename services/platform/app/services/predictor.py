from app.schemas.domain import PredictionResponse, TrafficFeatures


def predict_density(features: TrafficFeatures) -> PredictionResponse:
    weighted_density = (
        features.vehicle_count * 0.35
        + (60 - min(features.average_speed_kph, 60)) * 1.4
        + features.lane_occupancy * 100 * 0.45
    ) * features.weather_factor * features.event_factor

    normalized = min(weighted_density / 100, 1.0)
    if normalized >= 0.8:
        congestion = "critical"
    elif normalized >= 0.6:
        congestion = "high"
    elif normalized >= 0.35:
        congestion = "moderate"
    else:
        congestion = "low"

    return PredictionResponse(
        intersection_id=features.intersection_id,
        predicted_density=round(normalized, 3),
        congestion_level=congestion,
        recommended_green_seconds=40 + int(normalized * 35),
    )

