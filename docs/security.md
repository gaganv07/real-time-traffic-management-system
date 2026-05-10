# Security Best Practices

- JWT access tokens with short TTL and rotating refresh tokens
- Role-based access control for admin, operator, supervisor, analyst, and emergency roles
- API rate limiting and IP throttling
- Encrypted camera feed credentials and secrets management through Kubernetes secrets or cloud secret stores
- Audit logs in MongoDB with immutable append-only records
- Network policies between services in Kubernetes
- Signed container images and dependency scanning in CI
- Structured incident response for unauthorized signal overrides

