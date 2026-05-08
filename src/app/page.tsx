import Image from "next/image";

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

      {/* Color Palette Test Swatches */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-4xl pt-12">
        <div className="p-6 rounded-2xl bg-old-rose-500 text-white shadow-sm border border-old-rose-600">
          <h3 className="font-semibold">Old Rose</h3>
          <p className="text-sm opacity-80">Primary Accent</p>
        </div>
        <div className="p-6 rounded-2xl bg-muted-teal-500 text-white shadow-sm border border-muted-teal-600">
          <h3 className="font-semibold">Muted Teal</h3>
          <p className="text-sm opacity-80">Secondary Accent</p>
        </div>
        <div className="p-6 rounded-2xl bg-soft-apricot-400 text-old-rose-950 shadow-sm border border-soft-apricot-500">
          <h3 className="font-semibold">Soft Apricot</h3>
          <p className="text-sm opacity-80">Warning / Notice</p>
        </div>
        <div className="p-6 rounded-2xl bg-soft-periwinkle-500 text-white shadow-sm border border-soft-periwinkle-600">
          <h3 className="font-semibold">Soft Periwinkle</h3>
          <p className="text-sm opacity-80">AI / Tech Elements</p>
        </div>
      </div>

      {/* Call to Action (Placeholder for Next Increment) */}
      <div className="pt-8">
        <button className="px-8 py-3 rounded-full bg-old-rose-600 text-white font-semibold hover:bg-old-rose-700 transition-colors shadow-md">
          Start for Free
        </button>
      </div>

    </main>
  );
}