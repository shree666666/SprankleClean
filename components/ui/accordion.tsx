"use client";

import * as React from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export interface AccordionItem {
  id: string;
  question: string;
  answer: React.ReactNode;
}

interface AccordionProps {
  items: AccordionItem[];
  /** Allow multiple open at once. */
  multi?: boolean;
  /** Initially open ids. */
  defaultOpen?: string[];
  className?: string;
}

/**
 * Controlled, animated accordion built on the grid-template-rows trick so
 * content animates smoothly without measuring height.
 */
export function Accordion({
  items,
  multi = false,
  defaultOpen = [],
  className,
}: AccordionProps) {
  const [open, setOpen] = React.useState<Set<string>>(
    () => new Set(defaultOpen)
  );

  function toggle(id: string) {
    setOpen((prev) => {
      const next = new Set(multi ? prev : []);
      if (prev.has(id) && !next.has(id)) {
        // closing in multi-mode
      } else if (prev.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  }

  return (
    <div className={cn("divide-y divide-border rounded-xl border bg-card", className)}>
      {items.map((item) => {
        const isOpen = open.has(item.id);
        const contentId = `acc-${item.id}`;
        return (
          <div key={item.id} className="overflow-hidden">
            <button
              type="button"
              aria-expanded={isOpen}
              aria-controls={contentId}
              onClick={() => toggle(item.id)}
              className="w-full text-left flex items-center justify-between gap-4 px-5 py-4 hover:bg-muted/40 transition-colors"
            >
              <span className="font-medium text-foreground">
                {item.question}
              </span>
              <ChevronDown
                aria-hidden
                className={cn(
                  "h-5 w-5 text-primary shrink-0 transition-transform duration-300",
                  isOpen && "rotate-180"
                )}
              />
            </button>
            <div
              id={contentId}
              className={cn(
                "grid transition-[grid-template-rows] duration-300 ease-out",
                isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              )}
            >
              <div className="overflow-hidden">
                <div className="px-5 pb-5 pt-0 text-sm text-foreground/85 leading-relaxed">
                  {item.answer}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
