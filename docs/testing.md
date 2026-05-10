# Testing Strategy

## Layers

- Unit tests for policy logic, prediction scoring, and controller validation
- Integration tests for API routes, Redis behavior, and AI service contracts
- End-to-end tests for dashboard flows, authentication, and live updates
- Performance tests for burst telemetry, WebSocket fan-out, and signal plan recomputation

## Recommended Tooling

- API: Node test runner or Jest with Supertest
- Web: Playwright for dashboard workflows
- AI: Pytest for prediction and detector behavior
- Load: k6 or Locust for concurrency and sustained telemetry

