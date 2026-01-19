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
import { useState } from 'react'

type ProjectProps = {
  title: string
  description: string
  image: string
  tech: string[]
  link: string
  github: string
  owner: string
  isPublic: boolean
}

export function ProjectCard({
  title,
  description,
  image,
  tech,
  link,
  github,
  owner,
  isPublic,
}: ProjectProps) {
  const [isExpanded, setIsExpanded] = useState(false)
  const maxChars = 150
  const isTruncated = description.length > maxChars
  const displayText = isExpanded
    ? description
    : description.substring(0, maxChars)

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <Card className="overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition h-full flex flex-col">
        <div className="relative h-48 w-full overflow-hidden group">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <CardHeader className="flex-1 flex flex-col gap-2">
          <CardTitle className="text-lg">{title}</CardTitle>
          <div className="flex flex-col gap-2">
            <CardDescription className="text-sm">
              {displayText}
              {isTruncated && !isExpanded && '...'}
            </CardDescription>
            {isTruncated && (
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="text-xs font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors text-left w-fit cursor-pointer"
              >
                {isExpanded ? 'Read Less' : 'Read More'}
              </button>
            )}
          </div>
        </CardHeader>
        <CardContent className="flex-1 flex flex-col justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xs text-muted-foreground font-semibold">
                Owner:
              </span>
              <span className="text-xs font-medium text-foreground">
                {owner}
              </span>
            </div>
            <div className="flex flex-wrap gap-2">
              {tech.map((t) => (
                <span
                  key={t}
                  className="px-3 py-1.5 text-xs font-medium rounded-full bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950 dark:to-indigo-950 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800 hover:shadow-sm transition"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between pt-2 border-t">
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 hover:underline transition-colors"
          >
            Project URL
          </a>
          {owner === 'Chidiebere Uzoma' && isPublic && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 hover:underline transition-colors"
            >
              GitHub
            </a>
          )}
        </CardFooter>
      </Card>
    </motion.div>
  )
}
