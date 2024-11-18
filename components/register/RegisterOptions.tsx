import Link from "next/link";
import { FormRegister, GoogleButton } from "./";
import * as motion from "framer-motion/client";
import {
  containerVariantsOptions,
  itemVariantsOptions,
} from "./animationVariants";

export default function RegisterOptions() {
  return (
    <motion.div
      className="p-8 flex flex-col justify-center items-center max-w-md mx-auto w-full gap-6"
      variants={containerVariantsOptions}
      initial="hidden"
      animate="visible"
    >
      <motion.div
        className="text-center space-y-4 w-full"
        variants={itemVariantsOptions}
      >
        <motion.h2
          className="text-2xl font-medium text-gray-900"
          variants={itemVariantsOptions}
        >
          Crea tu cuenta
        </motion.h2>
        <FormRegister />
      </motion.div>

      <motion.div
        className="text-center text-sm text-gray-600"
        variants={itemVariantsOptions}
      >
        O crea una cuenta con tus redes sociales
      </motion.div>

      <GoogleButton text="Continuar con Google" />

      <motion.div
        className="text-center text-sm text-gray-600 mt-4"
        variants={itemVariantsOptions}
      >
        ¿Ya tienes una cuenta?{" "}
        <Link href="/login-account" className="text-[#9667E0] hover:underline">
          Inicia sesión
        </Link>
      </motion.div>
    </motion.div>
  );
}
