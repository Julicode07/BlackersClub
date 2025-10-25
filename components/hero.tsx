"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"
import { ChevronDown } from "lucide-react"
import { useEffect, useState } from "react"

export function Hero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-linear-to-br from-background via-background to-background/80"></div>
        {/* Volleyball net pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute top-0 left-0 w-full h-full"
            style={{
              backgroundImage: `
                repeating-linear-gradient(0deg, transparent, transparent 40px, oklch(0.58 0.24 25) 40px, oklch(0.58 0.24 25) 42px),
                repeating-linear-gradient(90deg, transparent, transparent 40px, oklch(0.58 0.24 25) 40px, oklch(0.58 0.24 25) 42px)
              `,
            }}
          ></div>
        </div>
        {/* Diagonal red stripes pattern */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute top-0 left-0 w-full h-full"
            style={{
              backgroundImage: `repeating-linear-gradient(
              45deg,
              transparent,
              transparent 50px,
              oklch(0.55 0.22 25) 50px,
              oklch(0.55 0.22 25) 52px
            )`,
            }}
          ></div>
        </div>
        {/* Radial gradient overlay */}
        <div className="absolute inset-0 bg-gradient-radial from-primary/5 via-transparent to-transparent"></div>
      </div>

      {mounted && (
        <>
          <div className="absolute top-20 left-10 w-16 h-16 opacity-20 animate-float-slow">
            <div className="w-full h-full rounded-full bg-primary/30 border-4 border-primary/50"></div>
          </div>
          <div className="absolute top-40 right-20 w-12 h-12 opacity-20 animate-float-delayed">
            <div className="w-full h-full rounded-full bg-primary/30 border-4 border-primary/50"></div>
          </div>
          <div className="absolute bottom-32 left-1/4 w-20 h-20 opacity-20 animate-float">
            <div className="w-full h-full rounded-full bg-primary/30 border-4 border-primary/50"></div>
          </div>
        </>
      )}

      <div className="container mx-auto px-4 z-10 pt-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Text content */}
            <div className="space-y-8 text-center lg:text-left">
              <div className="inline-block">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full">
                  <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                  <span className="text-sm font-semibold text-primary uppercase tracking-wider">
                    Beach Volleyball Club
                  </span>
                </div>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-foreground uppercase tracking-tighter text-balance leading-none">
                DOMINA
                <span className="block text-primary mt-2">LA ARENA</span>
              </h1>

              <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-xl">
                Únete al club de voleibol de playa más competitivo. Entrena con los mejores, compite al más alto nivel y
                forma parte de la familia Blackers.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start pt-4">
                <Button
                  onClick={() => scrollToSection("unete")}
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground text-sm px-6 py-4 uppercase tracking-wider font-bold shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all hover:scale-105"
                >
                  Únete Ahora
                </Button>
                <Button
                  onClick={() => scrollToSection("planes")}
                  size="lg"
                  variant="outline"
                  className="border-2 border-primary/30 text-foreground hover:bg-primary/10 hover:border-primary text-sm px-6 py-4 uppercase tracking-wider font-bold transition-all hover:scale-105"
                >
                  Ver Planes
                </Button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 pt-6 max-w-lg mx-auto lg:mx-0">
                <div className="text-center lg:text-left">
                  <div className="text-2xl md:text-3xl font-black text-primary">200+</div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wide">Miembros</div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-2xl md:text-3xl font-black text-primary">15+</div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wide">Torneos</div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-2xl md:text-3xl font-black text-primary">8</div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wide">Años</div>
                </div>
              </div>
            </div>

            {/* Right side - Logo showcase */}
            <div className="relative flex items-center justify-center">
              <div className="relative">
                {/* Glowing effect behind logo */}
                <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full scale-150 animate-pulse-slow"></div>
                {/* Logo */}
                <div className="relative">
                  <Image
                    src="/blackers-logo.png"
                    alt="Blackers Logo"
                    width={500}
                    height={500}
                    className="w-full max-w-base mx-auto drop-shadow-2xl animate-float"
                    priority
                  />
                </div>
                <div className="absolute -top-10 -right-10 w-24 h-24 opacity-30 animate-spin-slow">
                  <svg viewBox="0 0 100 100" className="w-full h-full">
                    <circle
                      cx="50"
                      cy="50"
                      r="45"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="text-primary"
                    />
                    <path
                      d="M 50 5 Q 70 50 50 95"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="text-primary"
                    />
                    <path
                      d="M 50 5 Q 30 50 50 95"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="text-primary"
                    />
                    <path
                      d="M 5 50 Q 50 30 95 50"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="text-primary"
                    />
                  </svg>
                </div>
                <div className="absolute -bottom-10 -left-10 w-20 h-20 opacity-30 animate-spin-reverse">
                  <svg viewBox="0 0 100 100" className="w-full h-full">
                    <circle
                      cx="50"
                      cy="50"
                      r="45"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="text-primary"
                    />
                    <path
                      d="M 50 5 Q 70 50 50 95"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="text-primary"
                    />
                    <path
                      d="M 50 5 Q 30 50 50 95"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="text-primary"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <ChevronDown className="w-8 h-8 text-primary" />
      </div>
    </section>
  )
}
