"use client";

import { useState } from "react";
import { MapPin } from "lucide-react";
import {
  BookingSummary,
  DateSelector,
  TimeSelector,
} from "@/components/horarios";

export default function HorariosPage() {
  const [selectedDate, setSelectedDate] = useState("2024-11-15");
  const [selectedTime, setSelectedTime] = useState("");
  const [selectedCinema, setSelectedCinema] = useState("Alto Palermo Shopping");

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

          <div className="p-6 space-y-6">
            <div className="flex items-center justify-center space-x-4 text-[#9667E0]">
              <MapPin className="h-6 w-6" />
              <span className="font-semibold text-lg">{selectedCinema}</span>
            </div>

            <DateSelector
              dates={dates}
              selectedDate={selectedDate}
              onDateSelect={setSelectedDate}
            />

            <TimeSelector
              showtimes={showtimes}
              selectedTime={selectedTime}
              onTimeSelect={setSelectedCinema}
            />

            <BookingSummary
              selectedDate={selectedDate}
              selectedTime={selectedTime}
              selectedCinema={selectedCinema}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
