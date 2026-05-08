// Filepath: /app/page.tsx
// Increment Goal/Purpose: Update the Landing page to include navigation links to the newly scaffolded routes.

import Link from "next/link";

export default function LandingPage() {
  return (
    <main className="flex-1 flex flex-col items-center justify-center p-8 text-center space-y-8">

      {/* Hero Section */}
      <div className="space-y-4 max-w-2xl">
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-old-rose-900">
          Meet <span className="text-muted-teal-600">OmniVectra</span>
        </h1>
        <p className="text-lg md:text-xl text-old-rose-800/80 font-medium">
          Your intelligent, context-aware workflow copilot. Connect your data, automate tasks, and multiply your productivity.
        </p>
      </div>

      {/* Call to Action */}
      <div className="pt-8">
        <Link href="/login" className="px-8 py-3 rounded-full bg-old-rose-600 text-white font-semibold hover:bg-old-rose-700 transition-colors shadow-md inline-block">
          Start for Free
        </Link>
      </div>

      {/* Dev Navigation (To be removed later) */}
      <div className="mt-12 p-4 border border-soft-apricot-300 bg-soft-apricot-50 rounded-xl text-sm max-w-md w-full">
        <p className="font-semibold text-soft-apricot-900 mb-2">Dev Navigation (Increment 3)</p>
        <div className="flex justify-center space-x-4">
          <Link href="/login" className="text-muted-teal-700 hover:underline">/login</Link>
          <Link href="/dashboard" className="text-muted-teal-700 hover:underline">/dashboard</Link>
          <Link href="/chat/demo-session-123" className="text-muted-teal-700 hover:underline">/chat/[id]</Link>
        </div>
      </div>

    </main>
  );
}