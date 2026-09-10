import Link from "next/link";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Phase-I", href: "/phase-1" },
  { label: "Vision 2047", href: "/vision-2047" },
  { label: "Donate", href: "/donate" },
  { label: "Contact", href: "/contact" },
];

const phoneNumbers = [
  "89107 51594",
  "85858 50297",
  "89104 65442",
  "85858 50296",
];

export default function Footer() {
  return (
    <footer className="bg-primary-container border-t-2 border-secondary/40">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-12">
          <div className="lg:col-span-2">
            <h2 className="font-heading text-2xl font-bold text-secondary-fixed">
              Ram Lala Mandir
            </h2>
            <p className="mt-2 max-w-sm font-body text-surface-dim">
              Dedicated to the spiritual well-being and cultural upliftment of
              our community through service, devotion, and compassion.
            </p>
            <div className="mt-4 inline-block rounded-full border border-secondary-fixed/30 bg-secondary-fixed/10 px-4 py-1.5">
              <span className="font-body text-xs font-medium text-secondary-fixed">
                Registered Public Charitable Trust &bull; 80G Tax Exempt
              </span>
            </div>
          </div>

          <div>
            <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-secondary-fixed">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-body text-sm text-surface-dim transition-colors hover:text-secondary-fixed"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-secondary-fixed">
              Contact Us
            </h3>
            <ul className="mt-4 space-y-3">
              <li>
                <span className="font-body text-xs font-medium text-secondary-fixed">
                  Phone
                </span>
                <div className="mt-1 flex flex-wrap gap-x-4 gap-y-1">
                  {phoneNumbers.map((num) => (
                    <a
                      key={num}
                      href={`tel:${num.replace(/\s/g, "")}`}
                      className="font-body text-sm text-surface-dim transition-colors hover:text-secondary-fixed"
                    >
                      {num}
                    </a>
                  ))}
                </div>
              </li>
              <li>
                <span className="font-body text-xs font-medium text-secondary-fixed">
                  Email
                </span>
                <a
                  href="mailto:ramlalamandirsebashramsangha@gmail.com"
                  className="mt-1 block font-body text-sm text-surface-dim break-all transition-colors hover:text-secondary-fixed"
                >
                  ramlalamandirsebashramsangha@gmail.com
                </a>
              </li>
              <li>
                <span className="font-body text-xs font-medium text-secondary-fixed">
                  Address
                </span>
                <p className="mt-1 font-body text-sm leading-relaxed text-surface-dim">
                  Vill- Joydebpur, Kapat Hat, Post Office- Diamond Harbour,
                  Police Station- Diamond Harbour, Dist- South 24 Parganas,
                  West Bengal
                </p>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-secondary/20 pt-6">
          <p className="text-center font-body text-xs text-surface-dim">
            &copy; 2026 Ram Lala Mandir &amp; Sebashram Sangha. All Rights
            Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
