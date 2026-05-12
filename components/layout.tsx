import * as React from "react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { cn } from "@/lib/utils";

interface LayoutProps {
  children: React.ReactNode;
  /** Optional wrapper class for the <main> region. */
  mainClassName?: string;
  /** Hide the header (e.g., for marketing landing pages). */
  hideHeader?: boolean;
  /** Hide the footer (e.g., for booking funnel). */
  hideFooter?: boolean;
}

/**
 * Reusable site shell: sticky header + main + footer.
 *
 * The root `app/layout.tsx` composes this so the exact same chrome
 * is reused across every route, but it can also be used independently
 * (e.g., to embed a section of the site in Storybook).
 */
export function Layout({
  children,
  mainClassName,
  hideHeader,
  hideFooter,
}: LayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      {!hideHeader && <Header />}
      <main className={cn("flex-1", mainClassName)}>{children}</main>
      {!hideFooter && <Footer />}
    </div>
  );
}
