// app/layout.tsx
import './globals.css'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'

export const metadata = {
  title: 'Chidiebere | Portfolio',
  description: 'Frontend / Fullstack Web Developer Portfolio',
  icons: {
    icon: '/favicon.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900 dark:bg-gray-950 dark:text-gray-100">
        <Navbar />
        <main className="max-w-5xl mx-auto px-4">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
