"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function JoinUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    age: "",
    experience: "",
    plan: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simular envío por 5 segundos
    await new Promise(resolve => setTimeout(resolve, 5000))

    setIsSubmitting(false)
    setIsSuccess(true)

    // Resetear después de 3 segundos
    setTimeout(() => {
      setIsSuccess(false)
      setFormData({
        name: "",
        email: "",
        phone: "",
        age: "",
        experience: "",
        plan: "",
        message: "",
      })
    }, 3000)
  }

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <section id="unete" className="py-24 bg-background relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute top-0 left-0 w-full h-full"
          style={{
            backgroundImage: `
              repeating-linear-gradient(0deg, transparent, transparent 50px, oklch(0.58 0.24 25) 50px, oklch(0.58 0.24 25) 51px),
              repeating-linear-gradient(90deg, transparent, transparent 50px, oklch(0.58 0.24 25) 50px, oklch(0.58 0.24 25) 51px)
            `,
          }}
        ></div>
      </div>

      <div className="absolute top-32 right-20 w-16 h-16 opacity-10 animate-float pointer-events-none">
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
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-foreground uppercase tracking-tight mb-4 text-balance">
              Únete a Blackers
            </h2>
            <div className="w-16 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Completa el formulario y da el primer paso para formar parte de nuestra familia. Te contactaremos para
              agendar una sesión de prueba gratuita.
            </p>
          </div>

          <Card className="bg-card border-border hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 relative">
            <CardContent className="p-8">
              {/* Loader overlay */}
              {isSubmitting && (
                <div className="absolute inset-0 bg-background/95 backdrop-blur-sm z-50 flex items-center justify-center rounded-lg">
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-4 mb-6">
                      {/* Spinner genial */}
                      <div className="relative">
                        <div className="w-12 h-12 border-4 border-primary/30 rounded-full"></div>
                        <div className="absolute top-0 left-0 w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
                      </div>
                      {/* Volleyball bouncing */}
                      <div className="flex gap-2">
                        <div className="w-3 h-3 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                        <div className="w-3 h-3 bg-primary rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                        <div className="w-3 h-3 bg-primary rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-primary mb-2">Enviando tu solicitud...</h3>
                    <p className="text-muted-foreground">Por favor espera mientras procesamos tu información</p>
                  </div>
                </div>
              )}

              {/* Success overlay */}
              {isSuccess && (
                <div className="absolute inset-0 bg-green-50/95 backdrop-blur-sm z-50 flex items-center justify-center rounded-lg">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-green-600 mb-2">¡Gracias!</h3>
                    <p className="text-green-700 text-lg">Nos comunicaremos contigo pronto</p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-foreground">
                      Nombre Completo *
                    </Label>
                    <Input
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => handleChange("name", e.target.value)}
                      className="bg-background border-border text-foreground"
                      placeholder="Tu nombre"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-foreground">
                      Email *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => handleChange("email", e.target.value)}
                      className="bg-background border-border text-foreground"
                      placeholder="tu@email.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-foreground">
                      Teléfono *
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => handleChange("phone", e.target.value)}
                      className="bg-background border-border text-foreground"
                      placeholder="+1 234 567 8900"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="age" className="text-foreground">
                      Edad *
                    </Label>
                    <Input
                      id="age"
                      type="number"
                      required
                      value={formData.age}
                      onChange={(e) => handleChange("age", e.target.value)}
                      className="bg-background border-border text-foreground"
                      placeholder="18"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="experience" className="text-foreground">
                      Nivel de Experiencia *
                    </Label>
                    <Select value={formData.experience} onValueChange={(value) => handleChange("experience", value)}>
                      <SelectTrigger className="bg-background border-border text-foreground">
                        <SelectValue placeholder="Selecciona tu nivel" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="principiante">Principiante</SelectItem>
                        <SelectItem value="intermedio">Intermedio</SelectItem>
                        <SelectItem value="avanzado">Avanzado</SelectItem>
                        <SelectItem value="profesional">Profesional</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="plan" className="text-foreground">
                      Plan de Interés *
                    </Label>
                    <Select value={formData.plan} onValueChange={(value) => handleChange("plan", value)}>
                      <SelectTrigger className="bg-background border-border text-foreground">
                        <SelectValue placeholder="Selecciona un plan" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="iniciacion">Iniciación</SelectItem>
                        <SelectItem value="competitivo">Competitivo</SelectItem>
                        <SelectItem value="elite">Elite</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-foreground">
                    Mensaje (Opcional)
                  </Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => handleChange("message", e.target.value)}
                    className="bg-background border-border text-foreground min-h-32"
                    placeholder="Cuéntanos sobre tus objetivos y expectativas..."
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting || isSuccess}
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground uppercase tracking-wider"
                >
                  Enviar Solicitud
                </Button>

                <p className="text-sm text-muted-foreground text-center">
                  Al enviar este formulario, aceptas nuestros términos y condiciones y política de privacidad.
                </p>
              </form>
            </CardContent>
          </Card>

          <div className="mt-12 grid md:grid-cols-3 gap-6 text-center">
            <Card className="bg-card border-border hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 hover:scale-105">
              <CardContent className="p-6">
                <h4 className="text-xl font-black text-foreground mb-2 uppercase tracking-wide">Ubicación</h4>
                <p className="text-muted-foreground text-sm">
                  Av. Principal 123
                  <br />
                  Ciudad, Estado 12345
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 hover:scale-105">
              <CardContent className="p-6">
                <h4 className="text-xl font-black text-foreground mb-2 uppercase tracking-wide">Teléfono</h4>
                <p className="text-muted-foreground text-sm">
                  +1 (555) 123-4567
                  <br />
                  Lun - Vie: 9am - 8pm
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 hover:scale-105">
              <CardContent className="p-6">
                <h4 className="text-xl font-black text-foreground mb-2 uppercase tracking-wide">Email</h4>
                <p className="text-muted-foreground text-sm">
                  info@blackers.com
                  <br />
                  contacto@blackers.com
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
