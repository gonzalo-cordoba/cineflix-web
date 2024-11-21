"use client";

import { useState } from "react";
import { CalendarDays, Clock, MapPin, AlertCircle } from "lucide-react";
import { useBooking } from "@/src/app/context";

export default function BookingSummary() {
  const {
    selectedMovie,
    selectedDate,
    selectedTime,
    selectedCinema,
    selectedSeats,
    currentStep,
    setCurrentStep,
  } = useBooking();
  const [showWarning, setShowWarning] = useState(false);

  const handleContinue = () => {
    if (currentStep === "schedule") {
      if (selectedDate && selectedTime) {
        setCurrentStep("seats");
        setShowWarning(false);
      } else {
        setShowWarning(true);
      }
    }
  };

  return (
    <div className="bg-gray-50 p-6 rounded-lg space-y-4">
      <h2 className="text-xl font-bold text-gray-800">Resumen de tu reserva</h2>
      <div className="space-y-3">
        <h3 className="font-semibold text-lg text-gray-800">{selectedMovie}</h3>
        <div className="flex items-center space-x-2 text-sm text-gray-600">
          <MapPin className="h-4 w-4 text-[#9667E0]" />
          <span>{selectedCinema}</span>
        </div>
        {selectedDate && (
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <CalendarDays className="h-4 w-4 text-[#9667E0]" />
            <span>{selectedDate}</span>
          </div>
        )}
        {selectedTime && (
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Clock className="h-4 w-4 text-[#9667E0]" />
            <span>{selectedTime}</span>
          </div>
        )}
        {selectedSeats.length > 0 && (
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <span className="font-semibold">Asientos:</span>
            <span>{selectedSeats.join(", ")}</span>
          </div>
        )}
      </div>

      <div className="pt-4 border-t border-gray-200">
        <div className="flex justify-between items-center">
          <span className="font-semibold text-gray-600">Total:</span>
          <span className="text-2xl font-bold text-[#9667E0]">
            ${selectedSeats.length * 10}
          </span>
        </div>
      </div>

      {showWarning && (
        <div
          className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4"
          role="alert"
        >
          <div className="flex">
            <div className="py-1">
              <AlertCircle className="h-6 w-6 text-yellow-500 mr-4" />
            </div>
            <div>
              <p className="font-bold">Atención</p>
              <p>
                Por favor, selecciona una fecha y un horario antes de continuar.
              </p>
            </div>
          </div>
        </div>
      )}

      {currentStep !== "seats" && currentStep !== "payment" && (
        <button
          className="w-full bg-[#9667E0] text-white py-3 rounded-lg font-semibold hover:bg-[#8557c7] transition-colors duration-200"
          onClick={handleContinue}
        >
          Continuar a selección de asientos
        </button>
      )}
    </div>
  );
}
