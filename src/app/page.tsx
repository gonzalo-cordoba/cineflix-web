import CineBanner from "@/components/cine-banner/CineBanner";
import {
  MovieResult,
  MoviesResponse,
} from "../movies/interfaces/movies.response";
import { MovieGrid } from "../movies/components/MovieGrid";
import Link from "next/link";
import ButtonViolet from "@/components/ui/button-violet/ButtonViolet";

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

export default async function Home() {
  const movies = await getMovies();

  const topMovies = movies.slice(0, 6);

  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-between">
        <CineBanner />
      </main>
      <main className="flex flex-col justify-center mb-10">
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white mb-6 text-center">
          ¡Descubre el top de películas en tendencia!
        </h1>

        <MovieGrid movies={topMovies} />

        <Link className="flex justify-center" href={"/movies"}>
          <ButtonViolet text="Descubrir más estrenos" />
        </Link>
      </main>
    </>
  );
}
