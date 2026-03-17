import type { Metadata } from "next";
import { DM_Serif_Display, JetBrains_Mono, Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import IntroLoading from "@/components/IntroLoading";
import { Analytics } from "@vercel/analytics/next";

const dmSerifDisplay = DM_Serif_Display({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-dm-serif",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Jerry Liu — Mechatronics Engineer",
  description: "Personal portfolio of Jerry Liu, Mechatronics Engineering student at the University of Waterloo.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${dmSerifDisplay.variable} ${jetbrainsMono.variable} ${inter.variable} font-sans bg-background text-textPrimary antialiased`}
      >
        <div className="noise-bg" />
        <IntroLoading />
        <Navigation />
        <main className="relative z-10 w-full flex flex-col items-center">
          {children}
        </main>
        <Analytics />
      </body>
    </html>
  );
}
