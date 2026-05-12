"use client";

import * as React from "react";
import Image from "next/image";
import {
  GALLERY,
  GALLERY_FILTERS,
  BLUR_DATA,
  type GalleryCategory,
  type GalleryItem,
} from "@/lib/gallery-data";
import { cn } from "@/lib/utils";
import { Lightbox } from "./lightbox";

type Filter = "All" | GalleryCategory;

export function GalleryGrid() {
  const [filter, setFilter] = React.useState<Filter>("All");
  const [lightboxIndex, setLightboxIndex] = React.useState<number | null>(null);

  const visible: GalleryItem[] = React.useMemo(
    () => (filter === "All" ? GALLERY : GALLERY.filter((g) => g.category === filter)),
    [filter]
  );

  return (
    <>
      {/* Filter bar */}
      <div className="flex flex-wrap gap-2 mb-8" role="tablist" aria-label="Filter gallery">
        {GALLERY_FILTERS.map((f) => {
          const active = filter === f;
          const count =
            f === "All" ? GALLERY.length : GALLERY.filter((g) => g.category === f).length;
          return (
            <button
              key={f}
              type="button"
              role="tab"
              aria-selected={active}
              onClick={() => setFilter(f)}
              className={cn(
                "inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-colors whitespace-nowrap",
                active
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "bg-muted text-foreground/75 hover:bg-primary/10 hover:text-primary"
              )}
            >
              {f}
              <span
                className={cn(
                  "inline-flex h-5 min-w-[1.25rem] items-center justify-center rounded-full px-1.5 text-[10px] font-bold",
                  active
                    ? "bg-primary-foreground/20 text-primary-foreground"
                    : "bg-background text-muted-foreground"
                )}
              >
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Masonry via CSS columns */}
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 [column-fill:_balance]">
        {visible.map((item, idx) => (
          <GalleryCard
            key={item.id}
            item={item}
            onOpen={() => setLightboxIndex(idx)}
          />
        ))}
      </div>

      {visible.length === 0 && (
        <p className="text-center text-muted-foreground py-12">
          No images in this category yet.
        </p>
      )}

      {lightboxIndex !== null && (
        <Lightbox
          items={visible}
          startIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
        />
      )}
    </>
  );
}

function GalleryCard({
  item,
  onOpen,
}: {
  item: GalleryItem;
  onOpen: () => void;
}) {
  // Derive a height for the before/after pair so the card fits the masonry column nicely.
  // Each half keeps a 4:3 aspect — overall card height is set by the wider/varying width.
  const beforeUrl = `https://picsum.photos/seed/${item.beforeSeed}/800/${Math.round(
    800 * item.ratio
  )}`;
  const afterUrl = `https://picsum.photos/seed/${item.afterSeed}/800/${Math.round(
    800 * item.ratio
  )}`;

  return (
    <button
      type="button"
      onClick={onOpen}
      className="group block w-full mb-4 break-inside-avoid rounded-xl overflow-hidden ring-1 ring-border bg-card text-left transition-shadow hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
      aria-label={`Open ${item.caption}`}
    >
      <div className="relative grid grid-cols-2">
        {/* Before */}
        <div
          className="relative"
          style={{ aspectRatio: `1 / ${item.ratio}` }}
        >
          <Image
            src={beforeUrl}
            alt={`${item.caption} — before`}
            fill
            sizes="(min-width: 1024px) 200px, (min-width: 640px) 240px, 50vw"
            placeholder="blur"
            blurDataURL={BLUR_DATA}
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <span
            className={cn(
              "absolute top-2 left-2 bg-brand-ink/80 backdrop-blur text-brand-cream",
              "text-[9px] font-bold uppercase tracking-[0.2em] px-2 py-1 rounded-full",
              "opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 transition-opacity"
            )}
          >
            Before
          </span>
        </div>

        {/* After */}
        <div
          className="relative"
          style={{ aspectRatio: `1 / ${item.ratio}` }}
        >
          <Image
            src={afterUrl}
            alt={`${item.caption} — after`}
            fill
            sizes="(min-width: 1024px) 200px, (min-width: 640px) 240px, 50vw"
            placeholder="blur"
            blurDataURL={BLUR_DATA}
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <span
            className={cn(
              "absolute top-2 right-2 bg-accent text-accent-foreground",
              "text-[9px] font-bold uppercase tracking-[0.2em] px-2 py-1 rounded-full",
              "opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 transition-opacity"
            )}
          >
            After
          </span>
        </div>

        {/* Divider */}
        <span
          aria-hidden
          className="absolute inset-y-0 left-1/2 w-px bg-brand-cream/60"
        />

        {/* Bottom caption overlay */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-brand-ink/70 via-brand-ink/0 to-transparent"
        />
        <p className="absolute bottom-2 left-3 right-3 text-brand-cream text-xs font-medium truncate">
          {item.caption}
        </p>
      </div>
    </button>
  );
}
