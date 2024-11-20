import { useBooking } from "@/src/app/context";

export default function SeatSelector() {
  const { selectedMovie, selectedDate, selectedTime } = useBooking();

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold text-gray-800">
        Selección de Asientos
      </h2>
      <p className="text-gray-600">
        Selecciona tus asientos para {selectedMovie} el {selectedDate} a las{" "}
        {selectedTime}.
      </p>
      {/* Aquí iría la lógica de selección de asientos */}
      <div className="bg-gray-200 p-4 rounded-lg text-center">
        Implementación de selección de asientos
      </div>
    </div>
  );
}
