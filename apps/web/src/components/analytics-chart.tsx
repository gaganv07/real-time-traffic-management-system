"use client";

import { LineChart, Line, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { congestionTrend } from "../lib/mock-data";

export function AnalyticsChart() {
  return (
    <div className="panel p-6">
      <div className="mb-6 flex items-end justify-between">
        <div>
          <h2 className="text-xl font-semibold">Congestion Forecast</h2>
          <p className="text-sm text-white/60">Live density and speed indicators with AI-assisted short-range forecasting.</p>
        </div>
        <div className="rounded-full bg-white/10 px-4 py-2 text-xs uppercase tracking-[0.25em] text-accent">LSTM + live telemetry</div>
      </div>
      <div className="h-72">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={congestionTrend}>
            <CartesianGrid stroke="rgba(255,255,255,0.08)" vertical={false} />
            <XAxis dataKey="time" stroke="#9bb2d1" />
            <YAxis stroke="#9bb2d1" />
            <Tooltip />
            <Line type="monotone" dataKey="density" stroke="#47C7A6" strokeWidth={3} dot={false} />
            <Line type="monotone" dataKey="speed" stroke="#62A7FF" strokeWidth={3} dot={false} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

