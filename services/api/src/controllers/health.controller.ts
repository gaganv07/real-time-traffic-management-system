import type { Request, Response } from "express";
import { getAiHealth } from "../services/ai.service.js";

export async function health(_req: Request, res: Response): Promise<void> {
  res.json({
    status: "ok",
    timestamp: new Date().toISOString(),
    dependencies: {
      ai: await getAiHealth()
    }
  });
}

