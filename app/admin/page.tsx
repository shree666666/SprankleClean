import type { Metadata } from "next";
import { Sparkles, AlertTriangle } from "lucide-react";
import { readBookings, summarize } from "@/lib/admin-store";
import { SummaryCards } from "@/components/admin/summary-cards";
import { BookingsTable } from "@/components/admin/bookings-table";

export const metadata: Metadata = {
  title: "Admin · Bookings",
  description: "Internal SparkleClean admin dashboard.",
  robots: { index: false, follow: false },
};

// Always fetch fresh data when the page loads.
export const dynamic = "force-dynamic";

export default async function AdminPage() {
  const bookings = await readBookings();
  const stats = summarize(bookings);

  // Sort: upcoming first by date, then time.
  const sorted = [...bookings].sort((a, b) => {
    if (a.date !== b.date) return a.date.localeCompare(b.date);
    return a.timeSlot.localeCompare(b.timeSlot);
  });

  return (
    <section className="container py-10 md:py-12">
      {/* Banner */}
      <div className="mb-8 rounded-xl border border-amber-200 bg-amber-50 text-amber-900 p-4 text-sm flex items-start gap-3">
        <AlertTriangle className="h-5 w-5 mt-0.5 shrink-0" aria-hidden />
        <div>
          <p className="font-semibold">
            Internal admin view (no authentication)
          </p>
          <p className="opacity-90">
            This dashboard is reading from{" "}
            <code className="px-1 rounded bg-amber-100 text-xs">
              data/bookings.json
            </code>{" "}
            and writes back via a server action. Add auth before deploying.
          </p>
        </div>
      </div>

      <header className="flex flex-col md:flex-row md:items-end md:justify-between gap-3 mb-8">
        <div>
          <p className="uppercase tracking-[0.25em] text-accent text-xs font-medium mb-2 flex items-center gap-1.5">
            <Sparkles className="h-3.5 w-3.5" aria-hidden /> SparkleClean Admin
          </p>
          <h1 className="font-heading text-4xl md:text-5xl text-primary">
            Bookings dashboard
          </h1>
          <p className="mt-2 text-muted-foreground text-sm">
            All bookings, statuses, and revenue at a glance.
          </p>
        </div>

        {/* Status breakdown chips */}
        <div className="flex flex-wrap gap-2 text-xs">
          {(["Pending", "Confirmed", "Completed", "Cancelled"] as const).map(
            (s) => (
              <span
                key={s}
                className="rounded-full bg-muted text-foreground/75 px-3 py-1.5"
              >
                <span className="font-semibold text-foreground">
                  {stats.byStatus[s]}
                </span>{" "}
                {s}
              </span>
            )
          )}
        </div>
      </header>

      <SummaryCards
        todayCount={stats.todayCount}
        monthCount={stats.monthCount}
        revenueThisMonth={stats.revenueThisMonth}
        totalAll={stats.totalAll}
      />

      <div className="mt-10">
        <h2 className="font-heading text-2xl text-primary mb-4">
          All bookings
        </h2>
        <BookingsTable bookings={sorted} />
      </div>
    </section>
  );
}
