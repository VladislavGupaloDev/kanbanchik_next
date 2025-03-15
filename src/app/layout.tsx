import './globals.css'
import { ApolloClientProvider } from '@/core/providers/ApolloClientProvider'
import { SITE_NAME } from '@/core/seo/seo.const'
import { Button } from '@/shared/components/ui/button'
import { ROUTES } from '@/shared/routes'
import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import Link from 'next/link'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin']
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: {
    default: SITE_NAME,
    template: `%s | ${SITE_NAME}`
  },
  description: 'Kanbanchik WW'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} dark relative antialiased`}
      >
        <Button asChild>
          <Link
            href={ROUTES.PUBLIC.HOME}
            className={'absolute block'}
          >
            Home
          </Link>
        </Button>
        <ApolloClientProvider>{children}</ApolloClientProvider>
      </body>
    </html>
  )
}
