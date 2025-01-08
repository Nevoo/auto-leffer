"use client";

import CarCard from "@/components/ui/card-card";
import { motion } from "framer-motion";

export default function AutosPage() {
  const cars = [
    {
      id: 1,
      title: "BMW 3er",
      image:
        "https://images.unsplash.com/photo-1555215695-3004980ad54e?q=80&w=2340&auto=format&fit=crop",
      price: "29.900 €",
      year: "2022",
      mileage: "25.000 km",
      fuel: "Diesel",
      power: "190 PS",
    },
    {
      id: 2,
      title: "Mercedes C-Klasse",
      image:
        "https://images.unsplash.com/photo-1617531653332-bd46c24f2068?q=80&w=2340&auto=format&fit=crop",
      price: "32.900 €",
      year: "2021",
      mileage: "35.000 km",
      fuel: "Benzin",
      power: "204 PS",
    },
    // Add more cars as needed
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <div className="min-h-screen bg-white pt-20">
      <main className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-2xl text-center"
          >
            <h1 className="text-3xl font-bold tracking-tight text-[#1D3414] sm:text-4xl">
              Unsere Fahrzeuge
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              Entdecken Sie unsere aktuelle Fahrzeugauswahl. Alle Fahrzeuge
              werden von uns gründlich geprüft und sind in einem einwandfreien
              Zustand.
            </p>
          </motion.div>

          {/* Cars Grid */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
          >
            {cars.map((car) => (
              <CarCard key={car.id} car={car} />
            ))}
          </motion.div>
        </div>
      </main>
    </div>
  );
}
