import { Metadata } from 'next'
import './globals.css'
import Providers from './store/providers'

export const metadata: Metadata = {
  title: {
    default: 'TokoIn',
    template: "%s - TokoIn"
  },
  description: 'TokoIn: Platform Belajar Pembuatan Website - TokoIn adalah proyek pribadi yang dirancang sebagai platform belajar interaktif untuk mempelajari berbagai aspek pembuatan website. Dengan teknologi modern seperti Next.js, Supabase, Prisma, Daisy UI, Auth0, dan Tailwind CSS, serta integrasi dengan Fake Store API, TokoIn menawarkan pengalaman belajar yang kaya dan beragam dalam pembuatan website.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode,
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          { children }
        </Providers>
      </body>
    </html>
  )
}
