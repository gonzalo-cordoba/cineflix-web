import type { Metadata } from "next";
import { WelcomeCard } from "@/components/login";
import { RegisterOptions } from "@/components/register";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Crear Cuenta - CineFlix",
  description:
    "Crea una cuenta en CineFlix para empezar a disfrutar de películas en línea, comprar boletos y gestionar tus reservas. ¡Únete a la experiencia del cine desde casa y no te pierdas ningún estreno!",
};

export default async function RegisterPage() {
  const session = await getServerSession(authOptions);

  if (session) {
    redirect("/");
  }

  return (
    <div className="min-h-screen grid md:grid-cols-2">
      <WelcomeCard title="Crea tu nueva cuenta" />

      <RegisterOptions />
    </div>
  );
}
