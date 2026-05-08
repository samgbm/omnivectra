import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "OmniVectra | AI Agentic Copilot",
  description: "An intelligent, context-aware workflow copilot.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* Applying Almond Cream 50 for the universal background and Old Rose 950 for high-contrast primary text.
        antialiased ensures smooth font rendering.
      */}
      <body className="bg-almond-cream-50 text-old-rose-950 antialiased min-h-screen flex flex-col">
        {children}
      </body>
    </html>
  );
}
