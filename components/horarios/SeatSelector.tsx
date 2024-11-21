"use client";

import { useState } from "react";
import { AlertCircle, Monitor } from "lucide-react";
import { useBooking } from "@/src/app/context";

type Seat = {
  id: string;
  isAccessible?: boolean;
  isSelected?: boolean;
};

export default function SeatSelector() {
  const {
    selectedMovie,
    selectedDate,
    selectedTime,
    selectedSeats,
    setSelectedSeats,
    setCurrentStep,
  } = useBooking();
  const [showWarning, setShowWarning] = useState(false);

  const rows = Array.from("ABCDEFGHIJK");

  const generateSeats = (row: string): Seat[] => {
    const seats: Seat[] = [];
    const seatsPerRow = row <= "D" ? 14 : 11;

    for (let i = 1; i <= seatsPerRow; i++) {
      const seatId = `${row}${i}`;
      seats.push({
        id: seatId,
        isAccessible: row === "D" && (i === 8 || i === 9),
      });
    }
    return seats;
  };

  const handleSeatClick = (seatId: string) => {
    setSelectedSeats((prev: string[]) => {
      if (prev.includes(seatId)) {
        return prev.filter((id: string) => id !== seatId);
      }
      return [...prev, seatId];
    });
    setShowWarning(false);
  };

  const handleContinue = () => {
    if (selectedSeats.length === 0) {
      setShowWarning(true);
    } else {
      setCurrentStep("payment");
      setShowWarning(false);
    }
  };

  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <Monitor className="w-full h-8 text-gray-400" />
        <p className="text-sm text-gray-500">Pantalla</p>
      </div>

      <div className="max-w-3xl mx-auto overflow-x-auto">
        <div className="space-y-2 min-w-[600px]">
          {rows.map((row) => (
            <div key={row} className="flex items-center gap-2">
              <div className="w-6 text-gray-500 font-semibold">{row}</div>
              <div className="flex gap-1 justify-center flex-1">
                {generateSeats(row).map((seat) => (
                  <button
                    key={seat.id}
                    className={`
                      w-7 h-7 text-xs rounded-t-lg transition-colors duration-200
                      ${
                        seat.isAccessible
                          ? "bg-blue-100 hover:bg-blue-200"
                          : "bg-gray-100 hover:bg-gray-200"
                      }
                      ${
                        selectedSeats.includes(seat.id)
                          ? "!bg-[#9667E0] text-white"
                          : "text-gray-700"
                      }
                    `}
                    onClick={() => handleSeatClick(seat.id)}
                  >
                    {seat.id.slice(1)}
                  </button>
                ))}
              </div>
              <div className="w-6 text-gray-500 font-semibold">{row}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center gap-6 text-sm">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 bg-gray-100 rounded-t-lg" />
          <span>Disponible</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 bg-[#9667E0] rounded-t-lg" />
          <span>Seleccionado</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 bg-blue-100 rounded-t-lg" />
          <span>Accesibilidad</span>
        </div>
      </div>

      {showWarning && (
        <div
          className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4"
          role="alert"
        >
          <div className="flex">
            <AlertCircle className="h-6 w-6 text-yellow-500 mr-4" />
            <div>
              <p className="font-bold">Atención</p>
              <p>
                Por favor, selecciona al menos un asiento antes de continuar.
              </p>
            </div>
          </div>
        </div>
      )}

      <div className="space-y-4">
        <div className="bg-gray-50 p-4 rounded-lg">
          <h3 className="font-semibold mb-2">Asientos seleccionados:</h3>
          {selectedSeats.length > 0 ? (
            <div className="flex flex-wrap gap-2">
              {selectedSeats.map((seat) => (
                <span
                  key={seat}
                  className="bg-[#9667E0] text-white px-2 py-1 rounded-lg text-sm"
                >
                  {seat}
                </span>
              ))}
            </div>
          ) : (
            <p className="text-gray-500">No has seleccionado ningún asiento</p>
          )}
        </div>

        <button
          onClick={handleContinue}
          className="w-full bg-[#9667E0] text-white py-3 rounded-lg font-semibold hover:bg-[#8557c7] transition-colors duration-200"
        >
          Continuar a pago
        </button>
      </div>
    </div>
  );
}
