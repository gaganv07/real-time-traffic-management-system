from fastapi.testclient import TestClient

from app.main import app

client = TestClient(app)


def test_health_endpoint():
    response = client.get("/api/v1/health")
    assert response.status_code == 200
    assert response.json()["status"] == "ok"


def test_dashboard_renders():
    response = client.get("/")
    assert response.status_code == 200
    assert "Smart City Command Center" in response.text


def test_prediction_endpoint():
    payload = {
        "intersection_id": "INT-001",
        "hour_of_day": 8,
        "day_of_week": 1,
        "vehicle_count": 120,
        "average_speed_kph": 21,
        "lane_occupancy": 0.81,
        "weather_factor": 1.1,
        "event_factor": 1.0,
    }
    response = client.post("/api/v1/predict/traffic", json=payload)
    assert response.status_code == 200
    assert response.json()["recommended_green_seconds"] >= 40
