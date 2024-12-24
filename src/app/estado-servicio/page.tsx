'use client'

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"

export default function EstadoServicio() {
  const [estado, setEstado] = useState('Buscando limpiador')
  const [progress, setProgreso] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setProgreso((oldProgress) => {
        if (oldProgress === 100) {
          clearInterval(timer)
          return 100
        }
        const diff = Math.random() * 10
        return Math.min(oldProgress + diff, 100)
      })
    }, 500)

    return () => {
      clearInterval(timer)
    }
  }, [])

  useEffect(() => {
    if (progress < 33) {
      setEstado('Buscando limpiador')
    } else if (progress < 66) {
      setEstado('Limpiador en camino')
    } else if (progress < 100) {
      setEstado('Limpieza en progress')
    } else {
      setEstado('Servicio completado')
    }
  }, [progress])

  return (
    <div className="container mx-auto max-w-md p-6">
      <h1 className="text-2xl font-bold mb-6">Estado del Servicio</h1>
      <div className="mb-4">
        <p className="text-lg font-semibold">{estado}</p>
        <Progress value={progress} className="w-full" />
      </div>
      <div className="space-y-4">
        <p>Dirección: Calle Ejemplo 123</p>
        <p>Fecha: {new Date().toLocaleDateString()}</p>
        <p>Hora: {new Date().toLocaleTimeString()}</p>
      </div>
      <Button className="mt-6 w-full">Contactar al limpiador</Button>
    </div>
  )
}

