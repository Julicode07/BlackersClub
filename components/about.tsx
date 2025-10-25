import { Users, Trophy, Target, Heart } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

export function About() {
  const values = [
    {
      icon: Users,
      title: "Trabajo en Equipo",
      description: "Creemos en la fuerza del colectivo y el apoyo mutuo para alcanzar nuestras metas.",
    },
    {
      icon: Trophy,
      title: "Excelencia",
      description: "Nos esforzamos por mejorar constantemente y alcanzar el máximo rendimiento.",
    },
    {
      icon: Target,
      title: "Disciplina",
      description: "La dedicación y el compromiso son fundamentales en nuestro camino al éxito.",
    },
    {
      icon: Heart,
      title: "Pasión",
      description: "Amamos el voleibol y transmitimos esa pasión en cada entrenamiento y partido.",
    },
  ]

  return (
    <section id="nosotros" className="py-24 bg-secondary/30 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>

      {/* Volleyball net pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute top-0 left-0 w-full h-full"
          style={{
            backgroundImage: `
              repeating-linear-gradient(0deg, transparent, transparent 30px, oklch(0.58 0.24 25) 30px, oklch(0.58 0.24 25) 31px),
              repeating-linear-gradient(90deg, transparent, transparent 30px, oklch(0.58 0.24 25) 30px, oklch(0.58 0.24 25) 31px)
            `,
          }}
        ></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex justify-center mb-6">
              <Image
                src="/blackers-logo.png"
                alt="Blackers Logo"
                width={80}
                height={80}
                className="w-16 h-16 md:w-20 md:h-20 opacity-80 animate-float"
              />
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-foreground uppercase tracking-tight mb-4 text-balance">
              Quiénes Somos
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Blackers Beach Club es más que un club de voleibol. Somos una familia unida por la pasión del deporte,
              comprometidos con el desarrollo integral de nuestros jugadores tanto dentro como fuera de la cancha.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <Card className="bg-card border-l-4 border-l-primary hover:shadow-xl hover:shadow-primary/10 transition-all duration-300">
              <CardContent className="p-8">
                <h3 className="text-2xl font-black text-foreground mb-4 uppercase tracking-wide">Nuestra Historia</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Fundado en 2015, Blackers nació del sueño de crear un espacio donde jugadores de todos los niveles
                  pudieran desarrollar su talento y amor por el voleibol. Desde entonces, hemos crecido hasta
                  convertirnos en uno de los clubes más reconocidos de la región.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-l-4 border-l-primary hover:shadow-xl hover:shadow-primary/10 transition-all duration-300">
              <CardContent className="p-8">
                <h3 className="text-2xl font-black text-foreground mb-4 uppercase tracking-wide">Nuestra Misión</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Formar jugadores completos que destaquen no solo por su habilidad técnica, sino también por sus
                  valores, disciplina y espíritu deportivo. Promovemos el voleibol como herramienta de desarrollo
                  personal y social.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card
                key={index}
                className="bg-card border-border hover:border-primary hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 group"
              >
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-primary/10 group-hover:bg-primary rounded-full flex items-center justify-center mx-auto mb-4 transition-all duration-300">
                    <value.icon className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                  </div>
                  <h4 className="text-xl font-black text-foreground mb-2 uppercase tracking-wide">{value.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
