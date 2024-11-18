import Link from "next/link";
import { LoginButton, CreateAccountButton } from "./";
import * as motion from "framer-motion/client";
import { containerVariants, itemVariants } from "./animationVariants";

export default function AuthOptions() {
  return (
    <motion.div
      className="p-8 flex flex-col justify-center items-center max-w-md mx-auto w-full gap-6"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div
        className="text-center space-y-4 w-full"
        variants={itemVariants}
      >
        <h2 className="text-2xl font-medium text-gray-900 mb-2">
          ¿Ya tienes una cuenta?
        </h2>
        <LoginButton href="/login-account" text="Inicia sesion" />
      </motion.div>

      <motion.div
        className="text-center text-sm text-gray-600"
        variants={itemVariants}
      >
        Si nunca te has registrado
      </motion.div>

      <CreateAccountButton href="/register" text="Crea una cuenta" />

      <motion.div
        className="text-center text-sm text-gray-600 mt-4"
        variants={itemVariants}
      >
        Si ya tienes una cuenta{" "}
        <Link href="/login-account" className="text-[#9667E0] hover:underline">
          Inicia sesión
        </Link>
      </motion.div>
    </motion.div>
  );
}
