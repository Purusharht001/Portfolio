import React from "react"
import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Purusharth Kumar | Full-Stack Developer',
  description: 'Computer Science Student & Full-Stack Developer. I build efficient, scalable, and user-friendly digital experiences from complex backend systems to beautiful frontend interfaces.',
  generator: 'v0.app',
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-icon.png',
  },
  keywords: 'Full-Stack Developer, React, Next.js, TypeScript, JavaScript, Portfolio',
  authors: [{ name: 'Purusharth Kumar' }],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
