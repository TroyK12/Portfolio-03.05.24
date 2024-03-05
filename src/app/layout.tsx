import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import SplashScreen from './SplashScreen/SplashScreen'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Troy M Kush',
  description: 'Portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='bg-[#99a5b1]'>
      <body className={inter.className}>
        <SplashScreen />
        <main>{children}</main>
      </body>
    </html>
  )
}
