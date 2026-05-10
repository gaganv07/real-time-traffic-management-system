# API Overview

The primary API surface is now served by the Python FastAPI platform.

## Main REST Domains

- `/api/v1/auth`: login, token refresh, logout
- `/api/v1/users`: user and role management
- `/api/v1/cameras`: camera inventory and live state
- `/api/v1/signals`: signal plans and emergency overrides
- `/api/v1/traffic`: traffic telemetry, density, and congestion
- `/api/v1/incidents`: incidents, alerts, and severity workflows
- `/api/v1/emergency`: emergency vehicle tracking and corridor priority
- `/api/v1/analytics`: KPI dashboards and forecasts
- `/api/v1/notifications`: message delivery and alert status
- `/api/v1/health`: liveness and readiness

## Implemented Endpoints In The Python Platform

| Method | Path | Purpose | Auth |
| --- | --- | --- | --- |
| `GET` | `/api/v1/health` | Service liveness and AI dependency status | No |
| `POST` | `/api/v1/auth/login` | Issue JWT access token for dashboard users | No |
| `GET` | `/api/v1/traffic/overview` | Live traffic density, speed, queue, and occupancy | Yes |
| `GET` | `/api/v1/signals/overview` | Current adaptive signal plans | Yes |
| `GET` | `/api/v1/incidents/overview` | Active incidents and severity state | Yes |
| `GET` | `/api/v1/analytics/overview` | Dashboard KPI summary and forecast snapshot | Yes |
| `GET` | `/api/v1/dashboard/context` | Aggregated dashboard payload for thin clients | No |
| `GET` | `/api/v1/simulate/traffic` | Mock telemetry generator for demos and tests | No |
| `POST` | `/api/v1/predict/traffic` | Predict density and recommended green time | No |
| `POST` | `/api/v1/detect/incident` | Score a frame reference for incident labels | No |

## Planned Expansion Endpoints

- `GET /api/v1/users`
- `POST /api/v1/cameras`
- `PATCH /api/v1/signals/:id/override`
- `POST /api/v1/emergency/routes`
- `POST /api/v1/notifications/send`
- `GET /api/v1/analytics/trends`

## Request Validation

- Request bodies are validated with Pydantic
- JWT issuance is handled in the FastAPI platform
- WebSocket clients subscribe through `/ws/live`

## WebSocket Events

- `/ws/live` streams a JSON payload with:
- `traffic`
- `signals`
- `incidents`
- `analytics`

Swagger/OpenAPI is exposed by FastAPI at `/docs`.
