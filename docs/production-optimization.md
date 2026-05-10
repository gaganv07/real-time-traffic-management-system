# Production Optimization

## High-Concurrency Design

- Keep REST handlers stateless and push transient coordination into Redis.
- Use batched telemetry ingestion rather than single-frame writes where possible.
- Partition `traffic_logs` by time window and intersection clusters.
- Serve hot dashboard data from Redis and analytics rollups from MongoDB to protect PostgreSQL from dashboard fan-out.

## Fault Tolerance

- Use circuit breakers for AI inference and notification providers.
- Degrade gracefully to rule-based signal timing when AI is unavailable.
- Persist emergency corridor commands and replay them after broker or pod restarts.
- Run readiness probes against AI and API health before allowing traffic.

