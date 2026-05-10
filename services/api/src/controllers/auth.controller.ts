import type { Request, Response } from "express";
import { signAccessToken } from "../services/auth.service.js";

export function login(_req: Request, res: Response): void {
  const token = signAccessToken({
    sub: "user-001",
    role: "admin"
  });

  res.json({
    accessToken: token,
    refreshToken: "demo-refresh-token",
    profile: {
      id: "user-001",
      name: "Central Traffic Command",
      role: "admin"
    }
  });
}

