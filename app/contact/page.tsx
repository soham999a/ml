"use client";

import Link from "next/link";
import { useState } from "react";
import Icon from "@/components/Icon";

const CORRIDOR_IMAGE =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDWEzN0cM7qLVdTNhv_UZAX_ME-E1xyhs1XgU-PuOo-3biRD5i3uARm3Z1yaCOrBWJ4EuPS62XOIv_EssKLg0_5S3PIpJ9yj1ttzGsT_qhMW6MAS-_8cCBhsofrdeUaTRS4TsDdU1Uxa_bVQQfkVds2CUQGWsuST9Pe-xcvQizNr4BexxC12nI8SDknWFL_9YIVrrwz7oNSlOpHHgncYm9gQc6PTlVT64UlnNmpit3l6Ul3FcNVsi0x";

/* ───────────────────────── data ───────────────────────── */

const countryCodes = [
  { code: "+91", label: "India (+91)" },
  { code: "+1", label: "USA (+1)" },
  { code: "+44", label: "UK (+44)" },
  { code: "+61", label: "Australia (+61)" },
  { code: "+971", label: "UAE (+971)" },
  { code: "+65", label: "Singapore (+65)" },
  { code: "+81", label: "Japan (+81)" },
  { code: "+49", label: "Germany (+49)" },
  { code: "+977", label: "Nepal (+977)" },
  { code: "+880", label: "Bangladesh (+880)" },
];

const inquiryPurposes = [
  { value: "", label: "Select an inquiry track" },
  { value: "csr", label: "Corporate CSR Partnership" },
  { value: "endowment", label: "Endowment / Land Grant" },
  { value: "volunteer", label: "Volunteer / Seva Registration" },
  { value: "pilgrim", label: "Pilgrim Corridor & Yatri Nivas" },
  { value: "academic", label: "Academic & Research" },
  { value: "general", label: "General Enquiry" },
];

const pillars = [
  {
    icon: "building",
    title: "Corporate CSR Alliances",
    subtitle: "Section 135 · Schedule VII Compliant",
    desc: "Structured CSR investments aligned with national heritage restoration, elderly care, and digital education mandates under the Companies Act.",
    checklist: [
      "Full Schedule VII itemised project reports",
      "Third-party impact audit & 80G receipts",
      "Board-resolution-ready partnership MoUs",
      "Annual CSR-1 filing support",
    ],
    cta: "Schedule a CSR Audit",
    href: "#contact-form",
  },
  {
    icon: "landmark",
    title: "Government & Civic Alliances",
    subtitle: "Public-Private Integration",
    desc: "Collaborate with district administration, ASI, tourism boards, and municipal bodies for integrated corridor development and heritage conservation.",
    checklist: [
      "Joint-venture proposals for Yatri Nivas",
      "District-level grievance redressal MoU",
      "Swadesh Darshan 2.0 alignment",
      "PM-SVANidhi micro-enterprise linkages",
    ],
    cta: "Discuss a Civic Partnership",
    href: "#contact-form",
  },
  {
    icon: "globe",
    title: "Global Dharma & Diaspora Chapters",
    subtitle: "Global Patron Circle",
    desc: "NRIs and international devotees can sponsor specific seva projects, sponsor pilgrim amenities, and establish diaspora chapter endowments.",
    checklist: [
      "FCRA-compliant remittance routes",
      "Quarterly video-audit of sponsored projects",
      "Named dedication plaques on campus",
      "Annual global patron virtual darshan",
    ],
    cta: "Join the Patron Circle",
    href: "#contact-form",
  },
];

const infoCards = [
  {
    title: "Trust Secretariat & Campus",
    icon: "map-pin",
    lines: [
      "Vill – Joydebpur, Kapat Hat",
      "PO – Diamond Harbour",
      "Dist – South 24 Parganas, WB 743331",
      "",
      "Seva Helpdesk: +91 70031 25972",
      "Office Hours: Mon – Sat, 09:30 AM – 05:30 PM IST",
      "Sunday & Public Holidays: By appointment only",
    ],
  },
  {
    title: "Direct Nodal Desks",
    icon: "phone",
    lines: [
      "CSR & Institutional Desk",
      "csr@ramlalamandir.org",
      "",
      "Devotee Seva & Pilgrim Desk",
      "seva@ramlalamandir.org",
      "",
      "Media & Communications Desk",
      "media@ramlalamandir.org",
    ],
  },
  {
    title: "Pilgrim Corridor & Access",
    icon: "map",
    lines: [
      "65 km from Howrah Junction (via SH-1)",
      "72 km from Netaji Subhas Chandra Bose Intl. (CCU)",
      "12 km from Durgapur City Centre",
      "",
      "Interactive map & route planner →",
    ],
  },
];

