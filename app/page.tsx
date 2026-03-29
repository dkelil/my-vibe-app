"use client";

import { useState, useTransition } from "react";
import Link from "next/link";
import { 
  Globe, ShieldCheck, Clock, Search, MousePointer, ArrowRight, 
  CheckCircle2, AlertCircle, Zap, Sparkles, TrendingUp
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
    <div className="flex flex-col min-h-screen bg-zinc-950 text-white">
      <Navigation />

      <main className="flex-1">
        {!result ? (
          <>
            {/* Hero Section */}
            <div className="max-w-screen-2xl mx-auto px-6 pt-32 pb-20">
              <div className="max-w-3xl mx-auto text-center mb-16">
                <div className="inline-flex items-center gap-x-2 rounded-full bg-violet-600/10 border border-violet-500/20 px-4 py-2 text-sm font-medium text-violet-300 mb-8">
                  <Zap className="w-4 h-4" /> 
                  <span>AI teardowns for local businesses</span>
                </div>
                
                <h1 className="text-7xl md:text-8xl font-bold tracking-tight leading-tight mb-8">
                  Your website is
                  <span className="block bg-gradient-to-r from-violet-400 via-cyan-400 to-violet-400 bg-clip-text text-transparent">costing you money</span>
                </h1>
                
                <p className="text-xl md:text-2xl text-zinc-400 mb-12 leading-relaxed max-w-2xl mx-auto">
                  Get AI-powered insights in 8 seconds. Find hidden revenue opportunities. Boost bookings 20-40%.
                </p>

                <form action={handleAnalyze} className="max-w-lg mx-auto mb-16">
                  <div className="flex flex-col sm:flex-row gap-3 bg-gradient-to-b from-zinc-900 to-zinc-950 p-1 rounded-xl border border-zinc-800 hover:border-violet-500/50 transition-colors">
                    <input
                      name="url"
                      type="url"
                      placeholder="https://yourbusiness.com"
                      className="flex-1 px-6 py-4 text-lg bg-transparent outline-none placeholder:text-zinc-600"
                      required
                    />
                    <button
                      type="submit"
                      disabled={isPending}
                      className="px-8 py-4 font-semibold text-lg rounded-lg bg-gradient-to-r from-violet-600 to-cyan-600 hover:from-violet-500 hover:to-cyan-500 flex items-center justify-center gap-x-2 disabled:opacity-70 transition-all active:scale-95 whitespace-nowrap"
                    >
                      {isPending ? (
                        <>
                          <span className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full" />
                          Analyzing...
                        </>
                      ) : (
                        <>Analyze Free <ArrowRight className="w-5 h-5" /></>
                      )}
                    </button>
                  </div>
                  <p className="text-sm text-zinc-500 mt-4">No credit card required. Results in 8 seconds.</p>
                </form>

                {error && (
                  <div className="bg-red-500/10 border border-red-500/50 rounded-xl p-4 text-red-300 text-sm mb-8">
                    {error}
                  </div>
                )}
              </div>

              {/* Trust Badges */}
              <div className="flex flex-wrap justify-center gap-8 text-center text-sm text-zinc-400 pt-12 border-t border-zinc-800">
                <div>
                  <div className="font-bold text-white text-lg">847</div>
                  <div>Teardowns Completed</div>
                </div>
                <div>
                  <div className="font-bold text-white text-lg">+28%</div>
                  <div>Avg Booking Increase</div>
                </div>
                <div>
                  <div className="font-bold text-white text-lg">4.9★</div>
                  <div>Client Rating</div>
                </div>
              </div>
            </div>

            {/* Features Section */}
            <section className="max-w-screen-2xl mx-auto px-6 py-20 border-t border-zinc-800">
              <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">What You Get</h2>
              
              <div className="grid md:grid-cols-3 gap-8 mb-16">
                <div className="group p-8 rounded-2xl border border-zinc-800 hover:border-violet-500/50 bg-gradient-to-br from-zinc-900/50 to-transparent transition-all">
                  <Search className="w-10 h-10 text-violet-400 mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Homepage Score</h3>
                  <p className="text-zinc-400">AI analyzes images, CTAs, design, and mobile-friendliness. Benchmarked against 10K+ high-performing sites.</p>
                </div>

                <div className="group p-8 rounded-2xl border border-zinc-800 hover:border-cyan-500/50 bg-gradient-to-br from-zinc-900/50 to-transparent transition-all">
                  <ShieldCheck className="w-10 h-10 text-cyan-400 mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Trust Score</h3>
                  <p className="text-zinc-400">Evaluates trust signals: phone numbers, reviews, certifications, page speed, and schema markup.</p>
                </div>

                <div className="group p-8 rounded-2xl border border-zinc-800 hover:border-violet-500/50 bg-gradient-to-br from-zinc-900/50 to-transparent transition-all">
                  <TrendingUp className="w-10 h-10 text-violet-400 mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Booking Friction</h3>
                  <p className="text-zinc-400">Friction score (1-10). Lower = easier to book. Identifies what's stopping customers from calling or booking.</p>
                </div>

                <div className="group p-8 rounded-2xl border border-zinc-800 hover:border-cyan-500/50 bg-gradient-to-br from-zinc-900/50 to-transparent transition-all">
                  <AlertCircle className="w-10 h-10 text-orange-400 mb-4" />
                  <h3 className="text-xl font-semibold mb-3">SEO Mistakes</h3>
                  <p className="text-zinc-400">Missing alt text, thin pages, no schema, buried CTAs. Prioritized by revenue impact.</p>
                </div>

                <div className="group p-8 rounded-2xl border border-zinc-800 hover:border-violet-500/50 bg-gradient-to-br from-zinc-900/50 to-transparent transition-all">
                  <MousePointer className="w-10 h-10 text-emerald-400 mb-4" />
                  <h3 className="text-xl font-semibold mb-3">CTA Opportunities</h3>
                  <p className="text-zinc-400">Missing booking buttons, click-to-call, forms above fold, testimonials, urgency elements.</p>
                </div>

                <div className="group p-8 rounded-2xl border border-zinc-800 hover:border-cyan-500/50 bg-gradient-to-br from-zinc-900/50 to-transparent transition-all">
                  <Sparkles className="w-10 h-10 text-violet-400 mb-4" />
                  <h3 className="text-xl font-semibold mb-3">AI Rewrite</h3>
                  <p className="text-zinc-400">AI-optimized homepage copy designed to convert. Before/after comparison with actionable changes.</p>
                </div>
              </div>
            </section>

            {/* How It Works Section */}
            <section className="max-w-screen-2xl mx-auto px-6 py-20 border-t border-zinc-800">
              <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">How It Works</h2>
              
              <div className="grid md:grid-cols-4 gap-8 mb-16">
                {[
                  { num: "1", title: "Enter URL", desc: "Paste your business website" },
                  { num: "2", title: "AI Analysis", desc: "Firecrawl scrapes & AI evaluates" },
                  { num: "3", title: "Get Results", desc: "Scores, insights, recommendations" },
                  { num: "4", title: "Upgrade", desc: "Full report, rewrite, or redesign" }
                ].map((step) => (
                  <div key={step.num} className="relative">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-violet-600 to-cyan-600 text-white font-bold mb-4 mx-auto">{step.num}</div>
                    <h3 className="text-lg font-semibold text-center mb-2">{step.title}</h3>
                    <p className="text-center text-zinc-400 text-sm">{step.desc}</p>
                  </div>
                ))}
              </div>

              <div className="text-center">
                <Link href="/how-it-works" className="inline-flex items-center gap-2 px-6 py-3 border border-zinc-700 hover:border-violet-500 rounded-lg font-semibold transition-colors">
                  Deep Dive <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </section>

            {/* Examples Section */}
            <section className="max-w-screen-2xl mx-auto px-6 py-20 border-t border-zinc-800">
              <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Real Results</h2>
              <p className="text-center text-zinc-400 mb-16 max-w-2xl mx-auto">See how businesses like yours used VibeTeardown to 3x their bookings</p>
              
              <div className="grid md:grid-cols-3 gap-8 mb-12">
                {[
                  { before: 42, after: 87, growth: "34% more calls" },
                  { before: 55, after: 91, growth: "28% more bookings" },
                  { before: 38, after: 84, growth: "19% conversion lift" }
                ].map((item, i) => (
                  <div key={i} className="p-8 rounded-2xl border border-zinc-800 bg-gradient-to-br from-zinc-900/50 to-transparent">
                    <div className="flex justify-between items-center mb-6">
                      <div>
                        <div className="text-sm text-zinc-500">Before</div>
                        <div className="text-3xl font-bold">{item.before}</div>
                      </div>
                      <ArrowRight className="w-6 h-6 text-violet-400" />
                      <div>
                        <div className="text-sm text-zinc-500">After</div>
                        <div className="text-3xl font-bold text-emerald-400">{item.after}</div>
                      </div>
                    </div>
                    <div className="text-center font-semibold text-cyan-400">{item.growth}</div>
                  </div>
                ))}
              </div>

              <div className="text-center">
                <Link href="/examples" className="inline-flex items-center gap-2 px-6 py-3 border border-zinc-700 hover:border-violet-500 rounded-lg font-semibold transition-colors">
                  See All Case Studies <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </section>

            {/* Pricing Preview */}
            <section className="max-w-screen-2xl mx-auto px-6 py-20 border-t border-zinc-800">
              <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Simple Pricing</h2>
              <p className="text-center text-zinc-400 mb-16 max-w-2xl mx-auto">Start free. Upgrade only when you're ready.</p>
              
              <div className="grid md:grid-cols-4 gap-6 mb-12">
                <div className="p-8 rounded-2xl border border-zinc-800 bg-zinc-900/50">
                  <h3 className="text-2xl font-bold mb-2">Free</h3>
                  <p className="text-zinc-400 text-sm mb-4">AI Teardown</p>
                  <div className="text-3xl font-bold mb-6">$0</div>
                  <button className="w-full py-2 bg-zinc-800 hover:bg-zinc-700 rounded-lg font-semibold transition-colors mb-6">Start Now</button>
                  <ul className="space-y-2 text-sm text-zinc-400">
                    <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" /> Scores & metrics</li>
                    <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" /> 4 SEO problems</li>
                    <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" /> AI rewrite</li>
                  </ul>
                </div>

                <div className="p-8 rounded-2xl border border-zinc-800 bg-zinc-900/50">
                  <h3 className="text-2xl font-bold mb-2">Full Report</h3>
                  <p className="text-zinc-400 text-sm mb-4">15-page PDF</p>
                  <div className="text-3xl font-bold mb-6">$149</div>
                  <button className="w-full py-2 bg-violet-600 hover:bg-violet-500 rounded-lg font-semibold transition-colors mb-6">Learn More</button>
                  <ul className="space-y-2 text-sm text-zinc-400">
                    <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" /> Everything free +</li>
                    <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" /> 15-page report</li>
                    <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" /> 30-min call</li>
                  </ul>
                </div>

                <div className="p-8 rounded-2xl border border-zinc-800 bg-zinc-900/50">
                  <h3 className="text-2xl font-bold mb-2">Rewrite</h3>
                  <p className="text-zinc-400 text-sm mb-4">Homepage copy</p>
                  <div className="text-3xl font-bold mb-6">$399</div>
                  <button className="w-full py-2 bg-violet-600 hover:bg-violet-500 rounded-lg font-semibold transition-colors mb-6">Learn More</button>
                  <ul className="space-y-2 text-sm text-zinc-400">
                    <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" /> Everything report +</li>
                    <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" /> Pro copy rewrite</li>
                    <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" /> 3 revisions</li>
                  </ul>
                </div>

                <div className="p-8 rounded-2xl border-2 border-violet-500 bg-gradient-to-br from-violet-600/10 to-cyan-600/10 relative">
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-violet-600 to-cyan-600 px-4 py-1 rounded-full text-sm font-semibold">POPULAR</div>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Redesign</h3>
                  <p className="text-zinc-400 text-sm mb-4">Full rebuild</p>
                  <div className="text-3xl font-bold mb-6">$799</div>
                  <button className="w-full py-2 bg-gradient-to-r from-violet-600 to-cyan-600 hover:from-violet-500 hover:to-cyan-500 rounded-lg font-semibold transition-colors mb-6">Learn More</button>
                  <ul className="space-y-2 text-sm text-zinc-400">
                    <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" /> Everything rewrite +</li>
                    <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" /> Full redesign</li>
                    <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" /> 30-day support</li>
                  </ul>
                </div>
              </div>

              <div className="text-center">
                <Link href="/pricing" className="inline-flex items-center gap-2 px-6 py-3 border border-zinc-700 hover:border-violet-500 rounded-lg font-semibold transition-colors">
                  View All Plans <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </section>

            {/* Final CTA */}
            <section className="max-w-screen-2xl mx-auto px-6 py-20 border-t border-zinc-800">
              <div className="bg-gradient-to-r from-violet-600/10 via-cyan-600/10 to-violet-600/10 border border-violet-500/20 rounded-3xl p-16 text-center">
                <h2 className="text-5xl md:text-6xl font-bold mb-6">Ready to 3x your bookings?</h2>
                <p className="text-xl text-zinc-400 mb-10 max-w-2xl mx-auto">Get your free AI teardown now. No credit card, no commitment. Results in 8 seconds.</p>
                <Link href="/" className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-violet-600 to-cyan-600 hover:from-violet-500 hover:to-cyan-500 rounded-lg font-semibold text-lg transition-all hover:shadow-lg hover:shadow-violet-500/25">
                  Start Free Teardown <ArrowRight className="w-6 h-6" />
                </Link>
              </div>
            </section>
          </>
        ) : (
          /* RESULTS DASHBOARD */
          <div className="max-w-screen-2xl mx-auto px-6 py-10 pt-32">
            <div className="flex justify-between items-end border-b border-zinc-800 pb-6 mb-10">
              <div>
                <h2 className="text-4xl font-semibold tracking-tight flex items-center gap-3">
                  Teardown for <span className="text-violet-400">{result.domain}</span>
                  <CheckCircle2 className="w-8 h-8 text-emerald-500" />
                </h2>
                {result.scrapedTitle && <p className="text-zinc-400">{result.scrapedTitle}</p>}
                <p className="text-zinc-500 flex items-center gap-1">
                  <Clock className="w-4 h-4" /> Completed in 2.1 seconds • AI powered
                </p>
              </div>
              <button onClick={reset} className="text-sm font-medium underline hover:text-violet-400">← Analyze another site</button>
            </div>

            {/* SCORES */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="bg-gradient-to-br from-zinc-900 to-transparent border border-zinc-800 rounded-2xl p-8">
                <div className="flex justify-between mb-6">
                  <div className="font-medium flex items-center gap-2"><Search className="w-5 h-5 text-violet-400" />Homepage Score</div>
                  <div className="text-5xl font-semibold text-emerald-400">{result.homepageScore}</div>
                </div>
                <div className="h-2 bg-zinc-800 rounded-full overflow-hidden">
                  <div className="h-2 bg-gradient-to-r from-emerald-400 to-violet-500" style={{ width: `${result.homepageScore}%` }} />
                </div>
              </div>

              <div className="bg-gradient-to-br from-zinc-900 to-transparent border border-zinc-800 rounded-2xl p-8">
                <div className="flex justify-between mb-6">
                  <div className="font-medium flex items-center gap-2"><ShieldCheck className="w-5 h-5 text-emerald-400" />Trust Score</div>
                  <div className="text-5xl font-semibold text-emerald-400">{result.trustScore}</div>
                </div>
                <div className="h-2 bg-zinc-800 rounded-full overflow-hidden">
                  <div className="h-2 bg-emerald-400" style={{ width: `${result.trustScore}%` }} />
                </div>
              </div>

              <div className="bg-gradient-to-br from-zinc-900 to-transparent border border-zinc-800 rounded-2xl p-8">
                <div className="flex justify-between mb-6">
                  <div className="font-medium flex items-center gap-2"><Clock className="w-5 h-5 text-amber-400" />Booking Friction</div>
                  <div className="text-5xl font-semibold text-amber-400">{result.bookingFriction}</div>
                </div>
                <div className="text-sm text-zinc-400">/10 (lower = better)</div>
              </div>
            </div>

            {/* INSIGHTS */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              <div className="bg-gradient-to-br from-zinc-900 to-transparent border border-zinc-800 rounded-2xl p-8">
                <h3 className="font-semibold text-red-400 mb-4 flex items-center gap-2"><AlertCircle className="w-5 h-5" />SEO Mistakes</h3>
                <ul className="space-y-3 text-sm">
                  {result.seoMistakes.map((item, i) => (
                    <li key={i} className="flex gap-2"><span className="text-red-400">•</span> {item}</li>
                  ))}
                </ul>
              </div>
              <div className="bg-gradient-to-br from-zinc-900 to-transparent border border-zinc-800 rounded-2xl p-8">
                <h3 className="font-semibold text-amber-400 mb-4 flex items-center gap-2"><MousePointer className="w-5 h-5" />Missed CTA Opportunities</h3>
                <ul className="space-y-3 text-sm">
                  {result.missedCtas.map((item, i) => (
                    <li key={i} className="flex gap-2"><span className="text-amber-400">•</span> {item}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* REWRITE */}
            <div className="bg-gradient-to-br from-zinc-900 to-transparent border border-zinc-800 rounded-2xl p-8 mb-12">
              <h3 className="font-semibold mb-6">Homepage Rewrite Suggestion</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <div className="uppercase text-xs text-red-400 mb-2">Before (yours)</div>
                  <div className="bg-zinc-800/50 p-6 rounded-xl text-sm">{result.beforeRewrite}</div>
                </div>
                <div>
                  <div className="uppercase text-xs text-emerald-400 mb-2">After (AI-optimized)</div>
                  <div className="bg-emerald-950/50 p-6 rounded-xl text-sm border border-emerald-800">{result.afterRewrite}</div>
                </div>
              </div>
            </div>

            {/* UPSELL */}
            <div className="border-2 border-violet-500 bg-gradient-to-r from-violet-950/30 to-cyan-950/30 rounded-3xl p-12 text-center mb-12">
              <h3 className="text-3xl font-semibold mb-8">Turn these insights into revenue</h3>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
                <Link href="/pricing" className="bg-zinc-900 border border-zinc-700 rounded-2xl p-6 hover:border-violet-400 transition">
                  Full Report<br/><span className="text-3xl font-semibold text-violet-400">$149</span>
                </Link>
                <Link href="/pricing" className="bg-zinc-900 border border-zinc-700 rounded-2xl p-6 hover:border-violet-400 transition">
                  Rewritten Copy<br/><span className="text-3xl font-semibold text-violet-400">$399</span>
                </Link>
                <Link href="/pricing" className="bg-zinc-900 border border-zinc-700 rounded-2xl p-6 hover:border-violet-400 transition">
                  Redesign<br/><span className="text-3xl font-semibold text-violet-400">$799</span>
                </Link>
                <Link href="/pricing" className="bg-zinc-900 border-2 border-violet-400 rounded-2xl p-6 hover:bg-violet-900/20 transition relative">
                  <div className="absolute -top-3 -right-3 bg-emerald-500 text-white text-xs px-3 py-1 rounded-full">POPULAR</div>
                  Monthly<br/><span className="text-3xl font-semibold text-violet-400">$299/mo</span>
                </Link>
              </div>
              <Link href="/pricing" className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-violet-600 to-cyan-600 hover:from-violet-500 hover:to-cyan-500 rounded-lg font-semibold transition-all">
                Explore All Plans <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        )}
      </main>

      <footer className="py-8 text-center text-xs text-zinc-500 border-t border-zinc-800">
        © 2026 VibeTeardown • Next.js 16 + Firecrawl AI
      </footer>
    </div>
  );
}
