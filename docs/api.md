# API Overview

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

## Implemented Endpoints In This Scaffold

| Method | Path | Purpose | Auth |
| --- | --- | --- | --- |
| `GET` | `/api/v1/health` | Service liveness and AI dependency status | No |
| `POST` | `/api/v1/auth/login` | Issue JWT access token for dashboard users | No |
| `GET` | `/api/v1/traffic/overview` | Live traffic density, speed, queue, and occupancy | Yes |
| `GET` | `/api/v1/signals/overview` | Current adaptive signal plans | Yes |
| `GET` | `/api/v1/incidents/overview` | Active incidents and severity state | Yes |
| `GET` | `/api/v1/analytics/overview` | Dashboard KPI summary and forecast snapshot | Yes |

## Planned Expansion Endpoints

- `GET /api/v1/users`
- `POST /api/v1/cameras`
- `PATCH /api/v1/signals/:id/override`
- `POST /api/v1/emergency/routes`
- `POST /api/v1/notifications/send`
- `GET /api/v1/analytics/trends`

## Request Validation

- Login requests are validated with Zod
- RBAC is enforced after JWT authentication
- Rate limiting is applied globally to protect high-traffic endpoints

## WebSocket Events

- `traffic:update`
- `signal:update`
- `incident:created`
- `incident:resolved`
- `emergency:priority`
- `analytics:forecast`

Swagger/OpenAPI is exposed from the API service at `/docs`.
