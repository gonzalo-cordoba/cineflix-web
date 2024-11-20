import { useBooking } from "@/src/app/context";

type DateSelectorProps = {
  dates: { date: string; day: string }[];
};

export default function DateSelector({ dates }: DateSelectorProps) {
  const { selectedDate, setSelectedDate } = useBooking();

  return (
    <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
      {dates.map((date) => (
        <button
          key={date.date}
          className={`p-2 rounded-lg transition-colors duration-200 ${
            selectedDate === date.date
              ? "bg-[#9667E0] text-white"
              : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-100"
          }`}
          onClick={() => setSelectedDate(date.date)}
        >
          <div className="text-xs space-y-1">
            <div>{date.day}</div>
            <div className="font-bold">{date.date.split("-")[2]}</div>
          </div>
        </button>
      ))}
    </div>
  );
}
