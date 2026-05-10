import type { Role } from "@traffic/shared";

declare global {
  namespace Express {
    interface Request {
      auth?: {
        userId: string;
        role: Role;
      };
    }
  }
}

export {};

