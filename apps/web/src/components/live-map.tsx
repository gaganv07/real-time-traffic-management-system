export function LiveMap() {
  return (
    <div className="panel relative min-h-[380px] overflow-hidden p-6">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(98,167,255,0.35),transparent_25%),radial-gradient(circle_at_80%_20%,rgba(71,199,166,0.25),transparent_20%),linear-gradient(120deg,rgba(255,255,255,0.03),rgba(255,255,255,0))]" />
      <div className="relative flex h-full flex-col">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-semibold">City Traffic Grid</h2>
            <p className="text-sm text-white/60">Interactive map placeholder ready for Leaflet or Google Maps overlays.</p>
          </div>
          <div className="rounded-full bg-danger/15 px-4 py-2 text-xs uppercase tracking-[0.25em] text-danger">3 incidents active</div>
        </div>
        <div className="mt-8 grid flex-1 grid-cols-6 gap-3">
          {Array.from({ length: 18 }).map((_, index) => (
            <div
              key={index}
              className={`rounded-2xl border border-white/10 ${
                index % 5 === 0 ? "bg-danger/20" : index % 3 === 0 ? "bg-warning/20" : "bg-accent/15"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

