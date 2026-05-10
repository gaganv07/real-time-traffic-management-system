# Real-Time Traffic Management System

Enterprise-grade smart city traffic management platform with a Python-first architecture for AI-assisted traffic monitoring, predictive optimization, incident detection, emergency vehicle priority, analytics dashboards, and production deployment assets.

## Monorepo Overview

- `services/platform`: Primary FastAPI platform serving HTML dashboards, REST APIs, and WebSocket feeds
- `services/ai`: Earlier AI prototype service retained as reference assets
- `apps/web` and `services/api`: Earlier TypeScript scaffold retained for reference, not the primary runtime
- `packages/shared`: Shared types and domain constants
- `database`: PostgreSQL, MongoDB, and Redis assets
- `infra`: Docker, Kubernetes, NGINX, monitoring, and CI/CD files
- `docs`: Architecture, API, and deployment guidance
- `tests`: API and AI service tests

## Core Capabilities

- Real-time traffic monitoring and live camera telemetry
- Smart signal orchestration with dynamic timing plans
- Accident and incident detection workflows
- Emergency corridor prioritization
- Predictive congestion forecasting and AI recommendations
- Role-based access control for operators and administrators
- WebSocket event streaming for dashboards and field systems
- Production-ready deployment patterns with observability

## Quick Start

### Prerequisites

- Python 3.11+
- Docker and Docker Compose

### Local Development

Run the Python-first platform:

```bash
cd services/platform
python -m venv .venv
.venv\Scripts\activate
pip install -r requirements.txt
uvicorn app.main:app --reload --port 8000
```

Open:

- Dashboard: `http://localhost:8000`
- API health: `http://localhost:8000/api/v1/health`
- Traffic APIs: `http://localhost:8000/api/v1/traffic/overview`
- Simulation API: `http://localhost:8000/api/v1/simulate/traffic`
- WebSocket live feed: `ws://localhost:8000/ws/live`

Windows shortcut:

```powershell
.\scripts\start-platform.ps1
```

### Docker

```bash
docker compose -f infra/docker/docker-compose.yml up --build
```

## Documentation

- Architecture: [docs/architecture.md](docs/architecture.md)
- API reference: [docs/api.md](docs/api.md)
- Production deployment: [docs/deployment.md](docs/deployment.md)
- Security guidance: [docs/security.md](docs/security.md)

## Current Runtime Direction

The supported runtime path is now Python + FastAPI + server-rendered HTML. The TypeScript services remain in the repository as a reference scaffold, but the platform is designed to run primarily from [services/platform/app/main.py](services/platform/app/main.py).
