import type { Metadata } from 'next'
import { Inter} from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
const inter = Inter({ weight: ['400'], subsets: ['latin'] })

export const metadata: Metadata = {
  icons:'/triangle1.svg',
  title: 'Rahul-yadu',
  description: 'portfolio website  of rahul yadu',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          
          enableSystem
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
