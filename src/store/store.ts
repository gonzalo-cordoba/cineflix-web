import { create } from "zustand";

interface BookingStore {
  canAccessBooking: boolean;
  setCanAccessBooking: (value: boolean) => void;
}

export const useBookingStore = create<BookingStore>((set) => ({
  canAccessBooking: false,
  setCanAccessBooking: (value) => set({ canAccessBooking: value }),
}));
