'use client'
import { motion } from 'framer-motion'
import { ProjectCard } from '@/components/ProjectCard'

export default function Projects() {
  const projects = [
    {
      title: 'Online Quiz Management Application',
      description:
        'A comprehensive quiz management application that enables users to create, manage, and take quizzes online. It features user authentication, quiz creation with two questions creation mode i.e manual vs AI-assisted, webcam proctoring during quiz taking to prevent cheating with 30 seconds interval screenshots of the student and audio recording of each session, quiz taking invite via email, review of quiz attempts with buttons for flagging or approving a students attempt, export students results to excel/csv for further review and integration, and detailed performance analytics. The application is built with a focus on scalability and user experience, making it suitable for educational institutions and corporate training programs.',
      image: '/images/quizzitimage.png',
      tech: [
        'Next.js',
        'TailwindCSS',
        'Next API Routes',
        'MongoDB',
        'groq-sdk',
        'groq-sdk',
        'mammoth',
        'resend',
        'zod',
        'jsonwebtoken',
        'axios',
        'Vercel',
      ],
      link: 'https://quizzit.live/',
      github: 'https://github.com/tegajunior/portfolio',
      owner: 'Chidiebere Uzoma',
      isPublic: false,
    },
    {
      title: 'Peer-to-Peer Messaging App',
      description:
        'A Node.js and Socket.io powered real-time messaging application. It uses network sockets to enable direct communication between users without a central server. Offline messaging is supported by storing messages locally until the recipient is online. Conversations are not persisted once the users goes offline, ensuring privacy and data security. There is online presence indication to show when users are available for chat.',
      image: '/images/chatclientimage.png',
      tech: [
        'Nuxt/Vuejs',
        'Node.js',
        'MongoDB Atlas',
        'Express',
        'Feather.js',
        'Socket.io',
        'TailwindCSS',
      ],
      link: 'https://jade-sundae-6b3659.netlify.app/',
      github: 'https://github.com/tegajunior/P2P-chat-client',
      owner: 'Chidiebere Uzoma',
      isPublic: true,
    },
    {
      title: 'Food Ordering App',
      description:
        'A fullstack platform for ordering food for outdoor events with guest checkout.',
      image: '/images/ruebyscuisineimage.png',
      tech: ['Next.js', 'Node.js', 'MongoDB', 'Express', 'NodeMailer'],
      link: 'https://ruebyscuisine.food/',
      github: 'https://github.com/tegajunior/ruebys-cuisine',
      owner: 'Chidiebere Uzoma',
      isPublic: false,
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
      isPublic: false,
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
      isPublic: false,
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
      isPublic: false,
    },
    {
      title: 'Spunky SDX',
      description: 'A web3 platform for decentralized applications.',
      image: '/images/spunkysdximage.png',
      tech: ['Reactjs', 'Redux', 'ethers', 'TailwindCSS'],
      link: 'https://dapp.spunkysdx.io/',
      github: 'N/A',
      owner: 'Spunky SDX',
      isPublic: false,
    },
  ]

  return (
    <section className="py-16 space-y-8">
      <div className="space-y-4">
        <h2 className="text-3xl font-bold">Projects</h2>
        <p className="text-sm text-muted-foreground max-w-2xl">
          <span className="font-semibold">Note:</span> Some projects are solely
          developed by me, while others are team projects to which I
          contributed. Please refer to the project details and GitHub links to
          learn more about my specific contributions.
        </p>
      </div>
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
