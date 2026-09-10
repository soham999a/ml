import SectionHeading from "@/components/SectionHeading";
import StatCard from "@/components/StatCard";
import FiligreeDivider from "@/components/FiligreeDivider";
import Timeline from "@/components/Timeline";

const futureTiles = [
  {
    icon: "✈",
    title: "International Pilgrimage Corridor",
    description:
      "Dedicated travel facilitation for global devotees with multilingual support, visa assistance partnerships, and curated spiritual itineraries connecting Ram Lala Dham to the broader Hindu pilgrimage circuit.",
  },
  {
    icon: "🏥",
    title: "500-Bed Multi-Specialty Sebashram Hospital",
    description:
      "A charity-driven hospital offering tertiary healthcare to underserved communities, with specialities in cardiology, orthopaedics, Ayurveda, and palliative care — fully subsidised for BPL families.",
  },
  {
    icon: "📚",
    title: "Vedic University & Research Centre",
    description:
      "A residential university offering degrees in Vedic literature, Sanskrit grammar, Indian philosophy, and comparative religion — with international exchange programmes and digital classrooms.",
  },
  {
    icon: "🧵",
    title: "Artisan Heritage Craft Clusters",
    description:
      "Dedicated workspaces and market access for local artisans practising traditional crafts such as Chikankari, zardozi, terracotta, and handloom weaving, with e-commerce integration.",
  },
  {
    icon: "📜",
    title: "Digital Sanskrit Library & Archives",
    description:
      "A world-class digital repository of Sanskrit manuscripts, palm-leaf scans, and oral tradition recordings, accessible free to scholars worldwide via open-access platforms.",
  },
  {
    icon: "🌿",
    title: "Eco-Tourism & Yatri Nivas Resort Complex",
    description:
      "Sustainable guest accommodation blending traditional Indian hospitality with eco-conscious design — solar-powered cottages, organic kitchens, and nature trails along the riverfront.",
  },
  {
    icon: "🌾",
    title: "Agricultural Sustainability Hub",
    description:
      "A demonstration farm and training centre promoting organic farming, cow-based agriculture, seed banking, and water conservation techniques rooted in traditional Indian wisdom.",
  },
  {
    icon: "👩",
    title: "Women's Skill Development & Vocational Centre",
    description:
      "Empowering women through certified programmes in digital literacy, tailoring, food processing, handicraft production, and entrepreneurship development with microfinance linkages.",
  },
  {
    icon: "⚽",
    title: "Youth Sports & Cultural Academy",
    description:
      "A state-of-the-art academy offering training in traditional Indian sports (kabaddi, wrestling, archery), classical dance, music, and Vedic recitation — nurturing holistic development.",
  },
  {
    icon: "☀",
    title: "Solar Energy Independence Zone",
    description:
      "A 20-acre solar farm powering the entire Dham complex with clean energy, featuring battery storage, EV charging stations, and a visitor education centre on renewable technology.",
  },
];

const impactMetrics = [
  {
    value: "5,000+",
    label: "Employment Generation",
    description: "Direct and indirect jobs across construction, healthcare, education, hospitality, and administration phases.",
  },
  {
    value: "2 Million+",
    label: "Annual Pilgrims",
    description: "Projected footfall once full infrastructure is operational — a global spiritual destination rivalling established circuits.",
  },
  {
    value: "100,000+",
    label: "Healthcare Beneficiaries",
    description: "Annual outpatient and inpatient care delivered free or at subsidised rates through the Sebashram Hospital network.",
  },
  {
    value: "2,000+",
    label: "Artisan Livelihoods",
    description: "Traditional craftspeople sustained through dedicated clusters, fair-trade markets, and heritage tourism demand.",
  },
];

