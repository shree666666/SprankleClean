import { cn } from "@/lib/utils";
import type { BookingStatus } from "@/lib/admin-store";

const STYLES: Record<BookingStatus, string> = {
  Pending: "bg-amber-100 text-amber-800 ring-amber-200",
  Confirmed: "bg-primary/10 text-primary ring-primary/20",
  Completed: "bg-emerald-100 text-emerald-800 ring-emerald-200",
  Cancelled: "bg-rose-100 text-rose-800 ring-rose-200",
};

export function StatusBadge({ status }: { status: BookingStatus }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-xs font-semibold ring-1 ring-inset",
        STYLES[status]
      )}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-current" aria-hidden />
      {status}
    </span>
  );
}
