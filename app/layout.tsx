import "./globals.css";
import type { Metadata } from "next";
import { Fraunces, DM_Sans, JetBrains_Mono } from "next/font/google";
import { Toaster } from "react-hot-toast";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import Ticker from "@/components/ticker";
import Header from "@/components/header";
import Footer from "@/components/footer";

const serif = Fraunces({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-serif-face",
  display: "swap",
});
const sans = DM_Sans({ subsets: ["latin"], variable: "--font-sans-face", display: "swap" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono-face", display: "swap" });

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.paradoxequity.com";

// Dark is the default. Only an explicit saved "light" choice switches the palette, before first paint.
const themeInit = `try{if(localStorage.getItem("theme")==="light")document.documentElement.classList.add("light")}catch(e){}`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Emmanuel Wopara | Full-stack developer",
  description:
    "Emmanuel Wopara is a full-stack developer in Texas. Modern web, legacy mainframe, and a long-running interest in financial markets.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInit }} />
      </head>
      <body className={`${serif.variable} ${sans.variable} ${mono.variable}`}>
        <Ticker />
        <Header />
        {children}
        <Footer />
        <Toaster position="top-right" />
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
