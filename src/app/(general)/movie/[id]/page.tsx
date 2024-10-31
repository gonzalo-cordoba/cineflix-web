import ButtonViolet from "@/components/ui/button-violet/ButtonViolet";
import { Movie } from "@/src/movies";
import { Play, X } from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";

interface Props {
  params: { id: string };
}

const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  try {
    const { id, title } = await getMovie(params.id);

    return {
      title: `${title}`,
      description: `Pagina de ${title}`,
    };
  } catch (error) {
    return {
      title: "Cineflix",
      description: "¡Vivi la mejor experiencia en Cineflix!",
    };
  }
}

const getMovie = async (id: string): Promise<Movie> => {
  try {
    const movie = await fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=es-AR&region=AR`,
      {
        cache: "force-cache", // TODO: Cambiar esto en un futuro
      }
    ).then((resp) => resp.json());

    console.log("Se cargo:", movie.title);

    return movie;
  } catch (error) {
    notFound();
  }
};

export default async function MoviePage({ params }: Props) {
  const movie = await getMovie(params.id);
  const imageUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

  return (
    <div className="min-h-screen flex items-center justify-center p-4 relative">
      <div
        className="absolute inset-0 backdrop-blur-xl bg-black/30 -z-10"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.poster_path})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <div className="relative z-10 max-w-2xl w-full bg-black/70 p-8 rounded-lg text-white space-y-6">
        <Image
          src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
          alt={movie.title}
          width={300}
          height={300}
        />
        <h1 className="text-4xl font-bold">{movie.title}</h1>
        <div className="flex items-center gap-2 text-sm">
          <span>{movie.runtime} min</span>
          <span>•</span>
          {/* <span>
            {movie.genres
              ? movie.genres.map((genre) => genre.name).join(", ")
              : "Géneros no disponibles"}
          </span> */}
        </div>
        <p className="text-sm leading-relaxed">{movie.overview}</p>
        <div className="flex gap-4">
          <ButtonViolet text="Comprar boletos" />
          <button className="border-white text-white hover:bg-white hover:text-black">
            <Play className="w-4 h-4 mr-2" />
            Ver trailer
          </button>
        </div>
      </div>
    </div>

    // TODO: No olvidarme de agregar funcionalidad al boton de Ver trailer

    //TODO: Por las dudas codigo anterior
    // <div>
    //   <h1>Pelicula {params.id}</h1>
    //   <div>{movie.title}</div>
    // </div>
  );
}
