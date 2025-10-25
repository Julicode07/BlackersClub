"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Settings, FileText, Plus, Edit, Save } from "lucide-react"

export default function AdminPage() {
  // Plans state
  const [plans, setPlans] = useState([
    {
      id: 1,
      name: "Iniciación",
      price: "50",
      description: "Perfecto para principiantes que quieren empezar",
      features: ["2 entrenamientos por semana", "Acceso a instalaciones", "Equipo básico incluido"],
    },
    {
      id: 2,
      name: "Competitivo",
      price: "90",
      description: "Para jugadores que buscan competir",
      features: ["4 entrenamientos por semana", "Acceso ilimitado", "Participación en torneos"],
    },
    {
      id: 3,
      name: "Elite",
      price: "150",
      description: "Programa intensivo para atletas de alto rendimiento",
      features: ["Entrenamientos diarios", "Acceso VIP", "Torneos internacionales"],
    },
  ])

  const [editingPlan, setEditingPlan] = useState<number | null>(null)

  // News state
  const [newNews, setNewNews] = useState({
    author: "Blackers Beach Club",
    content: "",
    image: "",
  })

  const handleSavePlan = (planId: number) => {
    setEditingPlan(null)
    // Here you would save to a database
    alert("Plan guardado exitosamente!")
  }

  const handleCreateNews = () => {
    if (!newNews.content) {
      alert("Por favor escribe el contenido de la noticia")
      return
    }
    // Here you would save to a database
    alert("Noticia creada exitosamente!")
    setNewNews({ author: "Blackers Beach Club", content: "", image: "" })
  }

  return (
    <div className="min-h-screen bg-background pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="mb-12 text-center">
            <h1 className="text-5xl md:text-6xl font-black text-foreground uppercase tracking-tight mb-4">
              Panel de Administración
            </h1>
            <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground">Gestiona los planes y crea nuevas noticias</p>
          </div>

          {/* Tabs */}
          <Tabs defaultValue="plans" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8">
              <TabsTrigger value="plans" className="gap-2">
                <Settings className="w-4 h-4" />
                Gestionar Planes
              </TabsTrigger>
              <TabsTrigger value="news" className="gap-2">
                <FileText className="w-4 h-4" />
                Crear Noticias
              </TabsTrigger>
            </TabsList>

            {/* Plans Management */}
            <TabsContent value="plans" className="space-y-6">
              {plans.map((plan) => (
                <Card key={plan.id} className="bg-card border-border">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-2xl font-black uppercase">{plan.name}</CardTitle>
                      <Button
                        variant={editingPlan === plan.id ? "default" : "outline"}
                        size="sm"
                        onClick={() => setEditingPlan(editingPlan === plan.id ? null : plan.id)}
                        className="gap-2"
                      >
                        {editingPlan === plan.id ? (
                          <>
                            <Save className="w-4 h-4" />
                            Guardar
                          </>
                        ) : (
                          <>
                            <Edit className="w-4 h-4" />
                            Editar
                          </>
                        )}
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {editingPlan === plan.id ? (
                      <>
                        <div className="grid md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor={`name-${plan.id}`}>Nombre del Plan</Label>
                            <Input
                              id={`name-${plan.id}`}
                              value={plan.name}
                              onChange={(e) => {
                                const newPlans = plans.map((p) =>
                                  p.id === plan.id ? { ...p, name: e.target.value } : p,
                                )
                                setPlans(newPlans)
                              }}
                              className="bg-background"
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor={`price-${plan.id}`}>Precio (USD)</Label>
                            <Input
                              id={`price-${plan.id}`}
                              type="number"
                              value={plan.price}
                              onChange={(e) => {
                                const newPlans = plans.map((p) =>
                                  p.id === plan.id ? { ...p, price: e.target.value } : p,
                                )
                                setPlans(newPlans)
                              }}
                              className="bg-background"
                            />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor={`description-${plan.id}`}>Descripción</Label>
                          <Textarea
                            id={`description-${plan.id}`}
                            value={plan.description}
                            onChange={(e) => {
                              const newPlans = plans.map((p) =>
                                p.id === plan.id ? { ...p, description: e.target.value } : p,
                              )
                              setPlans(newPlans)
                            }}
                            className="bg-background"
                            rows={2}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label>Características (una por línea)</Label>
                          <Textarea
                            value={plan.features.join("\n")}
                            onChange={(e) => {
                              const newPlans = plans.map((p) =>
                                p.id === plan.id ? { ...p, features: e.target.value.split("\n") } : p,
                              )
                              setPlans(newPlans)
                            }}
                            className="bg-background"
                            rows={5}
                          />
                        </div>
                        <Button
                          onClick={() => handleSavePlan(plan.id)}
                          className="w-full bg-primary hover:bg-primary/90"
                        >
                          Guardar Cambios
                        </Button>
                      </>
                    ) : (
                      <>
                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <p className="text-sm text-muted-foreground mb-1">Precio</p>
                            <p className="text-3xl font-black text-foreground">${plan.price}/mes</p>
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground mb-1">Descripción</p>
                            <p className="text-foreground">{plan.description}</p>
                          </div>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground mb-2">Características</p>
                          <ul className="space-y-1">
                            {plan.features.map((feature, idx) => (
                              <li key={idx} className="text-foreground flex items-start gap-2">
                                <span className="text-primary">•</span>
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </>
                    )}
                  </CardContent>
                </Card>
              ))}
            </TabsContent>

            {/* News Creation */}
            <TabsContent value="news">
              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="text-2xl font-black uppercase flex items-center gap-2">
                    <Plus className="w-6 h-6" />
                    Crear Nueva Noticia
                  </CardTitle>
                  <CardDescription>Publica noticias sobre voleibol de playa para la comunidad</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="author">Autor</Label>
                    <Input
                      id="author"
                      value={newNews.author}
                      onChange={(e) => setNewNews({ ...newNews, author: e.target.value })}
                      className="bg-background"
                      placeholder="Blackers Beach Club"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="content">Contenido de la Noticia</Label>
                    <Textarea
                      id="content"
                      value={newNews.content}
                      onChange={(e) => setNewNews({ ...newNews, content: e.target.value })}
                      className="bg-background"
                      rows={6}
                      placeholder="Escribe aquí el contenido de la noticia sobre voleibol de playa..."
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="image">URL de Imagen (opcional)</Label>
                    <Input
                      id="image"
                      value={newNews.image}
                      onChange={(e) => setNewNews({ ...newNews, image: e.target.value })}
                      className="bg-background"
                      placeholder="https://ejemplo.com/imagen.jpg"
                    />
                  </div>

                  {newNews.image && (
                    <div className="rounded-lg overflow-hidden border border-border">
                      <img
                        src={newNews.image || "/placeholder.svg"}
                        alt="Preview"
                        className="w-full h-48 object-cover"
                      />
                    </div>
                  )}

                  <Button onClick={handleCreateNews} className="w-full bg-primary hover:bg-primary/90 gap-2" size="lg">
                    <Plus className="w-5 h-5" />
                    Publicar Noticia
                  </Button>
                </CardContent>
              </Card>

              {/* Preview */}
              {newNews.content && (
                <Card className="mt-6 bg-card border-border">
                  <CardHeader>
                    <CardTitle className="text-lg font-bold">Vista Previa</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                        <span className="text-primary font-black text-lg">{newNews.author.charAt(0)}</span>
                      </div>
                      <div>
                        <h3 className="font-bold text-foreground">{newNews.author}</h3>
                        <p className="text-sm text-muted-foreground">Ahora</p>
                      </div>
                    </div>
                    <p className="text-foreground leading-relaxed mb-4">{newNews.content}</p>
                    {newNews.image && (
                      <div className="rounded-lg overflow-hidden border border-border">
                        <img
                          src={newNews.image || "/placeholder.svg"}
                          alt="Preview"
                          className="w-full h-64 object-cover"
                        />
                      </div>
                    )}
                  </CardContent>
                </Card>
              )}
            </TabsContent>
          </Tabs>
        </div>
      </div>

      {/* Decorative volleyball */}
      <div className="fixed bottom-10 right-10 w-24 h-24 opacity-10 animate-bounce pointer-events-none">
        <svg viewBox="0 0 100 100" className="w-full h-full text-primary">
          <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="3" />
          <path d="M 50 5 Q 30 50 50 95" fill="none" stroke="currentColor" strokeWidth="3" />
          <path d="M 50 5 Q 70 50 50 95" fill="none" stroke="currentColor" strokeWidth="3" />
          <path d="M 5 50 Q 50 30 95 50" fill="none" stroke="currentColor" strokeWidth="3" />
        </svg>
      </div>
    </div>
  )
}
