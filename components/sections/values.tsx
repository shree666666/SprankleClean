import { Clock, Leaf, Eye, ShieldCheck } from "lucide-react";

const VALUES = [
  {
    Icon: Clock,
    title: "Reliability",
    desc: "We show up on time, every time — and notify you the moment anything changes.",
  },
  {
    Icon: Leaf,
    title: "Eco-Friendly",
    desc: "Plant-based, non-toxic products that are safer for kids, pets, and the planet.",
  },
  {
    Icon: Eye,
    title: "Attention to Detail",
    desc: "A 40-point checklist on every visit so consistency never drifts.",
  },
  {
    Icon: ShieldCheck,
    title: "Fully Insured",
    desc: "$20M public liability cover and police-checked, bonded staff.",
  },
];

export function Values() {
  return (
    <section
      aria-label="Our values"
      className="bg-card/40 border-y border-border"
    >
      <div className="container py-16 md:py-24">
        <header className="text-center max-w-2xl mx-auto mb-12">
          <p className="uppercase tracking-[0.25em] text-accent text-xs font-medium mb-3">
            What we stand for
          </p>
          <h2 className="font-heading text-3xl md:text-5xl text-primary">
            Our values
          </h2>
          <p className="mt-4 text-muted-foreground">
            The promises behind every clean — printed on the back of our team
            t-shirts.
          </p>
        </header>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {VALUES.map(({ Icon, title, desc }) => (
            <article
              key={title}
              className="rounded-xl border bg-card p-6 hover:shadow-md transition-shadow"
            >
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Icon className="h-6 w-6" aria-hidden />
              </div>
              <h3 className="mt-4 font-heading text-xl text-primary">
                {title}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                {desc}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
