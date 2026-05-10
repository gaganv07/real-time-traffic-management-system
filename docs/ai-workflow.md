# AI Model Training Workflow

1. Collect frame metadata, traffic telemetry, and incident annotations from cameras and operators.
2. Store curated datasets in object storage and register versions with metadata.
3. Train YOLOv8 or OpenCV-assisted object detection models for vehicles, ambulances, fire trucks, and incidents.
4. Train LSTM or sequence models on historical traffic logs for short-term density forecasting.
5. Evaluate with precision, recall, false positive rate, and route optimization impact.
6. Package approved models behind the FastAPI inference service and release them with canary rollout policies.

