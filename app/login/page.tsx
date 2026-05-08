// Filepath: /app/login/page.tsx
// Increment Goal/Purpose: Scaffold the authentication UI where users will choose their login method.

import Link from "next/link";

export default function LoginPage() {
    return (
        <main className="flex-1 flex flex-col items-center justify-center min-h-screen bg-almond-cream-50 p-4">
            <div className="w-full max-w-md bg-white border border-old-rose-200 rounded-2xl shadow-sm p-8 space-y-6">

                <div className="text-center">
                    <h1 className="text-2xl font-bold text-old-rose-950">Welcome to OmniVectra</h1>
                    <p className="text-old-rose-700 mt-2 text-sm">Sign in to access your AI workflow copilot</p>
                </div>

                {/* Mock Auth Providers (Logic will be added in Increment 4) */}
                <div className="space-y-3">
                    <button className="w-full py-2.5 px-4 rounded-lg bg-old-rose-50 border border-old-rose-200 text-old-rose-900 font-medium hover:bg-old-rose-100 transition-colors">
                        Continue with Google
                    </button>
                    <button className="w-full py-2.5 px-4 rounded-lg bg-old-rose-50 border border-old-rose-200 text-old-rose-900 font-medium hover:bg-old-rose-100 transition-colors">
                        Continue with GitHub
                    </button>

                    <div className="relative flex items-center py-2">
                        <div className="flex-grow border-t border-old-rose-200"></div>
                        <span className="flex-shrink-0 mx-4 text-old-rose-400 text-xs uppercase font-medium">Or</span>
                        <div className="flex-grow border-t border-old-rose-200"></div>
                    </div>

                    <button className="w-full py-2.5 px-4 rounded-lg bg-old-rose-600 text-white font-medium hover:bg-old-rose-700 transition-colors shadow-sm">
                        Continue with Email
                    </button>
                    <button className="w-full py-2.5 px-4 rounded-lg bg-transparent border-2 border-dashed border-muted-teal-300 text-muted-teal-700 font-medium hover:bg-muted-teal-50 transition-colors mt-4">
                        Continue as Guest (Trial)
                    </button>
                </div>

                <div className="text-center text-xs text-old-rose-600">
                    <Link href="/" className="hover:underline">← Back to Home</Link>
                </div>

            </div>
        </main>
    );
}