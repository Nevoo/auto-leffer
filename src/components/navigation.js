"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useModal } from "@/context/modal-context";
import { AppointmentModal } from "./appointment-modal";

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { openModal } = useModal();
  const pathname = usePathname();
  const router = useRouter();
  const isHomePage = pathname === "/";

  const scrollToSection = (sectionId) => {
    if (!isHomePage) {
      router.push(`/#${sectionId}`);
      return;
    }

    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // Height of the fixed navbar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
    setIsMenuOpen(false);
  };

  const handleAppointment = () => {
    openModal();
    setIsMenuOpen(false);
  };

  const navItems = [
    { id: "services", label: "Unsere Services" },
    { id: "about", label: "Über Uns" },
    { id: "contact", label: "Kontakt" },
    { id: "cars", label: "Autos", href: "/autos" },
  ];

  const handleNavClick = (item) => {
    if (item.href) {
      router.push(item.href);
      setIsMenuOpen(false);
      return;
    }

    scrollToSection(item.id);
  };

  return (
    <>
      <header className="fixed left-0 right-0 top-0 z-50 border-b border-gray-200 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex h-20 items-center justify-between">
            {/* Logo */}
            <Link
              href="/"
              className="text-xl font-bold text-[#1D3414] hover:text-[#1D3414]/80 transition-colors"
            >
              Auto Leffer
            </Link>

            <nav className="hidden space-x-8 md:flex">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item)}
                  className="text-[#1D3414] transition-colors hover:text-[#9DE150]"
                >
                  {item.label}
                </button>
              ))}
              <Button
                className="h-10 rounded-full bg-[#1D3414] px-6 text-white transition-all duration-300 hover:bg-[#2A4A1D]"
                onClick={handleAppointment}
              >
                Termin vereinbaren
              </Button>
            </nav>

            {/* Mobile menu button */}
            <button
              className="rounded-lg p-2 text-[#1D3414] hover:bg-[#1D3414]/5 md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>

            {/* Mobile menu */}
            <AnimatePresence>
              {isMenuOpen && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="fixed inset-0 z-50 bg-white md:hidden"
                >
                  <div className="container mx-auto px-4">
                    <div className="flex h-20 items-center justify-between">
                      <Link
                        href="/"
                        className="text-xl font-bold text-[#1D3414] hover:text-[#1D3414]/80 transition-colors"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Auto Leffer
                      </Link>
                      <button
                        className="rounded-lg p-2 text-[#1D3414] hover:bg-[#1D3414]/5"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <svg
                          className="h-6 w-6"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <div className="flex h-[calc(100vh-5rem)] flex-col justify-center space-y-8 p-4">
                    {navItems.map((item) => (
                      <button
                        key={item.id}
                        onClick={() => handleNavClick(item)}
                        className="block w-full py-4 text-center text-xl text-[#1D3414] transition-colors hover:text-[#9DE150]"
                      >
                        {item.label}
                      </button>
                    ))}
                    <div className="px-4">
                      <Button
                        className="h-12 w-full rounded-full bg-[#1D3414] text-lg text-white transition-all duration-300 hover:bg-[#2A4A1D]"
                        onClick={handleAppointment}
                      >
                        Termin vereinbaren
                      </Button>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </header>

      <AppointmentModal />
    </>
  );
}
