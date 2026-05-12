import { Skeleton } from "@/components/ui/skeleton";

export default function ServicesLoading() {
  return (
    <section className="container py-12 md:py-16">
      <header className="mb-10 max-w-2xl">
        <Skeleton className="h-3 w-24 mb-3" />
        <Skeleton className="h-12 w-56 mb-4" />
        <Skeleton className="h-4 w-full max-w-lg" />
        <Skeleton className="h-4 w-3/4 max-w-md mt-2" />
      </header>

      {/* Filter bar skeleton */}
      <div className="mb-10 flex gap-2 overflow-hidden">
        {Array.from({ length: 4 }).map((_, i) => (
          <Skeleton key={i} className="h-10 w-28 rounded-full" />
        ))}
      </div>

      {/* Service cards skeleton */}
      <div className="grid gap-4">
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="rounded-xl border bg-card p-6 flex items-start gap-4"
          >
            <Skeleton className="h-12 w-12 rounded-xl shrink-0" />
            <div className="flex-1 space-y-3">
              <Skeleton className="h-6 w-2/3" />
              <Skeleton className="h-3 w-1/3" />
            </div>
            <Skeleton className="h-5 w-5 rounded-full shrink-0" />
          </div>
        ))}
      </div>
    </section>
  );
}