const sustainabilityPillars = [
  {
    title: "Environmental",
    icon: "🌍",
    points: [
      "20-acre solar farm for complete energy independence",
      "Rainwater harvesting across all campus buildings",
      "Zero-waste campus with composting and recycling",
      "Riverfront biodiversity restoration zone",
    ],
  },
  {
    title: "Social",
    icon: "🤝",
    points: [
      "Free multi-specialty hospital for underserved communities",
      "Vedic university with need-based scholarships",
      "Women's vocational training and micro-enterprise support",
      "Youth sports and cultural development programmes",
    ],
  },
  {
    title: "Cultural",
    icon: "🕉",
    points: [
      "Heritage preservation of traditional architecture",
      "Vedic scholarship and Sanskrit revival programmes",
      "Artisan craft cluster preserving dying art forms",
      "Digital archive of manuscripts and oral traditions",
    ],
  },
];

export default function Vision2047Page() {
  return (
    <div className="flex flex-col">
      {/* ── Hero Section ── */}
      <section className="relative bg-primary-container py-24 md:py-32 overflow-hidden">
        {/* Sacred aura background */}
        <div className="absolute inset-0 opacity-[0.07]">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-secondary blur-[120px]" />
          <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] rounded-full bg-secondary-container blur-[100px]" />
        </div>

        <div className="relative mx-auto max-w-5xl px-6 text-center">
          <span className="inline-flex items-center rounded-full border border-secondary/30 bg-secondary/10 px-4 py-1.5 font-body text-xs font-semibold uppercase tracking-widest text-secondary-container">
            𑁍 संस्कृतम् 𑁍
          </span>

          <h1 className="mt-8 font-heading text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-on-primary-container">
            Vision 2047:{" "}
            <span className="text-secondary-container">
              ₹500 Cr+ Integrated Cultural &amp; Socioeconomic Ecosystem
            </span>
          </h1>

          <p className="mt-6 mx-auto max-w-3xl font-body text-lg leading-relaxed text-on-primary-container/80">
            A transformative 25-year roadmap aligning Ram Lala Dham with India&apos;s
            centenary of independence — building a self-sustaining
            spiritual-cultural-humanitarian ecosystem for generations to come.
          </p>
        </div>
      </section>

      {/* ── Disclaimer Banner ── */}
      <section className="bg-secondary-fixed/40 border-y border-secondary/20">
        <div className="mx-auto max-w-5xl px-6 py-4">
          <p className="font-body text-sm text-on-secondary-fixed/80 text-center leading-relaxed">
            <span className="font-semibold">Important:</span> All Vision 2047 projections are indicative, subject to
            detailed project reports, statutory approvals, and feasibility assessments.
          </p>
        </div>
      </section>

      {/* ── Executive Framing ── */}
      <section className="bg-surface py-20 md:py-28">
        <div className="mx-auto max-w-5xl px-6">
          <blockquote className="relative text-center">
            <span
              className="absolute -top-8 left-1/2 -translate-x-1/2 font-heading text-6xl text-secondary/20 select-none"
              aria-hidden="true"
            >
              &ldquo;
            </span>
            <p className="font-heading text-2xl md:text-3xl lg:text-4xl font-semibold leading-snug text-on-surface max-w-4xl mx-auto">
              By 2047, Ram Lala Dham aims to be a ₹500 Cr+ self-sustaining
              spiritual-cultural-humanitarian ecosystem
            </p>
          </blockquote>

          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
            <StatCard
              value="25+"
              label="Year Timeline"
              description="Phased development from foundation to full vision"
              icon="timeline"
            />
            <StatCard
              value="₹500 Cr+"
              label="Estimated"
              description="Cumulative capital across all project phases"
              icon="account_balance"
            />
            <StatCard
              value="5,000+"
              label="Daily Visitors Target"
              description="Peak daily footfall at full operational capacity"
              icon="groups"
            />
            <StatCard
              value="1,000+"
              label="Employment"
              description="Steady-state jobs across all Dham verticals"
              icon="work"
            />
          </div>
        </div>
      </section>

      <FiligreeDivider />

      {/* ── 10-Tile Future Expansion Grid ── */}
      <section className="bg-surface py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeading
            title="Future Expansion Blueprint"
            subtitle="Ten flagship initiatives that will transform Ram Lala Dham into a globally recognized spiritual-cultural hub"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {futureTiles.map((tile, i) => (
              <div
                key={tile.title}
                className="group rounded-2xl bg-surface-container-lowest border border-on-surface/5 p-6 transition-all duration-200 hover:shadow-md hover:border-secondary/30"
              >
                <div className="flex items-start gap-4">
                  <span className="flex items-center justify-center w-12 h-12 rounded-xl bg-secondary-container/20 text-2xl shrink-0 group-hover:bg-secondary-container/40 transition-colors">
                    {tile.icon}
                  </span>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-1">
                      <span className="font-body text-xs font-semibold text-on-surface-variant/50 tabular-nums">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <h3 className="font-heading text-lg font-semibold text-on-surface">
                        {tile.title}
                      </h3>
                    </div>
                    <p className="mt-2 font-body text-sm leading-relaxed text-on-surface-variant/80">
                      {tile.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FiligreeDivider />

      {/* ── Timeline ── */}
      <section className="bg-surface py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeading
            title="2026–2047 Roadmap"
            subtitle="A phased journey from sacred foundation to centenary fulfilment"
          />
          <Timeline />
        </div>
      </section>

      <FiligreeDivider />

      {/* ── Impact Projections (with disclaimer) ── */}
      <section className="bg-primary py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeading
            title="Impact Projections"
            subtitle="Scale of transformative outcomes planned across health, livelihood, culture, and economy"
          />

          <div className="mb-8 text-center">
            <span className="inline-flex items-center rounded-full border border-secondary-container/30 bg-secondary-container/10 px-4 py-1.5 font-body text-[11px] font-semibold uppercase tracking-widest text-secondary-container">
              All figures indicative — subject to DPR &amp; feasibility
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {impactMetrics.map((metric) => (
              <div
                key={metric.label}
                className="rounded-2xl bg-primary-container/50 border border-secondary-container/15 p-6 text-center"
              >
                <p className="font-heading text-3xl md:text-4xl font-bold text-secondary-container">
                  {metric.value}
                </p>
                <p className="mt-2 font-body text-sm font-semibold uppercase tracking-wider text-on-primary-container">
                  {metric.label}
                </p>
                <p className="mt-3 font-body text-sm leading-relaxed text-on-primary-container/70">
                  {metric.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FiligreeDivider />

      {/* ── Sustainability Pillars ── */}
      <section className="bg-surface py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeading
            title="Sustainability Pillars"
            subtitle="Three interconnected pillars ensuring the Dham remains viable, impactful, and culturally rooted"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {sustainabilityPillars.map((pillar) => (
              <div
                key={pillar.title}
                className="rounded-2xl bg-surface-container-low border border-on-surface/5 p-8"
              >
                <div className="flex items-center gap-3 mb-6">
                  <span className="flex items-center justify-center w-12 h-12 rounded-full bg-tertiary-container/40 text-2xl">
                    {pillar.icon}
                  </span>
                  <h3 className="font-heading text-xl font-semibold text-on-surface">
                    {pillar.title}
                  </h3>
                </div>
                <ul className="space-y-3">
                  {pillar.points.map((point) => (
                    <li key={point} className="flex items-start gap-3">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-secondary shrink-0" />
                      <span className="font-body text-sm leading-relaxed text-on-surface-variant">
                        {point}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FiligreeDivider />

      {/* ── CTA ── */}
      <section className="bg-primary-container py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-on-primary-container">
            Be Part of India&apos;s Civilizational Revival
          </h2>
          <p className="mt-6 font-body text-lg leading-relaxed text-on-primary-container/80">
            Your support can help build a landmark that will serve humanity for
            centuries — blending ancient wisdom with modern sustainability.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#contribute"
              className="inline-flex items-center justify-center rounded-full bg-secondary-container px-8 py-3.5 font-body text-sm font-semibold uppercase tracking-wider text-on-secondary-container transition-colors hover:bg-secondary-fixed-dim"
            >
              Contribute to Vision 2047
            </a>
            <a
              href="#roadmap-pdf"
              className="inline-flex items-center justify-center rounded-full border border-secondary-container/40 px-8 py-3.5 font-body text-sm font-semibold uppercase tracking-wider text-on-primary-container transition-colors hover:bg-secondary-container/10"
            >
              Download Detailed Roadmap
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
