// app/actions.ts
"use server";

import { FirecrawlAppV1 } from "@mendable/firecrawl-js";
import { revalidatePath } from "next/cache";

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
  scrapedMarkdown?: string;
};

const firecrawl = new FirecrawlAppV1({
  apiKey: process.env.FIRECRAWL_API_KEY,
});

export async function analyzeWebsite(formData: FormData): Promise<AnalysisResult> {
  const url = formData.get("url") as string;
  if (!url) throw new Error("URL is required");

  // Validate URL format
  try {
    new URL(url);
  } catch {
    throw new Error("Invalid URL format. Please enter a valid website URL.");
  }

  console.log("🔥 Scraping live site:", url);

  let scrapeResult;
  try {
    scrapeResult = await firecrawl.scrapeUrl(url, {
      formats: ["markdown"],
    });
  } catch (err: any) {
    console.error("Firecrawl error:", err);
    throw new Error("Could not scrape the website. Please try a public URL without authentication requirements.");
  }

  if (!scrapeResult?.success) {
    throw new Error("Failed to retrieve website content. Try another URL.");
  }

  const domain = new URL(url).hostname.replace("www.", "");
  const markdown = (scrapeResult as any).markdown || "";
  const content = markdown.toLowerCase();

  // Generate deterministic but varied scores based on content analysis
  const hash = domain.split("").reduce((a, b) => a + b.charCodeAt(0), 0);
  
  // Analyze content for intelligent scoring
  const hasImages = markdown.includes("![");
  const hasAltText = markdown.includes('alt=') || markdown.includes('alt:"');
  const hasCTA = content.includes("book") || content.includes("call") || content.includes("contact") || content.includes("schedule");
  const hasReviews = content.includes("review") || content.includes("rating") || content.includes("star") || content.includes("testimonial");
  const hasPhoneNumber = /\(\d{3}\)\s?\d{3}-\d{4}|^\+?1?\s?\d{3}[-.\s]?\d{3}[-.\s]?\d{4}/.test(markdown);
  const hasSchema = markdown.includes("schema") || markdown.includes("structured");
  const isResponsive = content.includes("mobile") || content.includes("responsive");
  
  // Calculate more intelligent scores
  let homepageScore = 50;
  if (hasImages && hasAltText) homepageScore += 15;
  if (hasCTA) homepageScore += 15;
  if (hasReviews) homepageScore += 10;
  if (isResponsive) homepageScore += 10;
  homepageScore += (hash % 10);
  homepageScore = Math.min(95, Math.max(35, homepageScore));

  let trustScore = 55;
  if (hasPhoneNumber) trustScore += 15;
  if (hasReviews) trustScore += 15;
  if (hasSchema) trustScore += 10;
  if (markdown.length > 2000) trustScore += 5;
  trustScore += (hash % 8);
  trustScore = Math.min(98, Math.max(40, trustScore));

  const bookingFriction = Number((
    (hasPhoneNumber ? 2 : 3.5) +
    (hasCTA ? -0.5 : 0.5) +
    (hasReviews ? -0.3 : 0) +
    (hash % 2)
  ).toFixed(1));

  // Generate intelligent SEO mistakes
  const seoMistakes: string[] = [];
  if (hasImages && !hasAltText) {
    seoMistakes.push("Images missing ALT text - hurting accessibility & SEO");
  } else if (!hasImages) {
    seoMistakes.push("No images detected - add visual content for engagement");
  }
  
  if (!hasSchema) {
    seoMistakes.push("No structured data/schema markup found");
  }
  
  if (!content.includes("local")) {
    seoMistakes.push("Missing local business keywords in copy");
  }
  
  if (markdown.length < 500) {
    seoMistakes.push("Homepage content is thin - expand with more details");
  } else if (!content.includes("service") && !content.includes("solutions")) {
    seoMistakes.push("Service descriptions could be more prominent");
  }

  // Generate intelligent CTA insights
  const missedCtas: string[] = [];
  if (!hasPhoneNumber) {
    missedCtas.push("Phone number not visible - add click-to-call capability");
  }
  
  if (!hasCTA) {
    missedCtas.push("No booking/scheduling CTA detected above fold");
  }
  
  if (!hasReviews) {
    missedCtas.push("No social proof/reviews section found");
  }
  
  if (!content.includes("form") && !content.includes("contact")) {
    missedCtas.push("Contact form not prominent or hard to find");
  }

  const beforeRewrite = markdown.slice(0, 180) || "Welcome to our business...";
  const rewriteSuggestion = `🚀 ${domain}: Book ${domain.charAt(0).toUpperCase() + domain.slice(1)} services today. Local experts ready for same-day appointments. ⭐ ${hasReviews ? "Join hundreds of satisfied customers." : "Trusted by your neighbors."}`;

  const result: AnalysisResult = {
    homepageScore,
    trustScore,
    bookingFriction: Math.max(1, Math.min(10, bookingFriction)),
    seoMistakes: seoMistakes.slice(0, 4),
    missedCtas: missedCtas.slice(0, 4),
    beforeRewrite,
    afterRewrite: rewriteSuggestion,
    domain,
    scrapedTitle: (scrapeResult as any).title || undefined,
    scrapedMarkdown: markdown.slice(0, 800) || undefined,
  };

  revalidatePath("/");
  return result;
}