"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";
import { navItems } from "./Navbar";
import UserInformation from "./UserInformation";
import { ActiveLink } from "../active-link/ActiveLink";

export default function MobileMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <button
        className="md:hidden text-white"
        onClick={toggleMenu}
        aria-label="Toggle menu"
        aria-expanded={isMenuOpen}
      >
        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div
          className="
      md:hidden 
      fixed 
      left-0 
      right-0 
      top-[85px] 
      bg-[#9667E0] 
      p-5 
      rounded-b 
      shadow-lg 
      z-50
    "
        >
          <div className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <ActiveLink key={item.path} {...item} />
            ))}
          </div>
          <div className="mt-4">
            <UserInformation />
          </div>
        </div>
      )}
    </>
  );
}
