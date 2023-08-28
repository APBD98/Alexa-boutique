import './globals.css'
import type { Metadata } from 'next'
import { Lora, Inter } from 'next/font/google'
import Navbar from '@/components/navbar/navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'AzrBoutiqe',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning={true}>
        <Navbar/>
        {children}
      </body>
    </html>
  )
}