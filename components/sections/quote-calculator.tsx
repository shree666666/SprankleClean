"use client";

import * as React from "react";
import { Calculator, Sparkles } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";

type HomeSize = "Studio" | "1BR" | "2BR" | "3BR" | "4BR+";
type ServiceType =
  | "regular"
  | "deep"
  | "end-of-lease"
  | "office"
  | "carpet"
  | "windows";
type Frequency = "one-off" | "weekly" | "fortnightly" | "monthly";

const HOME_SIZES: { value: HomeSize; base: number }[] = [
  { value: "Studio", base: 109 },
  { value: "1BR", base: 139 },
  { value: "2BR", base: 179 },
  { value: "3BR", base: 219 },
  { value: "4BR+", base: 279 },
];

const SERVICES: { value: ServiceType; label: string; multiplier: number }[] = [
  { value: "regular", label: "Regular House Cleaning", multiplier: 1.0 },
  { value: "deep", label: "Deep Cleaning", multiplier: 1.55 },
  { value: "end-of-lease", label: "End of Lease / Bond", multiplier: 1.85 },
  { value: "office", label: "Office / Commercial", multiplier: 1.25 },
  { value: "carpet", label: "Carpet Cleaning", multiplier: 0.7 },
  { value: "windows", label: "Window Cleaning", multiplier: 0.6 },
];

const FREQUENCIES: { value: Frequency; label: string; discount: number }[] = [
  { value: "one-off", label: "One-off", discount: 0 },
  { value: "weekly", label: "Weekly", discount: 0.2 },
  { value: "fortnightly", label: "Fortnightly", discount: 0.15 },
  { value: "monthly", label: "Monthly", discount: 0.1 },
];

const BATHROOM_OPTIONS = [1, 2, 3, 4] as const;

function format(n: number) {
  return new Intl.NumberFormat("en-AU", {
    style: "currency",
    currency: "AUD",
    maximumFractionDigits: 0,
  }).format(n);
}

