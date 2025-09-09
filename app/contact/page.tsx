'use client'

import { motion } from 'framer-motion'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { FiGithub, FiLinkedin, FiMessageCircle } from 'react-icons/fi'
import { useState } from 'react'

export default function Contact() {
  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    setStatus(null)

    const form = e.currentTarget
    const formData = new FormData(form)
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      message: formData.get('message'),
    }

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      if (res.ok) {
        setStatus('Message sent successfully ✅')
        form.reset()
      } else {
        setStatus('Something went wrong ❌. Try again later.')
      }
    } catch (err) {
      setStatus('Failed to send ❌')
    } finally {
      setLoading(false)
    }
  }
  return (
    <section className="py-16 max-w-3xl mx-auto space-y-12">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-bold"
      >
        Get in Touch
      </motion.h2>

      {/* Contact form */}
      <motion.form
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="space-y-6"
        onSubmit={handleSubmit}
      >
        <div>
          <label className="block text-sm font-medium mb-2">Name</label>
          <Input
            type="text"
            placeholder="Your name"
            name="name"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Email</label>
          <Input
            type="email"
            name="email"
            placeholder="you@example.com"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Message</label>
          <Textarea
            placeholder="Write your message..."
            required
            name="message"
          />
        </div>

        <Button
          type="submit"
          className="w-full"
          disabled={loading}
        >
          {loading ? 'Sending...' : 'Send Message'}
        </Button>

        {status && (
          <p className="text-sm text-center text-muted-foreground mt-2">
            {status}
          </p>
        )}
      </motion.form>

      {/* Social icons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="flex justify-center gap-6 text-muted-foreground"
      >
        <a
          href="https://github.com/tegajunior"
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub"
          className="hover:text-foreground transition-colors"
        >
          <FiGithub className="h-6 w-6" />
        </a>
        <a
          href="https://linkedin.com/in/chidiebere-emmanuel-uzoma"
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
          className="hover:text-foreground transition-colors"
        >
          <FiLinkedin className="h-6 w-6" />
        </a>
        <a
          href="https://wa.me/2347065569189" // replace with your full WhatsApp number
          target="_blank"
          rel="noreferrer"
          aria-label="WhatsApp"
          className="hover:text-foreground transition-colors"
        >
          <FiMessageCircle className="h-6 w-6" />
        </a>
      </motion.div>
    </section>
  )
}
