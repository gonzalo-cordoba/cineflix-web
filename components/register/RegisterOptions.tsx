import Link from "next/link";
import { LoginButton } from "../login";
import { GoogleButton, InputEmail } from "./";

export default function RegisterOptions() {
  return (
    <div className="p-8 flex flex-col justify-center items-center max-w-md mx-auto w-full gap-6">
      <div className="text-center space-y-4 w-full">
        <h2 className="text-2xl font-medium text-gray-900">
          Ingresa tu correo electrónico
        </h2>
        {/* //! Recordar implementar que al rellenar el campo con el correo electronico me mande un 'codigo' numerico para iniciar sesion */}
        <InputEmail />
        <LoginButton text="Continuar" />
      </div>

      <div className="text-center text-sm text-gray-600">
        O crea una cuenta con tus redes sociales
      </div>

      {/* TODO: Recordar implementar autenticacion con Google con Auth.js */}
      <GoogleButton text="Continuar con Google" />

      <div className="text-center text-sm text-gray-600 mt-4">
        ¿Ya tienes una cuenta?{" "}
        <Link href="/loginacount" className="text-[#9667E0] hover:underline">
          Inicia sesión
        </Link>
      </div>
    </div>
  );
}
