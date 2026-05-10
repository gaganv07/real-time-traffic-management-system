from datetime import datetime, timedelta, timezone

from app.schemas.domain import Coordinates, IncidentRecord, SignalPlan, TrafficSnapshot


def _now() -> datetime:
    return datetime.now(timezone.utc)


def generate_traffic_snapshots() -> list[TrafficSnapshot]:
    base_time = _now()
    return [
        TrafficSnapshot(
            intersection_id="INT-001",
            density_score=0.84,
            average_speed_kph=17.0,
            queue_length=24,
            lane_occupancy=0.79,
            congestion_level="critical",
            updated_at=base_time,
        ),
        TrafficSnapshot(
            intersection_id="INT-002",
            density_score=0.61,
            average_speed_kph=26.0,
            queue_length=12,
            lane_occupancy=0.57,
            congestion_level="high",
            updated_at=base_time + timedelta(seconds=5),
        ),
        TrafficSnapshot(
            intersection_id="INT-021",
            density_score=0.38,
            average_speed_kph=39.0,
            queue_length=5,
            lane_occupancy=0.33,
            congestion_level="moderate",
            updated_at=base_time + timedelta(seconds=10),
        ),
    ]


def generate_signal_plans() -> list[SignalPlan]:
    return [
        SignalPlan(
            intersection_id="INT-001",
            phase="north_south_green",
            green_duration_seconds=58,
            amber_duration_seconds=5,
            red_duration_seconds=42,
            adaptive_mode=True,
        ),
        SignalPlan(
            intersection_id="INT-002",
            phase="emergency_clearance",
            green_duration_seconds=65,
            amber_duration_seconds=3,
            red_duration_seconds=30,
            adaptive_mode=True,
        ),
    ]


def generate_incidents() -> list[IncidentRecord]:
    return [
        IncidentRecord(
            id="INC-1001",
            type="accident",
            severity="high",
            status="investigating",
            location=Coordinates(lat=28.6139, lng=77.2090),
            detected_at=_now(),
            description="Multi-vehicle collision near CBD North corridor.",
        ),
        IncidentRecord(
            id="INC-1002",
            type="violation",
            severity="medium",
            status="open",
            location=Coordinates(lat=28.5562, lng=77.1000),
            detected_at=_now(),
            description="Wrong-lane usage detected on airport corridor.",
        ),
    ]


def generate_analytics_summary() -> dict:
    return {
        "daily_vehicles": 184230,
        "average_speed_kph": 31.4,
        "congestion_hotspots": 14,
        "incident_count": 23,
        "emergency_response_minutes": 4.8,
        "forecast_peak_congestion": "18:00-20:00",
        "signal_efficiency_gain_percent": 19,
    }


def generate_chart_points() -> list[dict]:
    return [
        {"time": "06:00", "density": 42, "speed": 46},
        {"time": "09:00", "density": 81, "speed": 24},
        {"time": "12:00", "density": 58, "speed": 34},
        {"time": "15:00", "density": 66, "speed": 31},
        {"time": "18:00", "density": 89, "speed": 19},
        {"time": "21:00", "density": 53, "speed": 38},
    ]

