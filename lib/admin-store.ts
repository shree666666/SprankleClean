// Server-only helpers. Imported by `app/admin/*` (server components and
// server actions). Do not import this file from a client component.
import fs from "node:fs/promises";
import path from "node:path";
export { BOOKING_STATUSES } from "./booking-types";
export type { BookingStatus, Booking } from "./booking-types";

const DATA_FILE = path.join(process.cwd(), "data", "bookings.json");

export async function readBookings(): Promise<import("./booking-types").Booking[]> {
  const raw = await fs.readFile(DATA_FILE, "utf-8");
  const parsed = JSON.parse(raw) as { bookings: import("./booking-types").Booking[] };
  return parsed.bookings;
}

export async function writeBookings(bookings: import("./booking-types").Booking[]): Promise<void> {
  await fs.writeFile(DATA_FILE, JSON.stringify({ bookings }, null, 2), "utf-8");
}

export function summarize(bookings: import("./booking-types").Booking[]) {
  const today = new Date();
  const todayISO = new Date(today.getTime() - today.getTimezoneOffset() * 60_000).toISOString().slice(0, 10);
  const year = today.getFullYear();
  const month = today.getMonth();
  const todayBookings = bookings.filter((b) => b.date === todayISO);
  const thisMonth = bookings.filter((b) => {
    const d = new Date(b.date + "T00:00:00");
    return d.getFullYear() === year && d.getMonth() === month;
  });
  const revenueThisMonth = thisMonth.filter((b) => b.status !== "Cancelled").reduce((sum, b) => sum + b.total, 0);
  const byStatus = bookings.reduce<Record<string, number>>((acc, b) => { acc[b.status] = (acc[b.status] ?? 0) + 1; return acc; }, { Pending: 0, Confirmed: 0, Completed: 0, Cancelled: 0 });
  return { todayCount: todayBookings.length, monthCount: thisMonth.length, revenueThisMonth, byStatus, totalAll: bookings.length };
}