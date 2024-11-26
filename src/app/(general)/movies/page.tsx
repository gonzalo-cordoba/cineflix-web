import { MovieGrid } from "@/src/movies/components/MovieGrid";
import {
  MovieResult,
  MoviesResponse,
} from "../../../movies/interfaces/movies.response";
import * as motion from "framer-motion/client";

const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

const getMovies = async (page = 1, search = ""): Promise<MovieResult[]> => {
  const data: MoviesResponse = await fetch(
    `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&page=${page}&language=es-AR`
  ).then((res) => res.json());

  if (!data.results) {
    console.error("Error: la respuesta de la api no contiene results");
    return [];
  }

  const movies = data.results.map((movie) => ({
    id: movie.id,
    title: movie.title,
    overview: movie.overview,
    poster_path: movie.poster_path,
    release_date: movie.release_date,
    vote_average: movie.vote_average,
    genre_ids: movie.genre_ids,
  }));

  return movies;
};

export default async function MoviesPage() {
  const movies = await getMovies();

  return (
    <div className="flex flex-col">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-center text-gray-900 mb-5 mt-5"
      >
        Películas en Cartelera
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-base text-center text-gray-500"
      >
        Explora los últimos estrenos y disfruta de una experiencia
        cinematográfica única.
      </motion.p>

      <MovieGrid movies={movies} />
    </div>
  );
}
