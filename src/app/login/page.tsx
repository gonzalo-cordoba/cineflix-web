import type { Metadata } from "next";
import Link from "next/link";

import logo from "../../../public/logo.webp";

import Image from "next/image";
import WelcomeCard from "@/components/login/WelcomeCard";
import AuthOptions from "@/components/login/AuthOptions";

export const metadata: Metadata = {
  title: "Iniciar Sesión o Crear Cuenta - CineFlix",
  description:
    "Accede a tu cuenta en CineFlix o crea una nueva para comenzar a comprar boletos, revisar tus reservas y disfrutar de películas en línea. Únete ahora y vive la experiencia del cine desde casa.",
};

export default function LoginPage() {
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
