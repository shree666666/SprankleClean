import type { LucideIcon } from "lucide-react";
import {
  Home,
  Sparkles,
  KeyRound,
  Building2,
  Layers,
  PanelsTopLeft,
  Flower2,
  PackageOpen,
} from "lucide-react";

export type ServiceCategory = "Residential" | "Commercial" | "Specialty";

export interface Service {
  slug: string;
  name: string;
  category: ServiceCategory;
  icon: LucideIcon;
  description: string;
  includes: string[];
  duration: string;
}

export const SERVICES: Service[] = [
  {
    slug: "regular-house-cleaning",
    name: "Regular House Cleaning",
    category: "Residential",
    icon: Home,
    description:
      "Weekly, fortnightly, or monthly upkeep that keeps the whole home consistently tidy. Same friendly team every visit so they learn how you like things.",
    includes: [
      "Kitchen surfaces, sinks, and stovetop",
      "All bathrooms — toilets, showers, mirrors",
      "Dusting and vacuuming throughout",
      "Mop hard floors and spot-clean walls",
      "Make beds and tidy living areas",
      "Empty bins and replace liners",
    ],
    duration: "2–3 hours",
  },
  {
    slug: "deep-cleaning",
    name: "Deep Cleaning",
    category: "Residential",
    icon: Sparkles,
    description:
      "A top-to-bottom reset for homes that need extra attention. Ideal once or twice a year, or before a special event.",
    includes: [
      "Everything in Regular House Cleaning",
      "Baseboards, door frames, and skirting",
      "Inside oven and inside fridge",
      "Range hood and exhaust fans degreased",
      "Light fittings, fans, and air vents",
      "Detail of cabinet fronts and handles",
    ],
    duration: "4–6 hours",
  },
  {
    slug: "end-of-lease",
    name: "End of Lease / Bond Cleaning",
    category: "Specialty",
    icon: KeyRound,
    description:
      "Bond-back guaranteed deep clean designed to meet real-estate agent and landlord standards. We come back free if anything is missed at the inspection.",
    includes: [
      "Full deep clean of every room",
      "Inside cupboards, drawers, and wardrobes",
      "Oven, stove, range hood, and grill",
      "Inside windows, tracks, and sills",
      "Carpet steam clean (optional add-on)",
      "Detailed bathroom de-scale",
    ],
    duration: "5–8 hours",
  },
  {
    slug: "office-commercial",
    name: "Office & Commercial",
    category: "Commercial",
    icon: Building2,
    description:
      "After-hours or daytime commercial cleaning tailored to your operating schedule. Recurring contracts and one-off jobs both welcome.",
    includes: [
      "Desks, conference rooms, and reception",
      "Kitchens, break rooms, and dishwasher",
      "Bathrooms and consumables restock",
      "Vacuuming, mopping, and high-touch sanitising",
      "Bin liner replacement and waste removal",
      "Glass partitions and lobby windows",
    ],
    duration: "Per site — quoted",
  },
  {
    slug: "carpet-cleaning",
    name: "Carpet Cleaning",
    category: "Specialty",
    icon: Layers,
    description:
      "Hot-water extraction (steam cleaning) that lifts deep dirt, allergens, and dust mites. Safe for pets and kids.",
    includes: [
      "Pre-vacuum and pre-treatment of stains",
      "Hot-water extraction with eco solution",
      "Spot treatment for pet, food, and wine",
      "Deodoriser pass for fresh finish",
      "Furniture moving for accessible areas",
      "Fast-dry final pass",
    ],
    duration: "1–3 hours",
  },
  {
    slug: "window-cleaning",
    name: "Window Cleaning",
    category: "Specialty",
    icon: PanelsTopLeft,
    description:
      "Streak-free interior and exterior windows, screens, tracks, and frames. Ground-floor and accessible upper floors covered as standard.",
    includes: [
      "Interior + exterior glass clean",
      "Frame and sill wipe-down",
      "Screen brush and rinse",
      "Track vacuum and detail",
      "Hard-water spot removal",
      "Sliding door rails serviced",
    ],
    duration: "1–2 hours",
  },
  {
    slug: "spring-cleaning",
    name: "Spring Cleaning",
    category: "Residential",
    icon: Flower2,
    description:
      "A seasonal refresh that goes beyond a deep clean — perfect for getting the home holiday-ready or just shaking off winter.",
    includes: [
      "Full deep-clean coverage",
      "Wardrobe and pantry declutter",
      "Window and screen detail",
      "Patio, balcony, and outdoor furniture",
      "Mattress vacuum and freshen",
      "Linen rotation and laundry start",
    ],
    duration: "5–7 hours",
  },
  {
    slug: "move-in",
    name: "Move-In Cleaning",
    category: "Specialty",
    icon: PackageOpen,
    description:
      "Start fresh in your new place. We sanitise everything the previous occupant touched so you can move in worry-free.",
    includes: [
      "Sanitise every kitchen surface",
      "Disinfect bathrooms top-to-bottom",
      "Inside cabinets, drawers, and shelving",
      "Wipe walls, doors, switches, and handles",
      "Carpet vacuum and hard-floor mop",
      "Window interiors and tracks",
    ],
    duration: "4–6 hours",
  },
];

export const SERVICE_FILTERS: ("All" | ServiceCategory)[] = [
  "All",
  "Residential",
  "Commercial",
  "Specialty",
];
