import cors from "cors";
import express from "express";
import rateLimit from "express-rate-limit";
import helmet from "helmet";
import swaggerUi from "swagger-ui-express";
import { env } from "./config/env.js";
import { swaggerSpec } from "./docs/swagger.js";
import { errorHandler } from "./middleware/error.middleware.js";
import routes from "./routes/index.js";

export function createApp() {
  const app = express();

  app.use(helmet());
  app.use(cors({ origin: env.corsOrigin }));
  app.use(express.json({ limit: "2mb" }));
  app.use(
    rateLimit({
      windowMs: 60_000,
      max: 300
    })
  );

  app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
  app.use("/api/v1", routes);
  app.use(errorHandler);

  return app;
}

