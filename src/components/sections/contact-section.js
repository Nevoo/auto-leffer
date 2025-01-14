import { motion } from "framer-motion";

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

          <div className="mt-16 grid items-center justify-items-center gap-12 lg:grid-cols-2">
            {/* Left Content - Map */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative aspect-square w-full max-w-[600px] lg:aspect-video lg:justify-self-end"
            >
              <div className="absolute -right-4 -top-4 h-full w-full rounded-3xl bg-[#1D3414] opacity-5" />
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2537.483077557669!2d10.971416776888392!3d50.23736997169936!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a3cd8f95c7c8b9%3A0x3f8a6f4f8f8a6f4f!2sAuto%20Leffer!5e0!3m2!1sde!2sde!4v1629788000000!5m2!1sde!2sde"
                width="100%"
                height="100%"
                className="relative z-10 rounded-3xl shadow-xl"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </motion.div>

            {/* Right Content - Text */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="flex w-full max-w-[400px] flex-col justify-center space-y-6 lg:justify-self-start"
            >
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-[#1D3414]">
                  Kontaktinformationen
                </h3>
                <p className="text-gray-600">Telefon: +49(0)9565/7344</p>
                <p className="text-gray-600">
                  E-Mail: info@auto-leffer.de
                </p>
                <p className="text-gray-600">
                  Adresse: Am Berg 4, OT Meschenbach, 96253 Untersiemau
                </p>
                <div className="mt-6 space-y-2">
                  <h4 className="font-semibold text-[#1D3414]">Öffnungszeiten:</h4>
                  <p className="text-gray-600">Mo-Fr: 8:00-12:00 & 13:00-17:30</p>
                  <p className="text-gray-600">Sa-So: Geschlossen</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
