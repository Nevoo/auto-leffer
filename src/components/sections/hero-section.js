'use client'

import { Button } from "@/components/ui/button"
import { MoveRight } from 'lucide-react'
import { useModal } from '@/context/modal-context'

export function HeroSection() {
  const { openModal } = useModal()

  return (
    <section className="relative flex min-h-screen items-center justify-center bg-[#F5F5F5] px-4 py-32">
      <div className="container mx-auto">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="mb-6 text-4xl font-bold text-[#1D3414] sm:text-5xl md:text-6xl">
            Ihr vertrauenswürdiger Partner für <br className="hidden sm:inline" />
            <span className="text-[#2A4A1D]">Autoreparatur in Coburg</span>
          </h1>
          <p className="mb-8 text-lg text-gray-600 sm:text-xl">
            Professionelle Wartung und Reparatur für alle Fahrzeugmarken. <br className="hidden sm:inline" />
            Über 30 Jahre Erfahrung in der Automobilbranche.
          </p>
          <Button
            className="group relative mt-8 h-14 overflow-hidden rounded-full bg-[#1D3414] px-8 text-lg font-medium text-white transition-all duration-300 hover:bg-[#2A4A1D]"
            onClick={openModal}
          >
            Termin vereinbaren
            <MoveRight className="ml-2 inline-block transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>
  )
}
