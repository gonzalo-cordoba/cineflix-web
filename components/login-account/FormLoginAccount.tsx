"use client";

import Link from "next/link";
import LoginButton from "../login/LoginButton";
import { useState } from "react";

import * as motion from "framer-motion/client";
import {
  formVariantsFormLogin,
  itemVariantsFormLogin,
} from "./animationsVariants";

// TODO: Implementar manejo de formulario con react-hook-form

export default function FormLoginAccount() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <motion.form
      className="space-y-4"
      variants={formVariantsFormLogin}
      initial="hidden"
      animate="visible"
    >
      <motion.div variants={itemVariantsFormLogin}>
        <motion.input
          type="email"
          name="email"
          placeholder="correo@ejemplo.com"
          className="border w-full rounded-full py-6 px-4 border-[#9667E0] focus:ring-[#9667E0] focus:border-[#9667E0]"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          whileFocus={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
        />
      </motion.div>
      <motion.div variants={itemVariantsFormLogin}>
        <motion.input
          type="password"
          name="password"
          placeholder="Contraseña"
          className="border w-full rounded-full py-6 px-4 border-[#9667E0] focus:ring-[#9667E0] focus:border-[#9667E0]"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          whileFocus={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
        />
      </motion.div>
      <motion.div className="text-right" variants={itemVariantsFormLogin}>
        <Link
          href="/recover-password"
          className="text-[#9667E0] hover:underline text-sm"
        >
          ¿Olvidaste tu contraseña?
        </Link>
      </motion.div>
      <motion.div variants={itemVariantsFormLogin}>
        <LoginButton text="Continuar" />
      </motion.div>
    </motion.form>
  );
}
