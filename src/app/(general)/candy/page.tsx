import ProductList from "@/components/candy-components/ProductList";
import * as motion from "framer-motion/client";

export default function CandyPage() {
  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center text-gray-900 mb-12"
        >
          Dulces y Snacks
        </motion.h1>
        <ProductList />
      </div>
    </section>
  );
}
