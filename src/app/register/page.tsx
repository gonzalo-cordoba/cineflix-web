import type { Metadata } from "next";
import { WelcomeCard } from "@/components/login";
import { RegisterOptions } from "@/components/register";

export const metadata: Metadata = {
  title: "Crear Cuenta - CineFlix",
  description:
    "Crea una cuenta en CineFlix para empezar a disfrutar de películas en línea, comprar boletos y gestionar tus reservas. ¡Únete a la experiencia del cine desde casa y no te pierdas ningún estreno!",
};

export default function LoginPage() {
  return (
    <div className="min-h-screen grid md:grid-cols-2">
      <WelcomeCard title="Crea tu nueva cuenta Club Cineflix" />

      <RegisterOptions />
    </div>
  );
}
