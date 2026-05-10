from app.schemas.traffic import DetectionResponse


def detect_incident(frame_reference: str) -> DetectionResponse:
    lowered = frame_reference.lower()
    if "ambulance" in lowered or "fire" in lowered:
        return DetectionResponse(label="emergency_vehicle", confidence=0.97, severity="critical")
    if "crash" in lowered or "accident" in lowered:
        return DetectionResponse(label="accident", confidence=0.94, severity="high")
    if "blocked" in lowered:
        return DetectionResponse(label="road_blockage", confidence=0.89, severity="medium")
    return DetectionResponse(label="normal_flow", confidence=0.83, severity="low")

