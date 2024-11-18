"use client";

import { useState } from "react";
import { schedule } from "./interfaces";

export default function DateSelector() {
  const [selectedDate, setSelectedDate] = useState<string>("15 NOV");

  return (
    <div className="flex gap-2 overflow-x-auto pb-2">
      {schedule.map((day) => (
        <button
          key={day.date}
          className={`flex flex-col h-auto py-2 px-4 rounded-md transition-colors ${
            selectedDate === day.date
              ? "bg-[#9667E0] text-white"
              : "bg-gray-800 text-white hover:bg-[#9667E0]/70"
          }`}
          onClick={() => setSelectedDate(day.date)}
        >
          <span className="text-xs">{day.day}</span>
          <span className="font-semibold">{day.date}</span>
        </button>
      ))}
    </div>
  );
}
