import { useBooking } from "@/src/app/context";
import { Clock } from "lucide-react";

type TimeSelectorProps = {
  showtimes: string[];
};

export default function TimeSelector({ showtimes }: TimeSelectorProps) {
  const { selectedTime, setSelectedTime } = useBooking();
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold text-gray-800 flex items-center">
        <Clock className="w-6 h-6 mr-2 text-[#9667E0]" />
        Horarios disponibles
      </h2>
      <div className="grid grid-cols-3 gap-3">
        {showtimes.map((time) => (
          <button
            key={time}
            className={`py-3 rounded-lg transition-colors duration-200 ${
              selectedTime === time
                ? "bg-[#9667E0] text-white"
                : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-100"
            }`}
            onClick={() => setSelectedTime(time)}
          >
            {time}
          </button>
        ))}
      </div>
    </div>
  );
}
