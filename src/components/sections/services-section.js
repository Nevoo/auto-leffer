"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Hammer as Tool, PaintBucket, Car, Check, Wrench } from "lucide-react";
import Image from "next/image";

export default function ServicesSection() {
  const [activeTab, setActiveTab] = useState("diagnose");

  const tabs = [
    {
      id: "diagnose",
      label: "Diagnose & Wartung",
      title: "Professionelle Diagnose und Wartung",
      description:
        "Modernste Diagnosetechnik und umfassende Wartungsservices für alle Fahrzeugmarken. Wir sorgen für die optimale Leistung und Langlebigkeit Ihres Fahrzeugs.",
      features: [
        "Elektronische Fahrzeugdiagnose",
        "Inspektion nach Herstellervorgaben",
        "Ölwechsel und Flüssigkeitsservice",
        "Klimaanlagenwartung",
        "Saison-Check",
      ],
      icon: Tool,
      image:
        "https://plus.unsplash.com/premium_photo-1661434904969-d3ca36791fb4?q=80&w=2487&auto=format&fit=crop",
    },
    {
      id: "repair",
      label: "Reparatur",
      title: "Kompetente Reparatur und Instandsetzung",
      description:
        "Von der kleinsten Reparatur bis zur kompletten Motorinstandsetzung - unser erfahrenes Team kümmert sich um alle technischen Herausforderungen.",
      features: [
        "Unfallreparatur und Instandsetzung",
        "Motorinstandsetzung",
        "Erneuerung von Glasscheiben",
        "Fahrwerkstechnik",
        "Abschleppservice",
      ],
      icon: Wrench,
      image:
        "https://plus.unsplash.com/premium_photo-1661373058906-4747dac37521?q=80&w=2340&auto=format&fit=crop",
    },
    {
      id: "special",
      label: "Spezialservices",
      title: "Spezialisierte Fahrzeugservices",
      description:
        "Individuelle Lösungen für besondere Anforderungen. Von der Lackierung bis zum Tuning bieten wir Ihnen hochwertige Spezialservices.",
      features: [
        "Professionelle Lackierungen",
        "Karosserie- und Motortuning",
        "Umfassender Reifenservice",
        "Smart Repair",
      ],
      icon: PaintBucket,
      image:
        "https://plus.unsplash.com/premium_photo-1682142263585-628a4561e136?q=80&w=2340&auto=format&fit=crop",
    },
    {
      id: "sales",
      label: "Verkauf",
      title: "Fahrzeugverkauf und Zertifizierung",
      description:
        "Große Auswahl an Neu- und Gebrauchtfahrzeugen. Inklusive TÜV-Service und hochwertiger Ersatzteile für alle Marken.",
      features: [
        "Verkauf von Neu- und Gebrauchtfahrzeugen",
        "TÜV & AU Service",
        "Original Ersatzteile & Zubehör",
        "Garantieabwicklung",
      ],
      icon: Car,
      image:
        "https://images.unsplash.com/photo-1498887960847-2a5e46312788?q=80&w=2338&auto=format&fit=crop",
    },
  ];

  return (
    <>
      {/* Services Section */}
      <section
        id="services"
        className="relative overflow-hidden bg-white py-24"
      >
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mx-auto max-w-[800px] space-y-4 text-center"
          >
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#1D3414]">
              UNSERE SERVICELEISTUNGEN
            </h2>
            <p className="text-gray-600 text-lg">
              Umfassende Dienstleistungen für Ihr Fahrzeug - von der Diagnose
              bis zur Reparatur
            </p>
          </motion.div>

          <div className="mt-16">
            {/* Tabs */}
            <div className="flex flex-wrap gap-2 rounded-full bg-gray-100 p-2">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex-1 rounded-full px-6 py-3 text-sm font-medium transition-all sm:flex-none 
                      ${
                        activeTab === tab.id
                          ? "bg-[#1D3414] text-white"
                          : "text-gray-600 hover:bg-gray-200"
                      }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Content */}
            <div className="mt-8 min-h-[400px] rounded-3xl bg-gray-50 p-8 lg:p-12">
              <div className="grid gap-8 lg:grid-cols-2">
                <AnimatePresence mode="wait">
                  {tabs.map((tab) => {
                    if (activeTab === tab.id) {
                      return (
                        <motion.div
                          key={tab.id}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -20 }}
                          transition={{ duration: 0.3 }}
                          className="space-y-6"
                        >
                          <tab.icon className="h-16 w-16 text-[#1D3414]" />
                          <h3 className="text-2xl font-bold text-[#1D3414]">
                            {tab.title}
                          </h3>
                          <p className="text-gray-600">{tab.description}</p>
                          <div className="space-y-3">
                            {tab.features.map((feature, index) => (
                              <div
                                key={index}
                                className="flex items-center gap-2"
                              >
                                <Check className="h-5 w-5 text-[#9DE150]" />
                                <span>{feature}</span>
                              </div>
                            ))}
                          </div>
                        </motion.div>
                      );
                    }
                    return null;
                  })}
                </AnimatePresence>
                <AnimatePresence mode="wait">
                  {tabs.map((tab) => {
                    if (activeTab === tab.id) {
                      return (
                        <motion.div
                          key={tab.id}
                          initial={{ opacity: 0, scale: 0.95 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.95 }}
                          transition={{ duration: 0.3 }}
                          className="relative hidden lg:block"
                        >
                          <div className="absolute -right-4 -top-4 h-full w-full rounded-3xl bg-[#1D3414] opacity-5" />
                          <Image
                            src={tab.image}
                            alt={tab.title}
                            width={600}
                            height={400}
                            className="relative z-10 h-[400px] w-full rounded-3xl object-cover shadow-xl"
                            priority
                          />
                        </motion.div>
                      );
                    }
                    return null;
                  })}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
