import { MovieResult } from "../interfaces/movies.response";
import { MovieCard } from "./MovieCard";
import * as motion from "framer-motion/client";

interface Props {
  movies: MovieResult[];
}

export const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export const MovieGrid = ({ movies }: Props) => {
  return (
    <motion.div
      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4 p-4"
      initial="hidden"
      animate="visible"
      variants={{
        visible: {
          transition: {
            staggerChildren: 0.1,
          },
        },
      }}
    >
      {movies &&
        movies.map((movie) => (
          <motion.div key={movie.id} variants={cardVariants}>
            <MovieCard movie={movie} />
          </motion.div>
        ))}
    </motion.div>
  );
};
