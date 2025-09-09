'use client'
import { motion } from 'framer-motion'
import { ProjectCard } from '@/components/ProjectCard'

export default function Projects() {
  const projects = [
    {
      title: 'Portfolio Website',
      description:
        'My personal developer portfolio built with Next.js and TailwindCSS.',
      image: '/images/ruebyscuisineimage.png',
      tech: ['Next.js', 'TailwindCSS', 'Vercel'],
      link: 'https://ruebys-cuisine.vercel.app/',
      github: 'https://github.com/yourgithub/portfolio',
    },
    {
      title: 'Bulk Food Ordering App',
      description: 'A fullstack e-commerce platform with guest checkout.',
      image: '/images/ruebyscuisineimage.png',
      tech: ['React', 'Node.js', 'MongoDB'],
      link: 'https://ruebys-cuisine.vercel.app/',
      github: 'https://github.com/tegajunior/ruebys-cuisine',
    },
    {
      title: 'Dashboard App',
      description: 'Analytics dashboard with charts and authentication.',
      image: '/images/ruebyscuisineimage.png',
      tech: ['Next.js', 'Prisma', 'PostgreSQL'],
      link: 'https://ruebys-cuisine.vercel.app/',
      github: 'https://github.com/tegajunior/ruebys-cuisine',
    },
  ]

  return (
    <section className="py-16 space-y-8">
      <h2 className="text-3xl font-bold">Projects</h2>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          visible: { transition: { staggerChildren: 0.2 } },
        }}
        className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
      >
        {projects.map((p) => (
          <ProjectCard
            key={p.title}
            {...p}
          />
        ))}
      </motion.div>
    </section>
  )
}
