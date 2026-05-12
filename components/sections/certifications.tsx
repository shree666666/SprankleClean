import { Award, ShieldCheck, Leaf, BadgeCheck, FileCheck, Building2 } from "lucide-react";

const BADGES = [
  { Icon: ShieldCheck, label: "Public Liability $20M" },
  { Icon: Award, label: "ISSA Certified" },
  { Icon: Leaf, label: "Green Cleaning Council" },
  { Icon: BadgeCheck, label: "Police-Checked Staff" },
  { Icon: FileCheck, label: "WorkCover NSW" },
  { Icon: Building2, label: "ABN Registered" },
];

export function Certifications() {
  return (
    <section
      aria-label="Certifications and insurance"
      className="bg-card/40 border-y border-border"
    >
      <div className="container py-12">
        <p className="text-center text-xs uppercase tracking-[0.25em] text-muted-foreground mb-8">
          Certifications & insurance
        </p>
        <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
          {BADGES.map(({ Icon, label }) => (
            <li
              key={label}
              className="flex flex-col items-center text-center gap-2 px-3 py-4 rounded-lg hover:bg-card transition-colors"
            >
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-full border-2 border-primary/20 text-primary">
                <Icon className="h-6 w-6" aria-hidden />
              </span>
              <span className="text-xs font-medium text-foreground/80 leading-tight">
                {label}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
