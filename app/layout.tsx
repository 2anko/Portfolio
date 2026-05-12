import type { Metadata } from "next";
import { Fraunces, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/SmoothScroll";
import { Cursor } from "@/components/Cursor";

const display = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Cheng-Yi Sun — Portfolio",
  description:
    "CS & Statistics student at UofT Mississauga. I build production software end-to-end — ML pipelines, full-stack systems, and everything in between.",
  openGraph: {
    title: "Cheng-Yi Sun — Portfolio",
    description:
      "CS & Statistics student at UofT Mississauga. I build production software end-to-end — ML pipelines, full-stack systems, and everything in between.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable} ${mono.variable}`}>
      <body className="font-sans grain selection:bg-accent selection:text-paper">
        <SmoothScroll />
        <Cursor />
        {children}
      </body>
    </html>
  );
}
