"use client";

import { useFormContext } from "react-hook-form";
import {
  SERVICE_TYPES,
  SERVICE_TYPE_LABELS,
  FREQUENCIES,
  FREQUENCY_LABELS,
  type BookingFormValues,
} from "@/lib/booking-schema";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

export function StepService() {
  const {
    watch,
    setValue,
    formState: { errors },
  } = useFormContext<BookingFormValues>();

  const serviceType = watch("serviceType");
  const frequency = watch("frequency");

  return (
    <div className="space-y-8">
      <div>
        <h2 className="font-heading text-2xl text-primary">
          What can we help with?
        </h2>
        <p className="text-sm text-muted-foreground mt-1">
          Pick the service that best matches your needs.
        </p>
      </div>

      <fieldset>
        <Label className="mb-3 block">Service type</Label>
        <div className="grid sm:grid-cols-2 gap-3">
          {SERVICE_TYPES.map((s) => (
            <button
              key={s}
              type="button"
              onClick={() =>
                setValue("serviceType", s, { shouldValidate: true })
              }
              aria-pressed={serviceType === s}
              className={cn(
                "rounded-md border px-4 py-3 text-left text-sm font-medium transition-all",
                serviceType === s
                  ? "border-primary bg-primary/5 ring-1 ring-primary text-primary"
                  : "border-input bg-background hover:border-primary/40 hover:bg-muted/50"
              )}
            >
              {SERVICE_TYPE_LABELS[s]}
            </button>
          ))}
        </div>
        {errors.serviceType && (
          <p className="mt-2 text-sm text-destructive">
            {errors.serviceType.message}
          </p>
        )}
      </fieldset>

      <fieldset>
        <Label className="mb-3 block">Frequency</Label>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {FREQUENCIES.map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setValue("frequency", f, { shouldValidate: true })}
              aria-pressed={frequency === f}
              className={cn(
                "rounded-md border px-3 py-3 text-sm font-medium transition-all",
                frequency === f
                  ? "border-primary bg-primary/5 ring-1 ring-primary text-primary"
                  : "border-input bg-background hover:border-primary/40"
              )}
            >
              {FREQUENCY_LABELS[f]}
            </button>
          ))}
        </div>
        {errors.frequency && (
          <p className="mt-2 text-sm text-destructive">
            {errors.frequency.message}
          </p>
        )}
      </fieldset>
    </div>
  );
}
