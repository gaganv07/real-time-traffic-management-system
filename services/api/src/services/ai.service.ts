import { env } from "../config/env.js";

export async function getAiHealth() {
  try {
    const response = await fetch(`${env.aiServiceUrl}/health`);
    if (!response.ok) {
      return { status: "degraded" };
    }

    return response.json();
  } catch {
    return { status: "offline" };
  }
}

