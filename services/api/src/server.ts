import { createServer } from "node:http";
import { createApp } from "./app.js";
import { env } from "./config/env.js";
import { connectCache } from "./services/cache.service.js";
import { registerSocketServer } from "./ws/socket.js";

async function bootstrap() {
  await connectCache().catch(() => undefined);
  const app = createApp();
  const server = createServer(app);
  registerSocketServer(server);

  server.listen(env.port, () => {
    console.log(`API listening on port ${env.port}`);
  });
}

bootstrap().catch((error) => {
  console.error("Failed to start API", error);
  process.exit(1);
});
