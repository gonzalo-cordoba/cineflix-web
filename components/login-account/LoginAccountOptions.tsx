import Link from "next/link";
import { GoogleButton } from "../register";
import FormLoginAccount from "./FormLoginAccount";

export default function LoginAccountOptions() {
  return (
    <div className="p-8 flex flex-col justify-center items-center max-w-md mx-auto w-full gap-6">
      <div className="text-center space-y-4 w-full">
        <FormLoginAccount />
      </div>

      <div className="text-center text-sm text-gray-600">
        O crea una cuenta con tus redes sociales
      </div>

      {/* TODO: Recordar implementar autenticacion con Google con Auth.js */}
      <GoogleButton text="Continuar con Google" />

      <div className="text-center text-sm text-gray-600 mt-4">
        ¿No tienes cuenta aún?{" "}
        <Link href="/register" className="text-[#9667E0] hover:underline">
          Registrate
        </Link>
      </div>
    </div>
  );
}
