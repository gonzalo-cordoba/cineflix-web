import Link from "next/link";
import LoginButton from "./LoginButton";
import CreateAccountButton from "./CreateAccountButton";

export default function AuthOptions() {
  return (
    <div className="p-8 flex flex-col justify-center items-center max-w-md mx-auto w-full gap-6">
      <div className="text-center space-y-4 w-full">
        <h2 className="text-2xl font-medium text-gray-900">
          ¿Ya tienes una cuenta?
        </h2>
        <LoginButton text="Inicia sesion" />
      </div>

      <div className="text-center text-sm text-gray-600">
        Si nunca te has registrado
      </div>

      <CreateAccountButton text="Crea una cuenta" />

      <div className="text-center text-sm text-gray-600 mt-4">
        Si ya tienes una cuenta{" "}
        <Link href="/login" className="text-[#9667E0] hover:underline">
          Inicia sesión
        </Link>
      </div>
    </div>
  );
}
