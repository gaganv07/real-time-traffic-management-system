import type { Role } from "@traffic/shared";
import type { NextFunction, Request, Response } from "express";

export function authorize(roles: Role[]) {
  return (req: Request, res: Response, next: NextFunction): void => {
    if (!req.auth || !roles.includes(req.auth.role)) {
      res.status(403).json({ message: "Forbidden" });
      return;
    }
    next();
  };
}

