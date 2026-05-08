// Filepath: /app/layout.tsx
// Increment Goal/Purpose: Establish the root structure and apply the base OmniVectra color theme globally.

import type { Metadata } from "next";
import "./globals.css";

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