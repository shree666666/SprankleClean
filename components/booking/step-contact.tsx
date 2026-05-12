"use client";

import { useFormContext } from "react-hook-form";
import {
  FREQUENCY_LABELS,
  SERVICE_TYPE_LABELS,
  type BookingFormValues,
} from "@/lib/booking-schema";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

function ErrorMessage({ message }: { message?: string }) {
  if (!message) return null;
  return <p className="mt-1.5 text-sm text-destructive">{message}</p>;
}

export function StepContact() {
  const {
    register,
    watch,
    formState: { errors },
  } = useFormContext<BookingFormValues>();

  const v = watch();

  return (
    <div className="space-y-6">
      <div>
        <h2 className="font-heading text-2xl text-primary">
          Almost done — your contact details
        </h2>
        <p className="text-sm text-muted-foreground mt-1">
          We&apos;ll send a confirmation email and an SMS reminder.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div className="space-y-1.5 sm:col-span-2">
          <Label htmlFor="bk-name">Full name</Label>
          <Input
            id="bk-name"
            placeholder="Jane Doe"
            {...register("name")}
          />
          <ErrorMessage message={errors.name?.message} />
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="bk-email">Email</Label>
          <Input
            id="bk-email"
            type="email"
            placeholder="you@example.com"
            {...register("email")}
          />
          <ErrorMessage message={errors.email?.message} />
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="bk-phone">Phone</Label>
          <Input
            id="bk-phone"
            type="tel"
            placeholder="04XX XXX XXX"
            {...register("phone")}
          />
          <ErrorMessage message={errors.phone?.message} />
        </div>
      </div>

      {/* Booking summary */}
      <section
        aria-label="Booking summary"
        className="rounded-xl border bg-card p-5"
      >
        <h3 className="font-heading text-lg text-primary mb-3">Summary</h3>
        <dl className="grid sm:grid-cols-2 gap-y-2 gap-x-6 text-sm">
          <div>
            <dt className="text-muted-foreground">Service</dt>
            <dd className="font-medium">
              {v.serviceType ? SERVICE_TYPE_LABELS[v.serviceType] : "—"}
            </dd>
          </div>
          <div>
            <dt className="text-muted-foreground">Frequency</dt>
            <dd className="font-medium">
              {v.frequency ? FREQUENCY_LABELS[v.frequency] : "—"}
            </dd>
          </div>
          <div>
            <dt className="text-muted-foreground">Address</dt>
            <dd className="font-medium">
              {v.address || "—"}
              {v.suburb && `, ${v.suburb}`}
            </dd>
          </div>
          <div>
            <dt className="text-muted-foreground">Property</dt>
            <dd className="font-medium">
              {v.propertySize ?? "—"} • {v.bedrooms ?? "—"} bed •{" "}
              {v.bathrooms ?? "—"} bath
            </dd>
          </div>
          <div>
            <dt className="text-muted-foreground">Date</dt>
            <dd className="font-medium">{v.date || "—"}</dd>
          </div>
          <div>
            <dt className="text-muted-foreground">Time</dt>
            <dd className="font-medium">{v.timeSlot || "—"}</dd>
          </div>
          {v.instructions && (
            <div className="sm:col-span-2">
              <dt className="text-muted-foreground">Instructions</dt>
              <dd className="font-medium whitespace-pre-line">
                {v.instructions}
              </dd>
            </div>
          )}
        </dl>
      </section>
    </div>
  );
}
