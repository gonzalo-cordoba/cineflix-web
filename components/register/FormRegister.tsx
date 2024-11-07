import { LoginButton } from "../login";

export default function FormRegister() {
  return (
    <form className="space-y-4">
      <div>
        <input
          type="text"
          name="nombre"
          placeholder="Nombre completo"
          className="border w-full rounded-full py-6 px-4 border-[#9667E0] focus:ring-[#9667E0] focus:border-[#9667E0]"
          required
        />
      </div>
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
      <div>
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirmar contraseña"
          className="border w-full rounded-full py-6 px-4 border-[#9667E0] focus:ring-[#9667E0] focus:border-[#9667E0]"
          required
        />
      </div>
      <LoginButton text="Crear cuenta" />
    </form>
  );
}
