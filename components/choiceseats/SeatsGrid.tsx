"use client";

import { useState } from "react";
import { Seat } from "./interfaces";

export default function SeatsGrid() {
  const [selectedSeats, setSelectedSeats] = useState<Seat[]>([]);

  const rows = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K"];
  const seatsPerRow = 14;

  const isSeatSelected = (row: string, number: number) => {
    return selectedSeats.some((seat) => seat.id === `${row}${number}`);
  };

  // Simular asientos ocupados aleatoriamente
  const isOccupied = (row: string, number: number) => {
    return Math.random() < 0.2; // 20% de probabilidad de que esté ocupado
  };

  const handleSeatClick = (row: string, number: number) => {
    const seatId = `${row}${number}`;
    const isSelected = selectedSeats.some((seat) => seat.id === seatId);

    if (isSelected) {
      setSelectedSeats(selectedSeats.filter((seat) => seat.id !== seatId));
    } else {
      setSelectedSeats([
        ...selectedSeats,
        { id: seatId, row, number, status: "selected" },
      ]);
    }
  };

  return (
    <div className="w-full overflow-x-auto">
      <div className="min-w-[600px]">
        {rows.map((row) => (
          <div key={row} className="flex items-center gap-1 mb-1">
            <div className="w-6 text-center font-bold">{row}</div>
            <div className="flex gap-1 flex-1 justify-center">
              {Array.from({ length: seatsPerRow }, (_, i) => i + 1).map(
                (number) => {
                  const occupied = isOccupied(row, number);
                  const selected = isSeatSelected(row, number);
                  return (
                    <button
                      key={`${row}${number}`}
                      disabled={occupied}
                      onClick={() => handleSeatClick(row, number)}
                      className={`w-6 h-6 rounded text-xs flex items-center justify-center transition-colors ${
                        occupied
                          ? "bg-gray-500 cursor-not-allowed"
                          : selected
                          ? "bg-[#9667E0] text-white"
                          : "bg-gray-700 hover:bg-[#9667E0]/70"
                      }`}
                    >
                      {number}
                    </button>
                  );
                }
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
