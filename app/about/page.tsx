'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function About() {
  return (
    <section className="py-16 max-w-4xl mx-auto space-y-12">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-bold"
      >
        About Me
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-10 items-center">
        {/* Profile photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center"
        >
          <Image
            src="/images/profile.jpg"
            alt="Your Name"
            width={280}
            height={280}
            className="rounded-full shadow-lg object-cover"
          />
        </motion.div>

        {/* Bio */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-4"
        >
          <p className="text-lg text-muted-foreground">
            Hi 👋, I’m <span className="font-semibold">Chidiebere Uzoma</span>,
            a{' '}
            <span className="font-semibold">
              Fullstack | Frontend | Mobile Developer{' '}
            </span>
            passionate about building sleek, user-friendly, and performant web
            mobile and applications.
          </p>
          <p className="text-lg text-muted-foreground">
            With expertise in{' '}
            <strong>
              JavaScript/TypeScript, Next.js, React, React Native, Vuejs, Nuxt,
              MaterialUI, and TailwindCSS
            </strong>
            , I bring ideas to life on the web and mobile. I also work with
            backend stacks like{' '}
            <strong>
              Node.js, Express, Firebase, and databases (Postgres, MongoDB)
            </strong>
            . I also have experience with cloud platforms like{' '}
            <strong>AWS, Vercel, and Netlify</strong>. I work with collaborative
            tools like <strong>Git, GitHub, and Slack</strong>.
          </p>
          <p className="text-lg text-muted-foreground">
            Outside coding, I enjoy problem-solving, mentoring, and exploring
            new tech trends.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
