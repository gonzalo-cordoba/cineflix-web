import { useBooking } from "@/src/app/context";
import { CalendarDays, Clock, MapPin } from "lucide-react";

export default function BookingSummary() {
  const { selectedMovie, selectedDate, selectedTime, selectedCinema } =
    useBooking();

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
      </div>

      <div className="pt-4 border-t border-gray-200">
        <div className="flex justify-between items-center">
          <span className="font-semibold text-gray-600">Total:</span>
          <span className="text-2xl font-bold text-[#9667E0]">$0.00</span>
        </div>
      </div>

      <button className="w-full bg-[#9667E0] text-white py-3 rounded-lg font-semibold hover:bg-[#8557c7] transition-colors duration-200">
        Continuar
      </button>
    </div>
  );
}
