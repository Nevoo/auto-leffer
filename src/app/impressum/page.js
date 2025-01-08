'use client'

import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'

export default function ImpressumPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white pt-20">
      <main className="flex-1">
        <div className="container mx-auto px-4 py-12 md:px-6 pt-20">
          <div className="mx-auto max-w-3xl">
            <h1 className="mb-8 text-4xl font-bold text-[#1D3414]">Impressum</h1>
            
            <div className="space-y-6 text-gray-600">
              <section>
                <h2 className="mb-4 text-xl font-semibold text-[#1D3414]">Angaben gemäß § 5 TMG</h2>
                <p>Auto Leffer</p>
                <p>Hauptstraße</p>
                <p>Meschenbach bei Coburg</p>
              </section>

              <section>
                <h2 className="mb-4 text-xl font-semibold text-[#1D3414]">Kontakt</h2>
                <p>Telefon: +49 (0) XXX XXXXXXX</p>
                <p>E-Mail: info@autohaus-leffer.de</p>
              </section>

              <section>
                <h2 className="mb-4 text-xl font-semibold text-[#1D3414]">Berufsbezeichnung und berufsrechtliche Regelungen</h2>
                <p>Berufsbezeichnung: Kfz-Meisterbetrieb</p>
                <p>Zuständige Kammer: Handwerkskammer Coburg</p>
              </section>

              <section>
                <h2 className="mb-4 text-xl font-semibold text-[#1D3414]">Streitschlichtung</h2>
                <p>Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: https://ec.europa.eu/consumers/odr/</p>
                <p className="mt-4">Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.</p>
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
