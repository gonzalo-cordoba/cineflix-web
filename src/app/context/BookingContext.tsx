"use client";

import React, { createContext, useState, useContext } from "react";

type BookingContextType = {
  selectedMovie: string;
  selectedDate: string;
  selectedTime: string;
  selectedCinema: string;
  setSelectedMovie: (movie: string) => void;
  setSelectedDate: (date: string) => void;
  setSelectedTime: (time: string) => void;
  setSelectedCinema: (cinema: string) => void;
};

const BookingContext = createContext<BookingContextType | undefined>(undefined);

export function BookingProvider({ children }: { children: React.ReactNode }) {
  const [selectedMovie, setSelectedMovie] = useState("Gladiator II");
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [selectedCinema, setSelectedCinema] = useState("Alto Palermo Shopping");

  return (
    <BookingContext.Provider
      value={{
        selectedMovie,
        selectedDate,
        selectedTime,
        selectedCinema,
        setSelectedMovie,
        setSelectedDate,
        setSelectedTime,
        setSelectedCinema,
      }}
    >
      {children}
    </BookingContext.Provider>
  );
}

export function useBooking() {
  const context = useContext(BookingContext);
  if (context === undefined) {
    throw new Error("useBooking must be used within a BookingProvider");
  }
  return context;
}
