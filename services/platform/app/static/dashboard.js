function updateTrafficTable(items) {
  const tableBody = document.querySelector("#traffic-table tbody");
  if (!tableBody) return;
  tableBody.innerHTML = items
    .map(
      (item) => `
        <tr>
          <td>${item.intersection_id}</td>
          <td>${item.congestion_level}</td>
          <td>${item.average_speed_kph} kph</td>
          <td>${item.queue_length}</td>
          <td>${Math.round(item.lane_occupancy * 100)}%</td>
        </tr>
      `
    )
    .join("");
}

function updateSignals(items) {
  const container = document.getElementById("signal-list");
  if (!container) return;
  container.innerHTML = items
    .map(
      (item) => `
        <div class="signal-item">
          <strong>${item.intersection_id}</strong>
          <span>${item.phase}</span>
          <small>${item.green_duration_seconds}s green</small>
        </div>
      `
    )
    .join("");
}

function updateIncidents(items) {
  const container = document.getElementById("incident-list");
  if (!container) return;
  container.innerHTML = items
    .map(
      (item) => `
        <div class="incident-item">
          <strong>${item.type}</strong>
          <span>${item.description}</span>
          <small>${item.severity} severity</small>
        </div>
      `
    )
    .join("");
}

function connectLiveFeed() {
  const protocol = window.location.protocol === "https:" ? "wss" : "ws";
  const socket = new WebSocket(`${protocol}://${window.location.host}/ws/live`);

  socket.onmessage = (event) => {
    const payload = JSON.parse(event.data);
    updateTrafficTable(payload.traffic || []);
    updateSignals(payload.signals || []);
    updateIncidents(payload.incidents || []);
  };
}

window.addEventListener("DOMContentLoaded", connectLiveFeed);

