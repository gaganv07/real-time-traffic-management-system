from app.services.simulation import (
    generate_analytics_summary,
    generate_chart_points,
    generate_incidents,
    generate_signal_plans,
    generate_traffic_snapshots,
)


def build_dashboard_context() -> dict:
    traffic = generate_traffic_snapshots()
    analytics = generate_analytics_summary()
    incidents = generate_incidents()

    return {
        "kpis": [
            {"label": "Live Intersections", "value": "248", "detail": "Active telemetry streams"},
            {"label": "Congestion Index", "value": "74%", "detail": "Forecasted evening peak"},
            {"label": "Incidents", "value": str(analytics["incident_count"]), "detail": "3 critical, 7 in progress"},
            {"label": "Emergency ETA", "value": f'{analytics["emergency_response_minutes"]}m', "detail": "Median corridor clearance"},
            {"label": "Signal Sync", "value": "93%", "detail": "Adaptive plans within target"},
        ],
        "traffic": traffic,
        "signals": generate_signal_plans(),
        "incidents": incidents,
        "analytics": analytics,
        "chart_points": generate_chart_points(),
    }

