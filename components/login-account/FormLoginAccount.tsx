import Link from "next/link";
import LoginButton from "../login/LoginButton";

// TODO: Implementar manejo de formulario con react-hook-form

export default function FormLoginAccount() {
  return (
    <form className="space-y-4">
      <div>
        <input
          type="email"
          name="email"
          placeholder="correo@ejemplo.com"
          className="border w-full rounded-full py-6 px-4 border-[#9667E0] focus:ring-[#9667E0] focus:border-[#9667E0]"
          required
        />
      </div>
      <div>
        <input
          type="password"
          name="password"
          placeholder="Contraseña"
          className="border w-full rounded-full py-6 px-4 border-[#9667E0] focus:ring-[#9667E0] focus:border-[#9667E0]"
          required
        />
      </div>
      <div className="text-right">
        <Link
          href="/recover-password"
          className="text-[#9667E0] hover:underline text-sm"
        >
          ¿Olvidaste tu contraseña?
        </Link>
      </div>
      <LoginButton text="Continuar" />
    </form>
  );
}
