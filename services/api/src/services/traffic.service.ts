import type { IncidentRecord, SignalPlan, TrafficSnapshot } from "@traffic/shared";

const now = () => new Date().toISOString();

export function getTrafficOverview(): TrafficSnapshot[] {
  return [
    {
      intersectionId: "INT-001",
      densityScore: 0.83,
      averageSpeedKph: 18,
      queueLength: 21,
      laneOccupancy: 0.78,
      congestionLevel: "critical",
      updatedAt: now()
    },
    {
      intersectionId: "INT-002",
      densityScore: 0.47,
      averageSpeedKph: 34,
      queueLength: 9,
      laneOccupancy: 0.46,
      congestionLevel: "moderate",
      updatedAt: now()
    }
  ];
}

export function getSignalPlans(): SignalPlan[] {
  return [
    {
      intersectionId: "INT-001",
      phase: "north_south_green",
      greenDurationSeconds: 55,
      amberDurationSeconds: 5,
      redDurationSeconds: 40,
      adaptiveMode: true
    },
    {
      intersectionId: "INT-002",
      phase: "east_west_green",
      greenDurationSeconds: 42,
      amberDurationSeconds: 4,
      redDurationSeconds: 34,
      adaptiveMode: true
    }
  ];
}

export function getActiveIncidents(): IncidentRecord[] {
  return [
    {
      id: "INC-1001",
      type: "accident",
      severity: "high",
      status: "investigating",
      location: { lat: 28.6139, lng: 77.209 },
      detectedAt: now()
    }
  ];
}

