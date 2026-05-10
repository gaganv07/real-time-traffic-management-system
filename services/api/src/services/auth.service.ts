import jwt from "jsonwebtoken";
import type { Role } from "@traffic/shared";
import { env } from "../config/env.js";

export interface AuthTokenPayload {
  sub: string;
  role: Role;
}

export function signAccessToken(payload: AuthTokenPayload): string {
  return jwt.sign(payload, env.jwtSecret, {
    expiresIn: "15m"
  });
}

export function verifyAccessToken(token: string): AuthTokenPayload {
  return jwt.verify(token, env.jwtSecret) as AuthTokenPayload;
}

