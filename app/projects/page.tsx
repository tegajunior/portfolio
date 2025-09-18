'use client'
import { motion } from 'framer-motion'
import { ProjectCard } from '@/components/ProjectCard'

export default function Projects() {
  const projects = [
    {
      title: 'Portfolio Website',
      description:
        'My personal developer portfolio built with Next.js and TailwindCSS.',
      image: '/images/portfolioimage.png',
      tech: ['Next.js', 'TailwindCSS', 'framer-motion', 'Vercel'],
      link: 'https://chidiebereuzoma.dev/',
      github: 'https://github.com/tegajunior/portfolio',
      owner: 'Chidiebere Uzoma',
    },
    {
      title: 'Food Ordering App',
      description:
        'A fullstack platform for ordering food for outdoor events with guest checkout.',
      image: '/images/ruebyscuisineimage.png',
      tech: ['Next.js', 'Node.js', 'MongoDB', 'Express', 'NodeMailer'],
      link: 'https://ruebyscuisine.food/',
      github: 'https://github.com/tegajunior/ruebys-cuisine',
      owner: "Rueby 's Kitchen",
    },
    {
      title: 'The Business Hub',
      description:
        'A digital hub for managing business operations such as registration, loans, and inventory.',
      image: '/images/bsfimage.png',
      tech: [
        'Next.js',
        'TailwindCSS',
        'React Tanstack Query',
        'React Tanstack Table',
        'Azure DevOps',
      ],
      link: 'https://thebusinesshub.ng/',
      github: 'N/A',
      owner: 'Sterling Bank NG',
    },
    {
      title: 'Specta',
      description:
        'A one stop digital loaning platform for accessing quick loans.',
      image: '/images/spectaimage.png',
      tech: [
        'Next.js',
        'TailwindCSS',
        'Redux Toolkit',
        'React Tanstack Table',
        'Azure DevOps',
      ],
      link: 'https://specta.sterling.ng/',
      github: 'N/A',
      owner: 'Sterling Bank NG',
    },
    {
      title: 'Gradely NG',
      description:
        'A digital platform for personalized  learning for primary and secondary schools and more.',
      image: '/images/gradelyimage.png',
      tech: ['Vuejs', 'Vuex', 'Nuxt', 'TailwindCSS'],
      link: 'https://gradely.co/',
      github: 'N/A',
      owner: 'Gradely NG',
    },
    {
      title: 'Spunky SDX',
      description: 'A web3 platform for decentralized applications.',
      image: '/images/spunkysdximage.png',
      tech: ['Reactjs', 'Redux', 'ethers', 'TailwindCSS'],
      link: 'https://dapp.spunkysdx.io/',
      github: 'N/A',
      owner: 'Spunky SDX',
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
