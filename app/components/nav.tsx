import Link from "next/link";

export function Navigation() {
  return (
    <header className="fixed top-0 w-full z-50 border-b border-zinc-800 bg-black/95">
      <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition">
          <div className="w-8 h-8 border border-white rounded flex items-center justify-center text-white font-bold">V</div>
          <span className="font-semibold text-lg text-white">VibeTeardown</span>
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          <Link href="/how-it-works" className="text-zinc-300 hover:text-cyan-400 transition">How it works</Link>
          <Link href="/examples" className="text-zinc-300 hover:text-cyan-400 transition">Examples</Link>
          <Link href="/pricing" className="text-zinc-300 hover:text-cyan-400 transition">Pricing</Link>
        </nav>
        <Link href="/pricing" className="text-sm font-semibold px-6 py-2 rounded bg-cyan-600 text-black hover:bg-cyan-700 transition-colors">Get started</Link>
      </div>
    </header>
  );
}
