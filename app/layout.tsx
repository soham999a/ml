import type { Metadata } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LoadingScreen from "@/components/LoadingScreen";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ram Lala Mandir & Sebashram Sangha | Ram Lala Dham",
  description:
    "Ram Lala Mandir & Sebashram Sangha — an integrated spiritual, cultural, community and economic development initiative in West Bengal. A registered public charitable trust, 80G tax exempt.",
  keywords: [
    "Ram Lala Mandir",
    "Sebashram Sangha",
    "Ram Lala Dham",
    "temple trust",
    "West Bengal",
    "80G tax exempt",
    "spiritual development",
    "community seva",
  ],
  openGraph: {
    title: "Ram Lala Mandir & Sebashram Sangha | Ram Lala Dham",
    description:
      "An integrated spiritual, cultural, community & economic development initiative in West Bengal.",
    siteName: "Ram Lala Dham",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${plusJakarta.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-body">
        <LoadingScreen />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
