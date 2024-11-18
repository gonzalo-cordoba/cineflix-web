export default function SeatAvailability() {
  return (
    <div className="flex justify-center gap-6">
      <div className="flex items-center gap-2">
        <div className="w-4 h-4 rounded bg-[#9667E0]"></div>
        <span className="text-sm">Seleccionado</span>
      </div>
      <div className="flex items-center gap-2">
        <div className="w-4 h-4 rounded bg-gray-700"></div>
        <span className="text-sm">Disponible</span>
      </div>
      <div className="flex items-center gap-2">
        <div className="w-4 h-4 rounded bg-gray-500"></div>
        <span className="text-sm">Ocupado</span>
      </div>
    </div>
  );
}
