"use client";

import { useState } from "react";
import Link from "next/link";
import { Navigation } from "@/app/components/nav";
import { CheckCircle2 } from "lucide-react";

const plans = [
  {
    name: "Free Teardown",
    price: "0",
    description: "Get started with an instant AI analysis",
    features: [
      "Website scraping & analysis",
      "Homepage Score",
      "Trust Score",
      "Booking Friction metric",
      "SEO mistakes (top 4)",
      "CTA opportunities",
      "Homepage rewrite suggestion",
    ],
    cta: "Start Free",
    href: "/"
  },
  {
    name: "Full Report",
    price: "149",
    description: "In-depth PDF report with prioritized fixes",
    features: [
      "Everything in Free",
      "15-page PDF report",
      "Competitive analysis",
      "10 SEO recommendations",
      "5 conversion opportunities",
      "30-min implementation call",
      "Email support (30 days)",
    ],
    cta: "Get Report",
    href: "#contact"
  },
  {
    name: "Homepage Rewrite",
    price: "399",
    description: "AI-optimized copy that converts",
    features: [
      "Everything in Full Report",
      "Professional homepage rewrite",
      "3 rounds of revisions",
      "CTA optimization",
      "SEO-optimized copywriting",
      "Meta descriptions & H1s",
      "60-min implementation call",
    ],
    cta: "Book Rewrite",
    href: "#contact"
  },
  {
    name: "Full Redesign",
    price: "799",
    description: "Complete website rebuild & optimization",
    features: [
      "Everything in Rewrite",
      "Mobile-first redesign",
      "Form optimization",
      "Lead capture flow",
      "CTA placement testing",
      "Trust signals & social proof",
      "90-min strategy session",
      "30-day support",
    ],
    cta: "Schedule Call",
    popular: true,
    href: "#contact"
  }
];

export default function Pricing() {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
  const [showContactForm, setShowContactForm] = useState(false);

  return (
    <>
      <Navigation />
      <div className="flex flex-col min-h-screen bg-black text-white">
        {/* Hero */}
        <section className="pt-40 pb-24 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-6xl md:text-7xl font-bold tracking-tight leading-tight mb-6">
              Pricing
            </h1>
            <p className="text-xl md:text-2xl text-zinc-300 mb-8 max-w-2xl mx-auto">
              Start free. Upgrade when you're ready. No subscriptions, no hidden fees.
            </p>
          </div>
        </section>

        {/* Pricing Plans */}
        <section className="border-t border-zinc-800 py-24 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-4 gap-6">
              {plans.map((plan, i) => (
                <div
                  key={i}
                  className={`relative rounded p-8 transition-all ${
                    plan.popular
                      ? "border-2 border-cyan-700 bg-cyan-950/30 md:scale-105"
                      : "border border-zinc-800 bg-zinc-950"
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="text-xs font-semibold text-cyan-400 bg-black px-3 py-1 rounded">
                        RECOMMENDED
                      </div>
                    </div>
                  )}

                  <div>
                    <h3 className="text-lg font-bold mb-2">{plan.name}</h3>
                    <p className="text-zinc-400 text-sm mb-6">{plan.description}</p>

                    <div className="mb-8">
                      <div className="flex items-baseline gap-1">
                        {plan.price === "0" ? (
                          <div className="text-4xl font-bold">Free</div>
                        ) : (
                          <>
                            <div className="text-4xl font-bold">${plan.price}</div>
                            <div className="text-zinc-400 text-sm">/one-time</div>
                          </>
                        )}
                      </div>
                    </div>

                    <button
                      onClick={() => {
                        setSelectedPlan(plan.name);
                        if (plan.price === "0") {
                          window.location.href = plan.href;
                        } else {
                          setShowContactForm(true);
                        }
                      }}
                      className={`w-full py-3 rounded font-semibold transition-colors mb-8 ${
                        plan.popular
                          ? "bg-cyan-600 text-black hover:bg-cyan-700"
                          : "bg-white text-black hover:bg-zinc-200"
                      }`}
                    >
                      {plan.cta}
                    </button>

                    <div className="space-y-3">
                      {plan.features.map((feature, j) => (
                        <div key={j} className="flex gap-2 items-start">
                          <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                          <span className="text-zinc-300 text-sm">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="border-t border-zinc-800 py-24 px-6 bg-zinc-950">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-16">Questions?</h2>
            <div className="space-y-12 max-w-2xl">
              <div>
                <h3 className="text-lg font-semibold mb-3 text-white">Are there subscriptions?</h3>
                <p className="text-zinc-300">No. All paid plans are one-time purchases. Free teardowns are always free.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-3 text-white">What if I'm not happy?</h3>
                <p className="text-zinc-300">100% satisfaction guarantee. Refund or redo within 14 days, no questions asked.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-3 text-white">Do you offer custom packages?</h3>
                <p className="text-zinc-300">Yes. Monthly retainers, ongoing optimization, white-label services. Book a call to discuss.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-3 text-white">How long do projects take?</h3>
                <p className="text-zinc-300">Teardowns: 8 seconds. Reports: 3-5 days. Rewrites: 7-10 days. Redesigns: 2-3 weeks.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form Modal */}
        {showContactForm && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-6">
            <div className="bg-zinc-950 border border-zinc-800 rounded p-12 max-w-md w-full">
              <h2 className="text-2xl font-bold mb-2">{selectedPlan}</h2>
              <p className="text-zinc-400 mb-8">Let's discuss your project.</p>

              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  alert("Thank you! We'll contact you within 24 hours.");
                  setShowContactForm(false);
                }}
                className="space-y-4"
              >
                <input
                  type="text"
                  placeholder="Your name"
                  required
                  className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 rounded text-white placeholder:text-zinc-500 focus:border-cyan-600 focus:outline-none"
                />
                <input
                  type="email"
                  placeholder="Your email"
                  required
                  className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 rounded text-white placeholder:text-zinc-500 focus:border-cyan-600 focus:outline-none"
                />
                <input
                  type="tel"
                  placeholder="Your phone"
                  required
                  className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 rounded text-white placeholder:text-zinc-500 focus:border-cyan-600 focus:outline-none"
                />
                <input
                  type="text"
                  placeholder="Your website"
                  className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 rounded text-white placeholder:text-zinc-500 focus:border-cyan-600 focus:outline-none"
                />
                <textarea
                  placeholder="Tell us about your business"
                  rows={4}
                  className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 rounded text-white placeholder:text-zinc-500 focus:border-cyan-600 focus:outline-none resize-none"
                />

                <div className="flex gap-4 pt-4">
                  <button
                    type="submit"
                    className="flex-1 py-3 bg-cyan-600 hover:bg-cyan-700 text-black rounded font-semibold transition-colors"
                  >
                    Send
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowContactForm(false)}
                    className="flex-1 py-3 border border-zinc-800 hover:border-zinc-700 rounded font-semibold transition-colors"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* Final CTA */}
        <section className="border-t border-zinc-800 py-24 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">Not sure where to start?</h2>
            <p className="text-xl text-zinc-300 mb-10">Get a free teardown first. No credit card required.</p>
            <Link href="/" className="inline-block px-8 py-4 bg-white text-black font-semibold rounded hover:bg-zinc-200 transition-colors">
              Try Free Analysis
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
