"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const bannerItems = [
  {
    title: "¡Comenzó El Último Baile!",
    description:
      "Disfruta de la tercera entrega de Venom en todos los formatos: IMAX, 4DX, Macro XE y Screen X.",
    image: "/venom.jpeg",
    poster: "/venom.jpeg",
    movieTitle: "Venom: El Ultimo Baile",
  },
  {
    title: "Un estreno que no te puedes perder",
    description:
      "Un robot llamado Roz naufraga en una isla, donde debe aprender a adaptarse a su nuevo entorno, al establecer relaciones con los animales del lugar, pronto desarrolla un vínculo paternal con un ganso huérfano.",
    image: "/robot-salvaje.jpg",
    poster: "/robot-salvaje.jpg",
    movieTitle: "Robot Salvaje",
  },
  {
    title: "Un estreno que no te puedes perder",
    description:
      "El comediante fracasado Arthur Fleck conoce al amor de su vida, Harley Quinn, mientras está en el Hospital Estatal de Arkham. Al ser liberados, la pareja se embarca en una aventura romántica.",
    image: "/joker.jpg",
    poster: "/joker.jpg",
    movieTitle: "Joker: El mundo es un escenario",
  },
];

export default function CineBanner() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % bannerItems.length);
    }, 10000);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % bannerItems.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prevSlide) => (prevSlide - 1 + bannerItems.length) % bannerItems.length
    );
  };

  return (
    <div className="relative w-full h-[80vh] sm:h-[60vh] md:h-[80vh] overflow-hidden bg-gradient-to-r from-purple-900 via-indigo-900 to-blue-900">
      <AnimatePresence initial={false}>
        {bannerItems.map(
          (item, index) =>
            index === currentSlide && (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="absolute top-0 left-0 w-full h-full"
              >
                <div className="flex flex-col md:flex-row h-full">
                  <div className="w-full md:w-1/2 p-6 md:p-12 flex flex-col justify-center">
                    <h2 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
                      {item.title}
                    </h2>
                    <p className="text-white text-sm sm:text-base md:text-lg mb-6 line-clamp-3 sm:line-clamp-none">
                      {item.description}
                    </p>
                    <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full w-full sm:w-auto transition duration-300 ease-in-out transform hover:scale-105">
                      Comprar boletos
                    </button>
                  </div>
                  <div className="w-full md:w-1/2 relative h-1/2 md:h-full">
                    <Image
                      src={item.poster}
                      alt={item.movieTitle}
                      fill
                      style={{ objectFit: "contain" }}
                      sizes="(max-width: 768px) 100vw, 50vw"
                      priority
                    />
                    <div className="absolute bottom-4 left-4 right-4 bg-gradient-to-t from-black/70 to-transparent p-4">
                      <h3 className="text-white text-xl sm:text-2xl md:text-3xl font-bold text-center">
                        {item.movieTitle}
                      </h3>
                    </div>
                  </div>
                </div>
              </motion.div>
            )
        )}
      </AnimatePresence>
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition duration-300 ease-in-out"
        aria-label="Anterior"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition duration-300 ease-in-out"
        aria-label="Siguiente"
      >
        <ChevronRight className="w-6 h-6" />
      </button>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {bannerItems.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? "bg-white scale-125" : "bg-white/50"
            }`}
            aria-label={`Ir a la diapositiva ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
