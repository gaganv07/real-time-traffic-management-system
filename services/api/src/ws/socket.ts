import type { Server as HttpServer } from "node:http";
import { Server } from "socket.io";
import { getActiveIncidents, getSignalPlans, getTrafficOverview } from "../services/traffic.service.js";

export function registerSocketServer(server: HttpServer): Server {
  const io = new Server(server, {
    cors: {
      origin: "*"
    }
  });

  io.on("connection", (socket) => {
    socket.emit("traffic:update", getTrafficOverview());
    socket.emit("signal:update", getSignalPlans());
    socket.emit("incident:created", getActiveIncidents());
  });

  setInterval(() => {
    io.emit("traffic:update", getTrafficOverview());
  }, 10000);

  return io;
}

