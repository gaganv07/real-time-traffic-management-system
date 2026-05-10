from datetime import datetime, timedelta


def generate_simulation(seed_count: int = 6) -> list[dict]:
    now = datetime.utcnow()
    return [
        {
            "intersection_id": f"INT-{index + 1:03d}",
            "timestamp": (now + timedelta(minutes=index * 5)).isoformat(),
            "vehicle_count": 80 + index * 12,
            "average_speed_kph": max(18, 42 - index * 3),
            "lane_occupancy": round(0.42 + index * 0.07, 2),
        }
        for index in range(seed_count)
    ]

