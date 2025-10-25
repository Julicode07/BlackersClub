"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Waves, Home } from "lucide-react"

export function VolleyballInfo() {
  const [activeTab, setActiveTab] = useState<"indoor" | "beach">("beach")

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
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black text-foreground uppercase tracking-tight mb-4 text-balance">
              Sobre el Voleibol
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Descubre las diferentes modalidades del voleibol y encuentra la que mejor se adapte a ti.
            </p>
          </div>

          <div className="flex justify-center gap-4 mb-12">
            <Button
              onClick={() => setActiveTab("beach")}
              variant={activeTab === "beach" ? "default" : "outline"}
              className={
                activeTab === "beach"
                  ? "bg-primary text-primary-foreground uppercase tracking-wider font-bold shadow-lg shadow-primary/30 hover:scale-105 transition-all"
                  : "border-2 border-border text-foreground hover:bg-foreground/10 hover:border-primary/50 uppercase tracking-wider font-bold hover:scale-105 transition-all"
              }
              size="lg"
            >
              <Waves className="w-5 h-5 mr-2" />
              Voleibol de Playa
            </Button>
            <Button
              onClick={() => setActiveTab("indoor")}
              variant={activeTab === "indoor" ? "default" : "outline"}
              className={
                activeTab === "indoor"
                  ? "bg-primary text-primary-foreground uppercase tracking-wider font-bold shadow-lg shadow-primary/30 hover:scale-105 transition-all"
                  : "border-2 border-border text-foreground hover:bg-foreground/10 hover:border-primary/50 uppercase tracking-wider font-bold hover:scale-105 transition-all"
              }
              size="lg"
            >
              <Home className="w-5 h-5 mr-2" />
              Voleibol Indoor
            </Button>
          </div>

          {activeTab === "beach" && (
            <div className="space-y-8 animate-in fade-in duration-500">
              <Card className="bg-card border-2 border-primary/20 overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-primary/20 transition-all duration-300">
                <div className="grid md:grid-cols-2">
                  <div className="relative h-64 md:h-auto">
                    <img
                      src="/beach-volleyball-players-on-sand-sunny-day.jpg"
                      alt="Voleibol de Playa"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-background/50 to-transparent md:block hidden"></div>
                  </div>
                  <CardContent className="p-8 flex flex-col justify-center">
                    <h3 className="text-3xl font-black text-foreground mb-4 uppercase tracking-wide">
                      Voleibol de Playa
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      El voleibol de playa se juega al aire libre en arena con equipos de 2 jugadores. Requiere
                      versatilidad, resistencia física y adaptación a las condiciones climáticas.
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
                    </ul>
                  </CardContent>
                </Card>

                <Card className="bg-card border-l-4 border-l-primary hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 hover:scale-105">
                  <CardContent className="p-6">
                    <h4 className="text-xl font-black text-foreground mb-3 uppercase tracking-wide">Diferencias</h4>
                    <ul className="space-y-2 text-muted-foreground text-sm">
                      <li>• Solo 2 jugadores por equipo</li>
                      <li>• Sin rotaciones ni posiciones fijas</li>
                      <li>• Balón más suave y grande</li>
                      <li>• Influencia del viento y sol</li>
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
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          )}

          {activeTab === "indoor" && (
            <div className="space-y-8 animate-in fade-in duration-500">
              <Card className="bg-card border-2 border-primary/20 overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-primary/20 transition-all duration-300">
                <div className="grid md:grid-cols-2">
                  <div className="relative h-64 md:h-auto">
                    <img
                      src="/indoor-volleyball-game-intense-action.jpg"
                      alt="Voleibol Indoor"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-background/50 to-transparent md:block hidden"></div>
                  </div>
                  <CardContent className="p-8 flex flex-col justify-center">
                    <h3 className="text-3xl font-black text-foreground mb-4 uppercase tracking-wide">
                      Voleibol Indoor
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      El voleibol indoor se juega en una cancha cubierta con equipos de 6 jugadores. Es un deporte
                      dinámico que requiere coordinación, estrategia y trabajo en equipo excepcional.
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-foreground">
                          <span className="font-black text-primary">Equipos:</span> 6 jugadores por equipo en cancha
                        </p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-foreground">
                          <span className="font-black text-primary">Cancha:</span> 18m x 9m con red a 2.43m (hombres) /
                          2.24m (mujeres)
                        </p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-foreground">
                          <span className="font-black text-primary">Sets:</span> Mejor de 5 sets, primeros 4 a 25
                          puntos, 5to a 15
                        </p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-foreground">
                          <span className="font-black text-primary">Posiciones:</span> Colocador, líbero, central,
                          opuesto, receptor-atacante
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
                      <li>• Mejora la coordinación y reflejos</li>
                      <li>• Fortalece todo el cuerpo</li>
                      <li>• Desarrolla trabajo en equipo</li>
                      <li>• Aumenta la resistencia cardiovascular</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="bg-card border-l-4 border-l-primary hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 hover:scale-105">
                  <CardContent className="p-6">
                    <h4 className="text-xl font-black text-foreground mb-3 uppercase tracking-wide">Habilidades</h4>
                    <ul className="space-y-2 text-muted-foreground text-sm">
                      <li>• Saque (servicio)</li>
                      <li>• Recepción y pase</li>
                      <li>• Ataque y remate</li>
                      <li>• Bloqueo y defensa</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="bg-card border-l-4 border-l-primary hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 hover:scale-105">
                  <CardContent className="p-6">
                    <h4 className="text-xl font-black text-foreground mb-3 uppercase tracking-wide">Equipamiento</h4>
                    <ul className="space-y-2 text-muted-foreground text-sm">
                      <li>• Zapatillas especializadas</li>
                      <li>• Rodilleras protectoras</li>
                      <li>• Ropa deportiva cómoda</li>
                      <li>• Balón oficial de voleibol</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
