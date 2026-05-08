// Filepath: /app/chat/[id]/page.tsx
// Increment Goal/Purpose: Scaffold the dynamic route that will host the AI chat interface for specific sessions.

import Link from "next/link";

// In Next.js 15+, page props like params and searchParams return Promises.
export default async function ChatSessionPage({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    // Await the params to safely access the dynamic route segment
    const { id } = await params;

    return (
        <div className="flex flex-col h-screen bg-almond-cream-50">

            {/* Top Navbar */}
            <header className="flex items-center justify-between p-4 bg-white border-b border-old-rose-200 shrink-0">
                <div className="flex items-center space-x-4">
                    <Link href="/dashboard" className="text-old-rose-500 hover:text-old-rose-800 transition-colors text-sm font-medium">
                        ← Dashboard
                    </Link>
                    <span className="px-2 py-1 bg-soft-periwinkle-100 text-soft-periwinkle-800 text-xs rounded-md font-mono">
                        Session: {id}
                    </span>
                </div>
                <div className="text-sm font-medium text-muted-teal-700 bg-muted-teal-50 px-3 py-1.5 rounded-lg border border-muted-teal-200">
                    Model: Placeholder
                </div>
            </header>

            {/* Chat Area (Placeholder) */}
            <main className="flex-1 overflow-y-auto p-4 space-y-4 max-w-4xl mx-auto w-full">
                {/* System Message */}
                <div className="flex justify-start">
                    <div className="max-w-[80%] rounded-2xl rounded-tl-sm p-4 bg-white border border-old-rose-200 text-old-rose-900 shadow-sm">
                        <p>Hello! I am OmniVectra. I'm currently running in an empty shell, but soon I'll be powered by Anthropic, OpenAI, or Gemini. How can I help you today?</p>
                    </div>
                </div>

                {/* User Message */}
                <div className="flex justify-end">
                    <div className="max-w-[80%] rounded-2xl rounded-tr-sm p-4 bg-muted-teal-600 text-white shadow-sm">
                        <p>I'm just testing out the new UI routes right now!</p>
                    </div>
                </div>
            </main>

            {/* Input Area (Placeholder) */}
            <footer className="p-4 bg-white border-t border-old-rose-200 shrink-0">
                <div className="max-w-4xl mx-auto flex gap-2">
                    <input
                        type="text"
                        placeholder="Type your message..."
                        disabled
                        className="flex-1 p-3 rounded-xl border border-old-rose-300 bg-almond-cream-50 text-old-rose-950 focus:outline-none focus:ring-2 focus:ring-muted-teal-500 opacity-70 cursor-not-allowed"
                    />
                    <button
                        disabled
                        className="px-6 py-3 bg-old-rose-600 text-white rounded-xl font-medium opacity-70 cursor-not-allowed"
                    >
                        Send
                    </button>
                </div>
            </footer>

        </div>
    );
}