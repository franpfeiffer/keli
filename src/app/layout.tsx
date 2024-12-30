import './globals.css'
import { Inter } from 'next/font/google'
import { NavigationMenu } from '@/components/navigation-menu'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Limpify',
  description: 'Servicios de limpieza a domicilio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <NavigationMenu />
        <main>{children}</main>
      </body>
    </html>
  )
}

