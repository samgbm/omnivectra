// Filepath: /app/dashboard/page.tsx
// Increment Goal/Purpose: Scaffold the User Hub where users manage their AI sessions and settings.

import Link from "next/link";

export default function DashboardPage() {
    return (
        <main className="flex-1 p-8 max-w-6xl mx-auto w-full">
            <header className="flex justify-between items-center mb-8 pb-4 border-b border-old-rose-200">
                <h1 className="text-3xl font-bold text-old-rose-900">Dashboard</h1>
                <Link href="/chat/new" className="px-5 py-2 bg-muted-teal-600 text-white rounded-lg hover:bg-muted-teal-700 transition-colors font-medium text-sm shadow-sm">
                    + New Chat
                </Link>
            </header>

            <section className="space-y-4">
                <h2 className="text-xl font-semibold text-old-rose-800">Recent Sessions</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {/* Mock Session Cards */}
                    {[1, 2, 3].map((item) => (
                        <Link key={item} href={`/chat/session-${item}`} className="block p-5 rounded-xl bg-white border border-old-rose-200 hover:border-muted-teal-400 hover:shadow-md transition-all group">
                            <div className="flex justify-between items-start mb-2">
                                <h3 className="font-medium text-old-rose-950 group-hover:text-muted-teal-700 transition-colors">Data Analysis Request</h3>
                                <span className="text-xs text-old-rose-400">2h ago</span>
                            </div>
                            <p className="text-sm text-old-rose-600 line-clamp-2">Extracting the Q3 financial metrics from the provided PDF report...</p>
                        </Link>
                    ))}
                </div>
            </section>
        </main>
    );
}