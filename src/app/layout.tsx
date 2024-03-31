import { cn } from '@/lib/utils'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import { Toaster } from '@/components/ui/toaster'

const poppins = Poppins({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'TimeAlign',
  description: 'Sua central de agendamentos.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={cn(
          'bg-system-50 dark:bg-system-900 text-system-950 dark:text-system-50',
          poppins.className,
        )}
      >
        {children}
        <Toaster />
      </body>
    </html>
  )
}
