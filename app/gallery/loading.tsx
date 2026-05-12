import { Skeleton } from "@/components/ui/skeleton";

const HEIGHTS = [240, 320, 280, 360, 240, 300, 340, 260, 320];

export default function GalleryLoading() {
  return (
    <section className="container py-12 md:py-16">
      <header className="mb-10 max-w-2xl">
        <Skeleton className="h-3 w-28 mb-3" />
        <Skeleton className="h-12 w-44 mb-4" />
        <Skeleton className="h-4 w-full max-w-lg" />
      </header>

      {/* Filter bar skeleton */}
      <div className="mb-8 flex gap-2 overflow-hidden">
        {Array.from({ length: 6 }).map((_, i) => (
          <Skeleton key={i} className="h-10 w-24 rounded-full shrink-0" />
        ))}
      </div>

      {/* Masonry skeleton */}
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-4">
        {HEIGHTS.map((h, i) => (
          <div
            key={i}
            className="mb-4 rounded-xl overflow-hidden break-inside-avoid"
            style={{ height: h }}
          >
            <Skeleton className="h-full w-full rounded-none" />
          </div>
        ))}
      </div>
    </section>
  );
}
