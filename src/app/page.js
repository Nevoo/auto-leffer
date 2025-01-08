'use client'

import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { useState } from "react"
import { MoveRight, PenToolIcon as Tool, FileCheck, FuelIcon as Oil, Thermometer, Package, PaintBucket, Zap, Glasses, FuelIcon as Engine, Umbrella, Compass, Truck, Disc, Car, Shield, Check, Wrench, Clock, Users, Heart } from 'lucide-react'

export default function LandingPage() {
  const [activeTab, setActiveTab] = useState("diagnose")
  
  const tabs = [
    {
      id: "diagnose",
      label: "Diagnose & Wartung",
      title: "Professionelle Diagnose und Wartung",
      description: "Modernste Diagnosetechnik und umfassende Wartungsservices für alle Fahrzeugmarken. Wir sorgen für die optimale Leistung und Langlebigkeit Ihres Fahrzeugs.",
      features: [
        "Elektronische Fahrzeugdiagnose",
        "Inspektion nach Herstellervorgaben",
        "Ölwechsel und Flüssigkeitsservice",
        "Klimaanlagenwartung",
        "Saison-Check",
      ],
      icon: Tool,
      image: "https://plus.unsplash.com/premium_photo-1661434904969-d3ca36791fb4?q=80&w=2487&auto=format&fit=crop"
    },
    {
      id: "repair",
      label: "Reparatur",
      title: "Kompetente Reparatur und Instandsetzung",
      description: "Von der kleinsten Reparatur bis zur kompletten Motorinstandsetzung - unser erfahrenes Team kümmert sich um alle technischen Herausforderungen.",
      features: [
        "Unfallreparatur und Instandsetzung",
        "Motorinstandsetzung",
        "Erneuerung von Glasscheiben",
        "Fahrwerkstechnik",
        "Abschleppservice",
      ],
      icon: Wrench,
      image: "https://plus.unsplash.com/premium_photo-1661373058906-4747dac37521?q=80&w=2340&auto=format&fit=crop"
    },
    {
      id: "special",
      label: "Spezialservices",
      title: "Spezialisierte Fahrzeugservices",
      description: "Individuelle Lösungen für besondere Anforderungen. Von der Lackierung bis zum Tuning bieten wir Ihnen hochwertige Spezialservices.",
      features: [
        "Professionelle Lackierungen",
        "Karosserie- und Motortuning",
        "Umfassender Reifenservice",
        "Smart Repair",
      ],
      icon: PaintBucket,
      image: "https://plus.unsplash.com/premium_photo-1682142263585-628a4561e136?q=80&w=2340&auto=format&fit=crop"
    },
    {
      id: "sales",
      label: "Verkauf",
      title: "Fahrzeugverkauf und Zertifizierung",
      description: "Große Auswahl an Neu- und Gebrauchtfahrzeugen. Inklusive TÜV-Service und hochwertiger Ersatzteile für alle Marken.",
      features: [
        "Verkauf von Neu- und Gebrauchtfahrzeugen",
        "TÜV & AU Service",
        "Original Ersatzteile & Zubehör",
        "Garantieabwicklung",
      ],
      icon: Car,
      image: "https://images.unsplash.com/photo-1498887960847-2a5e46312788?q=80&w=2338&auto=format&fit=crop"
    },
  ]

  return (
    <>
      <main className="flex-1">
        {/* Hero Section */}
        <section id="hero" className="relative flex min-h-[90vh] flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-white to-gray-50 pt-20">
          {/* Background Pattern */}
          <div className="absolute inset-0 z-0 opacity-5">
            <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
          </div>

          {/* Mobile Background Image */}
          <div className="absolute inset-0 z-0 lg:hidden">
            <Image
              src="https://plus.unsplash.com/premium_photo-1661373022510-dfd61512e080?q=80&w=2431&auto=format&fit=crop"
              alt="Professionelle Autowartung"
              fill
              className="object-cover brightness-[0.85]"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/50 to-white/80" />
          </div>

          <div className="container relative z-10 mx-auto px-4 py-20 md:px-6">
            <div className="grid gap-12 lg:grid-cols-2">
              {/* Left Content */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="flex flex-col justify-center space-y-8"
              >
                <div className="space-y-6">
                  <motion.span 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="inline-block rounded-full bg-[#9DE150]/10 px-4 py-1.5 text-sm font-medium text-[#1D3414]"
                  >
                    Meisterwerkstatt seit 1983
                  </motion.span>
                  <h1 className="text-5xl font-bold tracking-tight text-[#1D3414] sm:text-6xl md:text-7xl lg:text-7xl">
                    Ihre <span className="relative">
                      <span className="relative z-10 text-[#9DE150]">Autowerkstatt </span>
                      <motion.span 
                        initial={{ width: "0%" }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="absolute bottom-2 left-0 -z-10 h-3 w-full bg-[#9DE150]/10"
                      />
                    </span>
                    des Vertrauens
                  </h1>
                  <p className="max-w-[600px] text-lg text-gray-600 md:text-xl">
                    Professionelle Wartung, Reparatur und Unfallinstandsetzung in Meschenbach bei Coburg.
                  </p>
                </div>

                <div className="flex flex-col gap-4 sm:flex-row">
                  <Button className="group h-14 rounded-full bg-[#1D3414] px-8 text-white transition-all duration-300 hover:bg-[#2A4A1D] hover:shadow-lg hover:shadow-[#1D3414]/20">
                    Termin vereinbaren
                    <MoveRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Button>
                  
                </div>

                <div className="grid grid-cols-2 gap-8 pt-8 sm:grid-cols-3">
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="flex items-center gap-3"
                  >
                    <div className="rounded-full bg-[#9DE150]/10 p-2">
                      <Tool className="h-6 w-6 text-[#1D3414]" />
                    </div>
                    <div className="text-sm">
                      <div className="font-semibold text-[#1D3414]">Meisterwerkstatt</div>
                      <div className="text-gray-600">Zertifiziert</div>
                    </div>
                  </motion.div>
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="flex items-center gap-3"
                  >
                    <div className="rounded-full bg-[#9DE150]/10 p-2">
                      <Clock className="h-6 w-6 text-[#1D3414]" />
                    </div>
                    <div className="text-sm">
                      <div className="font-semibold text-[#1D3414]">40+ Jahre</div>
                      <div className="text-gray-600">Erfahrung</div>
                    </div>
                  </motion.div>
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="flex items-center gap-3"
                  >
                    <div className="rounded-full bg-[#9DE150]/10 p-2">
                      <Car className="h-6 w-6 text-[#1D3414]" />
                    </div>
                    <div className="text-sm">
                      <div className="font-semibold text-[#1D3414]">Alle Marken</div>
                      <div className="text-gray-600">Service</div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>

              {/* Right Content - Hidden on mobile */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative hidden lg:block"
              >
                <div className="relative h-full w-full">
                  <div className="absolute inset-0 z-0 opacity-5">
                    <div className="absolute inset-0 bg-[#1D3414] opacity-5 rounded-2xl" />
                  </div>
                  <Image
                    src="https://plus.unsplash.com/premium_photo-1661373022510-dfd61512e080?q=80&w=2431&auto=format&fit=crop"
                    alt="Professionelle Autowartung"
                    width={600}
                    height={400}
                    className="relative z-10 rounded-3xl object-cover shadow-xl"
                    priority
                  />
                  <div className="absolute -bottom-6 -left-6 z-20 hidden rounded-2xl bg-white p-6 shadow-xl lg:block">
                    <div className="flex items-center gap-4">
                      <div className="rounded-full bg-[#9DE150]/10 p-3">
                        <Clock className="h-8 w-8 text-[#1D3414]" />
                      </div>
                      <div>
                        <div className="font-medium text-[#1D3414]">Öffnungszeiten</div>
                        <div className="text-sm text-gray-600">Mo-Fr: 8:00-12:00 & 13:00-17:30</div>
                      </div>
                    </div>
                  </div>
                  {/* Add a gradient overlay to ensure text readability */}
                  <div className="absolute inset-0 z-10 rounded-3xl bg-gradient-to-r from-[#1D3414]/10 to-transparent" />
                </div>
              </motion.div>

              {/* Mobile Opening Hours */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="mt-8 block rounded-2xl bg-white p-6 shadow-xl lg:hidden"
              >
                <div className="flex items-center gap-4">
                  <div className="rounded-full bg-[#9DE150]/10 p-3">
                    <Clock className="h-8 w-8 text-[#1D3414]" />
                  </div>
                  <div>
                    <div className="font-medium text-[#1D3414]">Öffnungszeiten</div>
                    <div className="text-sm text-gray-600">Mo-Fr: 8:00-12:00 & 13:00-17:30</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="relative overflow-hidden bg-white py-24">
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
                Umfassende Dienstleistungen für Ihr Fahrzeug - von der Diagnose bis zur Reparatur
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
                      ${activeTab === tab.id 
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
                            <h3 className="text-2xl font-bold text-[#1D3414]">{tab.title}</h3>
                            <p className="text-gray-600">{tab.description}</p>
                            <div className="space-y-3">
                              {tab.features.map((feature, index) => (
                                <div key={index} className="flex items-center gap-2">
                                  <Check className="h-5 w-5 text-[#9DE150]" />
                                  <span>{feature}</span>
                                </div>
                              ))}
                            </div>
                          </motion.div>
                        )
                      }
                      return null
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
                        )
                      }
                      return null
                    })}
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Us Section */}
        <section id="about" className="bg-gradient-to-b from-white to-gray-50 py-24">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="mx-auto max-w-[800px] space-y-4 text-center"
            >
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#1D3414]">
                ÜBER UNS
              </h2>
              <p className="text-gray-600 text-lg">
                Seit 1983 Ihr vertrauenswürdiger Partner für alle Fahrzeugservices in Meschenbach
              </p>
            </motion.div>

            <div className="mt-16 grid gap-12 lg:grid-cols-2">
              {/* Left Content - Image */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="absolute -right-4 -top-4 h-full w-full rounded-3xl bg-[#1D3414] opacity-5" />
                <Image
                  src="https://images.unsplash.com/photo-1589694934898-392904cde3c4?q=80&w=2244&auto=format&fit=crop"
                  alt="Auto Leffer Werkstatt"
                  width={600}
                  height={400}
                  className="relative z-10 rounded-3xl object-cover shadow-xl"
                  priority
                />
              </motion.div>

              {/* Right Content - Text */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="flex flex-col justify-center space-y-6"
              >
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-[#1D3414]">
                    Von der Tankstelle zum modernen Meisterbetrieb
                  </h3>
                  <p className="text-gray-600">
                    Begonnen haben wir damals mit einer kleinen Tankstelle direkt an der Hauptstraße, die nur einen Raum mit Hebebühne zur KFZ-Reparatur bot. Mittlerweile haben wir eine vollausgestattete Werkstatthalle mit modernster Technik, 3 Hebebühnen und einer eigenen Lackiererei. Damit und mit unserem hochqualifizierten Werkstattteam sind wir nun bestens gerüstet, um Ihnen einen Service für Sie und Ihr Auto auf höchstem Niveau zu bieten!
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="rounded-full bg-[#9DE150]/10 p-3">
                        <Tool className="h-6 w-6 text-[#1D3414]" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-[#1D3414]">Meisterbetrieb</h4>
                        <p className="text-sm text-gray-600">Zertifizierte Qualität und Expertise</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="rounded-full bg-[#9DE150]/10 p-3">
                        <Users className="h-6 w-6 text-[#1D3414]" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-[#1D3414]">Erfahrenes Team</h4>
                        <p className="text-sm text-gray-600">Kompetente und freundliche Mitarbeiter</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="rounded-full bg-[#9DE150]/10 p-3">
                        <Heart className="h-6 w-6 text-[#1D3414]" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-[#1D3414]">Persönliche Betreuung</h4>
                        <p className="text-sm text-gray-600">Individuelle Lösungen für jeden Kunden</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Stats Section */}
            <div className="mt-20 grid grid-cols-2 gap-8 rounded-3xl bg-[#1D3414] p-8 text-white sm:grid-cols-4 lg:p-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-3xl font-bold text-[#9DE150]">40+</div>
                <div className="mt-2 text-sm">Jahre Erfahrung</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-3xl font-bold text-[#9DE150]">5000+</div>
                <div className="mt-2 text-sm">Zufriedene Kunden</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-3xl font-bold text-[#9DE150]">15+</div>
                <div className="mt-2 text-sm">Experten im Team</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-3xl font-bold text-[#9DE150]">100%</div>
                <div className="mt-2 text-sm">Kundenzufriedenheit</div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="bg-white py-24">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="mx-auto max-w-[800px] space-y-4 text-center"
            >
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#1D3414]">
                KONTAKT
              </h2>
              <p className="text-gray-600 text-lg">
                Kontaktieren Sie uns für weitere Informationen oder um einen Termin zu vereinbaren
              </p>
            </motion.div>

            <div className="mt-16 grid gap-12 lg:grid-cols-2">
              {/* Left Content - Image */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="absolute -right-4 -top-4 h-full w-full rounded-3xl bg-[#1D3414] opacity-5" />
                <Image
                  src="https://images.unsplash.com/photo-1589694934898-392904cde3c4?q=80&w=2244&auto=format&fit=crop"
                  alt="Auto Leffer Werkstatt"
                  width={600}
                  height={400}
                  className="relative z-10 rounded-3xl object-cover shadow-xl"
                  priority
                />
              </motion.div>

              {/* Right Content - Text */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="flex flex-col justify-center space-y-6"
              >
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-[#1D3414]">
                    Kontaktinformationen
                  </h3>
                  <p className="text-gray-600">
                    Telefon: 09561 123456
                  </p>
                  <p className="text-gray-600">
                    E-Mail: [info@autoleffer.de](mailto:info@autoleffer.de)
                  </p>
                  <p className="text-gray-600">
                    Adresse: Hauptstraße 12, 96269 Meschenbach
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
