import type { Request, Response } from "express";
import { getAnalyticsSummary } from "../services/analytics.service.js";
import { getActiveIncidents, getSignalPlans, getTrafficOverview } from "../services/traffic.service.js";

export function trafficOverview(_req: Request, res: Response): void {
  res.json({
    items: getTrafficOverview()
  });
}

export function signalOverview(_req: Request, res: Response): void {
  res.json({
    items: getSignalPlans()
  });
}

export function incidentsOverview(_req: Request, res: Response): void {
  res.json({
    items: getActiveIncidents()
  });
}

export function analyticsOverview(_req: Request, res: Response): void {
  res.json(getAnalyticsSummary());
}

