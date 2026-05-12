import Image from "next/image";
import { Sparkles } from "lucide-react";

export function AboutHero() {
  return (
    <section
      aria-label="About hero"
      className="relative isolate overflow-hidden bg-gradient-to-b from-background to-primary/5"
    >
      <div
        aria-hidden
        className="absolute -top-32 -right-32 -z-10 h-[28rem] w-[28rem] rounded-full bg-accent/20 blur-3xl"
      />
      <div
        aria-hidden
        className="absolute -bottom-32 -left-32 -z-10 h-[28rem] w-[28rem] rounded-full bg-primary/20 blur-3xl"
      />

      <div className="container py-16 md:py-24">
        <div className="grid lg:grid-cols-[1fr_1.1fr] gap-10 lg:gap-16 items-center">
          <div>
            <p className="uppercase tracking-[0.25em] text-accent text-xs md:text-sm font-medium mb-4 flex items-center gap-2">
              <Sparkles className="h-4 w-4" aria-hidden /> About SparkleClean
            </p>
            <h1 className="font-heading text-4xl md:text-6xl text-primary leading-[1.05]">
              Sydney&apos;s Most{" "}
              <span className="relative inline-block">
                <span className="relative z-10">Trusted</span>
                <span
                  aria-hidden
                  className="absolute inset-x-0 bottom-1.5 h-3 bg-accent/40 -z-0 rounded-sm"
                />
              </span>{" "}
              Cleaning Team
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-prose">
              We&apos;re a tight-knit team of trained, vetted, and genuinely
              friendly professionals — building a cleaning company we&apos;d
              want to hire ourselves.
            </p>
          </div>

          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl ring-1 ring-border">
            <Image
              src="https://picsum.photos/seed/sparkleclean-team/1200/900"
              alt="The SparkleClean team standing together in uniform"
              fill
              priority
              sizes="(min-width: 1024px) 600px, 100vw"
              className="object-cover"
            />
            <div
              aria-hidden
              className="absolute inset-0 bg-gradient-to-t from-brand-ink/40 via-transparent to-transparent"
            />
            <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-3 text-brand-cream">
              <p className="font-heading text-lg drop-shadow">
                The SparkleClean crew
              </p>
              <span className="text-xs bg-brand-ink/60 backdrop-blur px-2 py-1 rounded-full">
                Photo placeholder
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
