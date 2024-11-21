"use client";

import React, { useEffect } from "react";
import {
  BookingSummary,
  DateSelector,
  PaymentSection,
  SeatSelector,
  TimeSelector,
} from "@/components/horarios";
import { BookingProvider, useBooking } from "../../context";
import { useRouter, useSearchParams } from "next/navigation";
import { useBookingStore } from "@/src/store/store";
import Cookies from "js-cookie";

function BookingContent() {
  const { currentStep, setCurrentStep, setSelectedMovie } = useBooking();
  const searchParams = useSearchParams();
  const movieTitle = searchParams.get("movie") || "Pelicula seleccionada";
  const router = useRouter();
  const canAccessBooking = useBookingStore((state) => state.canAccessBooking);

  useEffect(() => {
    setSelectedMovie(movieTitle);

    const cookieAccess = Cookies.get("canAccessBooking");
    if (!canAccessBooking && !cookieAccess) {
      router.push("/");
    }
  }, [movieTitle, setSelectedMovie, canAccessBooking, router]);

  const dates = [
    { date: "2024-11-15", day: "Hoy" },
    { date: "2024-11-16", day: "Mañana" },
    { date: "2024-11-17", day: "Domingo" },
    { date: "2024-11-18", day: "Lunes" },
    { date: "2024-11-19", day: "Martes" },
    { date: "2024-11-20", day: "Miércoles" },
  ];

  const showtimes = [
    "14:00",
    "15:00",
    "15:50",
    "17:15",
    "18:15",
    "19:00",
    "20:30",
    "21:30",
    "22:10",
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white shadow-xl rounded-lg overflow-hidden">
          <div className="bg-[#9667E0] text-white p-6">
            <h1 className="text-3xl font-bold text-center">
              Reserva tu película
            </h1>
            <h2 className="text-xl font-semibold text-center mt-2">
              {movieTitle}
            </h2>
          </div>

          <div className="flex justify-center p-4 bg-gray-50 border-b border-gray-200">
            <button
              className={`px-4 py-2 mx-2 rounded-lg ${
                currentStep === "schedule"
                  ? "bg-[#9667E0] text-white"
                  : "bg-white text-gray-700"
              }`}
              onClick={() => setCurrentStep("schedule")}
            >
              Horarios
            </button>
            <button
              className={`px-4 py-2 mx-2 rounded-lg ${
                currentStep === "seats"
                  ? "bg-[#9667E0] text-white"
                  : "bg-white text-gray-700"
              }`}
              onClick={() => setCurrentStep("seats")}
            >
              Asientos
            </button>
            <button
              className={`px-4 py-2 mx-2 rounded-lg ${
                currentStep === "payment"
                  ? "bg-[#9667E0] text-white"
                  : "bg-white text-gray-700"
              }`}
              onClick={() => setCurrentStep("payment")}
            >
              Pago
            </button>
          </div>

          <div className="p-6 space-y-6">
            {currentStep === "schedule" && (
              <>
                <DateSelector dates={dates} />
                <TimeSelector showtimes={showtimes} />
              </>
            )}
            {currentStep === "seats" && <SeatSelector />}
            {currentStep === "payment" && <PaymentSection />}

            <BookingSummary />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function MovieBooking() {
  return (
    <BookingProvider>
      <BookingContent />
    </BookingProvider>
  );
}
