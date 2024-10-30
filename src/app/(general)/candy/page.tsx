import ProductList from "@/components/candy-components/ProductList";

export default function CandyPage() {
  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
          Dulces y Snacks
        </h2>
        <ProductList />
      </div>
    </section>
  );
}
