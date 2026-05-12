import Image from "next/image";

const TEAM = [
  {
    name: "Maya Thompson",
    role: "Founder & CEO",
    funFact: "Can fold a fitted sheet in under 8 seconds.",
    seed: "maya",
  },
  {
    name: "Jordan Lee",
    role: "Operations Manager",
    funFact: "Owns more vacuum cleaners than shoes (12 vs 9).",
    seed: "jordan",
  },
  {
    name: "Priya Sharma",
    role: "Lead Trainer",
    funFact: "Once cleaned an entire 4BR home in 3h 12m. Record holder.",
    seed: "priya",
  },
  {
    name: "Marcus Chen",
    role: "Commercial Lead",
    funFact: "Plays drums in a Bondi cover band on weekends.",
    seed: "marcus",
  },
  {
    name: "Olivia Reyes",
    role: "Eco Supplies Lead",
    funFact: "Grows her own herbs for our DIY citrus spray.",
    seed: "olivia",
  },
  {
    name: "Sam Patel",
    role: "Customer Care",
    funFact: "Speaks four languages — English, Hindi, Spanish, Mandarin.",
    seed: "sam",
  },
];

export function TeamGrid() {
  return (
    <section aria-label="Meet the team" className="container py-16 md:py-24">
      <header className="text-center max-w-2xl mx-auto mb-12">
        <p className="uppercase tracking-[0.25em] text-accent text-xs font-medium mb-3">
          Real humans
        </p>
        <h2 className="font-heading text-3xl md:text-5xl text-primary">
          Meet the team
        </h2>
        <p className="mt-4 text-muted-foreground">
          The faces behind your spotless space.
        </p>
      </header>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {TEAM.map((m) => (
          <article
            key={m.name}
            className="group rounded-xl border bg-card overflow-hidden hover:shadow-lg transition-all duration-300"
          >
            <div className="relative aspect-[4/5] overflow-hidden bg-muted">
              <Image
                src={`https://i.pravatar.cc/600?img=${
                  ["12", "33", "47", "60", "26", "15"][TEAM.indexOf(m)]
                }`}
                alt={`Portrait of ${m.name}`}
                fill
                loading="lazy"
                sizes="(min-width: 1024px) 400px, (min-width: 640px) 50vw, 100vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div
                aria-hidden
                className="absolute inset-0 bg-gradient-to-t from-brand-ink/70 via-brand-ink/0 to-transparent"
              />
              <div className="absolute bottom-0 inset-x-0 p-4 text-brand-cream">
                <h3 className="font-heading text-xl">{m.name}</h3>
                <p className="text-sm text-brand-cream/80">{m.role}</p>
              </div>
            </div>
            <div className="p-5 border-t border-border">
              <p className="text-xs uppercase tracking-wide text-accent font-semibold mb-1">
                Fun fact
              </p>
              <p className="text-sm text-foreground/85 leading-relaxed">
                {m.funFact}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
