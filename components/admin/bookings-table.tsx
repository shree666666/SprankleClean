import type { Booking } from "@/lib/admin-store";
import { StatusBadge } from "./status-badge";
import { StatusSelect } from "./status-select";

function aud(n: number) {
  return new Intl.NumberFormat("en-AU", {
    style: "currency",
    currency: "AUD",
    maximumFractionDigits: 0,
  }).format(n);
}

function formatDate(iso: string) {
  const d = new Date(iso + "T00:00:00");
  return d.toLocaleDateString("en-AU", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

export function BookingsTable({ bookings }: { bookings: Booking[] }) {
  return (
    <div className="rounded-xl border bg-card overflow-hidden">
      {/* Desktop table */}
      <div className="hidden md:block overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="bg-muted/50 text-foreground/70 text-xs uppercase tracking-wider">
            <tr>
              <th className="text-left font-medium px-4 py-3">Reference</th>
              <th className="text-left font-medium px-4 py-3">Customer</th>
              <th className="text-left font-medium px-4 py-3">Service</th>
              <th className="text-left font-medium px-4 py-3">Date & Time</th>
              <th className="text-left font-medium px-4 py-3">Suburb</th>
              <th className="text-right font-medium px-4 py-3">Total</th>
              <th className="text-left font-medium px-4 py-3">Status</th>
              <th className="text-left font-medium px-4 py-3">Update</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {bookings.map((b) => (
              <tr key={b.id} className="hover:bg-muted/30 transition-colors">
                <td className="px-4 py-3 font-mono text-xs text-primary">
                  {b.id}
                </td>
                <td className="px-4 py-3">
                  <div className="font-medium text-foreground">{b.name}</div>
                  <div className="text-xs text-muted-foreground">
                    {b.email}
                  </div>
                </td>
                <td className="px-4 py-3">
                  <div className="font-medium text-foreground">
                    {b.serviceLabel}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {b.frequency} • {b.propertySize}
                  </div>
                </td>
                <td className="px-4 py-3 whitespace-nowrap">
                  <div>{formatDate(b.date)}</div>
                  <div className="text-xs text-muted-foreground">
                    {b.timeSlot}
                  </div>
                </td>
                <td className="px-4 py-3">{b.suburb}</td>
                <td className="px-4 py-3 text-right font-semibold">
                  {aud(b.total)}
                </td>
                <td className="px-4 py-3">
                  <StatusBadge status={b.status} />
                </td>
                <td className="px-4 py-3">
                  <StatusSelect id={b.id} initial={b.status} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile cards */}
      <ul className="md:hidden divide-y divide-border">
        {bookings.map((b) => (
          <li key={b.id} className="p-4 space-y-2">
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="font-medium text-foreground">{b.name}</p>
                <p className="text-xs text-muted-foreground font-mono">
                  {b.id}
                </p>
              </div>
              <StatusBadge status={b.status} />
            </div>
            <div className="text-sm">
              <p className="text-foreground">{b.serviceLabel}</p>
              <p className="text-xs text-muted-foreground">
                {formatDate(b.date)} • {b.timeSlot} • {b.suburb}
              </p>
            </div>
            <div className="flex items-center justify-between pt-1">
              <span className="font-semibold text-foreground">
                {aud(b.total)}
              </span>
              <StatusSelect id={b.id} initial={b.status} />
            </div>
          </li>
        ))}
      </ul>

      {bookings.length === 0 && (
        <p className="text-center text-sm text-muted-foreground py-10">
          No bookings yet.
        </p>
      )}
    </div>
  );
}
