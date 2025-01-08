"use client";

import { BackdropImage } from "@/components/ui/backdrop-image";

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

  return (
    <div className="min-h-screen bg-white">
      <main className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          {/* Header */}
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-3xl font-bold tracking-tight text-[#1D3414] sm:text-4xl">
              Unsere Fahrzeuge
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              Entdecken Sie unsere aktuelle Fahrzeugauswahl. Alle Fahrzeuge
              werden von uns gründlich geprüft und sind in einem einwandfreien
              Zustand.
            </p>
          </div>

          {/* Cars Grid */}
          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {cars.map((car) => (
              <div
                key={car.id}
                className="group overflow-hidden rounded-3xl bg-gray-50 p-4 transition-all hover:bg-gray-100"
              >
                <BackdropImage
                  src={car.image}
                  alt={car.title}
                  className="aspect-[16/9] w-full"
                />
                <div className="mt-4 space-y-2">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold text-[#1D3414]">
                      {car.title}
                    </h3>
                    <span className="font-bold text-[#1D3414]">
                      {car.price}
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
                    <div>
                      <span className="font-medium">Baujahr:</span> {car.year}
                    </div>
                    <div>
                      <span className="font-medium">Kilometer:</span>{" "}
                      {car.mileage}
                    </div>
                    <div>
                      <span className="font-medium">Kraftstoff:</span>{" "}
                      {car.fuel}
                    </div>
                    <div>
                      <span className="font-medium">Leistung:</span> {car.power}
                    </div>
                  </div>
                  <button
                    className="mt-4 w-full rounded-full bg-[#1D3414] px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-[#2A4A1D]"
                    onClick={() =>
                      (window.location.href = `mailto:info@autohaus-leffer.de?subject=Anfrage: ${car.title}`)
                    }
                  >
                    Anfrage senden
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
