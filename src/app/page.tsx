import CineBanner from "@/components/cine-banner/CineBanner";
import { Suspense } from "react";

import { MovieGrid } from "../movies/components/MovieGrid";
import Link from "next/link";
import ButtonViolet from "@/components/ui/button-violet/ButtonViolet";
import {
  getTopMovies,
  getUpcomingMovies,
  getNowPlayingMovies,
  getPopularMovies,
} from "../movies/lib/movies";
import { MovieResult } from "../movies";

async function MovieSection({
  title,
  fetchFunction,
  limit,
}: {
  title: string;
  fetchFunction: () => Promise<MovieResult[]>;
  limit: number;
}) {
  const movies = await fetchFunction();
  return (
    <>
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      <MovieGrid movies={movies.slice(0, limit)} />
    </>
  );
}

export default async function Home() {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-between">
        <CineBanner />
      </main>
      <main className="flex flex-col justify-center mb-10 px-4 max-w-7xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white mb-6 text-center">
          ¡Descubre el top de películas en tendencia!
        </h1>

        <Suspense fallback={<div>Cargando estrenos...</div>}>
          <MovieSection
            title="Estrenos"
            fetchFunction={getNowPlayingMovies}
            limit={6}
          />
        </Suspense>

        <Link className="flex justify-center mt-4 mb-8" href={"/movies"}>
          <ButtonViolet text="Descubrir más estrenos" />
        </Link>

        <Suspense fallback={<div>Cargando ventas anticipadas...</div>}>
          <MovieSection
            title="Ventas anticipadas"
            fetchFunction={getUpcomingMovies}
            limit={4}
          />
        </Suspense>

        <Suspense fallback={<div>Cargando películas populares...</div>}>
          <MovieSection
            title="Películas populares"
            fetchFunction={getPopularMovies}
            limit={3}
          />
        </Suspense>

        <Suspense fallback={<div>Cargando películas mejor valoradas...</div>}>
          <MovieSection
            title="Películas mejor valoradas"
            fetchFunction={getTopMovies}
            limit={3}
          />
        </Suspense>
      </main>
    </>
  );
}
