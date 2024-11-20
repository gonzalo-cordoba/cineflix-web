"use client";

import {
  BookingSummary,
  DateSelector,
  SeatSelector,
  TimeSelector,
} from "@/components/horarios";
import { BookingProvider, useBooking } from "../../context";

function BookingContent() {
  const { currentStep, setCurrentStep } = useBooking();

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
          </div>

          <div className="p-6 space-y-6">
            {currentStep === "schedule" && (
              <>
                <DateSelector dates={dates} />
                <TimeSelector showtimes={showtimes} />
              </>
            )}
            {currentStep === "seats" && <SeatSelector />}
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
