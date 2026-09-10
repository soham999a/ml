import PillBadge from "./PillBadge";

const milestones = [
  {
    year: "2026",
    status: "Upcoming",
    statusVariant: "gold" as const,
    title: "Bhoomi Pujan",
    description: "Sacred ground-breaking ceremony marking the official beginning of construction.",
    label: "Foundation",
    highlighted: false,
  },
  {
    year: "2027",
    status: "Planned",
    statusVariant: "gold" as const,
    title: "Sanctum Core",
    description: "Construction of the garbhagriha and primary temple structure commences.",
    label: "Structure",
    highlighted: false,
  },
  {
    year: "2029",
    status: "Milestone",
    statusVariant: "maroon" as const,
    title: "Grand Consecration",
    description: "Maha-Kumbhabhishekam and divine prana pratishtha of Bhagwan Ram Lalla.",
    label: "Dedication",
    highlighted: true,
  },
  {
    year: "2035",
    status: "Future",
    statusVariant: "gold" as const,
    title: "Gurukul & Hospital",
    description: "Expansion into Vedic education and community healthcare services.",
    label: "Service",
    highlighted: false,
  },
  {
    year: "2047",
    status: "Vision",
    statusVariant: "gold" as const,
    title: "Centenary",
    description: "Completion of the full vision as India celebrates 100 years of independence.",
    label: "Fulfilment",
    highlighted: false,
  },
];

export default function Timeline() {
  return (
    <div className="w-full">
      {/* ── Desktop (md+): horizontal roadmap ── */}
      <div className="hidden md:block">
        {/* Connector line */}
        <div className="relative mx-8 mb-8">
          <div className="absolute top-1/2 left-0 right-0 h-[2px] bg-secondary/30 -translate-y-1/2" />
          <div className="absolute top-1/2 left-0 right-0 h-[2px] bg-secondary -translate-y-1/2 w-[20%]" />
        </div>

        {/* Step indicators */}
        <div className="flex justify-between px-4 mb-10">
          {milestones.map((m) => (
            <div key={m.year} className="flex flex-col items-center relative z-10">
              <div
                className={`w-4 h-4 rounded-full border-2 ${
                  m.highlighted
                    ? "bg-secondary border-secondary scale-125"
                    : "bg-surface-container-lowest border-secondary/50"
                }`}
              />
            </div>
          ))}
        </div>

        {/* Cards */}
        <div className="grid grid-cols-5 gap-5">
          {milestones.map((m) => (
            <div
              key={m.year}
              className={`rounded-2xl p-5 transition-transform duration-200 ${
                m.highlighted
                  ? "bg-primary text-surface-bright ring-2 ring-secondary-container scale-[1.03]"
                  : "bg-surface-container-lowest"
              }`}
            >
              <p
                className={`font-heading text-3xl font-bold ${
                  m.highlighted ? "text-surface-bright" : "text-on-surface"
                }`}
              >
                {m.year}
              </p>
              <div className="mt-3">
                {m.highlighted ? (
                  <span className="inline-flex items-center rounded-full px-3 py-1 font-body text-[11px] font-semibold uppercase tracking-widest bg-secondary-container/30 text-surface-bright">
                    {m.status}
                  </span>
                ) : (
                  <PillBadge variant={m.statusVariant}>{m.status}</PillBadge>
                )}
              </div>
              <h3
                className={`mt-3 font-heading text-lg font-semibold ${
                  m.highlighted ? "text-surface-bright" : "text-on-surface"
                }`}
              >
                {m.title}
              </h3>
              <p
                className={`mt-2 font-body text-sm leading-relaxed ${
                  m.highlighted
                    ? "text-surface-bright/80"
                    : "text-on-surface-variant"
                }`}
              >
                {m.description}
              </p>
              <div
                className={`mt-4 pt-3 border-t text-xs font-body font-semibold uppercase tracking-wider ${
                  m.highlighted
                    ? "border-surface-bright/20 text-surface-bright/60"
                    : "border-on-surface/10 text-on-surface-variant/60"
                }`}
              >
                {m.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Mobile (<md): vertical timeline ── */}
      <div className="relative ml-3 border-l-2 border-secondary/30 md:hidden">
        {milestones.map((m) => (
          <div key={m.year} className="relative pb-8 pl-8 last:pb-0">
            <span
              className={`absolute -left-[9px] top-1.5 h-4 w-4 rounded-full border-2 ${
                m.highlighted
                  ? "bg-secondary border-secondary"
                  : "bg-surface-container-lowest border-secondary/50"
              }`}
            />
            <div
              className={`rounded-2xl p-5 ${
                m.highlighted
                  ? "bg-primary text-surface-bright ring-2 ring-secondary-container"
                  : "bg-surface-container-lowest"
              }`}
            >
              <div className="flex items-center justify-between gap-3">
                <p
                  className={`font-heading text-2xl font-bold ${
                    m.highlighted ? "text-surface-bright" : "text-on-surface"
                  }`}
                >
                  {m.year}
                </p>
                {m.highlighted ? (
                  <span className="inline-flex items-center rounded-full px-3 py-1 font-body text-[11px] font-semibold uppercase tracking-widest bg-secondary-container/30 text-surface-bright">
                    {m.status}
                  </span>
                ) : (
                  <PillBadge variant={m.statusVariant}>{m.status}</PillBadge>
                )}
              </div>
              <h3
                className={`mt-2 font-heading text-lg font-semibold ${
                  m.highlighted ? "text-surface-bright" : "text-on-surface"
                }`}
              >
                {m.title}
              </h3>
              <p
                className={`mt-2 font-body text-sm leading-relaxed ${
                  m.highlighted
                    ? "text-surface-bright/80"
                    : "text-on-surface-variant"
                }`}
              >
                {m.description}
              </p>
              <div
                className={`mt-3 pt-3 border-t text-xs font-body font-semibold uppercase tracking-wider ${
                  m.highlighted
                    ? "border-surface-bright/20 text-surface-bright/60"
                    : "border-on-surface/10 text-on-surface-variant/60"
                }`}
              >
                {m.label}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}