import React from "react";

export default function ContactForm() {
  return (
    <div>
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">
        Envíanos un Mensaje
      </h2>
      <form className="space-y-4">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Nombre
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-[#9667E0] focus:border-[#9667E0]"
            required
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Correo Electrónico
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-[#9667E0] focus:border-[#9667E0]"
            required
          />
        </div>
        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Mensaje
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-[#9667E0] focus:border-[#9667E0]"
            required
          ></textarea>
        </div>
        <div>
          <button
            type="submit"
            className="w-full bg-[#9667E0] text-white font-medium py-2 px-4 rounded-md hover:bg-[#8257D0] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#9667E0]"
          >
            Enviar Mensaje
          </button>
        </div>
      </form>
    </div>
  );
}
