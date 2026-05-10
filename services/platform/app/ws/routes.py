import asyncio
import json

from fastapi import APIRouter, WebSocket, WebSocketDisconnect

from app.services.simulation import generate_analytics_summary, generate_incidents, generate_signal_plans, generate_traffic_snapshots

router = APIRouter()


@router.websocket("/ws/live")
async def live_feed(websocket: WebSocket) -> None:
    await websocket.accept()
    try:
        while True:
            payload = {
                "traffic": [item.model_dump(mode="json") for item in generate_traffic_snapshots()],
                "signals": [item.model_dump(mode="json") for item in generate_signal_plans()],
                "incidents": [item.model_dump(mode="json") for item in generate_incidents()],
                "analytics": generate_analytics_summary(),
            }
            await websocket.send_text(json.dumps(payload))
            await asyncio.sleep(5)
    except WebSocketDisconnect:
        return

