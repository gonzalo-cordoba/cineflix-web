import MovieContent from "../components/MovieContent";
import { Metadata } from "next";

type MovieParams = {
  id: string;
};

type Props = {
  params: MovieParams;
  searchParams: { [key: string]: string | string[] | undefined };
};

const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

const getMovie = async (id: string) => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=es-AR&region=AR`
  );
  const movie = await response.json();
  return movie;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  try {
    const movie = await getMovie(params.id);

    return {
      title: movie.title,
      description: `Página de ${movie.title}`,
    };
  } catch (error) {
    return {
      title: "Cineflix",
      description: "¡Vivi la mejor experiencia en Cineflix!",
    };
  }
}

export default async function MoviePage({ params }: Props) {
  const movie = await getMovie(params.id);
  const backgroundUrl = `https://image.tmdb.org/t/p/original${movie.poster_path}`;

  return (
    <div
      className="min-h-screen flex items-center justify-center p-4 relative"
      style={{
        backgroundImage: `url(${backgroundUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backdropFilter: "blur(10px)",
      }}
    >
      <div className="absolute inset-0 backdrop-blur-sm bg-black/30 -z-10" />
      <MovieContent movieId={params.id} />
    </div>
  );
}
