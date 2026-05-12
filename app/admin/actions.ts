"use server";

import { revalidatePath } from "next/cache";
import {
  readBookings,
  writeBookings,
  BOOKING_STATUSES,
  type BookingStatus,
} from "@/lib/admin-store";

export async function updateBookingStatus(
  id: string,
  status: BookingStatus
): Promise<{ ok: true } | { ok: false; error: string }> {
  if (!BOOKING_STATUSES.includes(status)) {
    return { ok: false, error: "Invalid status." };
  }

  const bookings = await readBookings();
  const idx = bookings.findIndex((b) => b.id === id);
  if (idx === -1) {
    return { ok: false, error: "Booking not found." };
  }

  bookings[idx] = { ...bookings[idx], status };
  await writeBookings(bookings);
  revalidatePath("/admin");
  return { ok: true };
}
