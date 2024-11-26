import type { Metadata } from "next";
import { WelcomeCard, AuthOptions } from "@/components/login";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Iniciar Sesión o Crear Cuenta - CineFlix",
  description:
    "Accede a tu cuenta en CineFlix o crea una nueva para comenzar a comprar boletos, revisar tus reservas y disfrutar de películas en línea. Únete ahora y vive la experiencia del cine desde casa.",
};

export default async function LoginPage() {
  const session = await getServerSession(authOptions);

  if (session) {
    redirect("/");
  }

  return (
    <div className="min-h-screen grid md:grid-cols-2">
      <WelcomeCard
        title="Bienvenido"
        subTitle="Vamos a buscar tu cuenta Club Cineflix"
      />

      <AuthOptions />
    </div>
  );
}
