import { ShieldCheck, Star, Leaf, Clock } from "lucide-react";

const BADGES = [
  { Icon: ShieldCheck, label: "Insured & Bonded" },
  { Icon: Star, label: "5-Star Rated" },
  { Icon: Leaf, label: "Eco-Friendly Products" },
  { Icon: Clock, label: "Same-Day Available" },
];

export function TrustBar() {
  return (
    <section
      aria-label="Trust badges"
      className="border-y border-border bg-card/50"
    >
      <div className="container py-8">
        <ul className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-4">
          {BADGES.map(({ Icon, label }) => (
            <li
              key={label}
              className="flex items-center justify-center md:justify-start gap-3 text-sm md:text-base"
            >
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-accent/15 text-accent shrink-0">
                <Icon className="h-5 w-5" aria-hidden />
              </span>
              <span className="font-medium text-foreground/85">{label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
