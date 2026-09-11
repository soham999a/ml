import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Ram Lala Mandir",
  description:
    "Learn about the Ram Lala Mandir Trust, Sebashram Sangha, and our mission to revive eternal dharma in Eastern India through compassion, craftsmanship, and community.",
};

export default function AboutPage() {
  const steps = [
    {
      num: "01",
      title: "Temple",
      desc: "A living sanctuary of devotion where the sacred Ram Lala Sanctum anchors daily worship and community gathering.",
    },
    {
      num: "02",
      title: "Community",
      desc: "Empowering local families through skill development, healthcare access, and inclusive social programmes.",
    },
    {
      num: "03",
      title: "Culture",
      desc: "Preserving Vedic traditions, classical arts, and regional heritage through the Gurukul and Chatuspathi.",
    },
    {
      num: "04",
      title: "Tourism",
      desc: "Drawing pilgrims and travellers to Bengal's spiritual heartland with purpose-built infrastructure and hospitality.",
    },
    {
      num: "05",
      title: "Economy",
      desc: "Generating sustainable livelihoods — construction, agriculture, crafts, and services — for the surrounding region.",
    },
    {
      num: "06",
      title: "Social Impact",
      desc: "100-bed charitable hospital, daily food for thousands, and elder care addressing the district's most urgent needs.",
    },
    {
      num: "07",
      title: "Sustainability",
      desc: "Solar microgrid, bio-digestors, rainwater harvesting, and botanical conservation for a carbon-conscious campus.",
    },
  ];

  const governanceCards = [
    {
      title: "Trust Secretary",
      desc: "Oversees day-to-day operations, compliance, and liaison between the Board of Trustees and project teams.",
    },
    {
      title: "Project Director",
      desc: "Manages construction milestones, vendor coordination, and quality assurance across all campus wings.",
    },
    {
      title: "Medical Superintendent",
      desc: "Leads the Sebashram Hospital's clinical governance, staffing, and community health outreach.",
    },
    {
      title: "Vedic Scholar Council",
      desc: "Guides ritual protocols, Gurukul curriculum, and cultural programming rooted in authentic tradition.",
    },
  ];

  return (
    <main className="min-h-screen">
      {/* ─── Hero Banner ─── */}
      <section className="bg-primary-container py-24 text-center">
        <nav className="mx-auto mb-8 max-w-3xl text-sm font-body text-on-surface-variant">
          <span className="cursor-pointer hover:underline">Home</span>
          <span className="mx-2">/</span>
          <span className="font-semibold text-on-surface">About Us</span>
        </nav>

        <span className="mb-6 inline-block rounded-full bg-tertiary-container px-5 py-2 text-xs font-semibold tracking-widest text-on-surface uppercase">
          ॐ सर्वे भवन्तु सुखिनः
        </span>

        <h1 className="mx-auto max-w-4xl px-4 font-heading text-3xl leading-tight font-bold text-on-surface sm:text-4xl md:text-5xl">
          Reviving Eternal Dharma Through Compassion, Craftsmanship &amp; Community
        </h1>

        <p className="mx-auto mt-6 max-w-2xl px-4 font-body text-lg text-on-surface-variant">
          The Ram Lala Mandir Trust — an initiative of Sebashram Sangha — is
          building a first-of-its-kind spiritual-cultural- humanitarian campus in
          the heart of rural Bengal, devoted to the timeless ideals of Shri Ram.
        </p>
      </section>

      {/* ─── Our Story ─── */}
      <section className="bg-surface py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 lg:grid-cols-2">
          <div>
            <h2 className="mb-6 font-heading text-3xl font-bold text-on-surface md:text-4xl">
              Our Story
            </h2>
            <div className="space-y-4 font-body text-base leading-relaxed text-on-surface-variant">
              <p>
                Eastern India once flourished as a cradle of spiritual heritage —
                home to ancient maths, monasteries, and riverine ghats that
                sustained both body and soul. Over the centuries, neglect and
                poverty stripped these lands of their sacred infrastructure,
                leaving communities without access to basic healthcare, education,
                or cultural anchorage.
              </p>
              <p>
                In 2018, a group of devoted philanthropists and spiritual leaders
                came together under the banner of{" "}
                <strong className="text-on-surface">Sebashram Sangha</strong> to
                reverse this decline. The founding vision was simple yet
                audacious: build a comprehensive campus where temple, hospital,
                kitchen, school, and community centre co-exist as one living
                organism — a{" "}
                <strong className="text-on-surface">Ram Lala Mandir</strong>.
              </p>
              <p>
                Every brick laid is a prayer. Every meal served is an offering.
                Every child taught is a continuation of an eternal lineage. Today,
                Phase-I is rising from the soil — 30,000 square feet of
                purpose-driven architecture designed to serve tens of thousands of
                pilgrims and locals each year.
              </p>
            </div>
          </div>

          {/* Image placeholder */}
          <div className="relative flex aspect-[4/5] items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-primary/20 to-tertiary-container/40">
            <span className="font-heading text-xl text-on-surface-variant/60">
              Heritage Campus Illustration
            </span>
          </div>
        </div>
      </section>

      {/* ─── 7-Step Operating Logic ─── */}
      <section className="bg-primary py-24">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="mb-4 text-center font-heading text-3xl font-bold text-white md:text-4xl">
            7-Step Operating Logic
          </h2>
          <p className="mx-auto mb-16 max-w-2xl text-center font-body text-base text-white/70">
            A self-reinforcing cycle that transforms devotion into lasting
            social good.
          </p>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-7">
            {steps.map((s, i) => (
              <div key={s.num} className="relative flex flex-col items-center text-center">
                {/* Connector line */}
                {i < steps.length - 1 && (
                  <span className="pointer-events-none absolute top-6 left-1/2 hidden h-[2px] w-full -translate-x-[-50%] bg-[#C9A84C]/60 lg:block" />
                )}

                <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-[#C9A84C] font-heading text-sm font-bold text-primary">
                  {s.num}
                </div>

                {/* Icon placeholder */}
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 text-[#C9A84C]">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <circle cx="12" cy="12" r="3" strokeWidth={2} />
                  </svg>
                </div>

                <h3 className="mb-1 font-heading text-base font-bold text-[#C9A84C]">
                  {s.title}
                </h3>
                <p className="text-xs leading-relaxed text-white/70 lg:hidden">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Governance Section ─── */}
      <section className="bg-surface py-24">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="mb-4 text-center font-heading text-3xl font-bold text-on-surface md:text-4xl">
            Governance &amp; Leadership
          </h2>
          <p className="mx-auto mb-16 max-w-2xl text-center font-body text-base text-on-surface-variant">
            Transparent stewardship rooted in trust, accountability, and sacred
            duty.
          </p>

          {/* Board of Trustees */}
          <div className="mx-auto mb-12 max-w-md rounded-2xl bg-primary p-8 text-center shadow-lg">
            <h3 className="mb-2 font-heading text-xl font-bold text-[#C9A84C]">
              Board of Trustees
            </h3>
            <p className="font-body text-sm text-white/70">
              The apex governing body setting vision, policy, and fiduciary
              oversight for the entire Trust.
            </p>
          </div>

          {/* Connector */}
          <div className="mx-auto mb-8 h-8 w-px bg-on-surface/20" />

          {/* Sub-section cards */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {governanceCards.map((g) => (
              <div
                key={g.title}
                className="rounded-xl border border-on-surface/10 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
              >
                <h4 className="mb-2 font-heading text-lg font-bold text-on-surface">
                  {g.title}
                </h4>
                <p className="font-body text-sm leading-relaxed text-on-surface-variant">
                  {g.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Trust badges */}
          <div className="mt-16 flex flex-wrap items-center justify-center gap-4">
            {["80G & FCRA Approved", "Quarterly Audits", "Public Transparency"].map(
              (badge) => (
                <span
                  key={badge}
                  className="rounded-full border border-primary/30 bg-primary-container px-6 py-2 font-body text-sm font-semibold text-on-surface"
                >
                  {badge}
                </span>
              )
            )}
          </div>
        </div>
      </section>

      {/* ─── CTA Band ─── */}
      <section className="bg-primary-container py-20 text-center">
        <div className="mx-auto max-w-3xl px-4">
          <h2 className="mb-6 font-heading text-3xl font-bold text-on-surface md:text-4xl">
            Partner in Bengal&apos;s Sacred Revival
          </h2>
          <p className="mb-10 font-body text-base text-on-surface-variant">
            Whether you contribute your time, expertise, or resources, every
            act of seva helps bring Ram Lala Mandir to life.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="#"
              className="rounded-full bg-primary px-8 py-3 font-body text-sm font-semibold text-white transition-colors hover:bg-primary/90"
            >
              Get Involved
            </a>
            <a
              href="#"
              className="rounded-full border border-primary bg-white px-8 py-3 font-body text-sm font-semibold text-primary transition-colors hover:bg-primary/5"
            >
              Download Annual Report
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
