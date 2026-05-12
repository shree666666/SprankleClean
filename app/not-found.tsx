import Link from "next/link";
import type { Metadata } from "next";
import { Home, ArrowLeft, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Page not found",
  description:
    "The page you were looking for doesn't exist — but we can still help you book a sparkling clean.",
};

export default function NotFound() {
  return (
    <section
      aria-label="Page not found"
      className="relative isolate overflow-hidden min-h-[80vh] flex items-center"
    >
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-gradient-to-b from-background to-primary/5"
      />
      <div
        aria-hidden
        className="absolute -top-24 -right-24 -z-10 h-96 w-96 rounded-full bg-accent/20 blur-3xl"
      />
      <div
        aria-hidden
        className="absolute -bottom-24 -left-24 -z-10 h-96 w-96 rounded-full bg-primary/20 blur-3xl"
      />

      <div className="container py-16 text-center max-w-2xl">
        <p className="inline-flex items-center gap-2 uppercase tracking-[0.25em] text-accent text-xs font-medium">
          <Sparkles className="h-4 w-4" aria-hidden /> 404 — Lost in the sparkle
        </p>
        <h1 className="mt-4 font-heading text-6xl md:text-8xl text-primary leading-none">
          4<span className="text-accent">✦</span>4
        </h1>
        <h2 className="mt-6 font-heading text-3xl md:text-4xl text-primary">
          Hmm, this page is squeaky-clean gone.
        </h2>
        <p className="mt-4 text-muted-foreground max-w-md mx-auto">
          The page you&apos;re looking for either moved, was retired, or never
          existed. Let&apos;s get you somewhere useful.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <Button asChild size="lg" variant="accent">
            <Link href="/">
              <Home className="h-4 w-4 mr-1" aria-hidden /> Back to home
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href="/services">
              <ArrowLeft className="h-4 w-4 mr-1" aria-hidden /> Browse services
            </Link>
          </Button>
        </div>

        <p className="mt-10 text-xs text-muted-foreground">
          If you got here from a link inside our site,{" "}
          <Link href="/contact" className="text-primary hover:underline">
            let us know
          </Link>{" "}
          so we can fix it.
        </p>
      </div>
    </section>
  );
}
