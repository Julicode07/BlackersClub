"use client"

import { Calendar, Heart, MessageCircle, Share2, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { useState } from "react"

interface NewsPost {
  id: number
  author: string
  authorRole: string
  date: string
  content: string
  image?: string
  likes: number
  comments: number
  trending?: boolean
}

const newsData: NewsPost[] = [
  {
    id: 1,
    author: "Blackers Beach Club",
    authorRole: "Oficial",
    date: "Hace 2 horas",
    content:
      "¡Gran victoria en el torneo regional! Nuestro equipo femenil se llevó el primer lugar con un desempeño impecable. Felicidades a todas las atletas por su dedicación y esfuerzo. 🏐🏆",
    image: "/beach-volleyball-players-on-sand-sunny-day.jpg",
    likes: 124,
    comments: 18,
    trending: true,
  },
  {
    id: 2,
    author: "Federación Internacional",
    authorRole: "Noticias Oficiales",
    date: "Hace 5 horas",
    content:
      "Se anuncian las fechas del Campeonato Mundial de Voleibol de Playa 2025. Las eliminatorias comenzarán en marzo con equipos de más de 50 países participando.",
    likes: 89,
    comments: 12,
    trending: true,
  },
  {
    id: 3,
    author: "Blackers Beach Club",
    authorRole: "Oficial",
    date: "Hace 8 horas",
    content:
      "Nuevas sesiones de entrenamiento intensivo disponibles para miembros Elite. Enfoque en técnicas avanzadas de defensa y ataque. Inscripciones abiertas.",
    likes: 67,
    comments: 9,
  },
  {
    id: 4,
    author: "Beach Volleyball News",
    authorRole: "Medios",
    date: "Hace 12 horas",
    content:
      "Análisis: Las mejores duplas de voleibol de playa de la temporada. Técnicas que están revolucionando el juego moderno y cómo aplicarlas en tu entrenamiento.",
    likes: 156,
    comments: 24,
    trending: true,
  },
  {
    id: 5,
    author: "Blackers Beach Club",
    authorRole: "Oficial",
    date: "Hace 1 día",
    content:
      "Recordatorio: Este sábado tenemos jornada de puertas abiertas. Ven a conocer nuestras instalaciones, conoce a los entrenadores y prueba una clase gratuita. ¡Te esperamos!",
    image: "/indoor-volleyball-game-intense-action.jpg",
    likes: 203,
    comments: 31,
  },
  {
    id: 6,
    author: "Pro Beach Tour",
    authorRole: "Torneos",
    date: "Hace 1 día",
    content:
      "Inscripciones abiertas para el torneo local de verano. Categorías amateur y profesional. Premios en efectivo y puntos para el ranking nacional.",
    likes: 178,
    comments: 45,
  },
  {
    id: 7,
    author: "Blackers Beach Club",
    authorRole: "Oficial",
    date: "Hace 2 días",
    content:
      "Tips de entrenamiento: La importancia del trabajo de piernas en la arena. Ejercicios específicos para mejorar tu explosividad y resistencia en la playa.",
    likes: 92,
    comments: 15,
  },
  {
    id: 8,
    author: "Volleyball Magazine",
    authorRole: "Medios",
    date: "Hace 2 días",
    content:
      "Entrevista exclusiva con campeones olímpicos: Secretos de su preparación mental y física para competencias de alto nivel.",
    likes: 267,
    comments: 38,
    trending: true,
  },
]

export function NewsFeed() {
  const [likedPosts, setLikedPosts] = useState<Set<number>>(new Set())

  const toggleLike = (postId: number) => {
    setLikedPosts((prev) => {
      const newSet = new Set(prev)
      if (newSet.has(postId)) {
        newSet.delete(postId)
      } else {
        newSet.add(postId)
      }
      return newSet
    })
  }

  return (
    <section className="py-16 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto space-y-6">
          {newsData.map((post) => (
            <Card
              key={post.id}
              className="bg-card border-border hover:border-primary/30 transition-all duration-300 overflow-hidden group"
            >
              <div className="p-6">
                {/* Post Header */}
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-primary font-black text-lg">{post.author.charAt(0)}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="font-bold text-foreground">{post.author}</h3>
                      <span className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-full font-medium">
                        {post.authorRole}
                      </span>
                      {post.trending && (
                        <span className="flex items-center gap-1 text-xs px-2 py-1 bg-accent/10 text-accent rounded-full font-medium">
                          <TrendingUp className="w-3 h-3" />
                          Trending
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
                      <Calendar className="w-4 h-4" />
                      <span>{post.date}</span>
                    </div>
                  </div>
                </div>

                {/* Post Content */}
                <p className="text-foreground leading-relaxed mb-4 text-pretty">{post.content}</p>

                {/* Post Image */}
                {post.image && (
                  <div className="mb-4 rounded-lg overflow-hidden border border-border">
                    <img
                      src={post.image || "/placeholder.svg"}
                      alt="Post image"
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                )}

                {/* Post Actions */}
                <div className="flex items-center gap-6 pt-4 border-t border-border">
                  <Button
                    variant="ghost"
                    size="sm"
                    className={`gap-2 ${likedPosts.has(post.id) ? "text-primary" : "text-muted-foreground"} hover:text-primary`}
                    onClick={() => toggleLike(post.id)}
                  >
                    <Heart className={`w-5 h-5 ${likedPosts.has(post.id) ? "fill-primary" : ""}`} />
                    <span className="font-medium">{post.likes + (likedPosts.has(post.id) ? 1 : 0)}</span>
                  </Button>

                  <Button variant="ghost" size="sm" className="gap-2 text-muted-foreground hover:text-primary">
                    <MessageCircle className="w-5 h-5" />
                    <span className="font-medium">{post.comments}</span>
                  </Button>

                  <Button variant="ghost" size="sm" className="gap-2 text-muted-foreground hover:text-primary ml-auto">
                    <Share2 className="w-5 h-5" />
                    <span className="font-medium">Compartir</span>
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold uppercase tracking-wider"
          >
            Cargar Más Noticias
          </Button>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 opacity-5 animate-float-slow pointer-events-none">
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
