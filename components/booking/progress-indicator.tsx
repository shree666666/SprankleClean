import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

const STEP_TITLES = [
  "Service",
  "Property",
  "Date & Time",
  "Contact",
];

interface Props {
  current: number; // 0-indexed
}

export function ProgressIndicator({ current }: Props) {
  return (
    <nav aria-label="Booking progress" className="mb-10">
      <ol className="flex items-center gap-2 md:gap-3">
        {STEP_TITLES.map((title, idx) => {
          const done = idx < current;
          const active = idx === current;
          return (
            <li
              key={title}
              className="flex-1 flex items-center gap-2 md:gap-3 min-w-0"
            >
              <div className="flex items-center gap-2 md:gap-3 min-w-0">
                <span
                  className={cn(
                    "inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-sm font-bold transition-all duration-300",
                    done && "bg-primary text-primary-foreground",
                    active &&
                      "bg-accent text-accent-foreground ring-4 ring-accent/20",
                    !done && !active && "bg-muted text-muted-foreground"
                  )}
                  aria-current={active ? "step" : undefined}
                >
                  {done ? <Check className="h-4 w-4" aria-hidden /> : idx + 1}
                </span>
                <span
                  className={cn(
                    "hidden sm:inline text-sm font-medium truncate",
                    active && "text-primary",
                    done && "text-foreground/70",
                    !done && !active && "text-muted-foreground"
                  )}
                >
                  {title}
                </span>
              </div>
              {idx < STEP_TITLES.length - 1 && (
                <span
                  aria-hidden
                  className={cn(
                    "flex-1 h-0.5 rounded-full transition-colors",
                    done ? "bg-primary" : "bg-muted"
                  )}
                />
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
