import { Star } from "lucide-react";

const TESTIMONIALS = [
  {
    name: "Olivia M.",
    role: "Bondi, NSW",
    quote:
      "The team arrived right on time and left my apartment immaculate. The eco-products smell wonderful too.",
  },
  {
    name: "James K.",
    role: "Surry Hills, NSW",
    quote:
      "Best end-of-lease clean I've ever booked. Got my full bond back without a single agent comment.",
  },
  {
    name: "Priya S.",
    role: "Parramatta, NSW",
    quote:
      "Weekly visits have been a game-changer. Friendly staff, consistent quality, fair pricing.",
  },
  {
    name: "Liam T.",
    role: "Manly, NSW",
    quote:
      "They tackled a post-renovation mess I'd been dreading for weeks. Two pros, four hours, spotless.",
  },
  {
    name: "Chloe R.",
    role: "Newtown, NSW",
    quote:
      "Our office hadn't felt this fresh since move-in day. Easy to schedule and very professional.",
  },
];

function Stars() {
  return (
    <div className="flex items-center gap-0.5 text-accent" aria-label="5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className="h-4 w-4 fill-accent" aria-hidden />
      ))}
    </div>
  );
}

function Card({ t }: { t: (typeof TESTIMONIALS)[number] }) {
  return (
    <figure className="w-[320px] md:w-[400px] shrink-0 rounded-xl bg-card border border-border p-6 shadow-sm">
      <Stars />
      <blockquote className="mt-4 text-foreground/90 leading-relaxed">
        &ldquo;{t.quote}&rdquo;
      </blockquote>
      <figcaption className="mt-5 text-sm">
        <span className="font-medium text-primary">{t.name}</span>
        <span className="text-muted-foreground"> — {t.role}</span>
      </figcaption>
    </figure>
  );
}

export function Testimonials() {
  // Duplicate the list so the CSS marquee loops seamlessly.
  const looped = [...TESTIMONIALS, ...TESTIMONIALS];

  return (
    <section aria-label="Testimonials" className="container py-20 md:py-28">
      <header className="text-center max-w-2xl mx-auto mb-14">
        <p className="uppercase tracking-[0.25em] text-accent text-xs font-medium mb-3">
          Real reviews
        </p>
        <h2 className="font-heading text-4xl md:text-5xl text-primary">
          Loved by thousands of households
        </h2>
        <p className="mt-4 text-muted-foreground">
          Averaging 4.9 stars across Google and ProductReview.
        </p>
      </header>

      <div className="relative overflow-hidden pause-on-hover">
        {/* Edge fade masks */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-background to-transparent z-10"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-background to-transparent z-10"
        />

        <div className="flex w-max gap-6 animate-marquee">
          {looped.map((t, i) => (
            <Card key={`${t.name}-${i}`} t={t} />
          ))}
        </div>
      </div>
    </section>
  );
}
