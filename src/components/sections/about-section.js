'use client'

import { Wrench, Clock, Users, Heart } from 'lucide-react'

export function AboutSection() {
  const features = [
    {
      icon: Wrench,
      title: "Expertise",
      description: "Über 30 Jahre Erfahrung in der Autoreparatur",
    },
    {
      icon: Clock,
      title: "Schnell & Zuverlässig",
      description: "Effiziente Reparaturen mit kurzen Wartezeiten",
    },
    {
      icon: Users,
      title: "Persönliche Beratung",
      description: "Individuelle Betreuung und transparente Kommunikation",
    },
    {
      icon: Heart,
      title: "Qualität & Service",
      description: "Höchste Qualitätsstandards und erstklassiger Service",
    },
  ]

  return (
    <section id="about" className="bg-[#F5F5F5] px-4 py-32">
      <div className="container mx-auto">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-6 text-4xl font-bold text-[#1D3414]">Warum Auto Leffer?</h2>
          <p className="mb-12 text-lg text-gray-600">
            Als familiengeführter Betrieb legen wir größten Wert auf Qualität, Zuverlässigkeit und persönlichen Service.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-5xl gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center rounded-xl bg-white p-6 text-center shadow-lg transition-all duration-300 hover:shadow-xl"
            >
              <div className="mb-4 rounded-full bg-[#1D3414] p-3 text-white">
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-xl font-bold text-[#1D3414]">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
