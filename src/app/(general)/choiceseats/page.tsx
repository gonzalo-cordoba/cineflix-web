import { ShoppingCart, ArrowRight } from "lucide-react";
import Link from "next/link";
import { CartSideBar, HeaderSideBar } from "@/components/horario";
import { Screen, SeatAvailability, SeatsGrid } from "@/components/choiceseats";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Elegir Butacas - CineFlix",
  description:
    "Selecciona tus butacas preferidas para disfrutar de la película en CineFlix. Asegura tu asiento y vive la mejor experiencia cinematográfica.",
};

export default function ChoiceSeatsPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <HeaderSideBar title="Selecciona tus asientos" />

        <div className="grid md:grid-cols-[1fr,300px] gap-6">
          {/* Seating Area */}
          <div className="space-y-8">
            {/* Legend */}
            <SeatAvailability />

            {/* Screen */}
            <Screen />

            {/* Seats Grid */}
            <SeatsGrid />
          </div>

          <CartSideBar />
        </div>
      </div>
    </div>
  );
}
