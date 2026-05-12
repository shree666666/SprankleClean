"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const [open, setOpen] = React.useState(false);
  const [closing, setClosing] = React.useState(false);
  const pathname = usePathname();

  // Close the drawer when the route changes.
  React.useEffect(() => {
    setOpen(false);
    setClosing(false);
  }, [pathname]);

  // Lock body scroll while drawer is open.
  React.useEffect(() => {
    if (open) {
      const original = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = original;
      };
    }
  }, [open]);

  // Close on Escape.
  React.useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  function handleClose() {
    setClosing(true);
    window.setTimeout(() => {
      setOpen(false);
      setClosing(false);
    }, 280);
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/85 backdrop-blur supports-[backdrop-filter]:bg-background/70">
      <div className="container flex h-16 items-center justify-between">
        {/* Wordmark */}
        <Link
          href="/"
          className="group flex items-center gap-2 font-heading text-2xl text-primary tracking-tight"
        >
          <Sparkles
            className="h-6 w-6 text-accent transition-transform group-hover:rotate-12"
            aria-hidden
          />
          <span>
            Sparkle<span className="text-accent">Clean</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav
          aria-label="Primary"
          className="hidden md:flex items-center gap-8 text-sm"
        >
          {NAV_LINKS.map((l) => {
            const active =
              l.href === "/" ? pathname === "/" : pathname.startsWith(l.href);
            return (
              <Link
                key={l.href}
                href={l.href}
                className={cn(
                  "relative font-medium transition-colors hover:text-primary",
                  active ? "text-primary" : "text-foreground/75"
                )}
              >
                {l.label}
                {active && (
                  <span
                    aria-hidden
                    className="absolute -bottom-1.5 left-0 right-0 h-0.5 rounded-full bg-accent"
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <Button asChild variant="accent" size="sm">
            <Link href="/booking">Book Now</Link>
          </Button>
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          aria-label="Open menu"
          aria-expanded={open}
          aria-controls="mobile-drawer"
          onClick={() => setOpen(true)}
          className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-md text-primary hover:bg-muted transition-colors"
        >
          <Menu className="h-6 w-6" />
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div
          id="mobile-drawer"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
          className="md:hidden fixed inset-0 z-[60]"
        >
          {/* Backdrop */}
          <button
            type="button"
            aria-label="Close menu"
            onClick={handleClose}
            className={cn(
              "absolute inset-0 bg-brand-ink/50 backdrop-blur-sm",
              closing ? "animate-fade-in" : "animate-fade-in"
            )}
          />

          {/* Panel */}
          <aside
            className={cn(
              "absolute right-0 top-0 h-full w-[85%] max-w-sm bg-background shadow-2xl border-l border-border flex flex-col",
              closing ? "animate-drawer-out" : "animate-drawer-in"
            )}
          >
            <div className="flex h-16 items-center justify-between px-6 border-b border-border">
              <span className="font-heading text-xl text-primary">
                Sparkle<span className="text-accent">Clean</span>
              </span>
              <button
                type="button"
                aria-label="Close menu"
                onClick={handleClose}
                className="inline-flex h-10 w-10 items-center justify-center rounded-md text-primary hover:bg-muted"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            <nav
              aria-label="Mobile primary"
              className="flex-1 overflow-y-auto px-6 py-6"
            >
              <ul className="space-y-1">
                {NAV_LINKS.map((l) => {
                  const active =
                    l.href === "/"
                      ? pathname === "/"
                      : pathname.startsWith(l.href);
                  return (
                    <li key={l.href}>
                      <Link
                        href={l.href}
                        onClick={handleClose}
                        className={cn(
                          "block rounded-md px-3 py-3 text-base font-medium transition-colors",
                          active
                            ? "bg-primary/10 text-primary"
                            : "text-foreground/80 hover:bg-muted hover:text-primary"
                        )}
                      >
                        {l.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>

            <div className="px-6 pb-8">
              <Button
                asChild
                variant="accent"
                size="lg"
                className="w-full"
                onClick={handleClose}
              >
                <Link href="/booking">Book Now</Link>
              </Button>
              <p className="mt-4 text-xs text-muted-foreground text-center">
                Same-day bookings often available.
              </p>
            </div>
          </aside>
        </div>
      )}
    </header>
  );
}
