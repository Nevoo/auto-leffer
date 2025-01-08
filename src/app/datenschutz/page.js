'use client'

import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'

export default function DatenschutzPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <main className="flex-1 pt-20">
        <div className="container mx-auto px-4 py-12 md:px-6">
          <div className="mx-auto max-w-3xl">
            <h1 className="mb-8 text-4xl font-bold text-[#1D3414]">Datenschutzerklärung</h1>
            
            <div className="space-y-6 text-gray-600">
              <section>
                <h2 className="mb-4 text-xl font-semibold text-[#1D3414]">1. Datenschutz auf einen Blick</h2>
                <h3 className="mb-2 text-lg font-semibold text-[#1D3414]">Allgemeine Hinweise</h3>
                <p>Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.</p>
              </section>

              <section>
                <h2 className="mb-4 text-xl font-semibold text-[#1D3414]">2. Datenerfassung auf dieser Website</h2>
                <h3 className="mb-2 text-lg font-semibold text-[#1D3414]">Wer ist verantwortlich für die Datenerfassung auf dieser Website?</h3>
                <p>Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Impressum dieser Website entnehmen.</p>
              </section>

              <section>
                <h2 className="mb-4 text-xl font-semibold text-[#1D3414]">3. Wie erfassen wir Ihre Daten?</h2>
                <p>Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z.B. um Daten handeln, die Sie in ein Kontaktformular eingeben.</p>
                <p className="mt-2">Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor allem technische Daten (z.B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs).</p>
              </section>

              <section>
                <h2 className="mb-4 text-xl font-semibold text-[#1D3414]">4. Wofür nutzen wir Ihre Daten?</h2>
                <p>Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten. Andere Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden.</p>
              </section>

              <section>
                <h2 className="mb-4 text-xl font-semibold text-[#1D3414]">5. Welche Rechte haben Sie bezüglich Ihrer Daten?</h2>
                <p>Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung oder Löschung dieser Daten zu verlangen. Wenn Sie eine Einwilligung zur Datenverarbeitung erteilt haben, können Sie diese Einwilligung jederzeit für die Zukunft widerrufen. Außerdem haben Sie das Recht, unter bestimmten Umständen die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.</p>
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
