"use client";

import { useState } from "react";
import { schedule } from "./interfaces";

export default function Showtimes() {
  const [selectedTime, setSelectedTime] = useState<string>("");
  const [selectedDate, setSelectedDate] = useState<string>("15 NOV");

  return (
    <div className="bg-gray-800 border border-gray-700 rounded-lg p-4">
      <h2 className="text-xl font-semibold mb-4">Alto Palermo Shopping</h2>
      <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
        {schedule
          .find((day) => day.date === selectedDate)
          ?.showTimes.map((showtime) => (
            <button
              key={showtime.time}
              className={`w-full py-2 px-4 rounded-md transition-colors ${
                selectedTime === showtime.time
                  ? "bg-[#9667E0] text-white"
                  : "bg-gray-700 text-white hover:bg-[#9667E0]/70"
              }`}
              onClick={() => setSelectedTime(showtime.time)}
            >
              {showtime.time}
            </button>
          ))}
      </div>
    </div>
  );
}
