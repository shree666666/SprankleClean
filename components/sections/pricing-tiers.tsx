import Link from "next/link";
import { Check, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface Tier {
  name: string;
  price: number;
  blurb: string;
  features: string[];
  popular?: boolean;
  cta: string;
  href: string;
}

const TIERS: Tier[] = [
  {
    name: "Basic",
    price: 129,
    blurb: "Quick refresh for tidy homes that just need the essentials covered.",
    features: [
      "Up to 1,500 sq ft",
      "Kitchen surfaces & sink",
      "Bathrooms — toilet, shower, mirror",
      "Dust + vacuum main rooms",
      "Mop hard floors",
      "Eco-friendly products",
    ],
    cta: "Start with Basic",
    href: "/booking?tier=basic",
  },
  {
    name: "Standard",
    price: 189,
    blurb: "Our most-booked plan — the right balance of thorough and affordable.",
    features: [
      "Up to 2,500 sq ft",
      "Everything in Basic",
      "Interior windows",
      "Inside fridge / oven (rotating)",
      "Light fittings & switches",
      "Linen change on request",
      "Priority booking window",
    ],
    popular: true,
    cta: "Choose Standard",
    href: "/booking?tier=standard",
  },
  {
    name: "Premium",
    price: 259,
    blurb: "White-glove care for larger homes or properties that deserve extra love.",
    features: [
      "Up to 3,500 sq ft",
      "Everything in Standard",
      "Baseboards, vents & door frames",
      "Inside all cabinets & drawers",
      "Balcony / patio sweep",
      "Carpet vacuum + deodorise",
      "Dedicated lead cleaner",
    ],
    cta: "Go Premium",
    href: "/booking?tier=premium",
  },
];

export function PricingTiers() {
  return (
    <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
      {TIERS.map((t) => (
        <article
          key={t.name}
          className={cn(
            "relative flex flex-col rounded-2xl border bg-card p-8 shadow-sm transition-all duration-300",
            t.popular
              ? "border-primary ring-2 ring-primary shadow-xl lg:-translate-y-4 lg:scale-[1.02] bg-gradient-to-b from-card via-card to-primary/[0.04]"
              : "hover:shadow-md hover:-translate-y-1"
          )}
        >
          {t.popular && (
            <div className="absolute -top-3 left-1/2 -translate-x-1/2">
              <span className="inline-flex items-center gap-1 rounded-full bg-accent text-accent-foreground px-3 py-1 text-xs font-bold uppercase tracking-wider shadow-md">
                <Sparkles className="h-3 w-3" aria-hidden />
                Most Popular
              </span>
            </div>
          )}

          <header>
            <h3 className="font-heading text-2xl text-primary">{t.name}</h3>
            <p className="mt-2 text-sm text-muted-foreground min-h-[3rem]">
              {t.blurb}
            </p>
            <p className="mt-6 flex items-baseline gap-1">
              <span className="text-sm text-muted-foreground">from</span>
              <span className="font-heading text-5xl text-foreground">
                ${t.price}
              </span>
              <span className="text-sm text-muted-foreground">AUD / visit</span>
            </p>
          </header>

          <ul className="mt-8 space-y-3 text-sm flex-1">
            {t.features.map((f) => (
              <li key={f} className="flex items-start gap-2">
                <Check
                  className="h-4 w-4 mt-0.5 text-accent shrink-0"
                  aria-hidden
                />
                <span className="text-foreground/85">{f}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8">
            <Button
              asChild
              size="lg"
              variant={t.popular ? "accent" : "outline"}
              className="w-full"
            >
              <Link href={t.href}>{t.cta}</Link>
            </Button>
          </div>
        </article>
      ))}
    </div>
  );
}
