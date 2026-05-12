import type { Metadata } from "next";
import { GalleryGrid } from "@/components/gallery/gallery-grid";
import { FadeIn } from "@/components/fade-in";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Before-and-after photos from real SparkleClean jobs across Sydney — kitchens, bathrooms, offices, and more.",
  openGraph: {
    title: "Gallery | SparkleClean",
    description: "Real before-and-after results from across Sydney.",
    type: "website",
  },
};

export default function GalleryPage() {
  return (
    <section className="container py-12 md:py-16">
      <FadeIn>
        <header className="mb-10 max-w-2xl">
          <p className="uppercase tracking-[0.25em] text-accent text-xs font-medium mb-3">
            Before & after
          </p>
          <h1 className="font-heading text-4xl md:text-5xl text-primary">
            Gallery
          </h1>
          <p className="mt-4 text-muted-foreground">
            Real homes, real results. Hover any card to reveal the
            before/after labels — click to see the full-size pair.
          </p>
        </header>
      </FadeIn>

      <FadeIn delay={100}>
        <GalleryGrid />
      </FadeIn>
    </section>
  );
}
