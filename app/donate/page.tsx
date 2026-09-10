"use client";

import { useState } from "react";
import Link from "next/link";

const EMBLEM_IMAGE = "/logo.jpeg";

const SEVA_PURPOSES = [
  {
    id: "annakshetra",
    icon: "🍛",
    title: "Nitya Annakshetra",
    subtitle: "Bhandara Seva",
    description:
      "Serve sanctified prasad daily to thousands of devotees visiting the temple. Every meal is a divine offering.",
    price: "₹1,100",
  },
  {
    id: "sanctum-stone",
    icon: "🪨",
    title: "Ram Lala Sanctum Stone Carving",
    subtitle: "",
    description:
      "Contribute to the intricate stone carving of the sacred sanctum sanctorum, crafted by master artisans.",
    price: "₹5,100",
  },
  {
    id: "sebashram",
    icon: "🏥",
    title: "Sebashram 100-Bed Hospital",
    subtitle: "",
    description:
      "Build a charitable hospital to provide free healthcare to the rural poor and elderly pilgrims.",
    price: "₹2,500",
  },
  {
    id: "vedic-gurukul",
    icon: "📚",
    title: "Vedic Gurukul & Chatuspathi Seva",
    subtitle: "",
    description:
      "Nurture young Vedic scholars with traditional education, scripture study, and sacred rituals.",
    price: "₹5,100",
  },
  {
    id: "hanuman-mandir",
    icon: "🪔",
    title: "Shri Hanuman Mandir & Akhand Deep",
    subtitle: "",
    description:
      "Sponsor the eternal flame and divine Hanuman temple that guards the sanctity of the dham.",
    price: "₹1,100",
  },
  {
    id: "vision-2047",
    icon: "🏛️",
    title: "Vision 2047 Masterplan Corpus Fund",
    subtitle: "",
    description:
      "Invest in the long-term vision to transform the dham into a world-class spiritual and cultural centre.",
    price: "₹11,000",
  },
];

const CURRENCIES = [
  { code: "INR", symbol: "₹", label: "Indian Rupee" },
  { code: "USD", symbol: "$", label: "US Dollar" },
  { code: "EUR", symbol: "€", label: "Euro" },
  { code: "GBP", symbol: "£", label: "British Pound" },
];

const PRESET_AMOUNTS: Record<string, { amount: string; label?: string; popular?: boolean }[]> = {
  INR: [
    { amount: "1100", label: "₹1,100" },
    { amount: "2500", label: "₹2,500" },
    { amount: "5100", label: "₹5,100", popular: true },
    { amount: "11000", label: "₹11,000" },
    { amount: "25000", label: "₹25,000" },
    { amount: "51000", label: "₹51,000" },
  ],
  USD: [
    { amount: "15", label: "$15" },
    { amount: "30", label: "$30" },
    { amount: "60", label: "$60", popular: true },
    { amount: "130", label: "$130" },
    { amount: "300", label: "$300" },
    { amount: "600", label: "$600" },
  ],
  EUR: [
    { amount: "14", label: "€14" },
    { amount: "28", label: "€28" },
    { amount: "55", label: "€55", popular: true },
    { amount: "120", label: "€120" },
    { amount: "275", label: "€275" },
    { amount: "550", label: "€550" },
  ],
  GBP: [
    { amount: "12", label: "£12" },
    { amount: "24", label: "£24" },
    { amount: "48", label: "£48", popular: true },
    { amount: "108", label: "£108" },
    { amount: "240", label: "£240" },
    { amount: "480", label: "£480" },
  ],
};

const STATES = [
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chhattisgarh",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Odisha",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Telangana",
  "Tripura",
  "Uttar Pradesh",
  "Uttarakhand",
  "West Bengal",
  "Delhi",
  "Jammu & Kashmir",
  "Ladakh",
  "Chandigarh",
  "Puducherry",
  "Andaman & Nicobar Islands",
  "Dadra & Nagar Haveli",
  "Lakshadweep",
];

