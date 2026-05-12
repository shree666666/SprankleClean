"use client";

import * as React from "react";
import { Loader2 } from "lucide-react";
import {
  BOOKING_STATUSES,
  type BookingStatus,
} from "@/lib/booking-types";
import { updateBookingStatus } from "@/app/admin/actions";
import { cn } from "@/lib/utils";

interface Props {
  id: string;
  initial: BookingStatus;
}

export function StatusSelect({ id, initial }: Props) {
  const [status, setStatus] = React.useState<BookingStatus>(initial);
  const [pending, startTransition] = React.useTransition();
  const [error, setError] = React.useState<string | null>(null);

  function onChange(e: React.ChangeEvent<HTMLSelectElement>) {
    const next = e.target.value as BookingStatus;
    const prev = status;
    setStatus(next);
    setError(null);
    startTransition(async () => {
      const res = await updateBookingStatus(id, next);
      if (!res.ok) {
        setStatus(prev);
        setError(res.error);
      }
    });
  }

  return (
    <div className="flex items-center gap-2">
      <select
        value={status}
        onChange={onChange}
        disabled={pending}
        aria-label={`Status for booking ${id}`}
        className={cn(
          "h-9 rounded-md border border-input bg-background px-2 text-xs font-medium",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
          pending && "opacity-60"
        )}
      >
        {BOOKING_STATUSES.map((s) => (
          <option key={s} value={s}>
            {s}
          </option>
        ))}
      </select>
      {pending && (
        <Loader2
          className="h-4 w-4 animate-spin text-muted-foreground"
          aria-hidden
        />
      )}
      {error && (
        <span className="text-xs text-destructive" role="alert">
          {error}
        </span>
      )}
    </div>
  );
}
