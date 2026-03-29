"use client";

import Link from "next/link";
import { Navigation } from "@/app/components/nav";
import { CheckCircle2 } from "lucide-react";

export default function HowItWorks() {
  return (
    <>
      <Navigation />
      <div className="flex flex-col min-h-screen bg-black text-white">
        {/* Hero */}
        <section className="pt-40 pb-24 px-6">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-6xl md:text-7xl font-bold tracking-tight leading-tight mb-6">
              The process
            </h1>
            <p className="text-xl md:text-2xl text-zinc-300 mb-8 max-w-2xl">
              See how AI teardowns transform your understanding of your website's performance in seconds.
            </p>
          </div>
        </section>

        {/* Steps */}
        <section className="border-t border-zinc-800 py-24 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8">
              {[
                { step: 1, title: "Enter URL", desc: "Paste your website" },
                { step: 2, title: "AI Analysis", desc: "Firecrawl scrapes & evaluates" },
                { step: 3, title: "Get Scores", desc: "Instant metrics & insights" },
                { step: 4, title: "Upgrade", desc: "Full reports, rewrites, redesigns" }
              ].map((item) => (
                <div key={item.step}>
                  <div className="text-sm text-zinc-400 mb-3">Step {item.step}</div>
                  <h3 className="text-lg font-semibold mb-2 text-white">{item.title}</h3>
                  <p className="text-sm text-zinc-400">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="border-t border-zinc-800 py-24 px-6 bg-zinc-950">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-16">Why VibeTeardown works</h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Instant Results</h3>
                  <p className="text-zinc-300">No 2-week report. Get actionable insights in seconds.</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">AI-Powered</h3>
                  <p className="text-zinc-300">Trained on 10,000+ high-converting sites. Best practices instantly applied.</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Revenue Focused</h3>
                  <p className="text-zinc-300">Every recommendation traces back to bookings, leads, or sales.</p>
                </div>
              </div>
              <div className="space-y-8">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Specific Fixable Issues</h3>
                  <p className="text-zinc-300">Not vague. See exactly what's causing friction in your funnel.</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Flexible Upgrades</h3>
                  <p className="text-zinc-300">Start free. Upgrade to reports, rewrites, or full redesigns when ready.</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Proven Results</h3>
                  <p className="text-zinc-300">Clients average 28% booking increase within 30 days of implementation.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What You'll Learn */}
        <section className="border-t border-zinc-800 py-24 px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-16">What you'll discover</h2>
            <div className="space-y-6">
              {[
                "Your Homepage Score: How you compare to conversion-optimized sites",
                "Your Trust Score: Which trust signals you're missing (reviews, certs, speed)",
                "Your Booking Friction: Exactly how hard it is for visitors to take action",
                "Priority SEO issues: Missing alt text, thin pages, no schema, buried CTAs",
                "CTA opportunities: Where to add contact buttons, urgency, testimonials",
                "AI-written copy: See your homepage rewritten for conversion by AI",
                "Next-step recommendations: Exactly what to fix first for best ROI"
              ].map((item, i) => (
                <div key={i} className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <p className="text-zinc-300">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="border-t border-zinc-800 py-24 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">Ready to understand your site?</h2>
            <p className="text-xl text-zinc-300 mb-10">Get your free analysis today.</p>
            <Link href="/" className="inline-block px-8 py-4 bg-white text-black font-semibold rounded hover:bg-zinc-200 transition-colors">
              Start Analysis
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
