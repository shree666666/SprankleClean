import type { Metadata } from "next";
import { BookingForm } from "@/components/booking/booking-form";

export const metadata: Metadata = {
  title: "Book a Cleaning",
  description:
    "Book your SparkleClean appointment in 60 seconds. Pick your service, choose a time, and we'll handle the rest.",
  openGraph: {
    title: "Book a Cleaning | SparkleClean",
    description: "Book your SparkleClean appointment in 60 seconds.",
    type: "website",
  },
};

export default function BookingPage() {
  return (
    <section className="container py-12 md:py-16 max-w-3xl">
      <header className="mb-8 text-center">
        <p className="uppercase tracking-[0.25em] text-accent text-xs font-medium mb-3">
          Book online
        </p>
        <h1 className="font-heading text-4xl md:text-5xl text-primary">
          Book a Cleaning
        </h1>
        <p className="mt-3 text-muted-foreground">
          Takes about 60 seconds. We&apos;ll confirm by email within one
          business day.
        </p>
      </header>

      <BookingForm />
    </section>
  );
}
