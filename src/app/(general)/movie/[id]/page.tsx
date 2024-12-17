import MovieContent from "../components/MovieContent";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function MoviePage({ params }: PageProps) {
  const resolvedParams = await params;

  return (
    <div className="min-h-screen flex items-center justify-center p-4 relative">
      <MovieContent movieId={resolvedParams.id} />
    </div>
  );
}
