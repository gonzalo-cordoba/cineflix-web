export default function ContactInfo() {
  return (
    <div>
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">
        Información de Contacto
      </h2>
      <ul className="space-y-4">
        <li className="flex items-start">
          <svg
            className="w-6 h-6 text-[#9667E0] mr-3"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
            ></path>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
            ></path>
          </svg>
          <span>Av. del Cine 123, Ciudad Película</span>
        </li>
        <li className="flex items-start">
          <svg
            className="w-6 h-6 text-[#9667E0] mr-3"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
            ></path>
          </svg>
          <span>+1 (555) 123-4567</span>
        </li>
        <li className="flex items-start">
          <svg
            className="w-6 h-6 text-[#9667E0] mr-3"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            ></path>
          </svg>
          <span>info@cinemágico.com</span>
        </li>
      </ul>
      <div className="mt-8">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">
          Horario de Atención
        </h3>
        <p className="text-gray-600">Lunes a Domingo: 10:00 AM - 10:00 PM</p>
      </div>
    </div>
  );
}
