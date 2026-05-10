export type Role = "admin" | "operator" | "supervisor" | "analyst" | "emergency";

export interface Coordinates {
  lat: number;
  lng: number;
}

export interface TrafficSnapshot {
  intersectionId: string;
  densityScore: number;
  averageSpeedKph: number;
  queueLength: number;
  laneOccupancy: number;
  congestionLevel: "low" | "moderate" | "high" | "critical";
  updatedAt: string;
}

export interface SignalPlan {
  intersectionId: string;
  phase: "north_south_green" | "east_west_green" | "pedestrian_crossing" | "emergency_clearance";
  greenDurationSeconds: number;
  amberDurationSeconds: number;
  redDurationSeconds: number;
  adaptiveMode: boolean;
}

export interface IncidentRecord {
  id: string;
  type: "accident" | "breakdown" | "violation" | "road_blockage";
  severity: "low" | "medium" | "high" | "critical";
  status: "open" | "investigating" | "resolved";
  location: Coordinates;
  detectedAt: string;
}
