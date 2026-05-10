from app.schemas.traffic import TrafficFeatures
from app.services.predictor import predict_density


def test_predict_density_returns_valid_response():
    response = predict_density(
        TrafficFeatures(
            intersection_id="INT-001",
            hour_of_day=8,
            day_of_week=1,
            vehicle_count=120,
            average_speed_kph=21,
            lane_occupancy=0.81,
            weather_factor=1.1,
            event_factor=1.0,
        )
    )
    assert response.predicted_density >= 0
    assert response.recommended_green_seconds >= 40
