import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://hjinlabs.online"),
  title: "HJIN LABS — Innovative Software R&D Studio",
  description:
    "HJIN Labs is an innovative software research and development studio. We build mobile applications including Steprize, Budget Tracker, and Domino.",
  keywords: [
    "HJIN Labs",
    "Steprize",
    "Budget Tracker",
    "Domino",
    "Mobile Apps",
    "Android",
    "Move to Earn",
  ],
  openGraph: {
    title: "HJIN LABS — Innovative Software R&D Studio",
    description:
      "We build mobile applications that make a difference. Steprize, Budget Tracker, and Domino.",
    type: "website",
    url: "https://hjinlabs.online",
    siteName: "HJIN LABS",
    images: [
      {
        url: "/images/steprize-icon.png",
        width: 1254,
        height: 1254,
        alt: "Steprize app icon",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "HJIN LABS — Innovative Software R&D Studio",
    description:
      "We build mobile applications that make a difference. Steprize, Budget Tracker, and Domino.",
    images: ["/images/steprize-icon.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body className="min-h-screen flex flex-col bg-[#F5F7FA]">
        <Navbar />
        <main className="flex-1 pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
