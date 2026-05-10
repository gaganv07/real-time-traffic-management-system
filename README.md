# Real-Time Traffic Management System

Enterprise-grade smart city traffic management platform with AI-assisted traffic monitoring, predictive optimization, incident detection, emergency vehicle priority, analytics dashboards, and production deployment assets.

## Monorepo Overview

- `apps/web`: Next.js operator dashboard
- `services/api`: Node.js Express API gateway with REST and WebSocket interfaces
- `services/ai`: FastAPI AI microservice for inference, prediction, and simulation
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

- Node.js 20+
- Python 3.11+
- Docker and Docker Compose

### Local Development

```bash
npm install
npm run dev
```

This starts the monorepo task runner for the web app and API. Start the AI service separately:

```bash
cd services/ai
python -m venv .venv
.venv\Scripts\activate
pip install -r requirements.txt
uvicorn app.main:app --reload --port 8001
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

