const intersections = ["INT-001", "INT-002", "INT-003", "INT-004"];

function randomTelemetry(intersectionId: string) {
  return {
    intersectionId,
    densityScore: Number((Math.random() * 0.9 + 0.1).toFixed(2)),
    averageSpeedKph: Math.floor(Math.random() * 35) + 15,
    queueLength: Math.floor(Math.random() * 25),
    laneOccupancy: Number((Math.random() * 0.8 + 0.1).toFixed(2)),
    timestamp: new Date().toISOString()
  };
}

setInterval(() => {
  const payload = intersections.map(randomTelemetry);
  console.log(JSON.stringify(payload, null, 2));
}, 5000);

