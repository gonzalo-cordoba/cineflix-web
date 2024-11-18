"use client";

import { ArrowRight, ShoppingCart } from "lucide-react";
import Link from "next/link";
import { Seat } from "../choiceseats/interfaces";
import { useState } from "react";

// TODO: Hacer el cart dinamico para reutilizar en las secciones de ChoiceOfTickets y ChoiceOfSeats

export default function CartSideBar() {
  const [selectedSeats, setSelectedSeats] = useState<Seat[]>([]);

  return (
    <div className="bg-gray-800 border border-gray-700 rounded-lg p-4">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold flex items-center gap-2">
          <ShoppingCart className="h-5 w-5" />
          Tu carrito
        </h2>
        <span className="text-lg">$0.00</span>
      </div>
      <div className="space-y-4">
        <div className="flex gap-3">
          <Link
            href="/placeholder.svg"
            className="w-16 h-24 object-cover rounded"
          />
          <div>
            <h3 className="font-semibold">Gladiador II</h3>
            <span className="inline-block bg-[#9667E0]/20 text-[#9667E0] text-xs px-2 py-1 rounded mt-1">
              B15
            </span>
            <p className="text-sm text-gray-400 mt-1">
              No recomendada para menores de 15 años.
            </p>
          </div>
        </div>

        <div className="space-y-2">
          <h4 className="font-medium">Cine</h4>
          <p className="text-sm text-gray-400">Alto Palermo Shopping</p>
        </div>

        {/* Aca */}
        <div className="space-y-2">
          <h4 className="font-medium">Asientos ({selectedSeats.length})</h4>
          {selectedSeats.length > 0 ? (
            <div className="flex flex-wrap gap-1">
              {selectedSeats.map((seat) => (
                <span
                  key={seat.id}
                  className="text-sm bg-[#9667E0]/20 text-[#9667E0] px-2 py-1 rounded"
                >
                  {seat.row}
                  {seat.number}
                </span>
              ))}
            </div>
          ) : (
            <p className="text-sm text-gray-400">
              No has seleccionado tus asientos
            </p>
          )}
        </div>

        <hr className="border-gray-700" />

        <div className="space-y-2">
          <div className="flex justify-between">
            <span>Subtotal:</span>
            <span>$0.00</span>
          </div>
          <div className="flex justify-between font-bold">
            <span>Total:</span>
            <span className="text-[#9667E0]">$0.00</span>
          </div>
        </div>
      </div>

      <Link href="/checkout" className="block w-full">
        <button
          className="w-full bg-[#9667E0] hover:bg-[#9667E0]/90 text-white font-bold py-2 px-4 rounded-md transition-colors flex items-center justify-center gap-2"
          disabled={selectedSeats.length === 0}
        >
          Continuar
          <ArrowRight className="h-5 w-5" />
        </button>
      </Link>
    </div>
  );
}
