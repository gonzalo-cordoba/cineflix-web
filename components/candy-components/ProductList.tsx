"use client";

import Image from "next/image";
import { useState } from "react";
import * as motion from "framer-motion/client";
import { cardVariants } from "@/src/movies/components/MovieGrid";

export default function ProductList() {
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);

  const candyItems = [
    {
      name: "Promo 1",
      price: "$5.99",
      image: "/promo1.jpg",
    },
    {
      name: "Promo 2",
      price: "$4.99",
      image: "/promo2.jpg",
    },
    {
      name: "Promo 3",
      price: "$3.99",
      image: "/promo3.jpg",
    },
    {
      name: "Promo 4",
      price: "$2.99",
      image: "/promo4.png",
    },
    {
      name: "Promo 5",
      price: "$5.99",
      image: "/promo5.jpg",
    },
    {
      name: "Promo 6",
      price: "$4.99",
      image: "/promo6.jpg",
    },
    {
      name: "Promo 7",
      price: "$3.99",
      image: "/promo7.jpg",
    },
    {
      name: "Promo 8",
      price: "$3.99",
      image: "/promo8.jpg",
    },
  ];

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        visible: {
          transition: {
            staggerChildren: 0.1,
          },
        },
      }}
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12"
    >
      {candyItems.map((item, index) => (
        <motion.div
          key={index}
          className="relative group"
          onMouseEnter={() => setHoveredItem(index)}
          onMouseLeave={() => setHoveredItem(null)}
          variants={cardVariants}
        >
          <div className="aspect-square overflow-hidden rounded-lg shadow-sm transition-shadow duration-300 group-hover:shadow-md">
            <Image
              src={item.image}
              alt={item.name}
              width={300}
              height={300}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
          <div
            className={`absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center transition-opacity duration-300 ${
              hoveredItem === index ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="text-center">
              <h3 className="text-xl font-semibold text-white mb-2">
                {item.name}
              </h3>
              <p className="text-[#9667E0] font-bold text-lg bg-white px-3 py-1 rounded-full">
                {item.price}
              </p>
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}
