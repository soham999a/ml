"use client";

import { useEffect, useState } from "react";

export default function LoadingScreen() {
  const [visible, setVisible] = useState(true);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const fadeTimer = setTimeout(() => setFading(true), 1100);
    const hideTimer = setTimeout(() => setVisible(false), 1500);
    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-primary-container transition-opacity duration-400 ${
        fading ? "opacity-0" : "opacity-100"
      }`}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/logo.jpeg"
        alt="Ram Lala Mandir Emblem"
        className="mb-6 h-24 w-24 rounded-full object-contain shadow-lg animate-pulse"
      />

      <h1 className="font-heading text-3xl md:text-5xl text-surface-bright tracking-tight text-center px-4">
        Ram Lala Mandir
      </h1>
      <p className="mt-2 font-body text-sm md:text-base text-surface-dim tracking-[0.2em] uppercase">
        Sebashram Sangha
      </p>

      <div className="mt-6 w-24 h-[2px] bg-gradient-to-r from-transparent via-secondary to-transparent" />

      <div className="mt-8 w-48 h-[3px] rounded-full bg-primary overflow-hidden">
        <div className="h-full bg-gradient-to-r from-secondary via-secondary-container to-secondary rounded-full loading-bar" />
      </div>

      <p className="mt-4 font-body text-xs text-surface-dim/60 tracking-wider">
        Ram Lala Mandir &bull; Vision 2047
      </p>
    </div>
  );
}
