'use client'

export function ContactSection() {
  return (
    <section id="contact" className="bg-white px-4 py-32">
      <div className="container mx-auto">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-6 text-4xl font-bold text-[#1D3414]">Kontakt & Anfahrt</h2>
          <p className="mb-12 text-lg text-gray-600">
            Sie finden uns in Meschenbach bei Coburg. Vereinbaren Sie einen Termin oder besuchen Sie uns direkt.
          </p>
        </div>

        <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-2">
          <div className="rounded-xl bg-[#F5F5F5] p-8">
            <h3 className="mb-4 text-2xl font-bold text-[#1D3414]">Öffnungszeiten</h3>
            <div className="space-y-2 text-gray-600">
              <p>Montag - Freitag: 8:00 - 17:00 Uhr</p>
              <p>Samstag: Nach Vereinbarung</p>
              <p>Sonntag: Geschlossen</p>
            </div>

            <h3 className="mb-4 mt-8 text-2xl font-bold text-[#1D3414]">Kontakt</h3>
            <div className="space-y-2 text-gray-600">
              <p>Telefon: +49(0)9565/7344</p>
              <p>E-Mail: info@auto-leffer.de</p>
              <p>Am Berg 4</p>
              <p>OT Meschenbach</p>
              <p>96253 Untersiemau</p>
            </div>
          </div>

          <div className="h-[400px] overflow-hidden rounded-xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2537.483077557669!2d10.971416776888392!3d50.23736997169936!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a3cd8f95c7c8b9%3A0x3f8a6f4f8f8a6f4f!2sAuto%20Leffer!5e0!3m2!1sde!2sde!4v1629788000000!5m2!1sde!2sde"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  )
}
