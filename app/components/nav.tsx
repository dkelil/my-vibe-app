import Link from "next/link";
import { Zap } from "lucide-react";

export function Navigation() {
  return (
    <header className="fixed top-0 w-full z-50 border-b border-zinc-800/50 bg-zinc-950/80 backdrop-blur-xl">
      <div className="max-w-screen-2xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-x-2 hover:opacity-80 transition">
          <div className="w-8 h-8 bg-gradient-to-br from-violet-500 to-cyan-500 rounded-2xl flex items-center justify-center text-white font-bold text-xl">V</div>
          <span className="font-bold tracking-tighter text-xl bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">VibeTeardown</span>
        </Link>
        <nav className="hidden md:flex items-center gap-x-8 text-sm font-medium">
          <Link href="/how-it-works" className="hover:text-violet-400 transition">How it works</Link>
          <Link href="/examples" className="hover:text-violet-400 transition">Examples</Link>
          <Link href="/pricing" className="hover:text-violet-400 transition">Pricing</Link>
        </nav>
        <Link href="/pricing" className="text-sm font-semibold px-6 py-2.5 rounded-lg bg-gradient-to-r from-violet-600 to-cyan-600 hover:from-violet-500 hover:to-cyan-500 transition-all hover:shadow-lg hover:shadow-violet-500/25">Get demo</Link>
      </div>
    </header>
  );
}
