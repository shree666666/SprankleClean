import type { Metadata } from "next";
import { PricingTiers } from "@/components/sections/pricing-tiers";
import { QuoteCalculator } from "@/components/sections/quote-calculator";
import { PricingFaq } from "@/components/sections/pricing-faq";
import { FadeIn } from "@/components/fade-in";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Transparent, all-inclusive pricing for premium home and commercial cleaning. Compare tiers and get an instant estimate.",
  openGraph: {
    title: "Pricing | SparkleClean",
    description:
      "Transparent cleaning prices in Sydney. Three flat-rate tiers plus an instant quote calculator.",
    type: "website",
  },
};

export default function PricingPage() {
  return (
    <>
      <section className="container py-12 md:py-16">
        <FadeIn>
          <header className="max-w-2xl mb-10 md:mb-12">
            <p className="uppercase tracking-[0.25em] text-accent text-xs font-medium mb-3">
              Transparent pricing
            </p>
            <h1 className="font-heading text-4xl md:text-5xl text-primary">
              Pricing
            </h1>
            <p className="mt-4 text-muted-foreground">
              Flat-rate, all-inclusive plans. Pick the tier that fits, or use
              our calculator below for a custom estimate.
            </p>
          </header>
        </FadeIn>

        <FadeIn delay={100}>
          <PricingTiers />
        </FadeIn>
      </section>

      <section className="container py-12 md:py-16">
        <FadeIn>
          <header className="max-w-2xl mb-8">
            <h2 className="font-heading text-3xl md:text-4xl text-primary">
              Build your own quote
            </h2>
            <p className="mt-3 text-muted-foreground">
              Tell us about your space — your estimate updates live as you
              adjust.
            </p>
          </header>
        </FadeIn>
        <FadeIn delay={100}>
          <QuoteCalculator />
        </FadeIn>
      </section>

      <section className="container py-12 md:py-16 max-w-3xl">
        <FadeIn>
          <header className="mb-8">
            <h2 className="font-heading text-3xl md:text-4xl text-primary">
              Pricing FAQ
            </h2>
            <p className="mt-3 text-muted-foreground">
              The most common questions we get about how our pricing works.
            </p>
          </header>
        </FadeIn>
        <FadeIn delay={100}>
          <PricingFaq />
        </FadeIn>
      </section>
    </>
  );
}
