import MovieContent from "../components/MovieContent";
import { Metadata } from "next";

type Params = {
  id: string;
};

type Props = {
  params: Params;
  searchParams: { [key: string]: string | string[] | undefined };
};

const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

async function getMovie(id: string) {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=es-AR&region=AR`,
    { next: { revalidate: 3600 } }
  );
  if (!res.ok) throw new Error("Failed to fetch movie");
  return res.json();
}

// export async function generateMetadata({ params }: Props): Promise<Metadata> {
//   const movie = await getMovie(params.id);
//   return {
//     title: movie.title,
//     description: `Página de ${movie.title}`,
//   };
// }

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
      }}
    >
      <div className="absolute inset-0 backdrop-blur-sm bg-black/30 -z-10" />
      <MovieContent movieId={params.id} />
    </div>
  );
}
