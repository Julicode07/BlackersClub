"use client"

import { Newspaper } from "lucide-react"

export function NewsHero() {
  return (
    <section className="relative pt-24 pb-8 overflow-hidden">
      {/* Minimal background pattern */}
      <div className="absolute inset-0 opacity-3">
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
          {/* Simple badge */}
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full">
            <Newspaper className="w-4 h-4 text-primary" />
            <span className="text-primary font-semibold uppercase tracking-wider text-xs">Noticias</span>
          </div>

          {/* Simple title */}
          <h1 className="text-3xl md:text-4xl font-black text-foreground mb-4 tracking-tight">
            Últimas Noticias
          </h1>
        </div>
      </div>
    </section>
  )
}
