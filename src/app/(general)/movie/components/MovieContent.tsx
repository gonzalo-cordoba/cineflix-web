"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import TrailerModal from "../components/TrailerModal";
import ButtonViolet from "@/components/ui/button-violet/ButtonViolet";
import { Movie, MovieResult } from "@/src/movies";
import Link from "next/link";
import { useBookingStore } from "@/src/store/store";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

interface MovieContentProps {
  movieId: string;
  movie: MovieResult;
}

const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

const getMovie = async (id: string): Promise<Movie> => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=es-AR&region=AR`
  );
  return response.json();
};

export default function MovieContent({ movieId }: MovieContentProps) {
  const [movie, setMovie] = useState<Movie | null>(null);

  const router = useRouter();
  const setCanAccessBooking = useBookingStore(
    (state) => state.setCanAccessBooking
  );

  useEffect(() => {
    const fetchMovie = async () => {
      const movieData = await getMovie(movieId);
      setMovie(movieData);
    };
    fetchMovie();
  }, [movieId]);

  if (!movie) return <p>Cargando...</p>;

  const handleBuyTickets = () => {
    setCanAccessBooking(true);
    Cookies.set("canAccessBooking", "true", { expires: 1 / 24 }); //TODO: Expira en una hora
    router.push(`/horario?movie=${encodeURIComponent(movie.title)}`);
  };

  return (
    <div className="relative z-10 max-w-2xl w-full bg-black/70 p-8 rounded-lg text-white space-y-6">
      <Image
        src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
        alt={movie.title}
        width={300}
        height={300}
      />
      <h1 className="text-4xl font-bold">{movie.title}</h1>
      <div className="flex items-center gap-2 text-sm">
        <span>{movie.runtime} min</span>
        <span>•</span>
      </div>
      <p className="text-sm leading-relaxed">{movie.overview}</p>
      <div className="flex gap-4">
        <ButtonViolet onClick={handleBuyTickets} text="Comprar boletos" />

        <TrailerModal movieId={movieId} />
      </div>
    </div>
  );
}
