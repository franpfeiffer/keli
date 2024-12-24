'use client'

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { BrushIcon as Broom, Calendar, HomeIcon, SprayCan } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import dynamic from 'next/dynamic'

const MapComponent = dynamic(() => import('@/components/MapComponent'), {
  loading: () => <p>Cargando mapa...</p>,
  ssr: false
})

export default function Home() {
  const [address, setAddress] = useState("")

  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-12 grid md:grid-cols-2 gap-8">
        <div className="space-y-8">
          <div>
            <h1 className="text-4xl font-bold mb-4">
              Limpieza profesional a domicilio
            </h1>
            <div className="grid grid-cols-3 gap-4 mb-8">
              <Button variant="ghost" className="flex flex-col items-center p-4">
                <HomeIcon className="h-6 w-6 mb-2" />
                <span>Hogar</span>
              </Button>
              <Button variant="ghost" className="flex flex-col items-center p-4">
                <SprayCan className="h-6 w-6 mb-2" />
                <span>Profunda</span>
              </Button>
              <Button variant="ghost" className="flex flex-col items-center p-4">
                <Broom className="h-6 w-6 mb-2" />
                <span>Express</span>
              </Button>
            </div>
          </div>

          <div className="space-y-4 bg-gray-50 p-6 rounded-lg">
            <Input
              placeholder="Ingresa tu dirección"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="bg-white"
            />
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Select defaultValue="today">
                  <SelectTrigger>
                    <Calendar className="h-4 w-4 mr-2" />
                    <SelectValue placeholder="Fecha" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="today">Hoy</SelectItem>
                    <SelectItem value="tomorrow">Mañana</SelectItem>
                    <SelectItem value="next-week">Próxima semana</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Select defaultValue="morning">
                  <SelectTrigger>
                    <SelectValue placeholder="Horario" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="morning">Mañana (8-12)</SelectItem>
                    <SelectItem value="afternoon">Tarde (12-16)</SelectItem>
                    <SelectItem value="evening">Noche (16-20)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <Button className="w-full">Ver precios</Button>
          </div>
        </div>

        <div className="hidden md:block bg-gray-200 rounded-lg overflow-hidden" style={{ height: '400px' }}>
          <MapComponent />
        </div>
      </div>

      <div className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8">Servicios destacados</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Limpieza del hogar</CardTitle>
                <CardDescription>
                  Servicio de limpieza general para tu casa u oficina
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="secondary" className="w-full">Ver detalles</Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Limpieza programada</CardTitle>
                <CardDescription>
                  Agenda limpiezas recurrentes y ahorra
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="secondary" className="w-full">Ver detalles</Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Limpieza profunda</CardTitle>
                <CardDescription>
                  Limpieza exhaustiva para espacios que necesitan atención especial
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="secondary" className="w-full">Ver detalles</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

