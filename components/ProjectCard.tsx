import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from '@/components/ui/card'
import { motion } from 'framer-motion'
import Image from 'next/image'

type ProjectProps = {
  title: string
  description: string
  image: string
  tech: string[]
  link: string
  github: string
}

export function ProjectCard({
  title,
  description,
  image,
  tech,
  link,
  github,
}: ProjectProps) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <Card className="overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition">
        <div className="relative h-48 w-full">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
          />
        </div>
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {tech.map((t) => (
              <span
                key={t}
                className="px-2 py-1 text-xs rounded bg-muted text-muted-foreground"
              >
                {t}
              </span>
            ))}
          </div>
        </CardContent>
        <CardFooter className="flex gap-4">
          <a
            href={link}
            target="_blank"
            className="text-sm text-blue-500 hover:underline"
          >
            Live Demo
          </a>
          <a
            href={github}
            target="_blank"
            className="text-sm text-gray-500 hover:underline"
          >
            GitHub
          </a>
        </CardFooter>
      </Card>
    </motion.div>
  )
}
