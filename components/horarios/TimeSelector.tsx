type TimeSelectorProps = {
  showtimes: string[];
  selectedTime: string;
  onTimeSelect: (time: string) => void;
};

export default function TimeSelector({
  showtimes,
  selectedTime,
  onTimeSelect,
}: TimeSelectorProps) {
  return (
    <div className="grid grid-cols-3 gap-3">
      {showtimes.map((time) => (
        <button
          key={time}
          className={`py-3 rounded-lg transition-colors duration-200 ${
            selectedTime === time
              ? "bg-[#9667E0] text-white"
              : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-100"
          }`}
          onClick={() => onTimeSelect(time)}
        >
          {time}
        </button>
      ))}
    </div>
  );
}
