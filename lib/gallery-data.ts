export type GalleryCategory =
  | "Kitchen"
  | "Bathroom"
  | "Living Areas"
  | "Office"
  | "Carpet";

export interface GalleryItem {
  id: string;
  category: GalleryCategory;
  caption: string;
  /** Aspect ratio (height / width) — drives masonry variation. */
  ratio: number;
  beforeSeed: string;
  afterSeed: string;
}

export const GALLERY_FILTERS: ("All" | GalleryCategory)[] = [
  "All",
  "Kitchen",
  "Bathroom",
  "Living Areas",
  "Office",
  "Carpet",
];

/** Picsum lets us request consistent images via seeds. */
export const GALLERY: GalleryItem[] = [
  {
    id: "kit-1",
    category: "Kitchen",
    caption: "Surry Hills kitchen — full deep clean",
    ratio: 0.75,
    beforeSeed: "sc-kitchen-1-before",
    afterSeed: "sc-kitchen-1-after",
  },
  {
    id: "bath-1",
    category: "Bathroom",
    caption: "Bondi bathroom de-scale",
    ratio: 1.25,
    beforeSeed: "sc-bath-1-before",
    afterSeed: "sc-bath-1-after",
  },
  {
    id: "liv-1",
    category: "Living Areas",
    caption: "Manly living room refresh",
    ratio: 0.85,
    beforeSeed: "sc-liv-1-before",
    afterSeed: "sc-liv-1-after",
  },
  {
    id: "off-1",
    category: "Office",
    caption: "CBD office — recurring contract",
    ratio: 0.7,
    beforeSeed: "sc-off-1-before",
    afterSeed: "sc-off-1-after",
  },
  {
    id: "carp-1",
    category: "Carpet",
    caption: "Newtown carpet steam clean",
    ratio: 1.1,
    beforeSeed: "sc-carp-1-before",
    afterSeed: "sc-carp-1-after",
  },
  {
    id: "kit-2",
    category: "Kitchen",
    caption: "Parramatta end-of-lease kitchen",
    ratio: 1.15,
    beforeSeed: "sc-kitchen-2-before",
    afterSeed: "sc-kitchen-2-after",
  },
  {
    id: "bath-2",
    category: "Bathroom",
    caption: "Mosman ensuite deep clean",
    ratio: 0.8,
    beforeSeed: "sc-bath-2-before",
    afterSeed: "sc-bath-2-after",
  },
  {
    id: "liv-2",
    category: "Living Areas",
    caption: "Chatswood living area",
    ratio: 1.05,
    beforeSeed: "sc-liv-2-before",
    afterSeed: "sc-liv-2-after",
  },
  {
    id: "off-2",
    category: "Office",
    caption: "Co-working space weekly clean",
    ratio: 0.9,
    beforeSeed: "sc-off-2-before",
    afterSeed: "sc-off-2-after",
  },
  {
    id: "carp-2",
    category: "Carpet",
    caption: "Pet-stain rescue — Hornsby",
    ratio: 0.75,
    beforeSeed: "sc-carp-2-before",
    afterSeed: "sc-carp-2-after",
  },
  {
    id: "kit-3",
    category: "Kitchen",
    caption: "Strathfield range hood degrease",
    ratio: 0.95,
    beforeSeed: "sc-kitchen-3-before",
    afterSeed: "sc-kitchen-3-after",
  },
  {
    id: "bath-3",
    category: "Bathroom",
    caption: "Liverpool bond-back bathroom",
    ratio: 1.2,
    beforeSeed: "sc-bath-3-before",
    afterSeed: "sc-bath-3-after",
  },
];

/** Tiny grey SVG as a base64 placeholder for next/image blur. */
export const BLUR_DATA =
  "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPjxyZWN0IHdpZHRoPSI4IiBoZWlnaHQ9IjgiIGZpbGw9IiNlNWU3ZWIiLz48L3N2Zz4=";
