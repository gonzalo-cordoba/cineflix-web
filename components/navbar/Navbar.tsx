import Image from "next/image";
import Link from "next/link";
import logo from "../../public/logo.webp";
import UserInformation from "./UserInformation";
import { ActiveLink } from "../active-link/ActiveLink";
import MobileMenu from "./MobileMenu";

export const navItems = [
  { path: "/movies", text: "Movies" },
  { path: "/candy", text: "Candy" },
  { path: "/contact", text: "Contact" },
];

const Navbar = () => {
  return (
    <div className="relative">
      <nav className="bg-[#9667E0] p-5 rounded">
        <div className="container mx-auto flex items-center justify-between">
          <Link href={"/"}>
            <Image
              src={logo}
              alt="logo-cineflix"
              width={60}
              height={60}
              priority
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-4">
            {navItems.map((item) => (
              <ActiveLink key={item.path} {...item} />
            ))}
          </div>

          <MobileMenu />

          <div className="hidden md:block">
            <UserInformation />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
