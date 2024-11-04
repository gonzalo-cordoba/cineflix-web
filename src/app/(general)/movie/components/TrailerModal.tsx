"use client";

import { useState } from "react";
import { Play, X } from "lucide-react";

interface TrailerModalProps {
  movieId: string;
}

const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

const getTrailer = async (id: string): Promise<string | null> => {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}&language=es-AR`
    );
    const data = await response.json();

    const trailer = data.results.find(
      (video: any) => video.type === "Trailer" && video.site === "YouTube"
    );
    return trailer ? trailer.key : null;
  } catch (error) {
    console.error("Error fetching trailer:", error);
    return null;
  }
};

export default function TrailerModal({ movieId }: TrailerModalProps) {
  const [trailerKey, setTrailerKey] = useState<string | null>(null);
  const [showModal, setShowModal] = useState(false);

  const handleTrailerClick = async () => {
    const key = await getTrailer(movieId);
    if (key) {
      setTrailerKey(key);
      setShowModal(true);
    } else {
      alert("No se encontró el tráiler en español.");
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setTrailerKey(null);
  };

  return (
    <>
      <button
        onClick={handleTrailerClick}
        className="border-white text-white hover:bg-white hover:text-black flex items-center"
      >
        <Play className="w-4 h-4 mr-2" />
        Ver trailer
      </button>

      {showModal && trailerKey && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-20">
          <div className="relative bg-black p-4 rounded-lg max-w-xl w-full">
            <button
              onClick={handleCloseModal}
              className="absolute top-2 right-2 text-white hover:text-gray-300"
            >
              <X className="w-6 h-6" />
            </button>
            <iframe
              width="100%"
              height="315"
              src={`https://www.youtube.com/embed/${trailerKey}`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </>
  );
}
