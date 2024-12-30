'use client'

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { HelpCircle } from 'lucide-react'

export function NavigationMenu() {
  return (
    <nav className="bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center space-x-8">
            <Link href="/" className="text-2xl font-bold">
              Limpify
            </Link>
            <div className="hidden md:flex space-x-6">
              <Link href="/solicitar" className="hover:text-gray-300">
                Solicitar
              </Link>
              <Link href="/trabajar" className="hover:text-gray-300">
                Trabajar
              </Link>
              <Link href="/empresa" className="hover:text-gray-300">
                Empresa
              </Link>
              <Link href="/servicios" className="hover:text-gray-300">
                Servicios
              </Link>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="text-white">
              <HelpCircle className="h-5 w-5" />
              <span className="sr-only">Ayuda</span>
            </Button>
            <Link href="/login">
              <Button variant="ghost" className="text-white">
                Iniciar sesión
              </Button>
            </Link>
            <Link href="/signup">
              <Button variant="secondary" className="bg-white text-black hover:bg-gray-100">
                Registrarse
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

