import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function ServiciosPage() {
  const servicios = [
    {
      titulo: "Limpieza Básica",
      descripcion: "Servicio de limpieza general para mantener tu espacio ordenado y limpio.",
      caracteristicas: ["Aspirado y trapeado", "Limpieza de superficies", "Limpieza de baños", "Recolección de basura"],
    },
    {
      titulo: "Limpieza Profunda",
      descripcion: "Limpieza exhaustiva para espacios que necesitan atención especial.",
      caracteristicas: ["Todo lo de la limpieza básica", "Limpieza de electrodomésticos", "Limpieza de ventanas", "Limpieza de muebles"],
    },
    {
      titulo: "Limpieza de Mudanza",
      descripcion: "Servicio especializado para dejar tu antiguo hogar impecable o preparar tu nuevo espacio.",
      caracteristicas: ["Limpieza de todas las habitaciones", "Limpieza de armarios y cajones", "Remoción de manchas", "Limpieza de áreas difíciles de alcanzar"],
    },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Nuestros Servicios</h1>
      <div className="grid md:grid-cols-3 gap-6">
        {servicios.map((servicio, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{servicio.titulo}</CardTitle>
              <CardDescription>{servicio.descripcion}</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2">
                {servicio.caracteristicas.map((caracteristica, i) => (
                  <li key={i}>{caracteristica}</li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Solicitar Servicio</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}

