import { Activity, Ambulance, BarChart3, Siren, TrafficCone } from "lucide-react";
import { AnalyticsChart } from "../components/analytics-chart";
import { HotspotTable } from "../components/hotspot-table";
import { KpiCard } from "../components/kpi-card";
import { LiveMap } from "../components/live-map";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-city-grid px-6 py-8 text-white md:px-10">
      <div className="mx-auto max-w-7xl">
        <section className="mb-8 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.45em] text-sky/70">Smart City Command Center</p>
            <h1 className="mt-4 max-w-3xl text-4xl font-semibold leading-tight md:text-6xl">
              Real-time traffic intelligence for congestion control, emergency routing, and predictive signal operations.
            </h1>
          </div>
          <div className="panel flex gap-4 px-5 py-4 text-sm text-white/70">
            <div>
              <p className="uppercase tracking-[0.25em] text-white/40">Mode</p>
              <p className="mt-2 font-medium text-accent">Adaptive network orchestration</p>
            </div>
          </div>
        </section>

        <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
          <KpiCard label="Live Intersections" value="248" detail="Active telemetry streams" icon={<TrafficCone size={22} />} />
          <KpiCard label="Congestion Index" value="74%" detail="Forecasted evening peak" icon={<BarChart3 size={22} />} />
          <KpiCard label="Incidents" value="23" detail="3 critical, 7 in progress" icon={<Siren size={22} />} />
          <KpiCard label="Emergency ETA" value="4.8m" detail="Median response corridor clearance" icon={<Ambulance size={22} />} />
          <KpiCard label="Signal Sync" value="93%" detail="Adaptive plans operating within target" icon={<Activity size={22} />} />
        </section>

        <section className="mt-6 grid gap-6 xl:grid-cols-[1.15fr_0.85fr]">
          <LiveMap />
          <AnalyticsChart />
        </section>

        <section className="mt-6">
          <HotspotTable />
        </section>
      </div>
    </main>
  );
}

