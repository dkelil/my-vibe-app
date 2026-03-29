"use client";

import Link from "next/link";
import { Navigation } from "@/app/components/nav";
import { CheckCircle2 } from "lucide-react";

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
    fixes: ["Modern clean design", "Testimonials + certifications", "Simplified menu", "Image optimization + CDN"],
    result: "19% conversion rate lift"
  },
];

export default function Examples() {
  return (
    <>
      <Navigation />
      <div className="flex flex-col min-h-screen bg-black text-white">
        {/* Hero */}
        <section className="pt-40 pb-24 px-6">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-6xl md:text-7xl font-bold tracking-tight leading-tight mb-6">
              Real results
            </h1>
            <p className="text-xl md:text-2xl text-zinc-300 mb-8 max-w-2xl">
              How local businesses used VibeTeardown to transform their websites. Average improvement: +28%.
            </p>
          </div>
        </section>

        {/* Case Studies */}
        <section className="border-t border-zinc-800 py-24 px-6">
          <div className="max-w-4xl mx-auto space-y-12">
            {examples.map((example, i) => (
              <div key={i} className="border border-zinc-800 rounded p-8 bg-zinc-950">
                <div className="mb-12">
                  <h2 className="text-2xl font-bold mb-2">{example.domain}</h2>
                  <p className="text-lg font-semibold text-cyan-400">{example.result}</p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  {/* Before */}
                  <div>
                    <div className="mb-6">
                      <div className="text-xs text-zinc-400 uppercase tracking-wide mb-2">Before: Score {example.beforeScore}</div>
                      <div className="w-full h-1 bg-zinc-800 rounded-full overflow-hidden">
                        <div className="h-full bg-red-600/50" style={{ width: `${example.beforeScore}%` }} />
                      </div>
                    </div>
                    <h3 className="font-semibold text-white mb-4">Issues Found:</h3>
                    <ul className="space-y-2">
                      {example.issues.map((issue, j) => (
                        <li key={j} className="text-zinc-300 flex gap-2 text-sm">
                          <span className="text-red-400 flex-shrink-0">−</span> {issue}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* After */}
                  <div>
                    <div className="mb-6">
                      <div className="text-xs text-zinc-400 uppercase tracking-wide mb-2">After: Score {example.afterScore}</div>
                      <div className="w-full h-1 bg-zinc-800 rounded-full overflow-hidden">
                        <div className="h-full bg-cyan-500" style={{ width: `${example.afterScore}%` }} />
                      </div>
                    </div>
                    <h3 className="font-semibold text-white mb-4">Changes Made:</h3>
                    <ul className="space-y-2">
                      {example.fixes.map((fix, j) => (
                        <li key={j} className="text-zinc-300 flex gap-2 text-sm">
                          <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" /> {fix}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <Link href="/" className="inline-block px-6 py-2 bg-white text-black rounded font-semibold hover:bg-zinc-200 transition-colors">
                  See Your Potential
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* Stats */}
        <section className="border-t border-zinc-800 py-24 px-6 bg-zinc-950">
          <div className="max-w-4xl mx-auto grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-white mb-1">847</div>
              <div className="text-sm text-zinc-400">Teardowns</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-1">28%</div>
              <div className="text-sm text-zinc-400">Avg Increase</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-1">$4.2M</div>
              <div className="text-sm text-zinc-400">Generated</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-1">4.9★</div>
              <div className="text-sm text-zinc-400">Rating</div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="border-t border-zinc-800 py-24 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">Your breakthrough is next</h2>
            <p className="text-xl text-zinc-300 mb-10">See what your site is missing.</p>
            <Link href="/" className="inline-block px-8 py-4 bg-white text-black font-semibold rounded hover:bg-zinc-200 transition-colors">
              Get Free Analysis
            </Link>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-zinc-800 py-8 px-6 text-center text-sm text-zinc-500">
          © 2026 VibeTeardown. All rights reserved.
        </footer>
      </div>
    </>
  );
}
