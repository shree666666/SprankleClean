"use client";
import * as React from "react";
import { cn } from "@/lib/utils";
interface FadeInProps {
  children: React.ReactNode;
  /** Delay before animation starts (ms). */
  delay?: number;
  /** Initial offset direction. */
  direction?: "up" | "down" | "left" | "right" | "none";
  /** Override duration (ms). */
  duration?: number;
  className?: string;
  /** Render as a different element. */
  as?: "div" | "section" | "article" | "li" | "header";
  /** If true, animation runs only on first intersection (default). */
  once?: boolean;
}
const OFFSETS: Record<NonNullable<FadeInProps["direction"]>, string> = {
  up: "translate-y-6",
  down: "-translate-y-6",
  left: "translate-x-6",
  right: "-translate-x-6",
  none: "",
};
export function FadeIn({
  children,
  delay = 0,
  direction = "up",
  duration = 700,
  className,
  as: Tag = "div",
  once = true,
}: FadeInProps) {
  const ref = React.useRef<HTMLElement>(null);
  const [visible, setVisible] = React.useState(false);
  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setVisible(true);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          if (once) observer.disconnect();
        } else if (!once) {
          setVisible(false);
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [once]);
  const AnyTag = Tag as unknown as React.ElementType;
  return (
    <AnyTag
      ref={ref}
      style={{
        transitionDelay: `${delay}ms`,
        transitionDuration: `${duration}ms`,
      }}
      className={cn(
        "transition-all ease-out will-change-[opacity,transform]",
        visible
          ? "opacity-100 translate-x-0 translate-y-0"
          : `opacity-0 ${OFFSETS[direction]}`,
        className
      )}
    >
      {children}
    </AnyTag>
  );
}