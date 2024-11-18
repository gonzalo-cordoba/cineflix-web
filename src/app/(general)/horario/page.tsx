import {
  CartSideBar,
  DateSelector,
  HeaderSideBar,
  Showtimes,
} from "@/components/horario";

export default function Horario() {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-4">
      <div className="max-w-7xl mx-auto">
        <HeaderSideBar title="Selecciona tu cine y el horario de tu funcion" />

        <div className="grid md:grid-cols-[1fr,300px] gap-6">
          {/* Main Content */}
          <div className="space-y-6">
            <DateSelector />

            <Showtimes />
          </div>

          <CartSideBar />
        </div>
      </div>
    </div>
  );
}
