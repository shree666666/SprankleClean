"use client";

import * as React from "react";
import Link from "next/link";
import { ChevronDown, Clock, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { Service } from "@/lib/services-data";

interface Props {
  service: Service;
  /** Optionally start expanded (useful for deep-linking later). */
  defaultOpen?: boolean;
}

export function ExpandableServiceCard({ service, defaultOpen = false }: Props) {
  const [open, setOpen] = React.useState(defaultOpen);
  const Icon = service.icon;
  const contentId = `svc-${service.slug}`;

  return (
    <article
      className={cn(
        "group rounded-xl border bg-card shadow-sm transition-all duration-300",
        open ? "border-primary shadow-md" : "border-border hover:shadow-md"
      )}
    >
      {/* Header — clickable to toggle */}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls={contentId}
        className="w-full text-left p-6 flex items-start gap-4"
      >
        <span
          className={cn(
            "inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl transition-colors",
            open
              ? "bg-accent text-accent-foreground"
              : "bg-primary/10 text-primary group-hover:bg-accent/20"
          )}
        >
          <Icon className="h-6 w-6" aria-hidden />
        </span>

        <div className="flex-1 min-w-0">
          <div className="flex flex-wrap items-center gap-2">
            <h3 className="font-heading text-xl md:text-2xl text-primary">
              {service.name}
            </h3>
            <span className="inline-flex items-center rounded-full bg-primary/10 text-primary text-xs font-medium px-2.5 py-0.5">
              {service.category}
            </span>
          </div>
          <p className="mt-1 text-sm text-muted-foreground flex items-center gap-1.5">
            <Clock className="h-3.5 w-3.5" aria-hidden />
            Est. duration: {service.duration}
          </p>
        </div>

        <ChevronDown
          aria-hidden
          className={cn(
            "h-5 w-5 text-primary shrink-0 transition-transform duration-300",
            open && "rotate-180"
          )}
        />
      </button>

      {/* Expandable content */}
      <div
        id={contentId}
        className={cn(
          "grid transition-[grid-template-rows] duration-300 ease-out",
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        )}
      >
        <div className="overflow-hidden">
          <div className="px-6 pb-6 pt-0 border-t border-border/60 mt-2">
            <p className="text-foreground/85 leading-relaxed pt-5">
              {service.description}
            </p>

            <h4 className="mt-6 font-heading text-base text-primary">
              What&apos;s included
            </h4>
            <ul className="mt-3 grid sm:grid-cols-2 gap-x-6 gap-y-2 text-sm">
              {service.includes.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2 text-foreground/85"
                >
                  <Check
                    className="h-4 w-4 mt-0.5 text-accent shrink-0"
                    aria-hidden
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-6">
              <Button asChild variant="accent">
                <Link href={`/booking?service=${service.slug}`}>
                  Book This Service
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
