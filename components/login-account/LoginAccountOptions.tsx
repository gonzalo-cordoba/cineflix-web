import Link from "next/link";
import { GoogleButton } from "../register";
import FormLoginAccount from "./FormLoginAccount";
import * as motion from "framer-motion/client";
import {
  containerVariantsOptions,
  itemVariantsOptions,
} from "./animationsVariants";

export default function LoginAccountOptions() {
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
        <FormLoginAccount />
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
        ¿No tienes cuenta aún?{" "}
        <Link href="/register" className="text-[#9667E0] hover:underline">
          Registrate
        </Link>
      </motion.div>
    </motion.div>
  );
}
