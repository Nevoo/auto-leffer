import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useModal } from "@/context/modal-context";
import { MoveRight, Hammer as Tool, Car, Clock } from "lucide-react";
import Image from "next/image";
import { BackdropImage } from "@/components/ui/backdrop-image";

export default function HeroSection() {
  const { openModal } = useModal();

  return (
    <>
      {/* Hero Section */}
      <section
        id="hero"
        className="relative flex min-h-[90vh] flex-col items-center justify-center overflow-hidden from-white to-gray-50 pt-20"
      >
        {/* Mobile Background Image */}
        <div className="absolute inset-0 z-0 lg:hidden">
          <BackdropImage
            src="https://plus.unsplash.com/premium_photo-1661373022510-dfd61512e080?q=80&w=2431&auto=format&fit=crop"
            alt="Professionelle Autowartung"
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
                  Ihre{" "}
                  <span className="relative">
                    <span className="relative z-10 text-[#9DE150]">
                      Autowerkstatt{" "}
                    </span>
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
                  Professionelle Wartung, Reparatur und Unfallinstandsetzung in
                  Meschenbach bei Coburg.
                </p>
              </div>

              <div className="flex flex-col gap-4 sm:flex-row">
                <Button
                  className="group relative mt-8 h-14 overflow-hidden rounded-full bg-[#1D3414] px-8 text-lg font-medium text-white transition-all duration-300 hover:bg-[#2A4A1D]"
                  onClick={openModal}
                >
                  Termin vereinbaren
                  <MoveRight className="ml-2 inline-block transition-transform group-hover:translate-x-1" />
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
                    <div className="font-semibold text-[#1D3414]">
                      Meisterwerkstatt
                    </div>
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
                    <div className="font-semibold text-[#1D3414]">
                      40+ Jahre
                    </div>
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
                    <div className="font-semibold text-[#1D3414]">
                      Alle Marken
                    </div>
                    <div className="text-gray-600">Service</div>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Right Content - Hidden on mobile */}
            <div className="relative hidden lg:block">
              <BackdropImage
                src="https://plus.unsplash.com/premium_photo-1661373022510-dfd61512e080?q=80&w=2431&auto=format&fit=crop"
                alt="Professionelle Autowartung"
                priority
              />
              <div className="absolute -bottom-6 -left-6 z-20 hidden rounded-2xl bg-white p-6 shadow-xl lg:block">
                <div className="flex items-center gap-4">
                  <div className="rounded-full bg-[#9DE150]/10 p-3">
                    <Clock className="h-8 w-8 text-[#1D3414]" />
                  </div>
                  <div>
                    <div className="font-medium text-[#1D3414]">
                      Öffnungszeiten
                    </div>
                    <div className="text-sm text-gray-600">
                      Mo-Fr: 8:00-12:00 & 13:00-17:30
                    </div>
                  </div>
                </div>
              </div>
            </div>

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
                  <div className="font-medium text-[#1D3414]">
                    Öffnungszeiten
                  </div>
                  <div className="text-sm text-gray-600">
                    Mo-Fr: 8:00-12:00 & 13:00-17:30
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
