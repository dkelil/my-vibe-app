"use client";

import Link from "next/link";
import { Navigation } from "@/app/components/nav";
import { ArrowRight, TrendingUp } from "lucide-react";

const examples = [
  {
    domain: "cleanpro-denver.com",
    beforeScore: 42,
    afterScore: 87,
    issues: ["Missing phone CTA", "Thin homepage (200 words)", "No reviews section", "Broken booking link"],
    fixes: ["Added click-to-call button", "Expanded copy (+500 words)", "Added 4.9★ reviews widget", "Streamlined booking flow"],
    result: "34% more calls/week"
  },
  {
    domain: "sunnyplumbing.com",
    beforeScore: 55,
    afterScore: 91,
    issues: ["Generic copy", "No local keywords", "CTAs buried", "Low mobile optimization"],
    fixes: ["Rewrote with service-specific copy", "Added geo-targeted phrases", "Hero CTA above fold", "Full mobile redesign"],
    result: "28% booking increase"
  },
  {
    domain: "luxecarpetclean.com",
    beforeScore: 38,
    afterScore: 84,
    issues: ["Outdated design", "No trust signals", "Confusing navigation", "Slow page speed"],
    fixes: ["Modern gradient design", "Testimonials + certifications", "Simplified menu", "Image optimization + CDN"],
    result: "19% conversion rate lift"
  },
];

export default function Examples() {
  return (
    <>
      <Navigation />
      <div className="flex flex-col min-h-screen bg-zinc-950 text-white pt-20">
        {/* Hero */}
        <section className="max-w-screen-2xl mx-auto px-6 py-20">
          <div className="max-w-3xl">
            <h1 className="text-6xl md:text-7xl font-bold tracking-tight leading-tight mb-6">
              Real Results
              <span className="block bg-gradient-to-r from-violet-400 via-cyan-400 to-violet-400 bg-clip-text text-transparent">from Local Businesses</span>
            </h1>
            <p className="text-2xl text-zinc-400 mb-8 max-w-2xl">
              See how VibeTeardown transformed websites into booking machines. Average improvement: +28%.
            </p>
          </div>
        </section>

        {/* Case Studies */}
        <section className="max-w-screen-2xl mx-auto px-6 py-20 space-y-20">
          {examples.map((example, i) => (
            <div key={i} className="border border-zinc-800 rounded-3xl p-12 bg-gradient-to-br from-zinc-900/50 to-transparent hover:border-violet-500/50 transition-all">
              <div className="flex justify-between items-start mb-12">
                <div>
                  <h2 className="text-3xl font-bold mb-2">{example.domain}</h2>
                  <p className="text-zinc-400 flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-emerald-400" />
                    <span className="text-2xl font-bold text-emerald-400">{example.result}</span>
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-12 mb-12">
                {/* Before */}
                <div>
                  <div className="mb-6">
                    <div className="text-sm text-zinc-400 mb-2">BEFORE (Score: {example.beforeScore})</div>
                    <div className="w-full h-2 bg-zinc-800 rounded-full overflow-hidden">
                      <div className="h-full bg-red-500/50" style={{ width: `${example.beforeScore}%` }} />
                    </div>
                  </div>
                  <h3 className="font-semibold text-red-400 mb-4">Problems Identified:</h3>
                  <ul className="space-y-2">
                    {example.issues.map((issue, j) => (
                      <li key={j} className="text-zinc-400 flex gap-2">
                        <span className="text-red-400">✗</span> {issue}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* After */}
                <div>
                  <div className="mb-6">
                    <div className="text-sm text-zinc-400 mb-2">AFTER (Score: {example.afterScore})</div>
                    <div className="w-full h-2 bg-zinc-800 rounded-full overflow-hidden">
                      <div className="h-full bg-emerald-500" style={{ width: `${example.afterScore}%` }} />
                    </div>
                  </div>
                  <h3 className="font-semibold text-emerald-400 mb-4">Solutions Implemented:</h3>
                  <ul className="space-y-2">
                    {example.fixes.map((fix, j) => (
                      <li key={j} className="text-zinc-400 flex gap-2">
                        <span className="text-emerald-400">✓</span> {fix}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="flex gap-4">
                <Link href="/" className="px-6 py-3 bg-violet-600 hover:bg-violet-500 rounded-lg font-semibold transition-colors">
                  Get Similar Results
                </Link>
                <button className="px-6 py-3 border border-zinc-700 hover:border-violet-500 rounded-lg font-semibold transition-colors">
                  Read Full Case Study
                </button>
              </div>
            </div>
          ))}
        </section>

        {/* Stats */}
        <section className="max-w-screen-2xl mx-auto px-6 py-20 border-t border-zinc-800">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent mb-2">847</div>
              <div className="text-zinc-400">Teardowns Completed</div>
            </div>
            <div>
              <div className="text-5xl font-bold bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent mb-2">28%</div>
              <div className="text-zinc-400">Avg Booking Increase</div>
            </div>
            <div>
              <div className="text-5xl font-bold bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent mb-2">$4.2M</div>
              <div className="text-zinc-400">Client Revenue Generated</div>
            </div>
            <div>
              <div className="text-5xl font-bold bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent mb-2">4.9★</div>
              <div className="text-zinc-400">Client Satisfaction</div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="max-w-screen-2xl mx-auto px-6 py-20 mt-10">
          <div className="bg-gradient-to-r from-violet-600/10 via-cyan-600/10 to-violet-600/10 border border-violet-500/20 rounded-3xl p-12 text-center">
            <h2 className="text-4xl font-bold mb-6">Your teardown is next.</h2>
            <Link href="/" className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-violet-600 to-cyan-600 hover:from-violet-500 hover:to-cyan-500 rounded-lg font-semibold transition-all hover:shadow-lg hover:shadow-violet-500/25">
              Get Free Analysis <ArrowRight className="w-5 h-5" />
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
