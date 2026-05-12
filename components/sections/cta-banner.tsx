import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function CtaBanner() {
  return (
    <section
      aria-label="Call to action"
      className="relative isolate overflow-hidden bg-primary text-primary-foreground"
    >
      <div
        aria-hidden
        className="absolute inset-0 -z-10 opacity-30 animate-shimmer"
      />
      <div
        aria-hidden
        className="absolute -top-20 -right-20 h-72 w-72 rounded-full bg-accent/30 blur-3xl"
      />
      <div
        aria-hidden
        className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-accent/20 blur-3xl"
      />

      <div className="container py-20 md:py-24 text-center">
        <h2 className="font-heading text-4xl md:text-6xl">
          Ready for a Sparkling Home?
        </h2>
        <p className="mt-5 text-lg md:text-xl opacity-90 max-w-2xl mx-auto">
          Book in 60 seconds. Same-day slots often available — and every clean
          is backed by our 100% satisfaction guarantee.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Button asChild size="lg" variant="accent" className="group">
            <Link href="/booking">
              Book Your Cleaning
              <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="bg-transparent border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
          >
            <Link href="/contact">Talk to Us</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
