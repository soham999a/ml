import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Phase-I Campus | Ram Lala Dham",
  description:
    "Explore the 30,000 sq ft Phase-I master plan for Ram Lala Dham — temples, hospital, annakshetra, gurukul, and more, targeted for Mahotsav 2029.",
};

export default function Phase1Page() {
  const metrics = [
    { value: "30,000", label: "SQ FT" },
    { value: "2029", label: "MAHOTSAV" },
    { value: "₹45", label: "CRORE" },
    { value: "100%", label: "PUBLIC" },
  ];

  const pillars = [
    {
      num: "01",
      title: "Shri Ram Lala Sanctum & Sabha Mandapa",
      desc: "The spiritual nucleus — a 108-ft Shikhara temple housing the consecrated Ram Lala Murti, flanked by an open assembly hall for devotional gatherings and Vedic discourse.",
      icon: "JAI SHRI RAM",
    },
    {
      num: "02",
      title: "Shri Hanuman Mandir & Raksha Peeth",
      desc: "A dedicated Hanuman shrine and protection shrine for the entire campus, featuring traditional Nagara-style architecture and daily Aarti rituals.",
      icon: "JAI HANUMAN",
    },
    {
      num: "03",
      title: "Nitya Annakshetra Mega-Kitchen",
      desc: "A state-of-the-art kitchen serving 5,000+ free meals daily to pilgrims, patients, and local communities — fuelled by community donations and organic produce.",
      icon: "SEVA",
    },
    {
      num: "04",
      title: "Vedic Gurukul & Cultural Chatuspathi",
      desc: "A residential learning centre for 120 scholars offering instruction in Veda, Sanskrit, classical music, dance, and traditional arts under accomplished Acharyas.",
      icon: "VIDYA",
    },
    {
      num: "05",
      title: "Sebashram 100-Bed Charitable Hospital",
      desc: "A fully-equipped 100-bed hospital offering free and subsidised treatment in general medicine, maternity, orthopaedics, and emergency care for underserved populations.",
      icon: "CHIKITSA",
    },
    {
      num: "06",
      title: "Shanti Nivas Elders' Wing & Yatri Sadan",
      desc: "A serene residential wing for senior citizens and pilgrim accommodation with modern amenities, wheelchair access, and in-house medical support.",
      icon: "VASUDHAIVA KUTUMBAKAM",
    },
  ];

  const infra = [
    {
      title: "Arterial Circulation & Pilgrim Corridors",
      desc: "Wide processional paths, covered walkways, and accessible ramps connecting all campus zones for seamless crowd flow during festivals.",
    },
    {
      title: "High-Volume Sanitation & Bio-Digestors",
      desc: "Advanced bio-digester systems and high-capacity sanitary blocks designed for peak festival loads exceeding 50,000 visitors.",
    },
    {
      title: "Water Cisterns, RO Filtration & Kund",
      desc: "Sustainable water management with underground cisterns, multi-stage RO plants, and a sacred Kund for ritual bathing.",
    },
    {
      title: "Life Safety, AI Surveillance & Fire Hydrants",
      desc: "Integrated AI-powered CCTV, emergency evacuation systems, and fire safety infrastructure meeting national compliance standards.",
    },
    {
      title: "Administrative PMO & Digital Trust Hub",
      desc: "A Project Management Office with real-time dashboards, digital donation tracking, and transparent public reporting systems.",
    },
    {
      title: "Panchavati Botanical Grove & Solar Microgrid",
      desc: "A sacred five-tree grove with medicinal plants, complemented by a rooftop solar array powering the campus microgrid.",
    },
  ];

  const phases = [
    {
      label: "Phase 1A — 2026",
      items: [
        "Land acquisition & title clearance",
        "Master plan & DPR finalisation",
        "Foundation & plinth completion",
        "Core sanitation & water systems",
      ],
    },
    {
      label: "Phase 1B — 2027",
      items: [
        "Sanctum superstructure & Shikhara",
        "Annakshetra kitchen infrastructure",
        "Road network & pilgrim corridors",
        "Boundary walls & security perimeter",
      ],
    },
    {
      label: "Phase 1C — 2028",
      items: [
        "Hospital wing interior fit-out",
        "Gurukul classrooms & dormitories",
        "Elders' wing & Yatri Sadan",
        "Solar microgrid commissioning",
      ],
    },
    {
      label: "Phase 1D — 2029",
      items: [
        "Pran Pratishtha & Mahotsav",
        "Public grand opening",
        "Landscaping & botanical grove",
        "Digital hub full deployment",
      ],
    },
  ];

  const sponsorTiers = [
    {
      amount: "₹5,00,000",
      title: "Mandap Pillar Sponsor",
      desc: "Sponsor a carved pillar in the Sabha Mandapa with your family's name inscribed in a brass plaque.",
    },
    {
      amount: "₹2,50,000",
      title: "Hospital Bed Sponsor",
      desc: "Dedicate a hospital bed in a loved one's memory — includes annual seva recognition and quarterly impact reports.",
    },
    {
      amount: "₹51,000",
      title: "Annakshetra Day Sponsor",
      desc: "Sponsor an entire day of meals at the Annakshetra with a commemorative plaque and prasad blessing.",
    },
  ];

  const legend = [
    { color: "bg-[#8B2252]", label: "Mandir Sanctum" },
    { color: "bg-[#C9A84C]", label: "Annakshetra" },
    { color: "bg-[#2E7D6F]", label: "Sebashram Clinic" },
    { color: "bg-[#5B3A8C]", label: "Vedic Gurukul" },
    { color: "bg-[#1E6091]", label: "Kund & Grove" },
  ];

  return (
    <main className="min-h-screen">
      {/* ─── Hero Section ─── */}
      <section className="bg-primary-container py-24 text-center">
        <span className="mb-6 inline-block rounded-full bg-tertiary-container px-5 py-2 text-xs font-semibold tracking-widest text-on-surface font-body">
          ॥ निर्माणं सेवा परमो संकल्पः ॥ Phase-I Master Plan (2026–2029)
        </span>

        <h1 className="mx-auto max-w-5xl px-4 font-heading text-4xl leading-tight font-bold text-on-surface md:text-5xl">
          Ram Lala Dham — 30,000 Sq Ft Phase-I Campus
        </h1>

        <p className="mx-auto mt-6 max-w-2xl px-4 font-body text-lg text-on-surface-variant">
          Laying the sacred foundation of Eastern India&apos;s most
          comprehensive spiritual- humanitarian campus — every square foot a
          testament to collective devotion and visionary planning.
        </p>

        {/* Metric cards */}
        <div className="mx-auto mt-12 grid max-w-4xl grid-cols-2 gap-4 px-4 sm:grid-cols-4">
          {metrics.map((m) => (
            <div
              key={m.label}
              className="rounded-xl border border-on-surface/10 bg-white p-5 shadow-sm"
            >
              <span className="block font-heading text-2xl font-bold text-primary md:text-3xl">
                {m.value}
              </span>
              <span className="mt-1 block font-body text-xs font-semibold tracking-widest text-on-surface-variant uppercase">
                {m.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* ─── Master Plan Showcase ─── */}
      <section className="bg-surface-container-lowest py-24">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="mb-12 text-center font-heading text-3xl font-bold text-on-surface md:text-4xl">
            Master Plan Showcase
          </h2>

          {/* Image placeholder */}
          <div className="relative flex aspect-[16/9] w-full items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-primary/25 via-tertiary-container/30 to-primary-container/50">
            <span className="font-heading text-xl text-on-surface-variant/50">
              Campus Master Plan — Interactive Layout
            </span>
          </div>

          {/* Legend */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
            {legend.map((l) => (
              <span key={l.label} className="flex items-center gap-2 font-body text-sm text-on-surface-variant">
                <span className={`h-3 w-3 rounded-full ${l.color}`} />
                {l.label}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 6 Core Campus Pillars ─── */}
      <section className="bg-surface py-24">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="mb-4 text-center font-heading text-3xl font-bold text-on-surface md:text-4xl">
            6 Core Campus Pillars
          </h2>
          <p className="mx-auto mb-16 max-w-2xl text-center font-body text-base text-on-surface-variant">
            The six foundational wings that define the Ram Lala Dham campus
            experience.
          </p>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {pillars.map((p) => (
              <div
                key={p.num}
                className="group relative rounded-2xl border border-on-surface/10 bg-white p-8 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
              >
                <span className="mb-3 inline-block rounded-full bg-primary-container px-3 py-1 font-body text-xs font-bold text-primary">
                  {p.icon}
                </span>
                <span className="mb-4 block font-heading text-xs font-semibold tracking-widest text-on-surface-variant/50 uppercase">
                  Pillar {p.num}
                </span>
                <h3 className="mb-3 font-heading text-lg font-bold text-on-surface">
                  {p.title}
                </h3>
                <p className="font-body text-sm leading-relaxed text-on-surface-variant">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Essential Infrastructure Grid ─── */}
      <section className="bg-primary-container py-24">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="mb-4 text-center font-heading text-3xl font-bold text-on-surface md:text-4xl">
            Essential Infrastructure
          </h2>
          <p className="mx-auto mb-16 max-w-2xl text-center font-body text-base text-on-surface-variant">
            The invisible backbone that makes the campus safe, sustainable, and
            scale-ready.
          </p>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {infra.map((item, i) => (
              <div
                key={item.title}
                className="rounded-xl border border-on-surface/10 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <span className="font-heading text-sm font-bold text-primary">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="mb-2 font-heading text-base font-bold text-on-surface">
                  {item.title}
                </h3>
                <p className="font-body text-sm leading-relaxed text-on-surface-variant">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 2029 Target Milestone Checklist ─── */}
      <section className="bg-surface py-24">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="mb-4 text-center font-heading text-3xl font-bold text-on-surface md:text-4xl">
            2029 Target Milestone
          </h2>

          {/* Progress bar */}
          <div className="mx-auto mt-10 max-w-2xl">
            <div className="mb-2 flex items-center justify-between font-body text-sm font-semibold text-on-surface">
              <span>Progress</span>
              <span>38% Complete</span>
            </div>
            <div className="h-3 w-full overflow-hidden rounded-full bg-on-surface/10">
              <div
                className="h-full rounded-full bg-primary transition-all"
                style={{ width: "38%" }}
              />
            </div>
          </div>

          {/* Phase timeline */}
          <div className="mx-auto mt-16 grid max-w-6xl gap-8 md:grid-cols-4">
            {phases.map((ph) => (
              <div key={ph.label} className="relative">
                <h3 className="mb-4 font-heading text-lg font-bold text-on-surface">
                  {ph.label}
                </h3>
                <ul className="space-y-3">
                  {ph.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 font-body text-sm text-on-surface-variant"
                    >
                      <svg
                        className="mt-0.5 h-4 w-4 shrink-0 text-[#C9A84C]"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2.5}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 12l2 2 4-4"
                        />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Sponsorship CTA ─── */}
      <section className="bg-primary-container py-24">
        <div className="mx-auto max-w-5xl px-4">
          <div className="rounded-3xl bg-tertiary-container p-10 text-center shadow-lg md:p-16">
            <span className="mb-4 inline-block rounded-full bg-white/60 px-5 py-2 text-xs font-semibold tracking-widest text-on-surface font-body">
              ॥ यत्र नार्यस्तु पूज्यन्ते रमन्ते तत्र देवताः ॥
            </span>

            <h2 className="mb-4 font-heading text-3xl font-bold text-on-surface md:text-4xl">
              Sponsor a Sacred Legacy
            </h2>
            <p className="mx-auto mb-12 max-w-xl font-body text-base text-on-surface-variant">
              Your contribution permanently etches your name into the living
              history of Ram Lala Dham. Choose a sponsorship tier and become part
              of Bengal&apos;s greatest spiritual revival.
            </p>

            {/* Sponsorship tiers */}
            <div className="mb-12 grid gap-6 sm:grid-cols-3">
              {sponsorTiers.map((t) => (
                <div
                  key={t.title}
                  className="rounded-xl border border-on-surface/10 bg-white p-6 text-left shadow-sm"
                >
                  <span className="block font-heading text-2xl font-bold text-primary">
                    {t.amount}
                  </span>
                  <span className="mt-1 mb-3 block font-heading text-sm font-bold text-on-surface">
                    {t.title}
                  </span>
                  <p className="font-body text-xs leading-relaxed text-on-surface-variant">
                    {t.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Dual CTA */}
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href="#"
                className="rounded-full bg-primary px-8 py-3 font-body text-sm font-semibold text-white transition-colors hover:bg-primary/90"
              >
                Contribute Now
              </a>
              <a
                href="#"
                className="rounded-full border border-primary bg-white px-8 py-3 font-body text-sm font-semibold text-primary transition-colors hover:bg-primary/5"
              >
                Speak to Our Team
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
