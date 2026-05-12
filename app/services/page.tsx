import { ServicesFilterGrid } from "@/components/sections/services-filter-grid";

export const metadata = { title: "Services" };

export default function ServicesPage() {
  return (
    <section className="container py-12 md:py-16">
      <header className="mb-10 max-w-2xl">
        <p className="uppercase tracking-[0.25em] text-accent text-xs font-medium mb-3">
          What we do
        </p>
        <h1 className="font-heading text-4xl md:text-5xl text-primary">
          Services
        </h1>
        <p className="mt-4 text-muted-foreground">
          Tap any service to see the full checklist, estimated duration, and a
          one-click way to book it.
        </p>
      </header>

      <ServicesFilterGrid />
    </section>
  );
}
