import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

export default function EmpresaPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Sobre CleanConnect</h1>
      <div className="grid md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Nuestra Misión</CardTitle>
          </CardHeader>
          <CardContent>
            <p>En CleanConnect, nos dedicamos a proporcionar servicios de limpieza de alta calidad que mejoren la calidad de vida de nuestros clientes. Nos esforzamos por crear hogares y espacios de trabajo limpios, saludables y confortables.</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Nuestra Visión</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Aspiramos a ser líderes en la industria de servicios de limpieza, reconocidos por nuestra excelencia, innovación y compromiso con la satisfacción del cliente y el bienestar de nuestros empleados.</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Nuestros Valores</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-2">
              <li>Integridad</li>
              <li>Excelencia</li>
              <li>Responsabilidad</li>
              <li>Innovación</li>
              <li>Sostenibilidad</li>
            </ul>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Nuestro Equipo</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Contamos con un equipo de profesionales altamente capacitados y comprometidos con la excelencia. Nuestros limpiadores son seleccionados cuidadosamente y reciben capacitación continua para garantizar los más altos estándares de calidad.</p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}


