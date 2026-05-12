"use client";

import * as React from "react";

interface CountUpProps {
  /** Final numeric value. */
  to: number;
  /** Animation duration in ms. */
  duration?: number;
  /** Text shown before the number (e.g. "$"). */
  prefix?: string;
  /** Text shown after the number (e.g. "+", "k"). */
  suffix?: string;
  /** Decimal places. */
  decimals?: number;
  /** Use Intl.NumberFormat grouping. */
  group?: boolean;
  className?: string;
}

/**
 * Counts up from 0 to `to` once the element scrolls into view.
 * Uses requestAnimationFrame + eased interpolation.
 */
export function CountUp({
  to,
  duration = 1800,
  prefix = "",
  suffix = "",
  decimals = 0,
  group = true,
  className,
}: CountUpProps) {
  const ref = React.useRef<HTMLSpanElement>(null);
  const [value, setValue] = React.useState(0);
  const startedRef = React.useRef(false);

  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setValue(to);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || startedRef.current) return;
        startedRef.current = true;
        observer.disconnect();

        const start = performance.now();
        const tick = (now: number) => {
          const elapsed = now - start;
          const t = Math.min(1, elapsed / duration);
          // easeOutCubic
          const eased = 1 - Math.pow(1 - t, 3);
          setValue(to * eased);
          if (t < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      },
      { threshold: 0.4 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [to, duration]);

  const formatted = React.useMemo(() => {
    const opts: Intl.NumberFormatOptions = {
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals,
      useGrouping: group,
    };
    return new Intl.NumberFormat("en-AU", opts).format(value);
  }, [value, decimals, group]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {formatted}
      {suffix}
    </span>
  );
}
