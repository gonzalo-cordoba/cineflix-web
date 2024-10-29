import { MovieResult } from "../interfaces/movies.response";
import { MovieCard } from "./MovieCard";

interface Props {
  movies: MovieResult[];
}

export const MovieGrid = ({ movies }: Props) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4 p-4">
      {movies &&
        movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
    </div>
  );
};
