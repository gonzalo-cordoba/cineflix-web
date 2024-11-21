import { Toaster } from "react-hot-toast";
import FormPayment from "./FormPayment";

export default function PaymentSection() {
  return (
    <div className="space-y-6">
      <Toaster position="top-center" reverseOrder={false} />
      <h2 className="text-2xl font-bold text-gray-900">Información de Pago</h2>
      <FormPayment />
    </div>
  );
}
