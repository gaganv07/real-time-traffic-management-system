import { hotspotRows } from "../lib/mock-data";

export function HotspotTable() {
  return (
    <div className="panel p-6">
      <div className="mb-4">
        <h2 className="text-xl font-semibold">Critical Corridors</h2>
        <p className="text-sm text-white/60">AI-ranked hotspots for operator intervention and signal adjustment.</p>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm">
          <thead className="text-white/50">
            <tr>
              <th className="pb-3">Intersection</th>
              <th className="pb-3">Zone</th>
              <th className="pb-3">Congestion</th>
              <th className="pb-3">Route Delay</th>
              <th className="pb-3">Incidents</th>
            </tr>
          </thead>
          <tbody>
            {hotspotRows.map((row) => (
              <tr key={row.id} className="border-t border-white/10">
                <td className="py-4 font-medium">{row.id}</td>
                <td>{row.zone}</td>
                <td>{row.congestion}</td>
                <td>{row.eta}</td>
                <td>{row.incidents}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