const volunteerTracks = [
  {
    icon: "medical",
    title: "Medical Seva Fellowship",
    desc: "Deploy qualified doctors, nurses, and paramedics for weekly health camps serving elderly pilgrims and local villagers.",
    btn: "Apply for Medical Seva",
  },
  {
    icon: "book",
    title: "Vedic & Digital Mentorship",
    desc: "Teach scripture recitation, basic computing, and digital literacy to rural youth and temple community members.",
    btn: "Apply to Mentor",
  },
  {
    icon: "food",
    title: "Annakshetra Kitchen Seva",
    desc: "Help serve sacred prasad to 500+ daily visitors — manage inventory, cooking logistics, and hygiene standards.",
    btn: "Join Kitchen Seva",
  },
  {
    icon: "archive",
    title: "Terracotta & Heritage Archives",
    desc: "Assist artisans in documenting Bengali terracotta traditions, digital cataloguing of temple artefacts and oral histories.",
    btn: "Apply for Archives",
  },
];

const faqs = [
  {
    q: "How do corporations schedule a CSR compliance audit?",
    a: "Write to csr@ramlalamandir.org with your company's CIN and CSR policy number. Our nodal officer will share a project-aligned MoU draft and Schedule VII mapping within 7 working days. An on-site audit visit can be arranged within the subsequent fortnight.",
  },
  {
    q: "Is the temple campus accessible for elderly pilgrims and wheelchairs?",
    a: "Yes. The main darshan corridor, Yatri Nivas, and Annakshetra hall are all ramp-equipped. We provide complimentary wheelchair assistance and volunteer escort services. Please notify the Seva Desk 48 hours before your visit for priority arrangements.",
  },
  {
    q: "How can I book accommodation at Yatri Nivas?",
    a: "Yatri Nivas rooms can be reserved through seva@ramlalamandir.org or by calling the Devotee Seva Desk. Rooms are offered on a donation-based model with a suggested contribution of ₹500/night. Extended-stay options are available for volunteer fellows.",
  },
  {
    q: "Can NRIs make tax-deductible remittances from abroad?",
    a: "Yes. The Trust holds valid FCRA registration for foreign contributions. NRIs can remit via SWIFT/NEFT to our designated FCRA account. 80G-equivalent receipts are issued under applicable double-taxation avoidance treaties. Contact csr@ramlalamandir.org for wire instructions.",
  },
];

const trustBadges = [
  { icon: "check-circle", label: "80G & 12A Registered" },
  { icon: "clipboard", label: "Section 135 CSR Eligible" },
  { icon: "phone", label: "Direct Helpdesk Support" },
  { icon: "landmark", label: "Registered Public Trust" },
];

/* ──────────────────────── component ───────────────────── */

