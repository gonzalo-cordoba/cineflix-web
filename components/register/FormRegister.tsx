"use client";

import { SubmitHandler, useForm } from "react-hook-form";

interface FormValues {
  email: string;
  password: string;
  username: string;
  confirmPassword: string;
}

export default function FormRegister() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = (data) => console.log(data);

  const password = watch("password");

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <input
          id="username"
          type="text"
          {...register("username", {
            required: "El nombre de usuario es obligatorio",
          })}
          placeholder="Nombre completo"
          className="border w-full rounded-full py-6 px-4 border-[#9667E0] focus:ring-[#9667E0] focus:border-[#9667E0]"
        />
        {errors.username && (
          <p className="text-red-500">{errors.username.message}</p>
        )}
      </div>
      <div>
        <input
          id="email"
          type="email"
          {...register("email", {
            required: "El correo electrónico es obligatorio",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Ingrese un correo electrónico válido",
            },
          })}
          placeholder="correo@ejemplo.com"
          className="border w-full rounded-full py-6 px-4 border-[#9667E0] focus:ring-[#9667E0] focus:border-[#9667E0]"
        />
        {errors.email && <p className="text-red-500">{errors.email.message}</p>}
      </div>

      <div>
        <input
          id="password"
          type="password"
          {...register("password", {
            required: "La contraseña es obligatoria",
            minLength: {
              value: 6,
              message: "La contraseña debe tener al menos seis caracteres",
            },
          })}
          placeholder="Contraseña"
          className="border w-full rounded-full py-6 px-4 border-[#9667E0] focus:ring-[#9667E0] focus:border-[#9667E0]"
        />
        {errors.password && (
          <p className="text-red-500">{errors.password.message}</p>
        )}
      </div>

      <div>
        <input
          id="confirmPassword"
          type="password"
          {...register("confirmPassword", {
            required: "Confirma tu contraseña",
            validate: (value) =>
              value === password || "Las contraseñas no coinciden",
          })}
          placeholder="Confirmar contraseña"
          className="border w-full rounded-full py-6 px-4 border-[#9667E0] focus:ring-[#9667E0] focus:border-[#9667E0]"
        />
        {errors.confirmPassword && (
          <p className="text-red-500">{errors.confirmPassword.message}</p>
        )}
      </div>

      <button
        type="submit"
        className="block w-full bg-[#9667E0] hover:bg-[#8557c9] text-white rounded-full py-6 mt-5"
      >
        Crear cuenta
      </button>
    </form>
  );
}
