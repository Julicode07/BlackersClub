"use client"

import { Newspaper } from "lucide-react"

export function NewsHero() {
  return (
    <section className="relative pt-32 pb-16 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `repeating-linear-gradient(
            0deg,
            transparent,
            transparent 35px,
            oklch(0.58 0.24 25) 35px,
            oklch(0.58 0.24 25) 37px
          ),
          repeating-linear-gradient(
            90deg,
            transparent,
            transparent 35px,
            oklch(0.58 0.24 25) 35px,
            oklch(0.58 0.24 25) 37px
          )`,
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-3 mb-6 px-6 py-3 bg-primary/10 border border-primary/30 rounded-full">
            <Newspaper className="w-6 h-6 text-primary" />
            <span className="text-primary font-bold uppercase tracking-wider text-sm">Últimas Noticias</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-black text-foreground mb-6 tracking-tighter text-balance">
            NOTICIAS DE
            <span className="block text-primary mt-2">VOLEIBOL DE PLAYA</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
            Mantente al día con las últimas noticias, eventos y actualizaciones del mundo del voleibol de playa
          </p>
        </div>
      </div>

      {/* Decorative volleyball */}
      <div className="absolute top-20 right-10 w-20 h-20 opacity-10 animate-spin-slow">
        <svg viewBox="0 0 100 100" className="w-full h-full text-primary">
          <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="2" />
          <path d="M 50 5 Q 30 50 50 95" fill="none" stroke="currentColor" strokeWidth="2" />
          <path d="M 50 5 Q 70 50 50 95" fill="none" stroke="currentColor" strokeWidth="2" />
          <path d="M 5 50 Q 50 30 95 50" fill="none" stroke="currentColor" strokeWidth="2" />
        </svg>
      </div>
    </section>
  )
}
