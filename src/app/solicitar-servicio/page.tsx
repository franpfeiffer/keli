'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { MapPin } from 'lucide-react'

export default function SolicitarServicio() {
  const [direccion, setDireccion] = useState('')
  const [fecha, setFecha] = useState('')
  const [hora, setHora] = useState('')
  const [detalles, setDetalles] = useState('')
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log({ direccion, fecha, hora, detalles })
    router.push('/estado-servicio')
  }

  return (
    <div className="container mx-auto max-w-md p-6">
      <h1 className="text-2xl font-bold mb-6">Solicitar Servicio de Limpieza</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <Label htmlFor="direccion">Dirección</Label>
          <div className="flex">
            <Input
              id="direccion"
              value={direccion}
              onChange={(e) => setDireccion(e.target.value)}
              placeholder="Ingrese su dirección"
              required
            />
            <Button type="button" className="ml-2" variant="outline">
              <MapPin className="h-4 w-4" />
            </Button>
          </div>
        </div>
        <div>
          <Label htmlFor="fecha">Fecha</Label>
          <Input
            id="fecha"
            type="date"
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
            required
          />
        </div>
        <div>
          <Label htmlFor="hora">Hora</Label>
          <Input
            id="hora"
            type="time"
            value={hora}
            onChange={(e) => setHora(e.target.value)}
            required
          />
        </div>
        <div>
          <Label htmlFor="detalles">Detalles adicionales</Label>
          <Textarea
            id="detalles"
            value={detalles}
            onChange={(e) => setDetalles(e.target.value)}
            placeholder="Especifique cualquier detalle importante para el servicio"
          />
        </div>
        <Button type="submit" className="w-full">Solicitar Limpieza</Button>
      </form>
    </div>
  )
}

