# System Architecture

## High-Level Design

The platform uses a modular smart city architecture built around an API gateway, event-driven telemetry streams, and specialized AI services.

1. Cameras, IoT edge devices, traffic signals, GPS-equipped emergency vehicles, and operator clients send telemetry into the platform.
2. The Node.js API gateway authenticates users, exposes REST APIs, and publishes live domain events through WebSockets.
3. Redis stores short-lived congestion state, signal plans, and live queue data for low-latency reads.
4. PostgreSQL stores transactional entities such as users, cameras, signals, incidents, routing plans, and notifications.
5. MongoDB stores high-volume logs, analytics snapshots, audit trails, and AI inference metadata.
6. The FastAPI AI service provides traffic density estimation, accident detection scoring, congestion forecasting, and signal optimization recommendations.
7. The Next.js dashboard consumes REST data for configuration views and WebSockets for live monitoring.

## Architecture Diagram Explanation

```text
[Cameras / Signals / GPS / Edge Sensors]
                 |
                 v
        [Ingestion + API Gateway]
         | REST     | WebSocket
         |          v
         |      [Dashboard]
         |
         +--> [Redis Live State]
         +--> [PostgreSQL Core Data]
         +--> [MongoDB Logs & Analytics]
         +--> [FastAPI AI Services]
                      |
                      v
         [Predictions / Detection / Optimization]
```

## Scalability Strategy

- Horizontal API scaling behind NGINX ingress
- Stateless application services with Redis-backed session and event fan-out
- Partitioned PostgreSQL tables for high-volume telemetry
- MongoDB collections with TTL indexes for short-retention raw events
- Kubernetes autoscaling on CPU, memory, and custom queue lag metrics
- AI service separation for GPU-enabled and CPU-only workloads

## Clean Architecture Layers

- `domain`: traffic entities, invariants, and shared types
- `application`: orchestration logic, use cases, and policies
- `infrastructure`: databases, Redis caching, WebSocket transport, and external notifications
- `presentation`: REST controllers, websocket handlers, and dashboard components

