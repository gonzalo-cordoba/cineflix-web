import { ContactItem, FooterLink, SocialLink } from "./components";
import * as motion from "framer-motion/client";

export default function Footer() {
  const quickLinks = ["Inicio", "Peliculas", "Candy", "Contacto"];
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="bg-gray-100 text-gray-600 py-12 px-4 md:px-6 lg:px-8"
    >
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="space-y-4">
          <div className="font-bold text-2xl text-[#9667E0]">Cineflix</div>
          <p className="text-sm">
            Sumérgete en la magia del cine y vive momentos inolvidables con
            nuestras exclusivas selecciones de películas. ¡No te pierdas los
            estrenos más esperados y disfruta de una experiencia cinematográfica
            única que hará que cada visita sea memorable!
          </p>
          <div className="flex space-x-4">
            <SocialLink href="#" ariaLabel="Instagram">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </SocialLink>
            <SocialLink href="#" ariaLabel="Facebook">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
            </SocialLink>
            <SocialLink href="#" ariaLabel="X">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
              </svg>
            </SocialLink>
          </div>
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-4 text-gray-800">
            Enlaces rápidos
          </h3>
          <ul className="space-y-2">
            {quickLinks.map((item) => (
              <FooterLink key={item} href={`/${item.toLowerCase()}`}>
                {item}
              </FooterLink>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-4 text-gray-800">Contacto</h3>
          <ul className="space-y-2">
            <ContactItem
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-[#9667E0]"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
              }
            >
              info@cineflix.com
            </ContactItem>
            <ContactItem
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-[#9667E0]"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
              }
            >
              +1 (555) 123-4567
            </ContactItem>
            <ContactItem
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-[#9667E0]"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  />
                </svg>
              }
            >
              Avenida Santa Fe 3253, Ciudad Autonoma de Buenos Aires
            </ContactItem>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-4 text-gray-800">
            Suscríbete
          </h3>
          <p className="text-sm mb-4">
            Recibe nuestras últimas noticias y ofertas.
          </p>
          <form className="space-y-2">
            <input
              type="email"
              placeholder="Tu correo electrónico"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#9667E0]"
              aria-label="Correo electrónico para suscripción"
            />
            <button
              type="submit"
              className="w-full bg-[#9667E0] hover:bg-[#8257D0] text-white font-medium py-2 px-4 rounded-md transition-colors duration-200"
            >
              Suscribirse
            </button>
          </form>
        </div>
      </div>
      <div className="mt-8 pt-8 border-t border-gray-200 text-center text-sm">
        © {currentYear} Cineflix. Todos los derechos reservados.
      </div>
    </motion.footer>
  );
}
