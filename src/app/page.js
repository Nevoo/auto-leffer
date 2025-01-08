"use client";

import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { useState } from "react";
import {
  MoveRight,
  PenToolIcon as Tool,
  FileCheck,
  FuelIcon as Oil,
  Thermometer,
  Package,
  PaintBucket,
  Zap,
  Glasses,
  FuelIcon as Engine,
  Umbrella,
  Compass,
  Truck,
  Disc,
  Car,
  Shield,
  Check,
  Wrench,
  Clock,
  Users,
  Heart,
} from "lucide-react";
import { useModal } from "@/context/modal-context";
import HeroSection from "@/components/sections/hero-section";
import ServicesSection from "@/components/sections/services-section";

export default function LandingPage() {
  return (
    <>
      <main className="flex-1">
        <HeroSection />
        <ServicesSection />

        {/* About Us Section */}
        <section
          id="about"
          className="bg-gradient-to-b from-white to-gray-50 py-24"
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
                ÜBER UNS
              </h2>
              <p className="text-gray-600 text-lg">
                Seit 1983 Ihr vertrauenswürdiger Partner für alle
                Fahrzeugservices in Meschenbach
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
                    Begonnen haben wir damals mit einer kleinen Tankstelle
                    direkt an der Hauptstraße, die nur einen Raum mit Hebebühne
                    zur KFZ-Reparatur bot. Mittlerweile haben wir eine
                    vollausgestattete Werkstatthalle mit modernster Technik, 3
                    Hebebühnen und einer eigenen Lackiererei. Damit und mit
                    unserem hochqualifizierten Werkstattteam sind wir nun
                    bestens gerüstet, um Ihnen einen Service für Sie und Ihr
                    Auto auf höchstem Niveau zu bieten!
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="rounded-full bg-[#9DE150]/10 p-3">
                        <Tool className="h-6 w-6 text-[#1D3414]" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-[#1D3414]">
                          Meisterbetrieb
                        </h4>
                        <p className="text-sm text-gray-600">
                          Zertifizierte Qualität und Expertise
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="rounded-full bg-[#9DE150]/10 p-3">
                        <Users className="h-6 w-6 text-[#1D3414]" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-[#1D3414]">
                          Erfahrenes Team
                        </h4>
                        <p className="text-sm text-gray-600">
                          Kompetente und freundliche Mitarbeiter
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="rounded-full bg-[#9DE150]/10 p-3">
                        <Heart className="h-6 w-6 text-[#1D3414]" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-[#1D3414]">
                          Persönliche Betreuung
                        </h4>
                        <p className="text-sm text-gray-600">
                          Individuelle Lösungen für jeden Kunden
                        </p>
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
                Kontaktieren Sie uns für weitere Informationen oder um einen
                Termin zu vereinbaren
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
                  <p className="text-gray-600">Telefon: 09561 123456</p>
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
  );
}
