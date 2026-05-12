"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { SERVICES, SERVICE_FILTERS, type ServiceCategory } from "@/lib/services-data";
import { ExpandableServiceCard } from "@/components/sections/expandable-service-card";

type Filter = "All" | ServiceCategory;

export function ServicesFilterGrid() {
  const [filter, setFilter] = React.useState<Filter>("All");

  const visible = React.useMemo(
    () =>
      filter === "All"
        ? SERVICES
        : SERVICES.filter((s) => s.category === filter),
    [filter]
  );

  return (
    <>
      {/* Sticky filter bar — sits under the (h-16) header */}
      <div
        role="tablist"
        aria-label="Filter services by category"
        className="sticky top-16 z-30 -mx-4 md:mx-0 mb-10 border-y border-border bg-background/90 backdrop-blur supports-[backdrop-filter]:bg-background/70"
      >
        <div className="container py-3 overflow-x-auto">
          <div className="flex gap-2 min-w-max">
            {SERVICE_FILTERS.map((f) => {
              const active = filter === f;
              const count =
                f === "All"
                  ? SERVICES.length
                  : SERVICES.filter((s) => s.category === f).length;
              return (
                <button
                  key={f}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  onClick={() => setFilter(f)}
                  className={cn(
                    "inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-colors whitespace-nowrap",
                    active
                      ? "bg-primary text-primary-foreground shadow-sm"
                      : "bg-muted text-foreground/75 hover:bg-primary/10 hover:text-primary"
                  )}
                >
                  {f}
                  <span
                    className={cn(
                      "inline-flex h-5 min-w-[1.25rem] items-center justify-center rounded-full px-1.5 text-[10px] font-bold",
                      active
                        ? "bg-primary-foreground/20 text-primary-foreground"
                        : "bg-background text-muted-foreground"
                    )}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Results */}
      <div className="grid gap-4">
        {visible.map((s) => (
          <ExpandableServiceCard key={s.slug} service={s} />
        ))}
        {visible.length === 0 && (
          <p className="text-center text-muted-foreground py-12">
            No services in this category yet.
          </p>
        )}
      </div>
    </>
  );
}
