"use client";

import Link from "next/link";
import { useState } from "react";

const EMBLEM_IMAGE = "/logo.jpeg";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Phase-I", href: "/phase-1" },
  { label: "Vision 2047", href: "/vision-2047" },
  { label: "Donate", href: "/donate" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-secondary-container bg-surface">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          <Link href="/" className="flex min-w-0 items-center gap-2.5 leading-tight sm:gap-3" onClick={() => setOpen(false)}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={EMBLEM_IMAGE}
              alt="Ram Lala Mandir Emblem"
              className="h-10 w-10 shrink-0 rounded-full object-contain sm:h-11 sm:w-11"
            />
            <span className="flex min-w-0 flex-col">
              <span className="truncate font-heading text-lg font-bold text-primary sm:text-xl lg:text-2xl">
                Ram Lala Mandir
              </span>
              <span className="font-body text-[10px] uppercase tracking-widest text-secondary sm:text-xs">
                Sebashram Sangha
              </span>
            </span>
          </Link>

          <div className="hidden items-center gap-6 lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-body text-sm font-medium text-on-surface transition-colors hover:text-primary"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/donate"
              className="ml-2 rounded-full bg-primary px-5 py-2 font-body text-sm font-semibold text-surface transition-colors hover:bg-primary-container"
              onClick={() => setOpen(false)}
            >
              Donate
            </Link>
          </div>

          <button
            type="button"
            aria-label="Open menu"
            aria-expanded={open}
            onClick={() => setOpen(true)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-secondary-container text-primary lg:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </nav>
      </header>

      {open && (
        <div
          className="fixed inset-0 z-40 bg-black/60 lg:hidden"
          onClick={() => setOpen(false)}
          aria-hidden="true"
        />
      )}

      <div
        className={`fixed inset-y-0 right-0 z-50 flex w-72 transform flex-col bg-primary shadow-xl transition-transform duration-300 lg:hidden ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
        role="dialog"
        aria-modal="true"
      >
        <div className="flex items-center justify-between border-b border-primary-container px-5 py-4">
          <div className="flex items-center gap-3">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={EMBLEM_IMAGE}
              alt="Ram Lala Mandir Emblem"
              className="h-10 w-10 shrink-0 rounded-full object-contain"
            />
            <span className="font-heading text-lg font-bold text-secondary-fixed">
              Ram Lala Mandir
            </span>
          </div>
          <button
            type="button"
            aria-label="Close menu"
            onClick={() => setOpen(false)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-md text-surface hover:bg-primary-container"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="flex flex-1 flex-col gap-1 overflow-y-auto px-3 py-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-md px-3 py-3 font-body text-base font-medium text-surface transition-colors hover:bg-primary-container hover:text-secondary-fixed"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/donate"
            onClick={() => setOpen(false)}
            className="mt-4 rounded-full bg-secondary-container px-5 py-3 text-center font-body text-base font-semibold text-primary transition-colors hover:bg-secondary-fixed"
          >
            Donate
          </Link>
        </div>
      </div>
    </>
  );
}