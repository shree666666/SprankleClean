"use client";

import { useFormContext } from "react-hook-form";
import { Clock, Calendar } from "lucide-react";
import {
  TIME_SLOTS,
  type BookingFormValues,
} from "@/lib/booking-schema";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

function formatSlot(s: string) {
  // "08:00" -> "8:00 AM"
  const [hh, mm] = s.split(":").map(Number);
  const period = hh >= 12 ? "PM" : "AM";
  const h12 = ((hh + 11) % 12) + 1;
  return `${h12}:${mm.toString().padStart(2, "0")} ${period}`;
}

function todayISO() {
  const d = new Date();
  const tz = d.getTimezoneOffset() * 60_000;
  return new Date(d.getTime() - tz).toISOString().slice(0, 10);
}

export function StepDateTime() {
  const {
    register,
    watch,
    setValue,
    formState: { errors },
  } = useFormContext<BookingFormValues>();

  const selected = watch("timeSlot");

  return (
    <div className="space-y-6">
      <div>
        <h2 className="font-heading text-2xl text-primary">Pick a date & time</h2>
        <p className="text-sm text-muted-foreground mt-1">
          Most slots can be filled within 48 hours. Same-day often available.
        </p>
      </div>

      <div className="space-y-1.5 max-w-sm">
        <Label htmlFor="bk-date" className="flex items-center gap-1.5">
          <Calendar className="h-4 w-4 text-primary" aria-hidden />
          Date
        </Label>
        <Input
          id="bk-date"
          type="date"
          min={todayISO()}
          {...register("date")}
        />
        {errors.date && (
          <p className="text-sm text-destructive">{errors.date.message}</p>
        )}
      </div>

      <fieldset>
        <Label className="mb-3 flex items-center gap-1.5">
          <Clock className="h-4 w-4 text-primary" aria-hidden />
          Available time slots
        </Label>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          {TIME_SLOTS.map((slot) => (
            <button
              key={slot}
              type="button"
              onClick={() =>
                setValue("timeSlot", slot, { shouldValidate: true })
              }
              aria-pressed={selected === slot}
              className={cn(
                "rounded-md border px-3 py-2.5 text-sm font-medium transition-colors",
                selected === slot
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-input bg-background hover:bg-muted"
              )}
            >
              {formatSlot(slot)}
            </button>
          ))}
        </div>
        {errors.timeSlot && (
          <p className="mt-2 text-sm text-destructive">
            {errors.timeSlot.message}
          </p>
        )}
      </fieldset>
    </div>
  );
}
