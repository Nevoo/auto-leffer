import { motion } from "framer-motion";
import Image from "next/image";

export default function ContactSection() {
  return (
    <>
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
    </>
  );
}
