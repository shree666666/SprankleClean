export const BOOKING_STATUSES = ["Pending", "Confirmed", "Completed", "Cancelled"] as const;
export type BookingStatus = (typeof BOOKING_STATUSES)[number];
export interface Booking {
  id: string; name: string; email: string; phone: string;
  service: string; serviceLabel: string; frequency: string;
  address: string; suburb: string; propertySize: string;
  bedrooms: number; bathrooms: number; date: string;
  timeSlot: string; total: number; status: BookingStatus; createdAt: string;
}