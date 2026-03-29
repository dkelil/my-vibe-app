"use client";

import Link from "next/link";
import { Navigation } from "@/app/components/nav";
import { Globe, Zap, BarChart3, Sparkles, ArrowRight } from "lucide-react";

export default function HowItWorks() {
  return (
    <>
      <Navigation />
      <div className="flex flexlex-col min-h-screen bg-zinc-950 text-white pt-20">
        {/* Hero */}
        <section className="max-w-screen-2xl mx-auto px-6 py-20">
          <div className="max-w-3xl">
            <h1 className="text-6xl md:text-7xl font-bold tracking-tight leading-tight mb-6">
              How it
              <span className="block bg-gradient-to-r from-violet-400 via-cyan-400 to-violet-400 bg-clip-text text-transparent">Works</span>
            </h1>
            <p className="text-2xl text-zinc-400 mb-8 max-w-2xl">
              See how AI teardowns transform your understanding of your website's performance in seconds.
            </p>
          </div>
        </section>

        {/* Steps */}
        <section className="max-w-screen-2xl mx-auto px-6 py-20">
          <div className="grid md:grid-cols-4 gap-8 mb-20">
            {/* Step 1 */}
            <div className="group">
              <div className="relative mb-8">
                <div className="w-20 h-20 bg-gradient-to-br from-violet-600/20 to-cyan-600/20 rounded-2xl flex items-center justify-center border border-violet-500/20 group-hover:border-violet-500/50 transition-all">
                  <Globe className="w-10 h-10 text-violet-400" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-violet-600 to-cyan-600 rounded-full flex items-center justify-center text-white font-bold">1</div>
              </div>
              <h3 className="text-xl font-semibold mb-3">Enter Your URL</h3>
              <p className="text-zinc-400">Simply paste your business website. Works with any public URL or domain.</p>
            </div>

            {/* Step 2 */}
            <div className="group">
              <div className="relative mb-8">
                <div className="w-20 h-20 bg-gradient-to-br from-violet-600/20 to-cyan-600/20 rounded-2xl flex items-center justify-center border border-violet-500/20 group-hover:border-violet-500/50 transition-all">
                  <Zap className="w-10 h-10 text-cyan-400" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-violet-600 to-cyan-600 rounded-full flex items-center justify-center text-white font-bold">2</div>
              </div>
              <h3 className="text-xl font-semibold mb-3">AI Analysis</h3>
              <p className="text-zinc-400">Our AI scrapes, analyzes, and benchmarks your site against conversion best practices in real-time.</p>
            </div>

            {/* Step 3 */}
            <div className="group">
              <div className="relative mb-8">
                <div className="w-20 h-20 bg-gradient-to-br from-violet-600/20 to-cyan-600/20 rounded-2xl flex items-center justify-center border border-violet-500/20 group-hover:border-violet-500/50 transition-all">
                  <BarChart3 className="w-10 h-10 text-violet-400" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-violet-600 to-cyan-600 rounded-full flex items-center justify-center text-white font-bold">3</div>
              </div>
              <h3 className="text-xl font-semibold mb-3">Get Scores</h3>
              <p className="text-zinc-400">Instant Homepage Score, Trust Score, and Booking Friction metrics with actionable insights.</p>
            </div>

            {/* Step 4 */}
            <div className="group">
              <div className="relative mb-8">
                <div className="w-20 h-20 bg-gradient-to-br from-violet-600/20 to-cyan-600/20 rounded-2xl flex items-center justify-center border border-violet-500/20 group-hover:border-violet-500/50 transition-all">
                  <Sparkles className="w-10 h-10 text-cyan-400" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-violet-600 to-cyan-600 rounded-full flex items-center justify-center text-white font-bold">4</div>
              </div>
              <h3 className="text-xl font-semibold mb-3">Upgrade</h3>
              <p className="text-zinc-400">Turn insights into revenue. Choose full redesigns, copywriting, or ongoing optimization.</p>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="max-w-screen-2xl mx-auto px-6 py-20 border-t border-zinc-800">
          <h2 className="text-4xl font-bold mb-16">Why Businesses Love VibeTeardown</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-violet-400 mb-2">⚡ Instant Results</h3>
                <p className="text-zinc-400">No 2-week report. Get actionable insights in 8 seconds flat.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-cyan-400 mb-2">💡 AI-Powered</h3>
                <p className="text-zinc-400">Our models analyze 10,000+ high-converting websites. You get best practices instantly.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-violet-400 mb-2">📈 Revenue Focused</h3>
                <p className="text-zinc-400">Every recommendation traces back to bookings, leads, or sales. No vanity metrics.</p>
              </div>
            </div>
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-cyan-400 mb-2">🎯 Specific Fixes</h3>
                <p className="text-zinc-400">SEO gaps. Missing CTAs. Trust issues. We ID exactly what's holding you back.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-violet-400 mb-2">🚀 Upgrade Path</h3>
                <p className="text-zinc-400">Not ready for a redesign? Get copywriting. Want everything? Choose my done-with-you service.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-cyan-400 mb-2">✅ Proven Results</h3>
                <p className="text-zinc-400">Clients see 23% avg booking increase within 30 days of implementing recommendations.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="max-w-screen-2xl mx-auto px-6 py-20 mt-10">
          <div className="bg-gradient-to-r from-violet-600/10 via-cyan-600/10 to-violet-600/10 border border-violet-500/20 rounded-3xl p-12 text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to see your teardown?</h2>
            <Link href="/" className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-violet-600 to-cyan-600 hover:from-violet-500 hover:to-cyan-500 rounded-lg font-semibold transition-all hover:shadow-lg hover:shadow-violet-500/25">
              Start Free Teardown <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 text-center text-sm text-zinc-500 border-t border-zinc-800 mt-20">
          © 2026 VibeTeardown • AI Website Intelligence
        </footer>
      </div>
    </>
  );
}
