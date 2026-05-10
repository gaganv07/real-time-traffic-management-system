import { Router } from "express";
import { z } from "zod";
import { login } from "../controllers/auth.controller.js";
import { analyticsOverview, incidentsOverview, signalOverview, trafficOverview } from "../controllers/traffic.controller.js";
import { health } from "../controllers/health.controller.js";
import { authenticate } from "../middleware/auth.middleware.js";
import { authorize } from "../middleware/rbac.middleware.js";
import { validateBody } from "../middleware/validate.middleware.js";

const router = Router();

router.get("/health", health);

router.post(
  "/auth/login",
  validateBody(
    z.object({
      email: z.string().email(),
      password: z.string().min(8)
    })
  ),
  login
);

router.get("/traffic/overview", authenticate, authorize(["admin", "operator", "analyst"]), trafficOverview);
router.get("/signals/overview", authenticate, authorize(["admin", "operator"]), signalOverview);
router.get("/incidents/overview", authenticate, authorize(["admin", "operator", "emergency"]), incidentsOverview);
router.get("/analytics/overview", authenticate, authorize(["admin", "analyst"]), analyticsOverview);

export default router;

