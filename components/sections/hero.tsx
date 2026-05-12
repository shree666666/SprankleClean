import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

// Pre-computed particle positions so we don't reshuffle each render.
const PARTICLES = [
  { left: "5%",  size: 6,  delay: 0,    duration: 18, alt: false },
  { left: "12%", size: 4,  delay: 3,    duration: 22, alt: true  },
  { left: "20%", size: 8,  delay: 1.5,  duration: 20, alt: false },
  { left: "28%", size: 5,  delay: 6,    duration: 24, alt: true  },
  { left: "36%", size: 7,  delay: 2,    duration: 19, alt: false },
  { left: "44%", size: 3,  delay: 4.5,  duration: 26, alt: true  },
  { left: "52%", size: 9,  delay: 0.5,  duration: 21, alt: false },
  { left: "60%", size: 4,  delay: 5,    duration: 23, alt: true  },
  { left: "68%", size: 6,  delay: 1,    duration: 20, alt: false },
  { left: "76%", size: 5,  delay: 7,    duration: 25, alt: true  },
  { left: "84%", size: 8,  delay: 2.5,  duration: 18, alt: false },
  { left: "92%", size: 4,  delay: 4,    duration: 22, alt: true  },
  { left: "16%", size: 3,  delay: 8,    duration: 27, alt: false },
  { left: "40%", size: 6,  delay: 9,    duration: 19, alt: true  },
  { left: "64%", size: 5,  delay: 6.5,  duration: 24, alt: false },
  { left: "88%", size: 7,  delay: 3.5,  duration: 21, alt: true  },
];

export function Hero() {
  return (
    <section
      aria-label="Hero"
      className="relative isolate overflow-hidden min-h-[92vh] flex items-center bg-gradient-to-b from-background via-background to-primary/5"
    >
      {/* Animated background — soft shimmer wash */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 animate-shimmer opacity-60"
      />

      {/* Animated background — floating particles */}
      <div aria-hidden className="absolute inset-0 -z-10 overflow-hidden">
        {PARTICLES.map((p, i) => (
          <span
            key={i}
            className={`absolute bottom-[-10vh] rounded-full bg-accent/40 blur-[1px] ${
              p.alt ? "animate-float-alt" : "animate-float"
            }`}
            style={{
              left: p.left,
              width: `${p.size}px`,
              height: `${p.size}px`,
              animationDelay: `${p.delay}s`,
              animationDuration: `${p.duration}s`,
            }}
          />
        ))}
      </div>

      {/* Subtle gold glow blob */}
      <div
        aria-hidden
        className="absolute -top-32 -right-32 -z-10 h-[28rem] w-[28rem] rounded-full bg-accent/20 blur-3xl"
      />
      <div
        aria-hidden
        className="absolute -bottom-32 -left-32 -z-10 h-[28rem] w-[28rem] rounded-full bg-primary/20 blur-3xl"
      />

      <div className="container py-20 md:py-28">
        <div className="max-w-3xl mx-auto text-center">
          <p className="uppercase tracking-[0.25em] text-accent text-xs md:text-sm font-medium mb-5">
            Premium home & commercial cleaning
          </p>
          <h1 className="font-heading text-5xl md:text-7xl text-primary leading-[1.05]">
            Your Space,{" "}
            <span className="relative inline-block">
              <span className="relative z-10">Perfectly Clean</span>
              <span
                aria-hidden
                className="absolute inset-x-0 bottom-2 h-3 bg-accent/40 -z-0 rounded-sm"
              />
            </span>
            .
          </h1>
          <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Trained pros, eco-friendly products, and a 100% satisfaction
            guarantee. Book in 60 seconds — we&apos;ll handle the rest.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Button asChild size="lg" variant="accent" className="group">
              <Link href="/contact">
                Get a Free Quote
                <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/services">See Our Services</Link>
            </Button>
          </div>

          <p className="mt-8 text-sm text-muted-foreground">
            ✦ Same-day bookings often available — call{" "}
            <a
              href="tel:0255500123"
              className="text-primary font-medium hover:underline"
            >
              (02) 5550 0123
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
