'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"

export default function SolicitarPage() {
  const [direccion, setDireccion] = useState('')
  const [fecha, setFecha] = useState('')
  const [hora, setHora] = useState('')
  const [tipoServicio, setTipoServicio] = useState('')
  const [detalles, setDetalles] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log({ direccion, fecha, hora, tipoServicio, detalles })
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Solicitar Servicio de Limpieza</h1>
      <Card>
        <CardHeader>
          <CardTitle>Detalles del Servicio</CardTitle>
          <CardDescription>Por favor, proporciona la información necesaria para tu servicio de limpieza.</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="direccion" className="block text-sm font-medium text-gray-700">Dirección</label>
              <Input
                id="direccion"
                value={direccion}
                onChange={(e) => setDireccion(e.target.value)}
                placeholder="Ingresa la dirección completa"
                required
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="fecha" className="block text-sm font-medium text-gray-700">Fecha</label>
                <Input
                  id="fecha"
                  type="date"
                  value={fecha}
                  onChange={(e) => setFecha(e.target.value)}
                  required
                />
              </div>
              <div>
                <label htmlFor="hora" className="block text-sm font-medium text-gray-700">Hora</label>
                <Input
                  id="hora"
                  type="time"
                  value={hora}
                  onChange={(e) => setHora(e.target.value)}
                  required
                />
              </div>
            </div>
            <div>
              <label htmlFor="tipoServicio" className="block text-sm font-medium text-gray-700">Tipo de Servicio</label>
              <Select value={tipoServicio} onValueChange={setTipoServicio}>
                <SelectTrigger>
                  <SelectValue placeholder="Selecciona el tipo de servicio" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="basica">Limpieza Básica</SelectItem>
                  <SelectItem value="profunda">Limpieza Profunda</SelectItem>
                  <SelectItem value="mudanza">Limpieza de Mudanza</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <label htmlFor="detalles" className="block text-sm font-medium text-gray-700">Detalles Adicionales</label>
              <Textarea
                id="detalles"
                value={detalles}
                onChange={(e) => setDetalles(e.target.value)}
                placeholder="Proporciona cualquier detalle adicional sobre el servicio que necesitas"
              />
            </div>
            <Button type="submit" className="w-full">Solicitar Servicio</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}

