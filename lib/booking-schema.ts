import { z } from "zod";

export const SERVICE_TYPES = [
  "regular",
  "deep",
  "end-of-lease",
  "office",
  "carpet",
  "windows",
  "spring",
  "move-in",
] as const;

export const SERVICE_TYPE_LABELS: Record<(typeof SERVICE_TYPES)[number], string> = {
  regular: "Regular House Cleaning",
  deep: "Deep Cleaning",
  "end-of-lease": "End of Lease / Bond",
  office: "Office & Commercial",
  carpet: "Carpet Cleaning",
  windows: "Window Cleaning",
  spring: "Spring Cleaning",
  "move-in": "Move-In Cleaning",
};

export const FREQUENCIES = ["one-off", "weekly", "fortnightly", "monthly"] as const;
export const FREQUENCY_LABELS: Record<(typeof FREQUENCIES)[number], string> = {
  "one-off": "One-off",
  weekly: "Weekly",
  fortnightly: "Fortnightly",
  monthly: "Monthly",
};

export const PROPERTY_SIZES = ["Studio", "1BR", "2BR", "3BR", "4BR+"] as const;

export const TIME_SLOTS = [
  "08:00",
  "09:00",
  "10:00",
  "11:00",
  "13:00",
  "14:00",
  "15:00",
  "16:00",
] as const;

/** Today as YYYY-MM-DD in local timezone. */
function todayISO() {
  const d = new Date();
  const tz = d.getTimezoneOffset() * 60_000;
  return new Date(d.getTime() - tz).toISOString().slice(0, 10);
}

export const step1Schema = z.object({
  serviceType: z.enum(SERVICE_TYPES, {
    required_error: "Please choose a service.",
  }),
  frequency: z.enum(FREQUENCIES, {
    required_error: "Please choose a frequency.",
  }),
});

export const step2Schema = z.object({
  address: z
    .string()
    .min(5, "Please enter your street address.")
    .max(120),
  suburb: z.string().min(2, "Please enter your suburb."),
  propertySize: z.enum(PROPERTY_SIZES, {
    required_error: "Please choose a size.",
  }),
  bedrooms: z.coerce
    .number({ invalid_type_error: "Enter a number." })
    .int()
    .min(0)
    .max(10),
  bathrooms: z.coerce
    .number({ invalid_type_error: "Enter a number." })
    .int()
    .min(1, "At least one bathroom.")
    .max(10),
  instructions: z.string().max(500).optional().or(z.literal("")),
});

export const step3Schema = z.object({
  date: z
    .string()
    .min(1, "Please pick a date.")
    .refine((d) => d >= todayISO(), {
      message: "Date must be today or later.",
    }),
  timeSlot: z.enum(TIME_SLOTS, {
    required_error: "Please pick a time slot.",
  }),
});

export const step4Schema = z.object({
  name: z
    .string()
    .min(2, "Please enter your name.")
    .max(80),
  email: z.string().email("Please enter a valid email."),
  phone: z
    .string()
    .min(8, "Please enter a valid phone number.")
    .regex(/^[+\d][\d\s-]{6,}$/, "Numbers, spaces, dashes, optional + only."),
});

export const bookingSchema = step1Schema
  .merge(step2Schema)
  .merge(step3Schema)
  .merge(step4Schema);

export type BookingFormValues = z.infer<typeof bookingSchema>;

/** Field name groups by step for `trigger()` calls. */
export const STEP_FIELDS: (keyof BookingFormValues)[][] = [
  ["serviceType", "frequency"],
  ["address", "suburb", "propertySize", "bedrooms", "bathrooms", "instructions"],
  ["date", "timeSlot"],
  ["name", "email", "phone"],
];

/** Generate a short pseudo-random booking reference like SC-2K9F-4821. */
export function generateBookingRef(): string {
  const alphabet = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  const letters = Array.from({ length: 4 }, () =>
    alphabet[Math.floor(Math.random() * alphabet.length)]
  ).join("");
  const digits = Math.floor(1000 + Math.random() * 9000);
  return `SC-${letters}-${digits}`;
}
