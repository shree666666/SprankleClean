import Link from "next/link";
import { CheckCircle2, Copy, Mail, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  FREQUENCY_LABELS,
  SERVICE_TYPE_LABELS,
  type BookingFormValues,
} from "@/lib/booking-schema";

interface Props {
  reference: string;
  values: BookingFormValues;
  onReset: () => void;
}

export function Confirmation({ reference, values, onReset }: Props) {
  return (
    <div className="rounded-2xl border bg-card p-8 md:p-12 text-center max-w-2xl mx-auto shadow-sm">
      <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-accent/20 text-accent mx-auto">
        <CheckCircle2 className="h-9 w-9" aria-hidden />
      </div>

      <h2 className="mt-6 font-heading text-3xl md:text-4xl text-primary">
        Booking received!
      </h2>
      <p className="mt-3 text-muted-foreground">
        Thanks {values.name?.split(" ")[0] || ""} — we&apos;ve emailed a
        confirmation to <span className="text-primary">{values.email}</span>.
        Our team will reach out shortly to finalize your slot.
      </p>

      <div className="mt-8 rounded-xl bg-brand-ink text-brand-cream p-5">
        <p className="text-xs uppercase tracking-[0.2em] text-brand-cream/70">
          Your booking reference
        </p>
        <p className="mt-2 font-heading text-3xl md:text-4xl text-accent select-all">
          {reference}
        </p>
        <p className="text-xs text-brand-cream/60 mt-2 flex items-center justify-center gap-1">
          <Copy className="h-3 w-3" aria-hidden />
          Save this — you&apos;ll need it to reschedule.
        </p>
      </div>

      <dl className="mt-8 grid sm:grid-cols-2 gap-y-2 gap-x-8 text-sm text-left">
        <div className="flex justify-between sm:block">
          <dt className="text-muted-foreground">Service</dt>
          <dd className="font-medium">
            {SERVICE_TYPE_LABELS[values.serviceType]}
          </dd>
        </div>
        <div className="flex justify-between sm:block">
          <dt className="text-muted-foreground">Frequency</dt>
          <dd className="font-medium">
            {FREQUENCY_LABELS[values.frequency]}
          </dd>
        </div>
        <div className="flex justify-between sm:block">
          <dt className="text-muted-foreground">When</dt>
          <dd className="font-medium">
            {values.date} • {values.timeSlot}
          </dd>
        </div>
        <div className="flex justify-between sm:block">
          <dt className="text-muted-foreground">Where</dt>
          <dd className="font-medium truncate">
            {values.suburb}, NSW
          </dd>
        </div>
      </dl>

      <div className="mt-10 flex flex-wrap justify-center gap-3">
        <Button asChild variant="accent">
          <Link href="/">
            <Home className="h-4 w-4 mr-1" aria-hidden />
            Back to Home
          </Link>
        </Button>
        <Button asChild variant="outline">
          <a href="mailto:hello@sparkleclean.example">
            <Mail className="h-4 w-4 mr-1" aria-hidden />
            Email Us
          </a>
        </Button>
        <Button variant="ghost" onClick={onReset}>
          Book another
        </Button>
      </div>
    </div>
  );
}
