import type { ReactNode } from "react";

interface KpiCardProps {
  label: string;
  value: string;
  detail: string;
  icon: ReactNode;
}

export function KpiCard({ label, value, detail, icon }: KpiCardProps) {
  return (
    <div className="panel p-5">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-sky/70">{label}</p>
          <p className="mt-3 text-3xl font-semibold text-white">{value}</p>
          <p className="mt-2 text-sm text-white/60">{detail}</p>
        </div>
        <div className="rounded-2xl bg-accent/15 p-3 text-accent">{icon}</div>
      </div>
    </div>
  );
}

