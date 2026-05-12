import { CalendarCheck, Sparkles, Sofa } from "lucide-react";

const STEPS = [
  {
    n: "01",
    Icon: CalendarCheck,
    title: "Book Online",
    desc: "Pick your service, date, and time in under 60 seconds. Instant confirmation.",
  },
  {
    n: "02",
    Icon: Sparkles,
    title: "We Clean",
    desc: "Our vetted, trained team shows up on time with eco-friendly supplies.",
  },
  {
    n: "03",
    Icon: Sofa,
    title: "You Relax",
    desc: "Walk into a spotless space. Not happy? We re-clean within 24 hours, free.",
  },
];

export function HowItWorks() {
  return (
    <section
      aria-label="How it works"
      className="bg-card/40 border-y border-border"
    >
      <div className="container py-20 md:py-28">
        <header className="text-center max-w-2xl mx-auto mb-14">
          <p className="uppercase tracking-[0.25em] text-accent text-xs font-medium mb-3">
            How it works
          </p>
          <h2 className="font-heading text-4xl md:text-5xl text-primary">
            Three simple steps
          </h2>
          <p className="mt-4 text-muted-foreground">
            No long forms, no surprise fees, no awkward sales calls.
          </p>
        </header>

        <ol className="relative grid md:grid-cols-3 gap-10 md:gap-6">
          {/* Connecting dashed line on desktop */}
          <div
            aria-hidden
            className="hidden md:block absolute top-12 left-[16%] right-[16%] border-t-2 border-dashed border-primary/30"
          />

          {STEPS.map(({ n, Icon, title, desc }) => (
            <li
              key={n}
              className="relative text-center flex flex-col items-center"
            >
              <div className="relative z-10 flex h-24 w-24 items-center justify-center rounded-full bg-background border-2 border-primary text-primary shadow-sm">
                <Icon className="h-10 w-10" aria-hidden />
                <span className="absolute -top-2 -right-2 inline-flex h-8 w-8 items-center justify-center rounded-full bg-accent text-accent-foreground text-xs font-bold font-heading">
                  {n}
                </span>
              </div>
              <h3 className="mt-6 font-heading text-2xl text-primary">
                {title}
              </h3>
              <p className="mt-3 text-muted-foreground max-w-xs">{desc}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
