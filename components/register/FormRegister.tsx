"use client";

import { SubmitHandler, useForm } from "react-hook-form";
import * as motion from "framer-motion/client";
import { AnimatePresence } from "framer-motion";
import {
  buttonVariantsForm,
  errorVariantsForm,
  inputVariantsForm,
} from "./animationVariants";

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
    <motion.form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-4"
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.1,
          },
        },
      }}
    >
      <motion.div variants={inputVariantsForm}>
        <motion.input
          id="username"
          type="text"
          {...register("username", {
            required: "El nombre de usuario es obligatorio",
          })}
          placeholder="Nombre completo"
          className="border w-full rounded-full py-6 px-4 border-[#9667E0] focus:ring-[#9667E0] focus:border-[#9667E0]"
          whileFocus={{ scale: 1.02 }}
        />
        <AnimatePresence>
          {errors.username && (
            <motion.p
              className="text-red-500"
              variants={errorVariantsForm}
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              {errors.username.message}
            </motion.p>
          )}
        </AnimatePresence>
      </motion.div>

      <motion.div variants={inputVariantsForm}>
        <motion.input
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
          whileFocus={{ scale: 1.02 }}
        />
        <AnimatePresence>
          {errors.email && (
            <motion.p
              className="text-red-500"
              variants={errorVariantsForm}
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              {errors.email.message}
            </motion.p>
          )}
        </AnimatePresence>
      </motion.div>

      <motion.div variants={inputVariantsForm}>
        <motion.input
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
          whileFocus={{ scale: 1.02 }}
        />
        <AnimatePresence>
          {errors.password && (
            <motion.p
              className="text-red-500"
              variants={errorVariantsForm}
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              {errors.password.message}
            </motion.p>
          )}
        </AnimatePresence>
      </motion.div>

      <motion.div variants={inputVariantsForm}>
        <motion.input
          id="confirmPassword"
          type="password"
          {...register("confirmPassword", {
            required: "Confirma tu contraseña",
            validate: (value) =>
              value === password || "Las contraseñas no coinciden",
          })}
          placeholder="Confirmar contraseña"
          className="border w-full rounded-full py-6 px-4 border-[#9667E0] focus:ring-[#9667E0] focus:border-[#9667E0]"
          whileFocus={{ scale: 1.02 }}
        />
        <AnimatePresence>
          {errors.confirmPassword && (
            <motion.p
              className="text-red-500"
              variants={errorVariantsForm}
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              {errors.confirmPassword.message}
            </motion.p>
          )}
        </AnimatePresence>
      </motion.div>

      <motion.button
        type="submit"
        className="block w-full bg-[#9667E0] hover:bg-[#8557c9] text-white rounded-full py-6 mt-5"
        variants={buttonVariantsForm}
        whileHover="hover"
        whileTap="tap"
      >
        Crear cuenta
      </motion.button>
    </motion.form>
  );
}
