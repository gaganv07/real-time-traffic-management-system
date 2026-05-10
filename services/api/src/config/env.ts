export const env = {
  nodeEnv: process.env.NODE_ENV ?? "development",
  port: Number(process.env.PORT ?? 8000),
  jwtSecret: process.env.JWT_SECRET ?? "change-me",
  redisUrl: process.env.REDIS_URL ?? "redis://localhost:6379",
  aiServiceUrl: process.env.AI_SERVICE_URL ?? "http://localhost:8001",
  corsOrigin: process.env.CORS_ORIGIN ?? "http://localhost:3000"
};

