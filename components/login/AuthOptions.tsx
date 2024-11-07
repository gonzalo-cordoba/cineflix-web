import Link from "next/link";
import { LoginButton, CreateAccountButton } from "./";

export default function AuthOptions() {
  return (
    <div className="p-8 flex flex-col justify-center items-center max-w-md mx-auto w-full gap-6">
      <div className="text-center space-y-4 w-full">
        <h2 className="text-2xl font-medium text-gray-900 mb-2">
          ¿Ya tienes una cuenta?
        </h2>
        <LoginButton href="/login-account" text="Inicia sesion" />
      </div>

      <div className="text-center text-sm text-gray-600">
        Si nunca te has registrado
      </div>

      <CreateAccountButton href="/register" text="Crea una cuenta" />

      <div className="text-center text-sm text-gray-600 mt-4">
        Si ya tienes una cuenta{" "}
        <Link href="/login-account" className="text-[#9667E0] hover:underline">
          Inicia sesión
        </Link>
      </div>
    </div>
  );
}
