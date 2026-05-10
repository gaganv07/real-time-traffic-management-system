# Deployment Guide

## Environments

- Development: local Docker Compose
- Staging: Kubernetes namespace with reduced autoscaling bounds
- Production: multi-zone Kubernetes cluster with managed PostgreSQL, Redis, and MongoDB

## Rollout Flow

1. Build images through GitHub Actions.
2. Push images to container registry.
3. Deploy manifests or Helm overlays to the target environment.
4. Run database migrations before switching live traffic.
5. Validate readiness probes, WebSocket connectivity, and AI inference health.

## Production Notes

- Use managed PostgreSQL with read replicas for analytics-heavy workloads.
- Use Redis Sentinel or managed Redis for failover.
- Enable dedicated GPU node pools for AI inference if YOLOv8 or OpenCV pipelines run on video frames in real time.
- Terminate TLS at ingress and re-encrypt service-to-service traffic where required by policy.

