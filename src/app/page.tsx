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
import * as motion from "framer-motion/client";

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
      <motion.main
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="flex min-h-screen flex-col items-center justify-between"
      >
        <CineBanner />
      </motion.main>

      <main className="flex flex-col justify-center mb-10 px-4 max-w-7xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 50, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white mb-6 text-center"
        >
          ¡Descubre el top de películas en tendencia!
        </motion.h1>

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
