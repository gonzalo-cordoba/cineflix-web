"use client";

import { AlertCircle, Loader2 } from "lucide-react";
import { useBooking } from "@/src/app/context";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

export default function FormPayment() {
  const { selectedSeats } = useBooking();

  const [cardNumber, setCardNumber] = useState("");
  const [cardName, setCardName] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [showWarning, setShowWarning] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const router = useRouter();

  const handleCardNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, "");
    if (value.length <= 16) {
      setCardNumber(value.replace(/(\d{4})(?=\d)/g, "$1 "));
    }
  };

  const handleCardNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^a-zA-Z\s]/g, "");
    setCardName(value);
  };

  const handleExpiryDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, "");
    if (value.length <= 4) {
      setExpiryDate(value.replace(/(\d{2})(?=\d)/, "$1/"));
    }
  };

  const handleCvvChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, "");
    if (value.length <= 4) {
      setCvv(value);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!cardNumber || !cardName || !expiryDate || !cvv) {
      setShowWarning(true);
    } else {
      setIsProcessing(true);
      setShowWarning(false);

      setTimeout(() => {
        setIsProcessing(false);

        toast.success(
          (t) => (
            <div className="flex items-center">
              <div className="ml-3">
                <p className="text-sm font-medium text-gray-900">
                  ¡Pago realizado correctamente!
                </p>
                <p className="mt-1 text-sm text-gray-500">
                  Pronto recibirás tus tickets por correo electrónico.
                </p>
              </div>
            </div>
          ),
          {
            duration: 5000,
            style: {
              background: "#4CAF50",
              color: "#fff",
            },
          }
        );

        setTimeout(() => {
          router.push("/");
        }, 2000);
      }, 3000);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label
          htmlFor="cardNumber"
          className="block text-sm font-medium text-gray-700"
        >
          Número de Tarjeta
        </label>
        <input
          type="text"
          id="cardNumber"
          value={cardNumber}
          onChange={handleCardNumberChange}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-[#9667E0] focus:border-[#9667E0]"
          placeholder="1234 5678 9012 3456"
          maxLength={19}
          required
          disabled={isProcessing}
        />
      </div>
      <div>
        <label
          htmlFor="cardName"
          className="block text-sm font-medium text-gray-700"
        >
          Nombre en la Tarjeta
        </label>
        <input
          type="text"
          id="cardName"
          value={cardName}
          onChange={handleCardNameChange}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-[#9667E0] focus:border-[#9667E0]"
          placeholder="John Doe"
          required
          disabled={isProcessing}
        />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label
            htmlFor="expiryDate"
            className="block text-sm font-medium text-gray-700"
          >
            Fecha de Expiración
          </label>
          <input
            type="text"
            id="expiryDate"
            value={expiryDate}
            onChange={handleExpiryDateChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-[#9667E0] focus:border-[#9667E0]"
            placeholder="MM/YY"
            maxLength={5}
            required
            disabled={isProcessing}
          />
        </div>
        <div>
          <label
            htmlFor="cvv"
            className="block text-sm font-medium text-gray-700"
          >
            CVV
          </label>
          <input
            type="text"
            id="cvv"
            value={cvv}
            onChange={handleCvvChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-[#9667E0] focus:border-[#9667E0]"
            placeholder="123"
            maxLength={4}
            required
            disabled={isProcessing}
          />
        </div>
      </div>
      {showWarning && (
        <div
          className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4"
          role="alert"
        >
          <div className="flex">
            <AlertCircle className="h-6 w-6 text-yellow-500 mr-4" />
            <div>
              <p className="font-bold">Atención</p>
              <p>Por favor, completa todos los campos antes de continuar.</p>
            </div>
          </div>
        </div>
      )}
      <button
        type="submit"
        className="w-full bg-[#9667E0] text-white py-3 rounded-lg font-semibold hover:bg-[#8557c7] transition-colors duration-200 flex items-center justify-center"
        disabled={isProcessing}
      >
        {isProcessing ? (
          <>
            <Loader2 className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" />
            Procesando pago...
          </>
        ) : (
          `Pagar $${selectedSeats.length * 10}`
        )}
      </button>
    </form>
  );
}
