import type { NextFunction, Request, Response } from "express";
import { verifyAccessToken } from "../services/auth.service.js";

export function authenticate(req: Request, res: Response, next: NextFunction): void {
  const header = req.headers.authorization;
  if (!header?.startsWith("Bearer ")) {
    res.status(401).json({ message: "Missing bearer token" });
    return;
  }

  try {
    const payload = verifyAccessToken(header.slice(7));
    req.auth = {
      userId: payload.sub,
      role: payload.role
    };
    next();
  } catch {
    res.status(401).json({ message: "Invalid or expired token" });
  }
}