export function QuoteCalculator() {
  const [size, setSize] = React.useState<HomeSize>("2BR");
  const [bathrooms, setBathrooms] = React.useState<number>(2);
  const [service, setService] = React.useState<ServiceType>("regular");
  const [frequency, setFrequency] = React.useState<Frequency>("fortnightly");

  const estimate = React.useMemo(() => {
    const sizeRow = HOME_SIZES.find((s) => s.value === size)!;
    const serviceRow = SERVICES.find((s) => s.value === service)!;
    const freqRow = FREQUENCIES.find((f) => f.value === frequency)!;

    // Base * service multiplier
    let base = sizeRow.base * serviceRow.multiplier;
    // +15 per extra bathroom over 1
    base += Math.max(0, bathrooms - 1) * 15;
    // Frequency discount on recurring service
    const discounted = base * (1 - freqRow.discount);

    // ±10% range
    const low = Math.round(discounted * 0.9);
    const high = Math.round(discounted * 1.1);

    return { low, high, mid: Math.round(discounted) };
  }, [size, bathrooms, service, frequency]);

  return (
    <div className="rounded-2xl border bg-card shadow-sm overflow-hidden">
      <header className="bg-primary text-primary-foreground p-6 md:p-8">
        <div className="flex items-center gap-3">
          <Calculator className="h-6 w-6 text-accent" aria-hidden />
          <h3 className="font-heading text-2xl md:text-3xl">
            Get an instant estimate
          </h3>
        </div>
        <p className="mt-1 text-primary-foreground/80 text-sm">
          Adjust the options — your live estimate updates instantly.
        </p>
      </header>

      <div className="grid md:grid-cols-[1fr_320px]">
        {/* Inputs */}
        <div className="p-6 md:p-8 space-y-6">
          {/* Home size */}
          <fieldset>
            <Label className="mb-3 block">Home size</Label>
            <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
              {HOME_SIZES.map((s) => (
                <button
                  key={s.value}
                  type="button"
                  onClick={() => setSize(s.value)}
                  aria-pressed={size === s.value}
                  className={cn(
                    "rounded-md border px-3 py-2.5 text-sm font-medium transition-colors",
                    size === s.value
                      ? "border-primary bg-primary text-primary-foreground"
                      : "border-input bg-background hover:bg-muted"
                  )}
                >
                  {s.value}
                </button>
              ))}
            </div>
          </fieldset>

          {/* Bathrooms */}
          <fieldset>
            <Label className="mb-3 block">Number of bathrooms</Label>
            <div className="grid grid-cols-4 gap-2 max-w-xs">
              {BATHROOM_OPTIONS.map((n) => (
                <button
                  key={n}
                  type="button"
                  onClick={() => setBathrooms(n)}
                  aria-pressed={bathrooms === n}
                  className={cn(
                    "rounded-md border px-3 py-2.5 text-sm font-medium transition-colors",
                    bathrooms === n
                      ? "border-primary bg-primary text-primary-foreground"
                      : "border-input bg-background hover:bg-muted"
                  )}
                >
                  {n === 4 ? "4+" : n}
                </button>
              ))}
            </div>
          </fieldset>

          {/* Service type */}
          <div>
            <Label htmlFor="qc-service" className="mb-2 block">
              Service type
            </Label>
            <select
              id="qc-service"
              value={service}
              onChange={(e) => setService(e.target.value as ServiceType)}
              className="flex h-11 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
            >
              {SERVICES.map((s) => (
                <option key={s.value} value={s.value}>
                  {s.label}
                </option>
              ))}
            </select>
          </div>

          {/* Frequency */}
          <fieldset>
            <Label className="mb-3 block">
              Frequency{" "}
              <span className="text-muted-foreground text-xs font-normal">
                (recurring plans save up to 20%)
              </span>
            </Label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {FREQUENCIES.map((f) => (
                <button
                  key={f.value}
                  type="button"
                  onClick={() => setFrequency(f.value)}
                  aria-pressed={frequency === f.value}
                  className={cn(
                    "rounded-md border px-3 py-2.5 text-sm font-medium transition-colors flex flex-col items-center",
                    frequency === f.value
                      ? "border-primary bg-primary text-primary-foreground"
                      : "border-input bg-background hover:bg-muted"
                  )}
                >
                  <span>{f.label}</span>
                  {f.discount > 0 && (
                    <span
                      className={cn(
                        "text-[10px] font-semibold uppercase tracking-wide mt-0.5",
                        frequency === f.value
                          ? "text-accent"
                          : "text-accent"
                      )}
                    >
                      Save {Math.round(f.discount * 100)}%
                    </span>
                  )}
                </button>
              ))}
            </div>
          </fieldset>
        </div>

        {/* Live estimate panel */}
        <aside className="bg-brand-ink text-brand-cream p-6 md:p-8 flex flex-col">
          <p className="uppercase tracking-[0.2em] text-accent text-xs font-medium flex items-center gap-1.5">
            <Sparkles className="h-3.5 w-3.5" aria-hidden />
            Your estimate
          </p>

          <div className="mt-4">
            <p className="text-sm text-brand-cream/70">Estimated range</p>
            <p className="font-heading text-4xl md:text-5xl mt-1">
              {format(estimate.low)}
              <span className="text-brand-cream/50 mx-2 text-2xl">–</span>
              {format(estimate.high)}
            </p>
            <p className="mt-2 text-sm text-brand-cream/70">
              Most clients pay around{" "}
              <span className="text-accent font-semibold">
                {format(estimate.mid)}
              </span>{" "}
              per visit.
            </p>
          </div>

          <ul className="mt-6 space-y-1.5 text-xs text-brand-cream/70 border-t border-brand-cream/15 pt-4">
            <li>✦ No surprise fees — flat, all-inclusive pricing</li>
            <li>✦ Eco-friendly supplies included</li>
            <li>✦ 100% satisfaction guarantee</li>
          </ul>

          <div className="mt-auto pt-6">
            <Button asChild variant="accent" size="lg" className="w-full">
              <Link
                href={`/booking?service=${service}&size=${encodeURIComponent(
                  size
                )}&frequency=${frequency}`}
              >
                Book This Quote
              </Link>
            </Button>
            <p className="text-[11px] text-brand-cream/60 mt-2 text-center">
              Final price confirmed at booking — no obligation.
            </p>
          </div>
        </aside>
      </div>
    </div>
  );
}
