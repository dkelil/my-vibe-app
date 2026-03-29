"use client";

import { useState } from "react";
import Link from "next/link";
import { Navigation } from "@/app/components/nav";
import { Check, ArrowRight, X } from "lucide-react";

const plans = [
  {
    name: "Free Teardown",
    price: "0",
    description: "Get started with an instant AI analysis",
    features: [
      { text: "Website scraping & analysis", included: true },
      { text: "Homepage Score", included: true },
      { text: "Trust Score", included: true },
      { text: "Booking Friction metric", included: true },
      { text: "SEO mistakes (top 4)", included: true },
      { text: "CTA opportunities", included: true },
      { text: "Homepage rewrite suggestion", included: true },
      { text: "Email report", included: false },
      { text: "Done-with-you implementation", included: false },
    ],
    cta: "Start Free Teardown",
    href: "/"
  },
  {
    name: "Full Teardown Report",
    price: "149",
    description: "In-depth PDF report with prioritized fixes",
    features: [
      { text: "Everything in Free", included: true },
      { text: "15-page PDF report", included: true },
      { text: "Competitive analysis", included: true },
      { text: "10 SEO recommendations", included: true },
      { text: "5 conversion opportunities", included: true },
      { text: "30-min implementation call", included: true },
      { text: "Email support (30 days)", included: true },
      { text: "Monthly optimization", included: false },
    ],
    cta: "Purchase Report",
    popular: false,
    href: "#contact"
  },
  {
    name: "Rewritten Homepage",
    price: "399",
    description: "AI-optimized copy that converts",
    features: [
      { text: "Everything in Full Report", included: true },
      { text: "Professional homepage rewrite", included: true },
      { text: "3 rounds of revisions", included: true },
      { text: "CTA optimization", included: true },
      { text: "SEO-optimized copywriting", included: true },
      { text: "Meta descriptions & H1s", included: true },
      { text: "60-min implementation call", included: true },
      { text: "3-month optimization plan", included: false },
    ],
    cta: "Book Rewrite",
    href: "#contact"
  },
  {
    name: "Lead-Capture Redesign",
    price: "799",
    description: "Full website redesign + conversion funnel",
    features: [
      { text: "Everything in Rewriten", included: true },
      { text: "Mobile-first redesign", included: true },
      { text: "Form optimization", included: true },
      { text: "Lead capture flow", included: true },
      { text: "CTA placement testing", included: true },
      { text: "Trust signals & social proof", included: true },
      { text: "90-min strategy session", included: true },
      { text: "30-day support", included: true },
    ],
    cta: "Schedule Design Call",
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
      <div className="flex flex-col min-h-screen bg-zinc-950 text-white pt-20">
        {/* Hero */}
        <section className="max-w-screen-2xl mx-auto px-6 py-20">
          <div className="max-w-3xl">
            <h1 className="text-6xl md:text-7xl font-bold tracking-tight leading-tight mb-6">
              Simple, Transparent
              <span className="block bg-gradient-to-r from-violet-400 via-cyan-400 to-violet-400 bg-clip-text text-transparent">Pricing</span>
            </h1>
            <p className="text-2xl text-zinc-400 mb-8 max-w-2xl">
              Start free. Upgrade when you're ready. No hidden fees.
            </p>
          </div>
        </section>

        {/* Pricing Plans */}
        <section className="max-w-screen-2xl mx-auto px-6 py-20">
          <div className="grid md:grid-cols-4 gap-6">
            {plans.map((plan, i) => (
              <div
                key={i}
                className={`relative rounded-2xl transition-all ${
                  plan.popular
                    ? "border-2 border-violet-500 bg-gradient-to-br from-violet-600/10 to-cyan-600/10 md:scale-105"
                    : "border border-zinc-800 bg-zinc-900/50 hover:border-zinc-700"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-violet-600 to-cyan-600 px-4 py-1 rounded-full text-sm font-semibold">
                      MOST POPULAR
                    </div>
                  </div>
                )}

                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-zinc-400 text-sm mb-6">{plan.description}</p>

                  <div className="mb-8">
                    <div className="flex items-baseline gap-1">
                      {plan.price === "0" ? (
                        <div className="text-4xl font-bold">Free</div>
                      ) : (
                        <>
                          <div className="text-5xl font-bold">${plan.price}</div>
                          <div className="text-zinc-400">/one time</div>
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
                    className={`w-full py-3 rounded-lg font-semibold transition-all mb-8 ${
                      plan.popular
                        ? "bg-gradient-to-r from-violet-600 to-cyan-600 hover:from-violet-500 hover:to-cyan-500 hover:shadow-lg hover:shadow-violet-500/25"
                        : "bg-zinc-800 hover:bg-zinc-700"
                    }`}
                  >
                    {plan.cta}
                  </button>

                  <div className="space-y-4">
                    {plan.features.map((feature, j) => (
                      <div key={j} className="flex gap-3 items-start">
                        {feature.included ? (
                          <Check className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                        ) : (
                          <X className="w-5 h-5 text-zinc-600 flex-shrink-0 mt-0.5" />
                        )}
                        <span className={feature.included ? "text-zinc-300" : "text-zinc-600 line-through"}>
                          {feature.text}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="max-w-screen-2xl mx-auto px-6 py-20 border-t border-zinc-800">
          <h2 className="text-4xl font-bold mb-12">FAQs</h2>
          <div className="space-y-8 max-w-2xl">
            <div>
              <h3 className="text-xl font-semibold mb-3 text-violet-400">Can I cancel the paid plans?</h3>
              <p className="text-zinc-400">Yes! All plans are one-time purchases. No subscriptions. Once you have your report or redesign, it's yours forever with commercial rights.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3 text-violet-400">What if I'm not happy with the work?</h3>
              <p className="text-zinc-400">100% satisfaction guarantee. If you're not thrilled within 14 days, we'll refund in full or redo the work at no cost.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3 text-violet-400">Do you offer custom packages?</h3>
              <p className="text-zinc-400">Absolutely. Monthly retainers, ongoing optimization, white-label services—let's talk. Book a call below.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3 text-violet-400">How long do projects take?</h3>
              <p className="text-zinc-400">Free teardowns: 8 seconds. Reports: 3-5 business days. Rewrites: 7-10 days. Redesigns: 2-3 weeks depending on scope.</p>
            </div>
          </div>
        </section>

        {/* Contact Form Modal */}
        {showContactForm && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-6">
            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-12 max-w-md w-full">
              <h2 className="text-3xl font-bold mb-2">{selectedPlan}</h2>
              <p className="text-zinc-400 mb-8">Let's discuss which package is right for you.</p>

              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  alert("Thank you! We'll contact you within 24 hours to confirm your order.");
                  setShowContactForm(false);
                }}
                className="space-y-4"
              >
                <input
                  type="text"
                  placeholder="Your name"
                  required
                  className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg text-white placeholder:text-zinc-500 focus:border-violet-500 outline-none"
                />
                <input
                  type="email"
                  placeholder="Your email"
                  required
                  className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg text-white placeholder:text-zinc-500 focus:border-violet-500 outline-none"
                />
                <input
                  type="tel"
                  placeholder="Your phone"
                  required
                  className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg text-white placeholder:text-zinc-500 focus:border-violet-500 outline-none"
                />
                <input
                  type="text"
                  placeholder="Your website"
                  className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg text-white placeholder:text-zinc-500 focus:border-violet-500 outline-none"
                />
                <textarea
                  placeholder="Tell us about your business"
                  rows={4}
                  className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg text-white placeholder:text-zinc-500 focus:border-violet-500 outline-none resize-none"
                />

                <div className="flex gap-4 pt-4">
                  <button
                    type="submit"
                    className="flex-1 py-3 bg-gradient-to-r from-violet-600 to-cyan-600 hover:from-violet-500 hover:to-cyan-500 rounded-lg font-semibold transition-all"
                  >
                    Confirm Order
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowContactForm(false)}
                    className="flex-1 py-3 border border-zinc-700 hover:border-zinc-600 rounded-lg font-semibold transition-all"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* Final CTA */}
        <section className="max-w-screen-2xl mx-auto px-6 py-20 mt-10">
          <div className="bg-gradient-to-r from-violet-600/10 via-cyan-600/10 to-violet-600/10 border border-violet-500/20 rounded-3xl p-12 text-center">
            <h2 className="text-4xl font-bold mb-6">Not sure which plan is right?</h2>
            <p className="text-zinc-400 mb-8 max-w-xl mx-auto">Get a free teardown first. Then talk to our team about which upgrade fits your goals.</p>
            <Link href="/" className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-violet-600 to-cyan-600 hover:from-violet-500 hover:to-cyan-500 rounded-lg font-semibold transition-all hover:shadow-lg hover:shadow-violet-500/25">
              Start Free Analysis <ArrowRight className="w-5 h-5" />
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