export default function ContactPage() {
  /* form state */
  const [form, setForm] = useState({
    fullName: "",
    countryCode: "+91",
    phone: "",
    email: "",
    organization: "",
    purpose: "",
    subject: "",
    message: "",
    newsletter: false,
  });
  const [submitted, setSubmitted] = useState(false);
  const [refNumber, setRefNumber] = useState("");

  /* FAQ state */
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) {
    const { name, value, type } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const id = `RLD-${Date.now().toString(36).toUpperCase()}-${Math.random().toString(36).slice(2, 6).toUpperCase()}`;
    setRefNumber(id);
    setSubmitted(true);
  }

  function handleReset() {
    setForm({
      fullName: "",
      countryCode: "+91",
      phone: "",
      email: "",
      organization: "",
      purpose: "",
      subject: "",
      message: "",
      newsletter: false,
    });
    setSubmitted(false);
    setRefNumber("");
  }

  return (
    <main className="flex flex-col">
      {/* ════════════════════ SUB-HERO ════════════════════ */}
      <section className="bg-primary-container">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
          {/* breadcrumb */}
          <nav className="mb-8 font-body text-sm text-surface-dim">
            <Link href="/" className="transition-colors hover:text-secondary-fixed">
              Home
            </Link>
            <span className="mx-2" aria-hidden="true">/</span>
            <span className="text-secondary-fixed font-medium">Contact &amp; Get Involved</span>
          </nav>

          {/* invocation badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-secondary-fixed/20 bg-secondary-fixed/10 px-4 py-1.5">
            <span className="font-body text-xs font-semibold uppercase tracking-widest text-secondary-fixed">
              ॐ श्री राम जय राम जय जय राम
            </span>
          </div>

          <h1 className="font-heading text-3xl font-bold leading-tight tracking-tight text-surface sm:text-4xl lg:text-5xl">
            Partner in Bengal&rsquo;s Sacred
            <br className="hidden sm:block" />
            &amp; Civilizational Revival
          </h1>

          <p className="mt-5 max-w-2xl font-body text-lg leading-relaxed text-surface-dim">
            Whether through corporate CSR commitments, government civic partnerships,
            or the quiet devotion of volunteer seva — every hand strengthens this
            civilizational restoration. Connect with us to explore your path of service.
          </p>

          {/* trust badges */}
          <div className="mt-10 flex flex-wrap gap-3">
            {trustBadges.map((badge) => (
              <div
                key={badge.label}
                className="inline-flex items-center gap-2 rounded-full border border-secondary-fixed/20 bg-primary/40 px-4 py-2"
              >
                <Icon name={badge.icon} className="h-4 w-4" />
                <span className="font-body text-xs font-medium text-surface-dim">
                  {badge.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════ 3 INSTITUTIONAL PILLARS ════════════════ */}
      <section className="temple-pattern-dark bg-primary">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
          <div className="text-center mb-14">
            <span className="inline-block rounded-full border border-secondary/30 bg-secondary/10 px-4 py-1.5 font-body text-xs font-semibold uppercase tracking-widest text-secondary-fixed">
              Institutional Alliances
            </span>
            <h2 className="mt-5 font-heading text-3xl font-bold tracking-tight text-surface sm:text-4xl lg:text-5xl">
              Three Pillars of Partnership
            </h2>
            <div className="mt-4 mx-auto w-16 h-[2px] bg-secondary/60" />
            <p className="mt-4 mx-auto max-w-2xl font-body text-base leading-relaxed text-surface-dim">
              Structured engagement models designed for every scale of
              contribution — from corporate boardrooms to global diaspora communities.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {pillars.map((p) => (
              <div
                key={p.title}
                className="flex flex-col rounded-2xl border border-secondary/20 bg-primary-container/80 p-8"
              >
                <Icon name={p.icon} className="mb-4 h-9 w-9" />
                <h3 className="font-heading text-xl font-bold text-surface">
                  {p.title}
                </h3>
                <span className="mt-1 inline-block font-body text-xs font-semibold uppercase tracking-widest text-secondary-fixed">
                  {p.subtitle}
                </span>
                <p className="mt-4 flex-1 font-body text-sm leading-relaxed text-surface-dim">
                  {p.desc}
                </p>
                <ul className="mt-6 space-y-2.5">
                  {p.checklist.map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="mt-0.5 h-4 w-4 shrink-0 text-secondary"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="font-body text-sm text-surface-dim">{item}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href={p.href}
                  className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-secondary-container px-6 py-2.5 font-body text-sm font-semibold text-primary transition-colors hover:bg-secondary-fixed"
                >
                  {p.cta}
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4">
                    <path fillRule="evenodd" d="M3 10a.75.75 0 0 1 .75-.75h10.638L11.23 6.29a.75.75 0 1 1 1.04-1.08l4.5 4.25a.75.75 0 0 1 0 1.08l-4.5 4.25a.75.75 0 1 1-1.04-1.08l3.158-2.96H3.75A.75.75 0 0 1 3 10Z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════ TWO-COLUMN CONTACT ════════════════════ */}
      <section id="contact-form" className="bg-surface">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
            {/* ─── LEFT: FORM ─── */}
            <div className="lg:col-span-7">
              <h2 className="font-heading text-2xl font-bold tracking-tight text-on-surface sm:text-3xl">
                Multi-Track Inquiry Form
              </h2>
              <p className="mt-2 font-body text-sm text-on-surface-variant">
                Fields marked with * are mandatory. Our response SLA is 48 working hours.
              </p>

              {submitted ? (
                <div className="mt-10 rounded-2xl border border-secondary/40 bg-surface-container-low p-10 text-center">
                  <Icon name="sparkles" className="h-12 w-12 text-on-surface-variant" />
                  <h3 className="mt-4 font-heading text-2xl font-bold text-on-surface">
                    Inquiry Successfully Transmitted
                  </h3>
                  <p className="mt-2 font-body text-sm text-on-surface-variant">
                    Your trust in our mission is deeply valued. Our nodal officer will
                    respond within 48 working hours.
                  </p>
                  <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-outline-variant bg-surface-container px-5 py-2.5">
                    <span className="font-body text-xs font-semibold uppercase tracking-wider text-on-surface-variant">
                      Reference
                    </span>
                    <span className="font-body text-sm font-bold text-primary">{refNumber}</span>
                  </div>
                  <div className="mt-8">
                    <button
                      type="button"
                      onClick={handleReset}
                      className="rounded-full border border-primary/30 px-6 py-2.5 font-body text-sm font-semibold text-primary transition-colors hover:bg-primary-container hover:text-surface"
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                  {/* Full Name */}
                  <div>
                    <label htmlFor="fullName" className="block font-body text-sm font-medium text-on-surface">
                      Full Name <span className="text-error">*</span>
                    </label>
                    <input
                      id="fullName"
                      name="fullName"
                      type="text"
                      required
                      value={form.fullName}
                      onChange={handleChange}
                      placeholder="e.g. Raghavendra Prasad Banerjee"
                      className="mt-1.5 block w-full rounded-xl border border-outline-variant bg-surface-container-lowest px-4 py-3 font-body text-sm text-on-surface placeholder:text-on-surface-variant/50 transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                    />
                  </div>

                  {/* Email + Phone grid */}
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label htmlFor="email" className="block font-body text-sm font-medium text-on-surface">
                        Email Address
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="you@company.com"
                        className="mt-1.5 block w-full rounded-xl border border-outline-variant bg-surface-container-lowest px-4 py-3 font-body text-sm text-on-surface placeholder:text-on-surface-variant/50 transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block font-body text-sm font-medium text-on-surface">
                        Phone Number
                      </label>
                      <div className="mt-1.5 flex gap-2">
                        <select
                          name="countryCode"
                          value={form.countryCode}
                          onChange={handleChange}
                          className="shrink-0 rounded-xl border border-outline-variant bg-surface-container-lowest px-3 py-3 font-body text-sm text-on-surface focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                        >
                          {countryCodes.map((c) => (
                            <option key={c.code} value={c.code}>
                              {c.label}
                            </option>
                          ))}
                        </select>
                        <input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={form.phone}
                          onChange={handleChange}
                          placeholder="98765 43210"
                          className="block w-full rounded-xl border border-outline-variant bg-surface-container-lowest px-4 py-3 font-body text-sm text-on-surface placeholder:text-on-surface-variant/50 transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Organization */}
                  <div>
                    <label htmlFor="organization" className="block font-body text-sm font-medium text-on-surface">
                      Organization / Trust / Company <span className="text-on-surface-variant/60">(optional)</span>
                    </label>
                    <input
                      id="organization"
                      name="organization"
                      type="text"
                      value={form.organization}
                      onChange={handleChange}
                      placeholder="e.g. Tata Trusts, IIT Kharagpur, etc."
                      className="mt-1.5 block w-full rounded-xl border border-outline-variant bg-surface-container-lowest px-4 py-3 font-body text-sm text-on-surface placeholder:text-on-surface-variant/50 transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                    />
                  </div>

                  {/* Purpose */}
                  <div>
                    <label htmlFor="purpose" className="block font-body text-sm font-medium text-on-surface">
                      Inquiry Purpose
                    </label>
                    <select
                      id="purpose"
                      name="purpose"
                      value={form.purpose}
                      onChange={handleChange}
                      className="mt-1.5 block w-full rounded-xl border border-outline-variant bg-surface-container-lowest px-4 py-3 font-body text-sm text-on-surface transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                    >
                      {inquiryPurposes.map((p) => (
                        <option key={p.value} value={p.value}>
                          {p.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Subject */}
                  <div>
                    <label htmlFor="subject" className="block font-body text-sm font-medium text-on-surface">
                      Subject <span className="text-error">*</span>
                    </label>
                    <input
                      id="subject"
                      name="subject"
                      type="text"
                      required
                      value={form.subject}
                      onChange={handleChange}
                      placeholder="Brief subject of your inquiry"
                      className="mt-1.5 block w-full rounded-xl border border-outline-variant bg-surface-container-lowest px-4 py-3 font-body text-sm text-on-surface placeholder:text-on-surface-variant/50 transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block font-body text-sm font-medium text-on-surface">
                      Detailed Message <span className="text-error">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Describe your inquiry, proposal, or request in detail…"
                      className="mt-1.5 block w-full resize-y rounded-xl border border-outline-variant bg-surface-container-lowest px-4 py-3 font-body text-sm text-on-surface placeholder:text-on-surface-variant/50 transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                    />
                  </div>

                  {/* Newsletter */}
                  <label className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      name="newsletter"
                      checked={form.newsletter}
                      onChange={handleChange}
                      className="mt-0.5 h-4 w-4 rounded border-outline-variant text-primary focus:ring-primary/20"
                    />
                    <span className="font-body text-sm text-on-surface-variant">
                      Subscribe to the Trust newsletter for quarterly project updates,
                      event invitations, and seva opportunities.
                    </span>
                  </label>

                  {/* Submit */}
                  <button
                    type="submit"
                    className="w-full rounded-full bg-primary px-6 py-3.5 font-body text-sm font-semibold text-surface transition-colors hover:bg-primary-container sm:w-auto"
                  >
                    Submit Inquiry to Trust Directorate
                  </button>
                </form>
              )}
            </div>

            {/* ─── RIGHT: INFO CARDS ─── */}
            <div className="lg:col-span-5 space-y-6">
              <div className="group relative overflow-hidden rounded-2xl border border-outline-variant">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={CORRIDOR_IMAGE}
                  alt="Aerial view of the temple campus corridor in rural West Bengal under soft morning mist"
                  className="h-48 w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent" />
                <p className="absolute bottom-3 left-4 right-4 font-heading text-sm italic text-surface">
                  The future pilgrim corridor — connecting devotion to community.
                </p>
              </div>
              {infoCards.map((card) => (
                <div
                  key={card.title}
                  className="rounded-2xl border border-outline-variant bg-surface-container-low p-6"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <Icon name={card.icon} className="h-6 w-6" />
                    <h3 className="font-heading text-lg font-bold text-on-surface">
                      {card.title}
                    </h3>
                  </div>
                  <div className="space-y-1">
                    {card.lines.map((line, i) => {
                      if (line === "") return <div key={i} className="h-2" />;
                      const phoneMatch = line.match(/\+91[ 0-9]+$/);
                      if (phoneMatch) {
                        return (
                          <a
                            key={i}
                            href={`tel:${line.replace(/\s+/g, "")}`}
                            className="block font-body text-sm font-semibold leading-relaxed text-primary transition-colors hover:text-primary-container"
                          >
                            {line}
                          </a>
                        );
                      }
                      return (
                        <p key={i} className="font-body text-sm leading-relaxed text-on-surface-variant">
                          {line}
                        </p>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ VOLUNTEER & FELLOWSHIP TRACKS ═══════════════ */}
      <section className="bg-primary-container">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
          <div className="text-center mb-14">
            <span className="inline-block rounded-full border border-secondary-fixed/20 bg-secondary-fixed/10 px-4 py-1.5 font-body text-xs font-semibold uppercase tracking-widest text-secondary-fixed">
              Volunteer Seva
            </span>
            <h2 className="mt-5 font-heading text-3xl font-bold tracking-tight text-surface sm:text-4xl lg:text-5xl">
              Fellowship &amp; Seva Tracks
            </h2>
            <div className="mt-4 mx-auto w-16 h-[2px] bg-secondary/60" />
            <p className="mt-4 mx-auto max-w-2xl font-body text-base leading-relaxed text-surface-dim">
              Offer your skills in service of the divine. Each track is designed for
              meaningful engagement — short-term or long-term.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {volunteerTracks.map((track) => (
              <div
                key={track.title}
                className="flex flex-col rounded-2xl border border-secondary/20 bg-primary/50 p-6"
              >
                <Icon name={track.icon} className="mb-3 h-9 w-9" />
                <h3 className="font-heading text-lg font-bold text-surface">
                  {track.title}
                </h3>
                <p className="mt-3 flex-1 font-body text-sm leading-relaxed text-surface-dim">
                  {track.desc}
                </p>
                <button
                  type="button"
                  className="mt-6 inline-flex items-center justify-center gap-2 rounded-full border border-secondary-fixed/30 bg-secondary-fixed/10 px-5 py-2.5 font-body text-sm font-semibold text-secondary-fixed transition-colors hover:bg-secondary-fixed/20"
                >
                  {track.btn}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════ FAQ ════════════════════════ */}
      <section className="bg-surface">
        <div className="mx-auto max-w-3xl px-6 py-16 lg:px-8 lg:py-24">
          <div className="text-center mb-12">
            <span className="inline-block rounded-full border border-outline-variant bg-surface-container px-4 py-1.5 font-body text-xs font-semibold uppercase tracking-widest text-on-surface-variant">
              Common Questions
            </span>
            <h2 className="mt-5 font-heading text-3xl font-bold tracking-tight text-on-surface sm:text-4xl">
              Frequently Asked Questions
            </h2>
            <div className="mt-4 mx-auto w-16 h-[2px] bg-secondary" />
          </div>

          <div className="space-y-3">
            {faqs.map((faq, i) => {
              const isOpen = openFaq === i;
              return (
                <div
                  key={i}
                  className={`rounded-2xl border transition-colors ${
                    isOpen
                      ? "border-primary/30 bg-surface-container-low"
                      : "border-outline-variant bg-surface-container-lowest"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  >
                    <span className="font-body text-sm font-semibold text-on-surface">
                      {faq.q}
                    </span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className={`h-5 w-5 shrink-0 text-on-surface-variant transition-transform duration-200 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-5">
                      <p className="font-body text-sm leading-relaxed text-on-surface-variant">
                        {faq.a}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ════════════════════ REASSURANCE BAR ════════════════════ */}
      <section className="bg-surface-container-low border-t border-outline-variant">
        <div className="mx-auto max-w-7xl px-6 py-10 lg:px-8">
          <div className="flex flex-col items-center gap-6 text-center md:flex-row md:text-left">
            <div className="flex-1">
              <h3 className="font-heading text-xl font-bold text-on-surface">
                Trusteeship &amp; Transparency
              </h3>
              <p className="mt-2 max-w-xl font-body text-sm leading-relaxed text-on-surface-variant">
                Every rupee is accounted for. Our accounts are independently audited
                annually by a registered chartered accountancy firm and filed with
                the Charity Commissioner. Full financial statements are available
                for public inspection at the Trust Secretariat.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href="#contact-form"
                className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 font-body text-sm font-semibold text-surface transition-colors hover:bg-primary-container"
              >
                Inquire Now
              </Link>
              <button
                type="button"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-primary/30 px-6 py-3 font-body text-sm font-semibold text-primary transition-colors hover:bg-primary-container hover:text-surface"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4">
                  <path d="M10.75 2.75a.75.75 0 0 0-1.5 0v8.614L6.295 8.235a.75.75 0 1 0-1.09 1.03l4.25 4.5a.75.75 0 0 0 1.09 0l4.25-4.5a.75.75 0 0 0-1.09-1.03l-2.955 3.129V2.75Z" />
                  <path d="M3.5 12.75a.75.75 0 0 0-1.5 0v2.5A2.75 2.75 0 0 0 4.75 18h10.5A2.75 2.75 0 0 0 18 15.25v-2.5a.75.75 0 0 0-1.5 0v2.5c0 .69-.56 1.25-1.25 1.25H4.75c-.69 0-1.25-.56-1.25-1.25v-2.5Z" />
                </svg>
                Download Annual Report
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
