import MovieContent from "../components/MovieContent";

const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

// Función para obtener la información de la película
async function getMovie(id: string) {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=es-AR&region=AR`,
    { next: { revalidate: 3600 } } // Revalidación cada hora
  );
  if (!res.ok) throw new Error("Failed to fetch movie");
  return res.json();
}

// Página principal
export default async function MoviePage({
  params,
}: {
  params: { id: string };
}) {
  const movie = await getMovie(params.id); // Obtén los datos de la película
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
