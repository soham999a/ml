import SectionHeading from "@/components/SectionHeading";
import StatCard from "@/components/StatCard";
import PillBadge from "@/components/PillBadge";
import FiligreeDivider from "@/components/FiligreeDivider";
import Timeline from "@/components/Timeline";

const stats = [
  {
    value: "30,000 Sq Ft",
    label: "Total Built-Up Area",
    description:
      "A sprawling temple campus encompassing the sanctum, prayer halls, community spaces, and landscaped grounds.",
  },
  {
    value: "2029",
    label: "Target Year",
    description:
      "Grand consecration and Maha-Kumbhabhishekam scheduled to coincide with the milestone of India's development journey.",
  },
  {
    value: "Phase-I",
    label: "Seva Focus",
    description:
      "Construction of the main temple, annakshetra, and basic community infrastructure as the first wave of service.",
  },
  {
    value: "Vision 2047",
    label: "Full Ecosystem",
    description:
      "A holistic spiritual, educational, cultural, and healthcare ecosystem realised by India's centenary of independence.",
  },
  {
    value: "₹500 Cr+",
    label: "Projected Ecosystem",
    description:
      "Estimated economic and social impact of the complete Ram Lala Dham vision encompassing tourism, crafts, and welfare.",
  },
  {
    value: "Integrity",
    label: "80G & FCRA",
    description:
      "Fully compliant with 80G tax exemption and FCRA regulations, ensuring every rupee of seva is accounted for transparently.",
  },
];

const whyNowPoints = [
  {
    title: "Reviving Craftsmanship",
    description:
      "Traditional temple artisans and stone carvers are fading. Phase-I captures this generational skill before it is lost.",
  },
  {
    title: "Annakshetra for All",
    description:
      "A perpetual community kitchen serving free meals — nourishing bodies as the temple nourishes souls.",
  },
  {
    title: "Economic Catalyst",
    description:
      "Temple tourism, local crafts, and hospitality will generate sustainable livelihoods across Diamond Harbour and beyond.",
  },
  {
    title: "Audited Transparency",
    description:
      "Every donation is tracked, every rupee accounted — third-party audits and 80G compliance ensure unshakeable trust.",
  },
];

const valueCards = [
  {
    title: "Public & Spiritual Value",
    description:
      "A sacred space for daily worship, festivals, and spiritual retreats that serves thousands of devotees each year.",
  },
  {
    title: "Economic & Civic Stimulus",
    description:
      "Job creation, artisan markets, tourist footfall, and ancillary businesses that uplift the entire local economy.",
  },
  {
    title: "Institutional Trust & Seva",
    description:
      "A professionally governed charitable trust with FCRA compliance, annual audits, and a commitment to selfless service.",
  },
];

const templeCards = [
  {
    title: "Front Elevation",
    description:
      "The grand entrance gateway with traditional Nagara-style shikhara rising above the sanctum — an inviting beacon for devotees.",
  },
  {
    title: "Side Elevation",
    description:
      "Lateral view showcasing the mandapa halls, prakara walls, and the harmonious blend of stone and brick craftsmanship.",
  },
  {
    title: "Perspective",
    description:
      "A panoramic rendering of the full campus — temple, annakshetra, gardens, and community spaces in one cohesive vista.",
  },
];

const donationTiers = [
  { amount: "₹2,100", label: "Annam Brahma" },
  { amount: "₹5,100", label: "Seva Sankalp" },
  { amount: "₹11,000", label: "Kalash Arpan" },
  { amount: "₹25,000", label: "Shila Daan" },
  { amount: "₹51,000", label: "Mandir Abhishek" },
  { amount: "₹1,00,000", label: "Param Seva" },
];

const closingBadges = [
  "Registered Trust",
  "80G Tax Exempt",
  "FCRA Compliant",
  "Third-Party Audited",
];

