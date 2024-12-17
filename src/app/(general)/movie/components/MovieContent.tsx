"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import TrailerModal from "./TrailerModal";
import ButtonViolet from "@/components/ui/button-violet/ButtonViolet";
import { Movie } from "@/src/movies";

interface MovieContentProps {
  movieId: string;
}

const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

const getMovie = async (id: string): Promise<Movie> => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=es-AR&region=AR`
  );
  if (!response.ok) {
    throw new Error("Failed to fetch movie data");
  }
  return response.json();
};

export default function MovieContent({ movieId }: MovieContentProps) {
  const [movie, setMovie] = useState<Movie | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const movieData = await getMovie(movieId);
        setMovie(movieData);
      } catch (err) {
        setError("Error al cargar los datos de la película");
        console.error(err);
      }
    };
    fetchMovie();
  }, [movieId]);

  if (error) return <p className="text-red-500">{error}</p>;
  if (!movie) return <p>Cargando...</p>;

  return (
    <div className="relative z-10 max-w-2xl w-full bg-black/70 p-8 rounded-lg text-white space-y-6">
      <Image
        src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
        alt={movie.title}
        width={300}
        height={450}
      />
      <h1 className="text-4xl font-bold">{movie.title}</h1>
      <div className="flex items-center gap-2 text-sm">
        <span>{movie.runtime} min</span>
        <span>•</span>
      </div>
      <p className="text-sm leading-relaxed">{movie.overview}</p>
      <div className="flex gap-4">
        <ButtonViolet text="Comprar boletos" />
        <TrailerModal movieId={movieId} />
      </div>
    </div>
  );
}
