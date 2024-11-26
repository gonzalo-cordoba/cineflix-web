"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";
import { navItems } from "./Navbar";
import UserInformation from "./UserInformation";
import { ActiveLink } from "../active-link/ActiveLink";
import { motion, AnimatePresence } from "framer-motion";

export default function MobileMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <button
        className="md:hidden text-white p-2 rounded-full hover:bg-purple-700 transition-colors duration-200"
        onClick={toggleMenu}
        aria-label="Toggle menu"
        aria-expanded={isMenuOpen}
      >
        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="
              md:hidden 
              fixed 
              left-0 
              right-0 
              top-[85px] 
              bg-gradient-to-b from-[#9667E0] to-[#7c51c2]
              p-6 
              rounded-b-2xl
              shadow-lg 
              z-50
            "
          >
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <motion.div
                  key={item.path}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <ActiveLink
                    {...item}
                    className="text-white text-lg font-medium hover:text-purple-200 transition-colors duration-200"
                  />
                </motion.div>
              ))}
            </nav>
            <motion.div
              className="mt-6 pt-6 border-t border-purple-400"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <UserInformation />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
