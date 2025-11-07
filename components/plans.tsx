import { Check, Zap } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function Plans() {
  const plans = [
    {
      name: "Iniciación",
      price: "$50",
      period: "/mes",
      description: "Perfecto para principiantes que quieren empezar",
      features: [
        "2 entrenamientos por semana",
        "Acceso a instalaciones",
        "Equipo básico incluido",
        "Entrenador certificado",
        "Seguro deportivo",
      ],
      highlighted: false,
    },
    {
      name: "Competitivo",
      price: "$90",
      period: "/mes",
      description: "Para jugadores que buscan competir",
      features: [
        "4 entrenamientos por semana",
        "Acceso ilimitado a instalaciones",
        "Participación en torneos",
        "Entrenamiento personalizado",
        "Análisis de rendimiento",
        "Nutrición deportiva",
        "Seguro deportivo premium",
      ],
      highlighted: true,
    },
    {
      name: "Elite",
      price: "$150",
      period: "/mes",
      description: "Programa intensivo para atletas de alto rendimiento",
      features: [
        "Entrenamientos diarios",
        "Acceso VIP a todas las instalaciones",
        "Torneos nacionales e internacionales",
        "Entrenador personal dedicado",
        "Plan nutricional personalizado",
        "Fisioterapia y recuperación",
        "Análisis de video profesional",
        "Seguro deportivo completo",
      ],
      highlighted: false,
    },
  ]

  return (
    <section id="planes" className="pt-24 pb-8 bg-background relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `repeating-linear-gradient(
            0deg,
            transparent,
            transparent 100px,
            oklch(0.58 0.24 25) 100px,
            oklch(0.58 0.24 25) 101px
          ),
          repeating-linear-gradient(
            90deg,
            transparent,
            transparent 100px,
            oklch(0.58 0.24 25) 100px,
            oklch(0.58 0.24 25) 101px
          )`,
          }}
        ></div>
      </div>

      <div className="absolute top-20 right-10 w-24 h-24 opacity-10 animate-float-slow pointer-events-none">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <circle cx="50" cy="50" r="48" fill="currentColor" className="text-primary" />
          <circle
            cx="50"
            cy="50"
            r="45"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            className="text-background"
          />
          <path
            d="M 50 5 Q 70 50 50 95"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            className="text-background"
          />
          <path
            d="M 50 5 Q 30 50 50 95"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            className="text-background"
          />
          <path
            d="M 5 50 Q 50 30 95 50"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            className="text-background"
          />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black text-foreground uppercase tracking-tight mb-4 text-balance">
              Nuestros Planes
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Elige el plan que mejor se adapte a tus objetivos y nivel de compromiso. Todos incluyen acceso a nuestras
              instalaciones de primera clase.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <Card
                key={index}
                className={`relative transition-all duration-300 ${plan.highlighted
                  ? "bg-primary border-primary shadow-2xl shadow-primary/30 scale-105 hover:scale-110"
                  : "bg-card border-border hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 hover:scale-105"
                  }`}
              >
                {plan.highlighted && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-foreground text-background px-6 py-2 rounded-full text-sm font-black uppercase tracking-wider flex items-center gap-2 shadow-lg">
                    <Zap className="w-4 h-4 fill-current" />
                    Más Popular
                  </div>
                )}
                <CardHeader className="text-center pb-8 pt-8">
                  <CardTitle
                    className={`text-2xl font-black uppercase tracking-wide mb-2 ${plan.highlighted ? "text-primary-foreground" : "text-foreground"
                      }`}
                  >
                    {plan.name}
                  </CardTitle>
                  <div className="flex items-baseline justify-center gap-1">
                    <span
                      className={`text-5xl font-black ${plan.highlighted ? "text-primary-foreground" : "text-foreground"
                        }`}
                    >
                      {plan.price}
                    </span>
                    <span
                      className={`text-lg font-semibold ${plan.highlighted ? "text-primary-foreground/80" : "text-muted-foreground"}`}
                    >
                      {plan.period}
                    </span>
                  </div>
                  <p
                    className={`text-sm mt-2 ${plan.highlighted ? "text-primary-foreground/80" : "text-muted-foreground"
                      }`}
                  >
                    {plan.description}
                  </p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <Check
                          className={`w-5 h-5 flex-shrink-0 mt-0.5 ${plan.highlighted ? "text-primary-foreground" : "text-primary"
                            }`}
                        />
                        <span className={`text-sm ${plan.highlighted ? "text-primary-foreground" : "text-foreground"}`}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    className={`w-full uppercase tracking-wider font-bold shadow-lg transition-all duration-300 ${plan.highlighted
                      ? "bg-foreground text-background hover:bg-foreground/90 hover:shadow-xl hover:scale-105"
                      : "bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-xl hover:shadow-primary/30 hover:scale-105"
                      }`}
                    size="lg"
                  >
                    Seleccionar Plan
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-muted-foreground">
              ¿Necesitas un plan personalizado?{" "}
              <button className="text-primary hover:underline font-bold">Contáctanos</button>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
