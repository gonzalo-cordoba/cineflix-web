import Image from "next/image";
import Link from "next/link";
import { MovieResult } from "../interfaces/movies.response";

interface Props {
  movie: MovieResult;
}

export const MovieCard = ({ movie }: Props) => {
  const { title, id, poster_path, overview } = movie;

  return (
    <div className="flex flex-col bg-white rounded-lg overflow-hidden shadow-lg h-full transition-transform duration-300 hover:scale-105">
      <div className="relative aspect-[2/3]">
        <Image
          src={`https://image.tmdb.org/t/p/w500${poster_path}`}
          layout="fill"
          objectFit="cover"
          alt={title}
          priority={false}
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-70">
          <Link
            href="/choicetickets"
            className="rounded-full py-1.5 px-3 text-xs sm:text-sm font-semibold text-gray-100 bg-violet-500 mb-2 hover:bg-violet-600 transition-colors"
          >
            Comprar boletos
          </Link>
          <Link
            href={`movie/${id}`}
            className="rounded-full py-1.5 px-3 text-xs sm:text-sm font-semibold text-gray-100 bg-violet-500 hover:bg-violet-600 transition-colors"
          >
            Más información
          </Link>
        </div>
      </div>
      {/* <div className="p-3 flex-grow">
        <h2 className="text-sm sm:text-base font-bold text-gray-900 mb-1 line-clamp-2">
          {title}
        </h2>
        <p className="text-xs sm:text-sm text-gray-600 line-clamp-3">
          {overview}
        </p>
      </div> */}
    </div>
  );
};
