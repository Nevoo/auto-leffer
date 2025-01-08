"use client";

import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-gray-100 bg-white">
      <div className="container mx-auto px-4 py-12 md:px-6">
        <div className="mx-auto max-w-4xl">
          <div className="grid gap-8 md:grid-cols-3">
            <div>
              <h4 className="text-lg font-bold text-[#1D3414]">Kontakt</h4>
              <p className="mt-4 text-sm text-gray-600">
                Hauptstraße,
                <br />
                Meschenbach bei Coburg
                <br />
                +49(0)9565/7344
                <br />
                info@autohaus-leffer.de
              </p>
            </div>
            <div>
              <h4 className="text-lg font-bold text-[#1D3414]">
                Öffnungszeiten
              </h4>
              <div className="mt-4 space-y-2 text-sm text-gray-600">
                <p>Mo - Fr: 8:00 - 12:00</p>
                <p>13:00 - 17:30</p>
                <p>Sa - So: Geschlossen</p>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-bold text-[#1D3414]">Rechtliches</h4>
              <div className="mt-4 space-y-2 text-sm text-gray-600">
                <Link
                  href="/autos"
                  className="block hover:text-[#1D3414] transition-colors"
                >
                  Autos
                </Link>
                <Link
                  href="/impressum"
                  className="block hover:text-[#1D3414] transition-colors"
                >
                  Impressum
                </Link>
                <Link
                  href="/datenschutz"
                  className="block hover:text-[#1D3414] transition-colors"
                >
                  Datenschutz
                </Link>
              </div>
            </div>
          </div>
          <div className="mt-12 border-t border-gray-100 pt-8 text-center text-sm text-gray-600">
            2024 Autohaus Leffer. Alle Rechte vorbehalten.
          </div>
        </div>
      </div>
    </footer>
  );
}
