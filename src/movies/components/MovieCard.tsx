"use client";

import Image from "next/image";
import Link from "next/link";
import { MovieResult } from "../interfaces/movies.response";
import { useBookingStore } from "@/src/store/store";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

interface Props {
  movie: MovieResult;
}

export const MovieCard = ({ movie }: Props) => {
  const { title, id, poster_path, overview } = movie;
  const router = useRouter();
  const setCanAccessBooking = useBookingStore(
    (state) => state.setCanAccessBooking
  );

  const handleBuyTickets = () => {
    setCanAccessBooking(true);
    Cookies.set("canAccessBooking", "true", { expires: 1 / 24 }); //TODO: Expira en una hora
    router.push(`/horario?movie=${encodeURIComponent(title)}`);
  };

  return (
    <div className="relative aspect-[2/3] w-full overflow-hidden rounded-lg transition-transform duration-300 hover:scale-105">
      <Image
        src={`https://image.tmdb.org/t/p/w500${poster_path}`}
        alt={title}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black/50">
        <button
          onClick={handleBuyTickets}
          className="mb-2 rounded-full bg-[#9667E0] px-4 py-2 text-sm font-medium text-white hover:bg-[#8A5CD0] transition-colors"
        >
          Comprar boletos
        </button>
        <Link
          href={`movie/${id}`}
          className="rounded-full bg-[#9667E0] px-4 py-2 text-sm font-medium text-white hover:bg-[#8A5CD0] transition-colors"
        >
          Más información
        </Link>
      </div>
    </div>
  );
};
