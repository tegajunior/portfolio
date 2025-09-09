// app/components/Hero.tsx
'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import Image from 'next/image'

export function Hero() {
  return (
    <section className="h-screen flex flex-col justify-center items-center text-center">
      {/* Profile Image */}
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="relative h-40 w-40 md:h-48 md:w-48 rounded-full overflow-hidden shadow-lg mb-4"
      >
        <Image
          src="/images/profile.jpg"
          alt="Chidiebere Uzoma"
          fill
          className="object-cover"
          priority
        />
      </motion.div>
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-5xl font-bold"
      >
        Hi, I&#39;m <span className="text-blue-500">Chidiebere Uzoma</span>
      </motion.h1>
      <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
        Frontend | Mobile | Fullstack <br />
        Developer
      </p>
      <div className="mt-6 flex gap-4">
        <Button asChild>
          <Link href="/projects">View Projects</Link>
        </Button>
        <Button
          variant="outline"
          asChild
        >
          <Link href="/contact">Contact Me</Link>
        </Button>
      </div>
    </section>
  )
}
