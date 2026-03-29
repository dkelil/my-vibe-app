"use client";

import { useState, useTransition } from "react";
import Link from "next/link";
import { 
  ChevronRight, CheckCircle2, AlertCircle, Clock
} from "lucide-react";
import { Navigation } from "./components/nav";
import { analyzeWebsite } from "./actions";

type AnalysisResult = {
  homepageScore: number;
  trustScore: number;
  bookingFriction: number;
  seoMistakes: string[];
  missedCtas: string[];
  beforeRewrite: string;
  afterRewrite: string;
  domain: string;
  scrapedTitle?: string;
};

export default function Home() {
  const [result, setResult] = useState<AnalysisResult | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();

  const handleAnalyze = (formData: FormData) => {
    setError(null);
    startTransition(async () => {
      try {
        const data = await analyzeWebsite(formData);
        setResult(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Something went wrong");
      }
    });
  };

  const reset = () => {
    setResult(null);
    setError(null);
  };

  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <Navigation />

      <main className="flex-1">
        {!result ? (
          <>
            {/* Hero Section */}
            <div className="pt-40 pb-24 px-6">
              <div className="max-w-4xl mx-auto">
                <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8 leading-tight">
                  Understand your website
                </h1>
                
                <p className="text-xl md:text-2xl text-zinc-300 mb-12 max-w-2xl leading-relaxed">
                  Get comprehensive AI analysis of your site's performance, trust signals, and conversion opportunities in seconds.
                </p>

                <form action={handleAnalyze} className="mb-12">
                  <div className="flex flex-col sm:flex-row gap-2 max-w-2xl">
                    <input
                      name="url"
                      type="url"
                      placeholder="https://yourbusiness.com"
                      className="flex-1 px-6 py-4 bg-zinc-900 border border-zinc-800 text-white placeholder:text-zinc-500 focus:border-cyan-600 focus:outline-none transition-colors rounded text-lg"
                      required
                    />
                    <button
                      type="submit"
                      disabled={isPending}
                      className="px-8 py-4 bg-white text-black font-semibold rounded hover:bg-zinc-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 whitespace-nowrap"
                    >
                      {isPending ? (
                        <>
                          <span className="animate-spin h-5 w-5 border-2 border-black border-t-transparent rounded-full" />
                          Analyzing
                        </>
                      ) : (
                        <>
                          Analyze
                          <ChevronRight className="w-5 h-5" />
                        </>
                      )}
                    </button>
                  </div>
                  <p className="text-sm text-zinc-400 mt-3">No credit card required. Results in seconds.</p>
                </form>

                {error && (
                  <div className="bg-red-950 border border-red-800 rounded p-4 text-red-200 text-sm max-w-2xl">
                    {error}
                  </div>
                )}
              </div>

              {/* Trust Stats */}
              <div className="max-w-4xl mx-auto grid grid-cols-3 gap-12 mt-24 pt-12 border-t border-zinc-800">
                <div>
                  <div className="text-3xl font-bold text-white mb-1">847</div>
                  <div className="text-sm text-zinc-400">Sites Analyzed</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-white mb-1">28%</div>
                  <div className="text-sm text-zinc-400">Avg. Improvement</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-white mb-1">4.9★</div>
                  <div className="text-sm text-zinc-400">User Rating</div>
                </div>
              </div>
            </div>

            {/* Features Section */}
            <section className="border-t border-zinc-800 py-24 px-6">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold mb-16">What you get</h2>
                
                <div className="grid md:grid-cols-2 gap-12">
                  <div>
                    <h3 className="text-lg font-semibold mb-3 text-white">Homepage Score</h3>
                    <p className="text-zinc-300">AI-powered evaluation of design, usability, mobile optimization, and alignment with conversion best practices. Benchmarked against thousands of high-performing sites.</p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-3 text-white">Trust Score</h3>
                    <p className="text-zinc-300">Assessment of trust signals including contact information, reviews, certifications, page speed, schema markup, and security indicators.</p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-3 text-white">Booking Friction</h3>
                    <p className="text-zinc-300">Quantified friction score (1-10) measuring how easy it is for visitors to take action. Lower scores mean better conversion paths.</p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-3 text-white">Actionable Insights</h3>
                    <p className="text-zinc-300">Specific recommendations on SEO improvements, missing CTAs, content gaps, and optimization opportunities ranked by impact.</p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-3 text-white">AI-Powered Rewrite</h3>
                    <p className="text-zinc-300">Professional homepage copy suggestion optimized for conversions. See before/after comparison with detailed improvements.</p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-3 text-white">Instant Results</h3>
                    <p className="text-zinc-300">Complete analysis delivered in seconds. No waiting for reports. No guesswork. Just data-driven recommendations.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Process Section */}
            <section className="border-t border-zinc-800 py-24 px-6 bg-zinc-950">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold mb-16">How it works</h2>
                
                <div className="grid md:grid-cols-4 gap-8">
                  {[
                    { step: 1, title: "Submit", desc: "Enter your website URL" },
                    { step: 2, title: "Analyze", desc: "Our AI evaluates your site" },
                    { step: 3, title: "Review", desc: "Get instant insights" },
                    { step: 4, title: "Improve", desc: "Implement recommendations" }
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

            {/* Pricing Section */}
            <section className="border-t border-zinc-800 py-24 px-6">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold mb-4">Pricing</h2>
                <p className="text-zinc-300 mb-16">Simple, transparent pricing. Start free.</p>

                <div className="grid md:grid-cols-3 gap-8">
                  <div className="border border-zinc-800 p-8 rounded">
                    <h3 className="text-xl font-semibold mb-2">Free</h3>
                    <p className="text-zinc-400 text-sm mb-6">AI Teardown</p>
                    <div className="text-4xl font-bold mb-8">$0</div>
                    <button className="w-full py-3 bg-zinc-900 hover:bg-zinc-800 rounded font-semibold transition-colors mb-8 text-white">Get Started</button>
                    <ul className="space-y-3 text-sm text-zinc-300">
                      <li className="flex gap-2 items-start">
                        <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" />
                        <span>Full analysis scores</span>
                      </li>
                      <li className="flex gap-2 items-start">
                        <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" />
                        <span>SEO recommendations</span>
                      </li>
                      <li className="flex gap-2 items-start">
                        <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" />
                        <span>AI rewrite sample</span>
                      </li>
                    </ul>
                  </div>

                  <div className="border border-zinc-800 p-8 rounded">
                    <h3 className="text-xl font-semibold mb-2">Report</h3>
                    <p className="text-zinc-400 text-sm mb-6">15-page PDF</p>
                    <div className="text-4xl font-bold mb-8">$149</div>
                    <Link href="/pricing" className="w-full block py-3 bg-white text-black rounded font-semibold transition-colors hover:bg-zinc-200 text-center mb-8">Learn More</Link>
                    <ul className="space-y-3 text-sm text-zinc-300">
                      <li className="flex gap-2 items-start">
                        <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" />
                        <span>Everything free +</span>
                      </li>
                      <li className="flex gap-2 items-start">
                        <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" />
                        <span>Detailed PDF report</span>
                      </li>
                      <li className="flex gap-2 items-start">
                        <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" />
                        <span>30-minute call</span>
                      </li>
                    </ul>
                  </div>

                  <div className="border border-cyan-700 p-8 rounded bg-cyan-950/20">
                    <div className="text-xs font-semibold text-cyan-400 mb-2">RECOMMENDED</div>
                    <h3 className="text-xl font-semibold mb-2">Redesign</h3>
                    <p className="text-zinc-400 text-sm mb-6">Full site rebuild</p>
                    <div className="text-4xl font-bold mb-8">$799</div>
                    <Link href="/pricing" className="w-full block py-3 bg-cyan-600 hover:bg-cyan-700 text-black rounded font-semibold transition-colors text-center mb-8">Learn More</Link>
                    <ul className="space-y-3 text-sm text-zinc-300">
                      <li className="flex gap-2 items-start">
                        <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" />
                        <span>Everything report +</span>
                      </li>
                      <li className="flex gap-2 items-start">
                        <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" />
                        <span>Full redesign</span>
                      </li>
                      <li className="flex gap-2 items-start">
                        <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" />
                        <span>30-day support</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Final CTA */}
            <section className="border-t border-zinc-800 py-24 px-6">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-5xl md:text-6xl font-bold mb-6">Ready to improve?</h2>
                <p className="text-xl text-zinc-300 mb-10">Get your free analysis today.</p>
                <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="px-8 py-4 bg-white text-black font-semibold rounded hover:bg-zinc-200 transition-colors inline-flex items-center gap-2">
                  Start Analysis
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </section>
          </>
        ) : (
          /* RESULTS DASHBOARD */
          <div className="max-w-4xl mx-auto px-6 py-12 pt-32">
            <div className="flex justify-between items-start mb-12 pb-8 border-b border-zinc-800">
              <div>
                <h2 className="text-5xl font-bold mb-2 text-white">{result.domain}</h2>
                {result.scrapedTitle && <p className="text-zinc-400 text-lg">{result.scrapedTitle}</p>}
                <p className="text-sm text-zinc-500 mt-2 flex items-center gap-1">
                  <Clock className="w-4 h-4" /> Analysis complete
                </p>
              </div>
              <button onClick={reset} className="text-cyan-400 hover:text-cyan-300 font-semibold text-sm transition-colors">
                Analyze Another
              </button>
            </div>

            {/* SCORES */}
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="border border-zinc-800 p-8 rounded bg-zinc-950">
                <div className="flex justify-between items-start mb-6">
                  <h3 className="font-semibold text-white">Homepage Score</h3>
                  <div className="text-4xl font-bold text-white">{result.homepageScore}</div>
                </div>
                <div className="h-1 bg-zinc-800 rounded-full overflow-hidden">
                  <div className="h-full bg-cyan-500" style={{ width: `${result.homepageScore}%` }} />
                </div>
              </div>

              <div className="border border-zinc-800 p-8 rounded bg-zinc-950">
                <div className="flex justify-between items-start mb-6">
                  <h3 className="font-semibold text-white">Trust Score</h3>
                  <div className="text-4xl font-bold text-white">{result.trustScore}</div>
                </div>
                <div className="h-1 bg-zinc-800 rounded-full overflow-hidden">
                  <div className="h-full bg-cyan-500" style={{ width: `${result.trustScore}%` }} />
                </div>
              </div>

              <div className="border border-zinc-800 p-8 rounded bg-zinc-950">
                <div className="flex justify-between items-start mb-6">
                  <h3 className="font-semibold text-white">Booking Friction</h3>
                  <div className="text-4xl font-bold text-white">{result.bookingFriction}</div>
                </div>
                <p className="text-xs text-zinc-400">/10 (lower is better)</p>
              </div>
            </div>

            {/* INSIGHTS */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="border border-zinc-800 p-8 rounded bg-zinc-950">
                <h3 className="font-semibold text-white mb-6 flex items-center gap-2">
                  <AlertCircle className="w-5 h-5" />
                  Issues Found
                </h3>
                <ul className="space-y-3">
                  {result.seoMistakes.map((item, i) => (
                    <li key={i} className="text-sm text-zinc-300 flex gap-3">
                      <span className="text-red-400 flex-shrink-0">→</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border border-zinc-800 p-8 rounded bg-zinc-950">
                <h3 className="font-semibold text-white mb-6 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5" />
                  Opportunities
                </h3>
                <ul className="space-y-3">
                  {result.missedCtas.map((item, i) => (
                    <li key={i} className="text-sm text-zinc-300 flex gap-3">
                      <span className="text-cyan-400 flex-shrink-0">→</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* REWRITE */}
            <div className="border border-zinc-800 p-8 rounded bg-zinc-950 mb-12">
              <h3 className="font-semibold text-white mb-8">Suggested Rewrite</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <p className="text-xs text-zinc-500 uppercase tracking-wide mb-3">Current Copy</p>
                  <p className="text-sm text-zinc-300 leading-relaxed">{result.beforeRewrite}</p>
                </div>
                <div>
                  <p className="text-xs text-cyan-400 uppercase tracking-wide mb-3">Optimized</p>
                  <p className="text-sm text-zinc-200 leading-relaxed font-medium">{result.afterRewrite}</p>
                </div>
              </div>
            </div>

            {/* NEXT STEPS */}
            <div className="border border-cyan-700 bg-cyan-950/20 p-8 rounded">
              <h3 className="text-2xl font-bold text-white mb-4">Next steps</h3>
              <p className="text-zinc-300 mb-6">Ready to implement these changes? We offer detailed reports, professional rewrites, and full redesigns.</p>
              <Link href="/pricing" className="inline-block px-6 py-3 bg-cyan-600 hover:bg-cyan-700 text-black font-semibold rounded transition-colors">
                View Options
              </Link>
            </div>
          </div>
        )}
      </main>

      <footer className="border-t border-zinc-800 py-8 px-6 text-center text-sm text-zinc-500">
        © 2026 VibeTeardown. All rights reserved.
      </footer>
    </div>
  );
}
