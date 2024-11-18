import Image from "next/image";
import Link from "next/link";
import logo from "../../public/logo.webp";
import { PersonIcon } from "@primer/octicons-react";
import { ActiveLink } from "../active-link/ActiveLink";
import * as motion from "framer-motion/client";

const navItems = [
  { path: "/movies", text: "Peliculas" },
  { path: "/candy", text: "Candy" },
  { path: "/contact", text: "Contacto" },
];
const Navbar = () => {
  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="flex items-center justify-between bg-[#9667E0] p-5 rounded"
    >
      <div className="flex space-x-4 text-white">
        {navItems.map((navItems) => (
          <ActiveLink key={navItems.path} {...navItems} />
        ))}
      </div>

      <div className="flex-1"></div>

      <Link href={"/"} className="absolute left-1/2 transform -translate-x-1/2">
        <Image src={logo} alt="logo-cineflix" width={60} height={60} priority />
      </Link>

      <div className="flex-1"></div>
      <Link href="/login">
        <PersonIcon className="text-white" size={24} />
      </Link>
    </motion.nav>
  );
};

export default Navbar;
