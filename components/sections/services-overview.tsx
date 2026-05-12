import Link from "next/link";
import {
  Home,
  Building2,
  KeyRound,
  Sparkles,
  PanelsTopLeft,
  Layers,
  ArrowRight,
} from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";

const SERVICES = [
  {
    Icon: Home,
    title: "House Cleaning",
    desc: "Weekly, fortnightly, or one-off tidies that keep your home spotless.",
  },
  {
    Icon: Building2,
    title: "Office Cleaning",
    desc: "After-hours commercial cleaning tailored to your operating schedule.",
  },
  {
    Icon: KeyRound,
    title: "End of Lease",
    desc: "Bond-back guaranteed deep cleans that meet agent standards.",
  },
  {
    Icon: Sparkles,
    title: "Deep Clean",
    desc: "Top-to-bottom reset — baseboards, vents, and behind appliances.",
  },
  {
    Icon: PanelsTopLeft,
    title: "Window Cleaning",
    desc: "Streak-free interior + exterior windows, screens, and tracks.",
  },
  {
    Icon: Layers,
    title: "Carpet Cleaning",
    desc: "Hot-water extraction that lifts stains, dust mites, and odours.",
  },
];

export function ServicesOverview() {
  return (
    <section aria-label="Services overview" className="container py-20 md:py-28">
      <header className="text-center max-w-2xl mx-auto mb-14">
        <p className="uppercase tracking-[0.25em] text-accent text-xs font-medium mb-3">
          What we do
        </p>
        <h2 className="font-heading text-4xl md:text-5xl text-primary">
          Cleaning for every kind of space
        </h2>
        <p className="mt-4 text-muted-foreground">
          From weekly upkeep to once-a-year deep resets — we have a plan for
          every home and every office.
        </p>
      </header>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {SERVICES.map(({ Icon, title, desc }) => (
          <Card
            key={title}
            className="group relative overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
          >
            <CardHeader>
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                <Icon className="h-6 w-6" aria-hidden />
              </div>
              <CardTitle className="text-primary">{title}</CardTitle>
              <CardDescription className="mt-2">{desc}</CardDescription>
            </CardHeader>
            <CardContent>
              <Link
                href="/services"
                className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:text-accent transition-colors"
              >
                Learn more
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
