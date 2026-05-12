"use client";

import * as React from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { BLUR_DATA, type GalleryItem } from "@/lib/gallery-data";
import { cn } from "@/lib/utils";

interface LightboxProps {
  items: GalleryItem[];
  startIndex: number;
  onClose: () => void;
}

export function Lightbox({ items, startIndex, onClose }: LightboxProps) {
  const [index, setIndex] = React.useState(startIndex);
  const item = items[index];

  const prev = React.useCallback(
    () => setIndex((i) => (i - 1 + items.length) % items.length),
    [items.length]
  );
  const next = React.useCallback(
    () => setIndex((i) => (i + 1) % items.length),
    [items.length]
  );

  // Lock scroll while open.
  React.useEffect(() => {
    const orig = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = orig;
    };
  }, []);

  // Keyboard navigation.
  React.useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
      else if (e.key === "ArrowLeft") prev();
      else if (e.key === "ArrowRight") next();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose, prev, next]);

  if (!item) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`Gallery image: ${item.caption}`}
      className="fixed inset-0 z-[80] flex items-center justify-center"
    >
      {/* Backdrop */}
      <button
        type="button"
        aria-label="Close gallery"
        onClick={onClose}
        className="absolute inset-0 bg-brand-ink/85 backdrop-blur-sm animate-fade-in"
      />

      {/* Content */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 md:px-12 py-12 animate-fade-in">
        <header className="flex items-start justify-between gap-4 text-brand-cream mb-4">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-accent">
              {item.category}
            </p>
            <h3 className="font-heading text-xl md:text-2xl mt-0.5">
              {item.caption}
            </h3>
            <p className="text-xs text-brand-cream/60 mt-1">
              {index + 1} of {items.length}
            </p>
          </div>
          <button
            type="button"
            aria-label="Close gallery"
            onClick={onClose}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full text-brand-cream hover:bg-brand-cream/10 transition-colors shrink-0"
          >
            <X className="h-6 w-6" aria-hidden />
          </button>
        </header>

        <div className="grid sm:grid-cols-2 gap-3 md:gap-4">
          <figure className="relative aspect-[4/3] rounded-xl overflow-hidden bg-brand-ink/40">
            <Image
              src={`https://picsum.photos/seed/${item.beforeSeed}/1200/900`}
              alt={`${item.caption} — before`}
              fill
              sizes="(min-width: 640px) 50vw, 100vw"
              placeholder="blur"
              blurDataURL={BLUR_DATA}
              className="object-cover"
            />
            <figcaption className="absolute top-3 left-3 bg-brand-ink/80 backdrop-blur text-brand-cream text-[10px] font-bold uppercase tracking-[0.2em] px-2.5 py-1 rounded-full">
              Before
            </figcaption>
          </figure>
          <figure className="relative aspect-[4/3] rounded-xl overflow-hidden bg-brand-ink/40">
            <Image
              src={`https://picsum.photos/seed/${item.afterSeed}/1200/900`}
              alt={`${item.caption} — after`}
              fill
              sizes="(min-width: 640px) 50vw, 100vw"
              placeholder="blur"
              blurDataURL={BLUR_DATA}
              className="object-cover"
            />
            <figcaption className="absolute top-3 left-3 bg-accent text-accent-foreground text-[10px] font-bold uppercase tracking-[0.2em] px-2.5 py-1 rounded-full">
              After
            </figcaption>
          </figure>
        </div>

        {/* Prev / Next */}
        <button
          type="button"
          aria-label="Previous image"
          onClick={prev}
          className={cn(
            "absolute left-2 md:left-4 top-1/2 -translate-y-1/2",
            "inline-flex h-12 w-12 items-center justify-center rounded-full",
            "bg-brand-cream/10 hover:bg-brand-cream/20 text-brand-cream backdrop-blur",
            "transition-colors"
          )}
        >
          <ChevronLeft className="h-6 w-6" aria-hidden />
        </button>
        <button
          type="button"
          aria-label="Next image"
          onClick={next}
          className={cn(
            "absolute right-2 md:right-4 top-1/2 -translate-y-1/2",
            "inline-flex h-12 w-12 items-center justify-center rounded-full",
            "bg-brand-cream/10 hover:bg-brand-cream/20 text-brand-cream backdrop-blur",
            "transition-colors"
          )}
        >
          <ChevronRight className="h-6 w-6" aria-hidden />
        </button>
      </div>
    </div>
  );
}
