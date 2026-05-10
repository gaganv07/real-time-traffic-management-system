import Redis from "ioredis";
import { env } from "../config/env.js";

export const redis = new Redis(env.redisUrl, {
  maxRetriesPerRequest: 2,
  lazyConnect: true
});

export async function connectCache(): Promise<void> {
  if (redis.status === "wait") {
    await redis.connect();
  }
}

