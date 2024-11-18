import { WelcomeCard } from "@/components/login";
import { LoginAccountOptions } from "@/components/login-account";
import { Metadata } from "next";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Iniciar Sesión - Cineflix",
  description:
    "Accede a tu cuenta en Cineflix para gestionar tus preferencias, ver tus compras y mucho más.",
};

export default async function LoginAccount() {
  const session = await getServerSession(authOptions);

  if (session) {
    redirect("/");
  }

  return (
    <div className="min-h-screen grid md:grid-cols-2">
      <WelcomeCard title="Inicia sesion" subTitle="Login" />

      <LoginAccountOptions />
    </div>
  );
}
