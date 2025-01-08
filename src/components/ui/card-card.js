"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function CarCard({ car }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        type: "spring",
        stiffness: 100,
        damping: 15,
      }}
      whileHover={{ y: -5 }}
      className="group overflow-hidden rounded-3xl bg-gray-50 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]"
    >
      <div className="relative aspect-[16/9] w-full">
        <Image
          src={car.image}
          alt={car.title}
          fill
          className="object-cover"
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
        />
      </div>
      <div className="space-y-4 p-4">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-bold text-[#1D3414]">{car.title}</h3>
            <span className="font-bold text-[#1D3414]">{car.price}</span>
          </div>
          <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
            <div>
              <span className="font-medium">Baujahr:</span> {car.year}
            </div>
            <div>
              <span className="font-medium">Kilometer:</span> {car.mileage}
            </div>
            <div>
              <span className="font-medium">Kraftstoff:</span> {car.fuel}
            </div>
            <div>
              <span className="font-medium">Leistung:</span> {car.power}
            </div>
          </div>
        </div>
        <button
          className="w-full rounded-full bg-[#1D3414] px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-[#2A4A1D]"
          onClick={() =>
            (window.location.href = `mailto:info@autohaus-leffer.de?subject=Anfrage: ${car.title}`)
          }
        >
          Anfrage senden
        </button>
      </div>
    </motion.div>
  );
}
