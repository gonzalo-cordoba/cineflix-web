"use client";

import React, { createContext, useState, useContext } from "react";

type BookingContextType = {
  selectedMovie: string;
  selectedDate: string;
  selectedTime: string;
  selectedCinema: string;
  currentStep: string;
  setSelectedMovie: (movie: string) => void;
  setSelectedDate: (date: string) => void;
  setSelectedTime: (time: string) => void;
  setSelectedCinema: (cinema: string) => void;
  setCurrentStep: (step: string) => void;
};

const BookingContext = createContext<BookingContextType | undefined>(undefined);

export function BookingProvider({ children }: { children: React.ReactNode }) {
  const [selectedMovie, setSelectedMovie] = useState("Gladiator II");
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [selectedCinema, setSelectedCinema] = useState("Alto Palermo Shopping");
  const [currentStep, setCurrentStep] = useState("schedule");

  return (
    <BookingContext.Provider
      value={{
        selectedMovie,
        selectedDate,
        selectedTime,
        selectedCinema,
        currentStep,
        setSelectedMovie,
        setSelectedDate,
        setSelectedTime,
        setSelectedCinema,
        setCurrentStep,
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
