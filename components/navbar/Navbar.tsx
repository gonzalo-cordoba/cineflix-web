import Image from "next/image";
import Link from "next/link";
import logo from "../../public/logo.webp";
import { PersonIcon } from "@primer/octicons-react";
import { ActiveLink } from "../active-link/ActiveLink";

const navItems = [
  { path: "/movies", text: "Peliculas" },
  { path: "/candy", text: "Candy" },
  { path: "/contact", text: "Contacto" },
];

export const Navbar = () => {
  return (
    <nav className="flex items-center justify-between bg-[#9667E0] p-5 rounded">
      <div className="flex space-x-4">
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
        <PersonIcon size={24} />
      </Link>
    </nav>
  );
};
