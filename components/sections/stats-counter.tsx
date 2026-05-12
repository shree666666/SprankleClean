import { CountUp } from "@/components/count-up";

const STATS = [
  { to: 500, suffix: "+", label: "Happy Clients" },
  { to: 10000, suffix: "+", label: "Cleans Completed" },
  { to: 4.9, suffix: "★", label: "Average Rating", decimals: 1 },
  { to: 5, suffix: "", label: "Years in Business" },
];

export function StatsCounter() {
  return (
    <section
      aria-label="Stats"
      className="bg-primary text-primary-foreground relative isolate overflow-hidden"
    >
      <div
        aria-hidden
        className="absolute -top-20 right-0 h-72 w-72 rounded-full bg-accent/20 blur-3xl"
      />
      <div
        aria-hidden
        className="absolute -bottom-20 left-0 h-72 w-72 rounded-full bg-accent/10 blur-3xl"
      />

      <div className="container py-16 md:py-20">
        <dl className="grid grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-6 text-center">
          {STATS.map((s) => (
            <div key={s.label}>
              <dd className="font-heading text-5xl md:text-6xl text-accent">
                <CountUp
                  to={s.to}
                  suffix={s.suffix}
                  decimals={s.decimals ?? 0}
                />
              </dd>
              <dt className="mt-2 text-sm md:text-base text-primary-foreground/85 uppercase tracking-wider">
                {s.label}
              </dt>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
