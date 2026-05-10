# Deployment Guide

## Environments

- Development: local Docker Compose
- Staging: Kubernetes namespace with reduced autoscaling bounds
- Production: multi-zone Kubernetes cluster with managed PostgreSQL, Redis, and MongoDB, fronted by the Python FastAPI platform

## Rollout Flow

1. Build images through GitHub Actions.
2. Push images to container registry.
3. Deploy manifests or Helm overlays to the target environment.
4. Run database migrations before switching live traffic.
5. Validate readiness probes, dashboard rendering, WebSocket connectivity, and AI inference health.

## Production Notes

- Use managed PostgreSQL with read replicas for analytics-heavy workloads.
- Use Redis Sentinel or managed Redis for failover.
- Enable dedicated GPU node pools for future YOLOv8 or OpenCV inference if real-time video analysis is enabled.
- Terminate TLS at ingress and re-encrypt service-to-service traffic where required by policy.
