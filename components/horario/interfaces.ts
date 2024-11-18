export interface ShowTime {
  time: string;
  available: boolean;
}

export interface DaySchedule {
  date: string;
  day: string;
  dayName: string;
  showTimes: ShowTime[];
}

export const schedule: DaySchedule[] = [
  {
    date: "15 NOV",
    day: "Hoy",
    dayName: "Miércoles",
    showTimes: [
      { time: "2:00 p.m.", available: true },
      { time: "3:00 p.m.", available: true },
      { time: "3:50 p.m.", available: true },
      { time: "5:15 p.m.", available: true },
      { time: "6:15 p.m.", available: true },
      { time: "7:00 p.m.", available: true },
      { time: "8:30 p.m.", available: true },
      { time: "9:30 p.m.", available: true },
      { time: "10:10 p.m.", available: true },
    ],
  },
  {
    date: "16 NOV",
    day: "Mañana",
    dayName: "Jueves",
    showTimes: [
      { time: "2:00 p.m.", available: true },
      { time: "5:15 p.m.", available: true },
      { time: "8:30 p.m.", available: true },
    ],
  },
  {
    date: "17 NOV",
    day: "Domingo",
    dayName: "Viernes",
    showTimes: [
      { time: "3:00 p.m.", available: true },
      { time: "6:15 p.m.", available: true },
      { time: "9:30 p.m.", available: true },
    ],
  },
];
