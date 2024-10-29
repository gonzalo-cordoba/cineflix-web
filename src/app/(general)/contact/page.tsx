import ContactForm from "@/components/contact-form/ContactForm";
import ContactInfo from "@/components/contact-info/ContactInfo";
import MapEmbed from "@/components/map-embed/MapEmbed";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-12">
          Contáctanos
        </h1>

        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="p-6 sm:p-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <ContactInfo />
              <ContactForm />
            </div>
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
            Ubicación
          </h2>
          <MapEmbed />
        </div>
      </div>
    </div>
  );
}
