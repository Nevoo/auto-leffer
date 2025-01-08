'use client'

import Image from "next/image"
import { motion } from "framer-motion"

export function BackdropImage({
  src,
  alt,
  width = 600,
  height = 400,
  priority = false,
  className = "",
  containerClassName = "",
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className={`relative ${containerClassName}`}
    >
      <div className="absolute -right-4 -top-4 h-full w-full rounded-3xl bg-[#1D3414] opacity-5" />
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={`relative z-10 rounded-3xl object-cover shadow-xl ${className}`}
        priority={priority}
      />
    </motion.div>
  )
}
