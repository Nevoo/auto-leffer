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
import AboutSection from "@/components/sections/about-section";

export default function LandingPage() {
  return (
    <>
      <main className="flex-1">
        <HeroSection />
        <ServicesSection />
        <AboutSection />
      </main>
    </>
  );
}