const FAQS = [
  {
    question: "Will I receive an immediate 80G tax receipt?",
    answer:
      "Yes. Upon successful contribution, an auto-generated Section 80G tax-deductible receipt is sent to your registered email within minutes. For donations above ₹2,000, PAN details are mandatory as per Income Tax regulations.",
  },
  {
    question: "Can NRI and foreign citizens contribute?",
    answer:
      "Absolutely. We accept contributions in USD, EUR, and GBP via international payment gateways. NRI donors can also contribute via FCRA-compliant channels. Foreign contributions comply with the Foreign Contribution (Regulation) Act, 2010.",
  },
  {
    question: "How do I submit Gotra and Sankalp?",
    answer:
      'During checkout, you may expand the "Sacred Dedication" section to enter your Gotra, Sankalp (intention), and the name of the person in whose honour the seva is being performed. This information is used in the daily pujas and rituals at the temple.',
  },
  {
    question: "Can corporate bodies deploy CSR funds?",
    answer:
      "Yes. Ram Lala Sangha is eligible to receive CSR contributions under Section 135 of the Companies Act, 2013. Corporate partners may contact our dedicated CSR desk at csr@ramlalasangha.org for allocation, impact reports, and compliance documentation.",
  },
];

function ChevronDown({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5 7.5L10 12.5L15 7.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CheckCircle() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9 1.5C4.86 1.5 1.5 4.86 1.5 9C1.5 13.14 4.86 16.5 9 16.5C13.14 16.5 16.5 13.14 16.5 9C16.5 4.86 13.14 1.5 9 1.5ZM7.5 12.75L4.5 9.75L5.55 8.7L7.5 10.65L12.45 5.7L13.5 6.75L7.5 12.75Z"
        fill="currentColor"
      />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17.5 14.02V16.52C17.5011 16.7404 17.4441 16.9573 17.3345 17.1482C17.2249 17.3392 17.067 17.4966 16.878 17.6036C16.6891 17.7106 16.4764 17.7629 16.262 17.7551C16.0476 17.7473 15.8393 17.6798 15.66 17.56L12.06 15.16C11.8428 15.0139 11.5928 14.9232 11.33 14.8967C11.0672 14.8701 10.8001 14.9085 10.555 15.0083L8.125 16.0083C7.90527 16.0948 7.66671 16.1295 7.43167 16.1097C7.19664 16.0898 6.97316 16.0162 6.775 15.895C6.57995 15.7756 6.42485 15.6047 6.32935 15.4029C6.23385 15.2011 6.20224 14.9771 6.23833 14.7583L6.90833 10.8283C6.94055 10.6445 6.93004 10.4556 6.87772 10.2764C6.8254 10.0972 6.73269 9.93313 6.60667 9.79833L4.55667 7.64833C4.41127 7.49145 4.30918 7.29708 4.26215 7.08774C4.21512 6.8784 4.22494 6.66194 4.29067 6.45833L5.18067 3.74833C5.24621 3.55184 5.36113 3.37834 5.51198 3.24851C5.66284 3.11869 5.84342 3.03822 6.035 3.01667L9.145 2.68667C9.36399 2.66171 9.58682 2.69257 9.78817 2.77593C9.98953 2.8593 10.1611 2.99184 10.2825 3.15833L12.0325 5.49833C12.1788 5.69495 12.2763 5.92727 12.3143 6.17196C12.3524 6.41664 12.3299 6.66504 12.2492 6.89417L11.2092 9.88417C11.1296 10.1169 11.1121 10.3701 11.1588 10.6124C11.2056 10.8547 11.3145 11.0761 11.4725 11.25L14.0225 14.02"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17.5 5C17.5 3.89543 16.6046 3 15.5 3H4.5C3.39543 3 2.5 3.89543 2.5 5V15C2.5 16.1046 3.39543 17 4.5 17H15.5C16.6046 17 17.5 16.1046 17.5 15V5Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17.5 5L10 10.5L2.5 5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17.5 10C17.5 14.14 14.14 17.5 10 17.5C8.82 17.5 7.72 17.23 6.75 16.75L3.75 17.5L4.5 14.75C3.87 13.78 3.5 12.64 3.5 11.43C3.5 7.29 6.86 3.93 11 3.93C15.14 3.93 18.5 7.29 18.5 11.43V12.43C18.5 12.93 18.14 13.39 17.67 13.57C17.23 13.73 16.77 13.84 16.29 13.89L15.64 13.96C15.22 14.01 14.8 13.98 14.4 13.88L14.03 13.78C13.5 13.65 13 13.39 12.57 13.03L12.43 12.91C11.98 12.52 11.62 12.04 11.38 11.5L11.21 11.15C11 10.73 10.88 10.27 10.86 9.8L10.82 9.07C10.79 8.52 10.92 7.98 11.2 7.51C11.5 7.01 11.95 6.63 12.48 6.42C12.8 6.3 13.15 6.26 13.49 6.31C13.82 6.36 14.13 6.5 14.37 6.71L14.57 6.89C14.84 7.13 15.02 7.45 15.09 7.8C15.16 8.15 15.11 8.51 14.95 8.83L14.57 9.57C14.44 9.83 14.25 10.05 14.01 10.21C13.77 10.37 13.5 10.46 13.22 10.46C12.94 10.46 12.67 10.37 12.43 10.21L11.72 9.72C11.44 9.53 11.11 9.43 10.78 9.43C10.45 9.43 10.12 9.53 9.84 9.72L9.2 10.16C8.85 10.4 8.43 10.52 8 10.49C7.58 10.46 7.18 10.3 6.86 10.03C6.54 9.76 6.31 9.4 6.2 9C6.08 8.59 6.1 8.15 6.25 7.75L6.68 6.63C6.85 6.19 7.12 5.8 7.47 5.49C7.82 5.18 8.24 4.96 8.69 4.85C9.14 4.74 9.61 4.74 10.06 4.85L10.97 5.07"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function DonatePage() {
  const [selectedSeva, setSelectedSeva] = useState("annakshetra");
  const [selectedAmount, setSelectedAmount] = useState("5100");
  const [customAmount, setCustomAmount] = useState("");
  const [frequency, setFrequency] = useState<"one-time" | "monthly">("one-time");
  const [currency, setCurrency] = useState("INR");
  const [showDedication, setShowDedication] = useState(false);
  const [anonymous, setAnonymous] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    pan: "",
    pin: "",
    state: "",
    gotra: "",
    sankalp: "",
  });

  const updateForm = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSelectAmount = (amount: string) => {
    setSelectedAmount(amount);
    setCustomAmount("");
  };

  const handleCustomAmountChange = (value: string) => {
    const numeric = value.replace(/[^0-9]/g, "");
    setCustomAmount(numeric);
    setSelectedAmount("");
  };

  const handleSubmit = () => {
    setSubmitted(true);
  };

  const currentSymbol = CURRENCIES.find((c) => c.code === currency)?.symbol ?? "₹";
  const presets = PRESET_AMOUNTS[currency] ?? PRESET_AMOUNTS.INR;

  return (
    <main className="min-h-screen bg-surface text-on-surface">
      {/* ──────────────────────── SUB HERO ──────────────────────── */}
      <section className="bg-primary-container relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="mb-6 text-sm text-on-surface-variant">
            <Link href="/" className="hover:underline">
              Home
            </Link>
            <span className="mx-2">/</span>
            <span className="font-medium text-on-surface">
              Seva &amp; Philanthropic Offerings
            </span>
          </nav>

          {/* Sanskrit Invocation */}
          <p className="mb-4 font-serif text-lg italic text-primary/80">
            ॥ दानेन प्राप्यते सर्वं धर्मार्थकाममोक्षदाः ॥
          </p>

          {/* Headline */}
          <h1 className="mb-4 text-4xl font-bold tracking-tight text-on-surface sm:text-5xl">
            Sacred Seva &amp; Philanthropic Offerings
          </h1>

          {/* Subtitle */}
          <p className="mb-10 max-w-2xl text-lg text-on-surface-variant">
            Every rupee you contribute directly sustains sacred rituals, community
            welfare, and the grand vision of Shri Ram Lala Dham. Zero
            administrative leakage — 100 % devotional impact.
          </p>

          {/* Trust Highlights */}
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {[
              { icon: "📋", label: "Section 80G\nDeductible" },
              { icon: "⚡", label: "Instant\nReceipt" },
              { icon: "🔒", label: "Zero\nLeakage" },
              { icon: "📊", label: "Statutory\nAudits" },
            ].map((item) => (
              <div
                key={item.label}
                className="flex flex-col items-center gap-2 rounded-2xl border border-outline-variant/30 bg-surface/60 px-4 py-5 text-center backdrop-blur"
              >
                <span className="text-2xl">{item.icon}</span>
                <span className="whitespace-pre-line text-sm font-semibold text-on-surface">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ────────────────── STEP 1 — SELECT SEVA ────────────────── */}
      <section className="bg-surface py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-2 text-xs font-bold uppercase tracking-widest text-primary">
            Step 1
          </div>
          <h2 className="mb-8 text-3xl font-bold text-on-surface">
            Select Your Seva Purpose
          </h2>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SEVA_PURPOSES.map((seva) => {
              const isActive = selectedSeva === seva.id;
              return (
                <button
                  key={seva.id}
                  onClick={() => setSelectedSeva(seva.id)}
                  className={`group relative flex flex-col items-start gap-3 rounded-2xl border-2 p-6 text-left transition-all ${
                    isActive
                      ? "border-primary bg-primary-container/40 shadow-lg"
                      : "border-outline-variant/40 bg-surface-container-low hover:border-primary/40 hover:shadow-md"
                  }`}
                >
                  {isActive && (
                    <span className="absolute top-4 right-4 rounded-full bg-primary px-3 py-0.5 text-xs font-bold text-on-primary">
                      Selected
                    </span>
                  )}

                  <span className="text-3xl">{seva.icon}</span>

                  <div>
                    <h3 className="text-lg font-bold text-on-surface">
                      {seva.title}
                    </h3>
                    {seva.subtitle && (
                      <p className="text-sm font-medium text-primary">
                        {seva.subtitle}
                      </p>
                    )}
                  </div>

                  <p className="text-sm leading-relaxed text-on-surface-variant">
                    {seva.description}
                  </p>

                  <span className="mt-auto pt-2 text-sm font-semibold text-on-surface-variant">
                    Starting at{" "}
                    <span className="text-primary">{seva.price}</span>
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* ──────────────── STEP 2 & 3 — CONTRIBUTION CONSOLE ──────────────── */}
      <section className="bg-surface-container-low py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="mb-2 text-xs font-bold uppercase tracking-widest text-primary">
            Step 2 &amp; 3
          </div>
          <h2 className="mb-8 text-3xl font-bold text-on-surface">
            Contribution Console
          </h2>

          <div className="overflow-hidden rounded-3xl border border-outline-variant/40 bg-surface shadow-xl">
            {/* Gold Crown Bar */}
            <div className="h-2 bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-400" />

            <div className="grid lg:grid-cols-12">
              {/* ──── LEFT: Amount Selection (7 cols) ──── */}
              <div className="border-b border-outline-variant/30 p-6 lg:col-span-7 lg:border-b-0 lg:border-r">
                {/* Currency Toggle */}
                <div className="mb-6">
                  <label className="mb-2 block text-xs font-bold uppercase tracking-widest text-on-surface-variant">
                    Currency
                  </label>
                  <div className="inline-flex flex-wrap rounded-xl bg-surface-container-low p-1">
                    {CURRENCIES.map((c) => (
                      <button
                        key={c.code}
                        onClick={() => {
                          setCurrency(c.code);
                          setSelectedAmount("");
                          setCustomAmount("");
                        }}
                        className={`rounded-lg px-3 py-2 text-sm font-semibold transition-all sm:px-4 ${
                          currency === c.code
                            ? "bg-primary text-on-primary shadow"
                            : "text-on-surface-variant hover:text-on-surface"
                        }`}
                      >
                        {c.code}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Frequency */}
                <div className="mb-6">
                  <label className="mb-2 block text-xs font-bold uppercase tracking-widest text-on-surface-variant">
                    Frequency
                  </label>
                  <div className="inline-flex rounded-xl bg-surface-container-low p-1">
                    <button
                      onClick={() => setFrequency("one-time")}
                      className={`rounded-lg px-5 py-2 text-sm font-semibold transition-all ${
                        frequency === "one-time"
                          ? "bg-primary text-on-primary shadow"
                          : "text-on-surface-variant hover:text-on-surface"
                      }`}
                    >
                      One-Time
                    </button>
                    <button
                      onClick={() => setFrequency("monthly")}
                      className={`rounded-lg px-5 py-2 text-sm font-semibold transition-all ${
                        frequency === "monthly"
                          ? "bg-primary text-on-primary shadow"
                          : "text-on-surface-variant hover:text-on-surface"
                      }`}
                    >
                      Monthly Recurring
                    </button>
                  </div>
                </div>

                {/* Preset Amounts */}
                <div className="mb-6">
                  <label className="mb-2 block text-xs font-bold uppercase tracking-widest text-on-surface-variant">
                    Select Amount
                  </label>
                  <div className="grid grid-cols-3 gap-3">
                    {presets.map((p) => {
                      const isSelected = selectedAmount === p.amount && !customAmount;
                      return (
                        <button
                          key={p.amount}
                          onClick={() => handleSelectAmount(p.amount)}
                          className={`relative rounded-xl border-2 px-4 py-3 text-center text-sm font-bold transition-all ${
                            isSelected
                              ? "border-primary bg-primary-container/50 text-primary shadow"
                              : "border-outline-variant/40 text-on-surface hover:border-primary/50"
                          }`}
                        >
                          {p.label}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Custom Amount */}
                <div className="mb-6">
                  <label className="mb-2 block text-xs font-bold uppercase tracking-widest text-on-surface-variant">
                    Or Enter Custom Amount
                  </label>
                  <div className="relative">
                    <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-lg font-bold text-on-surface-variant">
                      {currentSymbol}
                    </span>
                    <input
                      type="text"
                      inputMode="numeric"
                      placeholder="0"
                      value={customAmount}
                      onChange={(e) =>
                        handleCustomAmountChange(e.target.value)
                      }
                      className={`w-full rounded-xl border-2 bg-surface py-3 pr-4 pl-10 text-lg font-bold text-on-surface outline-none transition-all placeholder:text-on-surface-variant/40 focus:border-primary ${
                        customAmount
                          ? "border-primary"
                          : "border-outline-variant/40"
                      }`}
                    />
                  </div>
                </div>

                {/* Dedication Toggle */}
                <div>
                  <label className="flex cursor-pointer items-center gap-3">
                    <input
                      type="checkbox"
                      checked={showDedication}
                      onChange={() => setShowDedication(!showDedication)}
                      className="h-5 w-5 rounded accent-primary"
                    />
                    <span className="text-sm font-semibold text-on-surface">
                      Add Sacred Dedication (Gotra &amp; Sankalp)
                    </span>
                  </label>

                  {showDedication && (
                    <div className="mt-4 space-y-4 rounded-xl border border-outline-variant/30 bg-surface-container-low p-4">
                      <div>
                        <label className="mb-1 block text-xs font-bold uppercase tracking-widest text-on-surface-variant">
                          Gotra
                        </label>
                        <input
                          type="text"
                          value={form.gotra}
                          onChange={(e) => updateForm("gotra", e.target.value)}
                          placeholder="e.g. Bharadwaj"
                          className="w-full rounded-lg border border-outline-variant/40 bg-surface px-4 py-2.5 text-sm text-on-surface outline-none focus:border-primary"
                        />
                      </div>
                      <div>
                        <label className="mb-1 block text-xs font-bold uppercase tracking-widest text-on-surface-variant">
                          Sankalp (Intention)
                        </label>
                        <input
                          type="text"
                          value={form.sankalp}
                          onChange={(e) => updateForm("sankalp", e.target.value)}
                          placeholder="e.g. For the health of my family"
                          className="w-full rounded-lg border border-outline-variant/40 bg-surface px-4 py-2.5 text-sm text-on-surface outline-none focus:border-primary"
                        />
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* ──── RIGHT: Donor Details (5 cols) ──── */}
              <div className="p-6 lg:col-span-5">
                <h3 className="mb-5 text-lg font-bold text-on-surface">
                  Donor Details
                </h3>

                {submitted ? (
                  <div className="flex flex-col items-center justify-center gap-4 rounded-2xl bg-primary-container/30 py-12 text-center">
                    <CheckCircle />
                    <p className="text-lg font-bold text-primary">
                      Thank you — payment integration coming soon
                    </p>
                    <p className="text-sm text-on-surface-variant">
                      Your sacred intention has been recorded. We will notify you
                      once the payment gateway is live.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="mt-2 rounded-xl border border-primary px-6 py-2 text-sm font-semibold text-primary hover:bg-primary-container"
                    >
                      Make Another Offering
                    </button>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {/* Full Name */}
                    <div>
                      <label className="mb-1 block text-xs font-bold uppercase tracking-widest text-on-surface-variant">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        value={form.fullName}
                        onChange={(e) =>
                          updateForm("fullName", e.target.value)
                        }
                        placeholder="Ram Kumar Sharma"
                        className="w-full rounded-lg border border-outline-variant/40 bg-surface-container-low px-4 py-2.5 text-sm text-on-surface outline-none focus:border-primary"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label className="mb-1 block text-xs font-bold uppercase tracking-widest text-on-surface-variant">
                        Email *
                      </label>
                      <input
                        type="email"
                        value={form.email}
                        onChange={(e) => updateForm("email", e.target.value)}
                        placeholder="ram@example.com"
                        className="w-full rounded-lg border border-outline-variant/40 bg-surface-container-low px-4 py-2.5 text-sm text-on-surface outline-none focus:border-primary"
                      />
                    </div>

                    {/* Phone */}
                    <div>
                      <label className="mb-1 block text-xs font-bold uppercase tracking-widest text-on-surface-variant">
                        Phone *
                      </label>
                      <input
                        type="tel"
                        value={form.phone}
                        onChange={(e) => updateForm("phone", e.target.value)}
                        placeholder="+91 98765 43210"
                        className="w-full rounded-lg border border-outline-variant/40 bg-surface-container-low px-4 py-2.5 text-sm text-on-surface outline-none focus:border-primary"
                      />
                    </div>

                    {/* PAN */}
                    <div>
                      <label className="mb-1 block text-xs font-bold uppercase tracking-widest text-on-surface-variant">
                        PAN (for 80G receipt)
                      </label>
                      <input
                        type="text"
                        value={form.pan}
                        onChange={(e) =>
                          updateForm("pan", e.target.value.toUpperCase())
                        }
                        placeholder="ABCDE1234F"
                        maxLength={10}
                        className="w-full rounded-lg border border-outline-variant/40 bg-surface-container-low px-4 py-2.5 text-sm uppercase text-on-surface outline-none focus:border-primary"
                      />
                    </div>

                    {/* PIN + State */}
                    <div className="grid grid-cols-5 gap-3">
                      <div className="col-span-2">
                        <label className="mb-1 block text-xs font-bold uppercase tracking-widest text-on-surface-variant">
                          PIN Code
                        </label>
                        <input
                          type="text"
                          value={form.pin}
                          onChange={(e) => {
                            const v = e.target.value
                              .replace(/[^0-9]/g, "")
                              .slice(0, 6);
                            updateForm("pin", v);
                          }}
                          placeholder="700001"
                          className="w-full rounded-lg border border-outline-variant/40 bg-surface-container-low px-4 py-2.5 text-sm text-on-surface outline-none focus:border-primary"
                        />
                      </div>
                      <div className="col-span-3">
                        <label className="mb-1 block text-xs font-bold uppercase tracking-widest text-on-surface-variant">
                          State
                        </label>
                        <select
                          value={form.state}
                          onChange={(e) =>
                            updateForm("state", e.target.value)
                          }
                          className="w-full rounded-lg border border-outline-variant/40 bg-surface-container-low px-4 py-2.5 text-sm text-on-surface outline-none focus:border-primary"
                        >
                          <option value="">Select</option>
                          {STATES.map((s) => (
                            <option key={s} value={s}>
                              {s}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Anonymous */}
                    <label className="flex cursor-pointer items-center gap-3 pt-1">
                      <input
                        type="checkbox"
                        checked={anonymous}
                        onChange={() => setAnonymous(!anonymous)}
                        className="h-5 w-5 rounded accent-primary"
                      />
                      <span className="text-sm text-on-surface-variant">
                        Make this donation anonymous
                      </span>
                    </label>

                    {/* Submit */}
                    <button
                      onClick={handleSubmit}
                      className="mt-2 w-full rounded-2xl bg-gradient-to-r from-amber-500 to-yellow-500 py-4 text-lg font-bold text-white shadow-lg transition-all hover:from-amber-600 hover:to-yellow-600 hover:shadow-xl"
                    >
                      Proceed to Sacred Offering
                    </button>

                    {/* Payment Channel Preview */}
                    <div className="flex items-center justify-center gap-6 pt-2">
                      <span className="rounded-lg bg-surface-container-low px-3 py-1.5 text-xs font-semibold text-on-surface-variant">
                        UPI
                      </span>
                      <span className="rounded-lg bg-surface-container-low px-3 py-1.5 text-xs font-semibold text-on-surface-variant">
                        Cards
                      </span>
                      <span className="rounded-lg bg-surface-container-low px-3 py-1.5 text-xs font-semibold text-on-surface-variant">
                        SSL Secured
                      </span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ──────────────────── GOVERNANCE SECTION ──────────────────── */}
      <section className="temple-pattern-dark bg-primary py-16 text-on-primary">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-4 text-center text-3xl font-bold">
            Governance &amp; Transparency
          </h2>
          <p className="mx-auto mb-12 max-w-xl text-center text-on-primary/80">
            Our commitment to integrity is unwavering. Every rupee is accounted
            for and every audit is conducted independently.
          </p>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: "📋",
                title: "Section 80G &amp; 12A Certified",
                desc: "Tax-deductible contributions under the Income Tax Act. Full legal compliance with the Commissioner of Income Tax.",
              },
              {
                icon: "📊",
                title: "Statutory Independent Audits",
                desc: "Annual audits by nationally recognised firms. Financial statements published for public scrutiny every fiscal year.",
              },
              {
                icon: "🔒",
                title: "Zero Administrative Leakage",
                desc: "100 % of your seva amount reaches the designated cause. Operational costs are covered separately by founding patrons.",
              },
              {
                icon: "🏦",
                title: "Direct Bank Wire (NEFT / RTGS)",
                desc: (
                  <>
                    No middlemen. Transfer directly to our registered trust
                    account.
                    <br />
                    <span className="mt-2 block text-xs text-on-primary/70">
                      A/c Name: Ram Lala Sangha
                      <br />
                      A/c No: 40123456789
                      <br />
                      IFSC: SBIN0001234
                      <br />
                      Bank: State Bank of India, Ayodhya Branch
                    </span>
                  </>
                ),
              },
            ].map((pillar) => (
              <div
                key={pillar.title}
                className="rounded-2xl border border-on-primary/20 bg-on-primary/10 p-6 backdrop-blur"
              >
                <span className="mb-4 inline-block text-3xl">{pillar.icon}</span>
                <h3
                  className="mb-2 text-lg font-bold"
                  dangerouslySetInnerHTML={{ __html: pillar.title }}
                />
                <div className="text-sm leading-relaxed text-on-primary/80">
                  {typeof pillar.desc === "string" ? pillar.desc : pillar.desc}
                </div>
              </div>
            ))}
          </div>

          {/* Trust Banner */}
          <div className="mt-12 flex flex-col items-center gap-4 rounded-2xl border border-on-primary/20 bg-on-primary/10 py-8">
            <div className="flex h-16 w-16 items-center justify-center overflow-hidden rounded-full border border-on-primary/20 bg-primary p-1">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={EMBLEM_IMAGE}
                alt="Ram Lala Mandir Sebashram Sangha emblem"
                className="h-full w-full rounded-full object-contain"
              />
            </div>
            <p className="text-center text-lg font-bold">
              श्री राम लला संघ — Registered Charitable Trust
            </p>
            <p className="max-w-md text-center text-sm text-on-primary/70">
              Established under the Indian Trusts Act, 1882. PAN: AABTR1234C.
              Registered under Section 12A &amp; 80G of the Income Tax Act, 1961.
            </p>
          </div>
        </div>
      </section>

      {/* ──────────────────────── FAQ SECTION ──────────────────────── */}
      <section className="bg-surface py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-2 text-center text-3xl font-bold text-on-surface">
            Frequently Asked Questions
          </h2>
          <p className="mb-10 text-center text-on-surface-variant">
            Everything you need to know about contributing to Shri Ram Lala Dham
          </p>

          <div className="space-y-3">
            {FAQS.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className={`overflow-hidden rounded-2xl border transition-all ${
                    isOpen
                      ? "border-primary/40 bg-primary-container/20"
                      : "border-outline-variant/30 bg-surface-container-low hover:border-outline-variant"
                  }`}
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="flex w-full items-center justify-between gap-4 p-5 text-left"
                  >
                    <span className="text-sm font-bold text-on-surface sm:text-base">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`shrink-0 text-on-surface-variant transition-transform duration-200 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 text-sm leading-relaxed text-on-surface-variant">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ──────────────────── HELPDESK BAR ──────────────────── */}
      <section className="bg-tertiary-container py-6">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 sm:flex-row sm:px-6 lg:px-8">
          <p className="text-sm font-bold text-on-surface">
            Need assistance? Reach our Seva Helpdesk
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="tel:+917003125972"
              className="flex items-center gap-2 rounded-xl bg-surface px-4 py-2 text-sm font-semibold text-on-surface shadow-sm transition-all hover:shadow-md"
            >
              <PhoneIcon />
              +91 70031 25972
            </a>
            <a
              href="mailto:seva@ramlalasangha.org"
              className="flex items-center gap-2 rounded-xl bg-surface px-4 py-2 text-sm font-semibold text-on-surface shadow-sm transition-all hover:shadow-md"
            >
              <EmailIcon />
              seva@ramlalasangha.org
            </a>
            <a
              href="https://wa.me/917003125972"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-xl bg-green-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition-all hover:bg-green-700 hover:shadow-md"
            >
              <WhatsAppIcon />
              WhatsApp
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
