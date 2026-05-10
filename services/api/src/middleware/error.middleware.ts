import type { NextFunction, Request, Response } from "express";

export function errorHandler(err: Error, _req: Request, res: Response, _next: NextFunction): void {
  res.status(500).json({
    message: "Internal server error",
    detail: err.message
  });
}

