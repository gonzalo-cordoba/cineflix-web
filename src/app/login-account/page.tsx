import { WelcomeCard } from "@/components/login";
import { LoginAccountOptions } from "@/components/login-account";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Iniciar Sesión - Cineflix",
  description:
    "Accede a tu cuenta en Cineflix para gestionar tus preferencias, ver tus compras y mucho más.",
};

export default function LoginAccount() {
  return (
    <div className="min-h-screen grid md:grid-cols-2">
      <WelcomeCard title="Inicia sesion" subTitle="Login" />

      <LoginAccountOptions />
    </div>
  );
}
