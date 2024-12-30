import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"

export default function TrabajarPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Trabaja con Nosotros</h1>
      <div className="grid md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>¿Por qué trabajar en Limpify?</CardTitle>
            <CardDescription>Descubre las ventajas de unirte a nuestro equipo</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-2">
              <li>Horarios flexibles</li>
              <li>Excelente remuneración</li>
              <li>Oportunidades de crecimiento</li>
              <li>Capacitación continua</li>
              <li>Ambiente de trabajo positivo</li>
            </ul>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Requisitos</CardTitle>
            <CardDescription>Lo que necesitas para unirte a nuestro equipo</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-2">
              <li>Ser mayor de 18 años</li>
              <li>Experiencia en servicios de limpieza (preferible)</li>
              <li>Disponibilidad para trabajar en diferentes horarios</li>
              <li>Responsabilidad y puntualidad</li>
              <li>Excelentes habilidades de comunicación</li>
            </ul>
            <Button className="w-full mt-4">Aplicar Ahora</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

