"use client"

import { Card, CardContent } from "@/components/ui/card"

export function VolleyballInfo() {
  return (
    <section id="voleibol" className="py-24 bg-secondary/30 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-transparent via-primary to-transparent"></div>

      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute top-0 left-0 w-full h-full"
          style={{
            backgroundImage: `
              repeating-linear-gradient(0deg, transparent, transparent 40px, oklch(0.58 0.24 25) 40px, oklch(0.58 0.24 25) 41px),
              repeating-linear-gradient(90deg, transparent, transparent 40px, oklch(0.58 0.24 25) 40px, oklch(0.58 0.24 25) 41px)
            `,
          }}
        ></div>
      </div>

      <div className="absolute bottom-20 left-10 w-20 h-20 opacity-10 animate-bounce-ball pointer-events-none">
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
          <path
            d="M 5 50 Q 50 70 95 50"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            className="text-background"
          />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black text-foreground uppercase tracking-tight mb-4 text-balance">
              Voleibol de Playa
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Descubre todo sobre esta emocionante modalidad del voleibol que se juega en la arena.
            </p>
          </div>

          <div className="space-y-8 animate-in fade-in duration-500">
            <Card className="bg-card border-2 border-primary/20 overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-primary/20 transition-all duration-300 py-0">
              <div className="grid md:grid-cols-2">
                <div className="relative h-72">
                  <img
                    src="/beach-volleyball-players-on-sand-sunny-day.jpg"
                    alt="Voleibol de Playa"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-background/50 to-transparent md:block hidden"></div>
                </div>
                <CardContent className="p-8 flex flex-col justify-center">
                  <h3 className="text-3xl font-black text-foreground mb-4 uppercase tracking-wide">
                    ¿Qué es el Voleibol de Playa?
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    El voleibol de playa se juega al aire libre en arena con equipos de 2 jugadores. Requiere
                    versatilidad, resistencia física y adaptación a las condiciones climáticas. Es un deporte dinámico
                    que combina técnica, estrategia y atletismo.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-foreground">
                        <span className="font-black text-primary">Equipos:</span> 2 jugadores por equipo (sin
                        sustituciones)
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-foreground">
                        <span className="font-black text-primary">Cancha:</span> 16m x 8m en arena con red a 2.43m
                        (hombres) / 2.24m (mujeres)
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-foreground">
                        <span className="font-black text-primary">Sets:</span> Mejor de 3 sets, primeros 2 a 21
                        puntos, 3ro a 15
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-foreground">
                        <span className="font-black text-primary">Versatilidad:</span> Cada jugador debe dominar todas
                        las habilidades
                      </p>
                    </div>
                  </div>
                </CardContent>
              </div>
            </Card>

            <div className="grid md:grid-cols-3 gap-6">
              <Card className="bg-card border-l-4 border-l-primary hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 hover:scale-105">
                <CardContent className="p-6">
                  <h4 className="text-xl font-black text-foreground mb-3 uppercase tracking-wide">Beneficios</h4>
                  <ul className="space-y-2 text-muted-foreground text-sm">
                    <li>• Entrenamiento al aire libre</li>
                    <li>• Mayor resistencia física</li>
                    <li>• Fortalece piernas en arena</li>
                    <li>• Conexión con la naturaleza</li>
                    <li>• Mejora coordinación y reflejos</li>
                    <li>• Trabajo cardiovascular intenso</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-card border-l-4 border-l-primary hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 hover:scale-105">
                <CardContent className="p-6">
                  <h4 className="text-xl font-black text-foreground mb-3 uppercase tracking-wide">Características</h4>
                  <ul className="space-y-2 text-muted-foreground text-sm">
                    <li>• Solo 2 jugadores por equipo</li>
                    <li>• Sin rotaciones ni posiciones fijas</li>
                    <li>• Balón más suave y grande</li>
                    <li>• Influencia del viento y sol</li>
                    <li>• Superficie de arena</li>
                    <li>• Mayor exigencia física</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-card border-l-4 border-l-primary hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 hover:scale-105">
                <CardContent className="p-6">
                  <h4 className="text-xl font-black text-foreground mb-3 uppercase tracking-wide">Equipamiento</h4>
                  <ul className="space-y-2 text-muted-foreground text-sm">
                    <li>• Ropa ligera y cómoda</li>
                    <li>• Gafas de sol deportivas</li>
                    <li>• Protector solar</li>
                    <li>• Balón de voleibol de playa</li>
                    <li>• Calzado apropiado (opcional)</li>
                    <li>• Hidratación constante</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-gradient-to-br from-primary/5 to-primary/10 border-2 border-primary/30 overflow-hidden">
              <CardContent className="p-8">
                <h4 className="text-2xl font-black text-foreground mb-4 uppercase tracking-wide text-center">
                  ¿Por qué elegir Voleibol de Playa?
                </h4>
                <div className="grid md:grid-cols-2 gap-6 mt-6">
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-primary font-black text-sm">1</span>
                      </div>
                      <div>
                        <h5 className="font-bold text-foreground mb-1">Deporte completo</h5>
                        <p className="text-sm text-muted-foreground">
                          Trabaja todos los grupos musculares con saltos, carreras y movimientos explosivos en la arena.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-primary font-black text-sm">2</span>
                      </div>
                      <div>
                        <h5 className="font-bold text-foreground mb-1">Trabajo en equipo</h5>
                        <p className="text-sm text-muted-foreground">
                          Con solo 2 jugadores, la comunicación y sincronización son fundamentales para el éxito.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-primary font-black text-sm">3</span>
                      </div>
                      <div>
                        <h5 className="font-bold text-foreground mb-1">Ambiente único</h5>
                        <p className="text-sm text-muted-foreground">
                          Disfruta del aire libre, el sol y la brisa marina mientras practicas tu deporte favorito.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-primary font-black text-sm">4</span>
                      </div>
                      <div>
                        <h5 className="font-bold text-foreground mb-1">Competitivo y recreativo</h5>
                        <p className="text-sm text-muted-foreground">
                          Desde torneos profesionales hasta partidos casuales con amigos, hay opciones para todos.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes bounce-ball {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        .animate-bounce-ball {
          animation: bounce-ball 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  )
}