export default function Home() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative flex min-h-[82vh] items-center justify-center overflow-hidden bg-primary">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-container to-tertiary-container opacity-80" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--color-secondary)_/_10%,_transparent_60%)]" />

        <div className="relative z-10 mx-auto max-w-5xl px-6 py-24 text-center">
          <p className="font-heading text-lg italic tracking-wide text-secondary-fixed/80 md:text-xl">
            ॥ श्री राम जय राम जय जय राम ॥
          </p>

          <h1 className="mt-6 font-heading text-4xl font-bold leading-tight tracking-tight text-surface md:text-6xl lg:text-7xl">
            Ram Lala Mandir &amp;
            <br />
            Sebashram Sangha
          </h1>

          <p className="mx-auto mt-6 max-w-3xl font-body text-base leading-relaxed text-surface/80 md:text-lg">
            Ram Lala Dham &bull; An Integrated Spiritual, Cultural, Community
            &amp; Economic Development Initiative in West Bengal.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <PillBadge variant="maroon">Phase I: 2026–2029</PillBadge>
            <PillBadge variant="maroon">
              Vision 2047: ₹500 Cr+ Ecosystem
            </PillBadge>
            <PillBadge variant="maroon">80G Tax Exempt</PillBadge>
          </div>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="/donate"
              className="inline-flex items-center justify-center rounded-full bg-secondary-container px-8 py-3.5 font-body text-sm font-semibold text-primary transition-colors hover:bg-secondary-fixed"
            >
              Support the Temple
            </a>
            <a
              href="/vision-2047"
              className="inline-flex items-center justify-center rounded-full border border-surface/40 px-8 py-3.5 font-body text-sm font-semibold text-surface transition-colors hover:bg-surface/10"
            >
              Explore Vision 2047
            </a>
          </div>
        </div>
      </section>

      {/* ── Vision Band ── */}
      <section className="bg-primary-container py-14">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <p className="font-heading text-xl italic leading-relaxed text-secondary-fixed md:text-2xl">
            &ldquo;A temple as the anchor. An ecosystem as the
            future.&rdquo;
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
            {["Faith", "Community", "Culture", "Tourism", "Economy", "Social Impact"].map(
              (tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center rounded-full border border-secondary-fixed/25 bg-secondary-fixed/10 px-3.5 py-1 font-body text-xs font-semibold uppercase tracking-widest text-secondary-fixed"
                >
                  {tag}
                </span>
              ),
            )}
          </div>

          <FiligreeDivider />
        </div>
      </section>

      {/* ── Executive Summary ── */}
      <section className="bg-surface py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            title="Foundations of Ram Lala Dham"
            subtitle="Six pillars that define the scope, scale, and integrity of this initiative."
          />

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {stats.map((stat) => (
              <StatCard
                key={stat.label}
                value={stat.value}
                label={stat.label}
                description={stat.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Now ── */}
      <section className="bg-surface-container-low py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            title="Why Now?"
            subtitle="The convergence of faith, craft, and community — a moment we must not let slip."
          />

          <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-2">
            {/* Left — Narrative */}
            <div>
              <p className="font-body text-base leading-relaxed text-on-surface-variant">
                The Diamond Harbour region stands at a unique crossroads.
                Traditional temple craftsmanship is disappearing, community
                infrastructure is underserved, and the spiritual heritage of
                Bengal deserves a living, breathing home. Ram Lala Dham rises
                at precisely this inflection — turning devotion into
                measurable, lasting impact.
              </p>

              <ul className="mt-8 space-y-6">
                {whyNowPoints.map((point) => (
                  <li key={point.title} className="flex gap-4">
                    <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-secondary-container text-xs font-bold text-primary">
                      ✓
                    </span>
                    <div>
                      <p className="font-body text-sm font-semibold text-on-surface">
                        {point.title}
                      </p>
                      <p className="mt-1 font-body text-sm leading-relaxed text-on-surface-variant">
                        {point.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right — Value Cards */}
            <div className="flex flex-col gap-4">
              {valueCards.map((card) => (
                <div
                  key={card.title}
                  className="rounded-2xl bg-tertiary-container/50 p-6"
                >
                  <h3 className="font-heading text-lg font-semibold text-secondary-fixed">
                    {card.title}
                  </h3>
                  <p className="mt-2 font-body text-sm leading-relaxed text-surface/80">
                    {card.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Temple Showcase ── */}
      <section className="bg-surface py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            title="Temple Architecture"
            subtitle="A glimpse of the sacred structure taking shape at Diamond Harbour."
          />

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
            {templeCards.map((card) => (
              <div
                key={card.title}
                className="group overflow-hidden rounded-2xl border border-on-surface/5 bg-surface-container-lowest shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="relative h-56 bg-gradient-to-br from-primary-container via-primary to-tertiary-container">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="font-heading text-sm font-semibold uppercase tracking-widest text-secondary-fixed/50">
                      {card.title}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-heading text-lg font-semibold text-on-surface">
                    {card.title}
                  </h3>
                  <p className="mt-2 font-body text-sm leading-relaxed text-on-surface-variant">
                    {card.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Roadmap Teaser ── */}
      <section className="bg-surface-container-low py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            title="The Path to 2047: Milestone Roadmap"
            subtitle="From bhoomi pujan to centenary — a phased journey of devotion and development."
          />
          <div className="mt-12">
            <Timeline />
          </div>
        </div>
      </section>

      {/* ── Donation CTA ── */}
      <section className="bg-surface py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            title="Your Inscription Awaits"
            subtitle="Every contribution carves a permanent place in the legacy of Ram Lala Dham."
          />

          <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-2">
            {/* Left — Narrative */}
            <div>
              <p className="font-body text-base leading-relaxed text-on-surface-variant">
                Your name, inscribed in stone, becomes part of a temple that
                will stand for centuries. Every donation to Ram Lala Mandir
                &amp; Sebashram Sangha qualifies for full 80G tax exemption
                under the Income Tax Act — meaning your seva is both
                spiritually rewarding and financially prudent.
              </p>

              <div className="mt-6 rounded-xl border border-secondary/20 bg-secondary-container/10 p-5">
                <p className="font-body text-sm font-semibold text-on-surface">
                  Tax Exemption Notice
                </p>
                <p className="mt-2 font-body text-sm leading-relaxed text-on-surface-variant">
                  Donations to Ram Lala Mandir &amp; Sebashram Sangha are
                  eligible for deduction under Section 80G of the Income Tax
                  Act, 1961. A valid donation receipt will be issued for every
                  contribution.
                </p>
              </div>

              <a
                href="/donate"
                className="mt-8 inline-flex items-center justify-center rounded-full bg-primary px-8 py-3.5 font-body text-sm font-semibold text-surface transition-colors hover:bg-primary-container"
              >
                Donate Now
              </a>
            </div>

            {/* Right — Donation Tiers */}
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
              {donationTiers.map((tier) => (
                <div
                  key={tier.amount}
                  className="flex flex-col items-center justify-center rounded-2xl border border-on-surface/5 bg-surface-container-lowest p-6 text-center shadow-sm transition-shadow hover:shadow-md"
                >
                  <p className="font-heading text-2xl font-bold text-primary">
                    {tier.amount}
                  </p>
                  <p className="mt-2 font-body text-xs font-semibold uppercase tracking-widest text-on-surface-variant">
                    {tier.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Closing CTA ── */}
      <section className="relative overflow-hidden bg-primary py-20">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-container to-tertiary-container opacity-60" />
        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
          <p className="font-heading text-2xl italic leading-relaxed text-secondary-fixed/80 md:text-3xl">
            &ldquo;2029 is not the end. It is the eternal
            foundation.&rdquo;
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="/donate"
              className="inline-flex items-center justify-center rounded-full bg-secondary-container px-8 py-3.5 font-body text-sm font-semibold text-primary transition-colors hover:bg-secondary-fixed"
            >
              Donate
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-center rounded-full border border-surface/40 px-8 py-3.5 font-body text-sm font-semibold text-surface transition-colors hover:bg-surface/10"
            >
              Download Vision 2047 Deck
            </a>
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            {closingBadges.map((badge) => (
              <span
                key={badge}
                className="inline-flex items-center rounded-full border border-secondary-fixed/25 bg-secondary-fixed/10 px-4 py-1.5 font-body text-xs font-semibold uppercase tracking-widest text-secondary-fixed"
              >
                {badge}
              </span>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
