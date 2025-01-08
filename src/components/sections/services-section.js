'use client'

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { PenToolIcon as Tool, FileCheck, FuelIcon as Oil, Thermometer, Package, PaintBucket, Zap, Glasses, FuelIcon as Engine, Umbrella, Compass, Truck, Disc, Car, Shield, Check } from 'lucide-react'

export function ServicesSection() {
  const [activeTab, setActiveTab] = useState("diagnose")
  
  const tabs = [
    {
      id: "diagnose",
      title: "Diagnose",
      description: "Mit modernster Diagnosetechnik finden wir schnell und präzise die Ursache für Probleme an Ihrem Fahrzeug.",
      features: [
        { icon: Tool, text: "Computerdiagnose" },
        { icon: FileCheck, text: "Fehleranalyse" },
        { icon: Oil, text: "Ölservice" },
        { icon: Thermometer, text: "Klimaanlagenservice" },
      ],
    },
    {
      id: "reparatur",
      title: "Reparatur",
      description: "Professionelle Reparaturen aller Art für Ihr Fahrzeug, von der Inspektion bis zur Unfallreparatur.",
      features: [
        { icon: Package, text: "Ersatzteile" },
        { icon: PaintBucket, text: "Lackierung" },
        { icon: Zap, text: "Elektrik" },
        { icon: Glasses, text: "Glasreparatur" },
      ],
    },
    {
      id: "wartung",
      title: "Wartung",
      description: "Regelmäßige Wartung und Inspektion für eine lange Lebensdauer Ihres Fahrzeugs.",
      features: [
        { icon: Engine, text: "Motor" },
        { icon: Umbrella, text: "Karosserie" },
        { icon: Compass, text: "Fahrwerk" },
        { icon: Truck, text: "Bremsen" },
      ],
    },
    {
      id: "tuev",
      title: "TÜV & AU",
      description: "Wir bereiten Ihr Fahrzeug optimal auf die Hauptuntersuchung vor und führen die AU durch.",
      features: [
        { icon: Disc, text: "Bremsenprüfung" },
        { icon: Car, text: "Hauptuntersuchung" },
        { icon: Shield, text: "Sicherheitscheck" },
        { icon: Check, text: "Abgasuntersuchung" },
      ],
    },
  ]

  return (
    <section id="services" className="bg-white px-4 py-32">
      <div className="container mx-auto">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-6 text-4xl font-bold text-[#1D3414]">Unsere Leistungen</h2>
          <p className="mb-12 text-lg text-gray-600">
            Von der Diagnose bis zur Reparatur - wir bieten Ihnen alle Leistungen aus einer Hand.
          </p>
        </div>

        <div className="mx-auto mt-8 max-w-5xl">
          <div className="mb-8 flex flex-wrap justify-center gap-4">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`rounded-full px-6 py-2 text-lg font-medium transition-all duration-300 ${
                  activeTab === tab.id
                    ? "bg-[#1D3414] text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {tab.title}
              </button>
            ))}
          </div>

          <div className="relative mt-8 overflow-hidden rounded-2xl bg-[#F5F5F5] p-8">
            <AnimatePresence mode="wait">
              {tabs.map(
                (tab) =>
                  activeTab === tab.id && (
                    <motion.div
                      key={tab.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.3 }}
                      className="text-center"
                    >
                      <h3 className="mb-4 text-2xl font-bold text-[#1D3414]">{tab.title}</h3>
                      <p className="mb-8 text-lg text-gray-600">{tab.description}</p>
                      <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
                        {tab.features.map((feature, index) => (
                          <div key={index} className="flex flex-col items-center">
                            <div className="mb-4 rounded-full bg-white p-4 text-[#1D3414] shadow-md">
                              <feature.icon className="h-6 w-6" />
                            </div>
                            <span className="text-sm font-medium text-gray-600">{feature.text}</span>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}
