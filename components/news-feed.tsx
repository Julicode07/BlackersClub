"use client"

import { useState, useEffect, useCallback, useRef } from "react"
import { Calendar, Heart, MessageCircle, Share2, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

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
  {
    id: 9,
    author: "Blackers Beach Club",
    authorRole: "Oficial",
    date: "Hace 3 días",
    content:
      "Nuevo horario de entrenamientos para la temporada de invierno. Ajustes en los horarios matutinos y vespertinos para mejor aprovechamiento del clima.",
    likes: 134,
    comments: 22,
  },
  {
    id: 10,
    author: "Beach Volleyball Academy",
    authorRole: "Entrenamiento",
    date: "Hace 3 días",
    content:
      "Workshop especializado en técnicas de bloqueo. Dirigido por entrenadores internacionales certificados. Cupo limitado, inscripciones hasta el viernes.",
    image: "/volleyball-players-celebrating-team-victory.jpg",
    likes: 189,
    comments: 28,
    trending: true,
  },
  {
    id: 11,
    author: "Blackers Beach Club",
    authorRole: "Oficial",
    date: "Hace 4 días",
    content:
      "Resultados del torneo interno de diciembre. Felicitaciones a los ganadores y agradecimiento a todos los participantes por su espíritu deportivo.",
    likes: 156,
    comments: 19,
  },
  {
    id: 12,
    author: "Federación Nacional",
    authorRole: "Noticias Oficiales",
    date: "Hace 4 días",
    content:
      "Actualización del ranking nacional de voleibol de playa. Nuevos puntos otorgados por torneos regionales y nacionales disputados este mes.",
    likes: 98,
    comments: 14,
  },
  {
    id: 13,
    author: "Blackers Beach Club",
    authorRole: "Oficial",
    date: "Hace 5 días",
    content:
      "Mantenimiento programado de las canchas para el próximo fin de semana. Las instalaciones estarán cerradas sábado y domingo para mejoras.",
    likes: 87,
    comments: 12,
  },
  {
    id: 14,
    author: "Volleyball World",
    authorRole: "Medios",
    date: "Hace 5 días",
    content:
      "Análisis técnico: Evolución del saque en el voleibol moderno. Nuevas tendencias y técnicas que están cambiando el juego a nivel mundial.",
    likes: 245,
    comments: 41,
    trending: true,
  },
  {
    id: 15,
    author: "Blackers Beach Club",
    authorRole: "Oficial",
    date: "Hace 6 días",
    content:
      "Nuevos equipos de entrenamiento disponibles en la tienda del club. Ropa deportiva, calzado especializado y accesorios con descuentos exclusivos.",
    likes: 112,
    comments: 16,
  },
  {
    id: 16,
    author: "Beach Sports Network",
    authorRole: "Medios",
    date: "Hace 6 días",
    content:
      "Documental sobre la historia del voleibol de playa en nuestro país. Estreno este viernes en plataformas digitales con entrevistas exclusivas.",
    likes: 178,
    comments: 33,
  },
  {
    id: 17,
    author: "Blackers Beach Club",
    authorRole: "Oficial",
    date: "Hace 1 semana",
    content:
      "Programa de becas deportivas para jóvenes talentos. Apoyo económico para jugadores prometedores que deseen dedicarse profesionalmente al deporte.",
    likes: 298,
    comments: 52,
    trending: true,
  },
  {
    id: 18,
    author: "Pro Beach Circuit",
    authorRole: "Torneos",
    date: "Hace 1 semana",
    content:
      "Calendario oficial de torneos para la próxima temporada. Más de 20 eventos programados a lo largo del año con premios en efectivo.",
    likes: 167,
    comments: 25,
  },
  {
    id: 19,
    author: "Blackers Beach Club",
    authorRole: "Oficial",
    date: "Hace 1 semana",
    content:
      "Clínica de nutrición deportiva para atletas. Charla gratuita sobre alimentación adecuada para mejorar el rendimiento en la arena.",
    likes: 134,
    comments: 21,
  },
  {
    id: 20,
    author: "Volleyball Today",
    authorRole: "Medios",
    date: "Hace 1 semana",
    content:
      "Entrevista con la nueva generación de jugadores profesionales. Jóvenes talentos que están revolucionando el voleibol de playa nacional.",
    likes: 189,
    comments: 29,
  },
  {
    id: 21,
    author: "Blackers Beach Club",
    authorRole: "Oficial",
    date: "Hace 1 semana",
    content:
      "Sistema de reservas online actualizado. Nueva plataforma más intuitiva para reservar canchas y clases particulares.",
    likes: 98,
    comments: 13,
  },
  {
    id: 22,
    author: "Beach Volleyball Federation",
    authorRole: "Noticias Oficiales",
    date: "Hace 2 semanas",
    content:
      "Nuevas regulaciones para torneos internacionales. Cambios en el sistema de puntuación y clasificación para la próxima temporada.",
    likes: 156,
    comments: 24,
  },
  {
    id: 23,
    author: "Blackers Beach Club",
    authorRole: "Oficial",
    date: "Hace 2 semanas",
    content:
      "Celebración del aniversario del club. Evento especial con actividades, competencias y reconocimientos a miembros destacados.",
    image: "/beach-volleyball-players-on-sand.jpg",
    likes: 267,
    comments: 45,
    trending: true,
  },
  {
    id: 24,
    author: "Sports Medicine Center",
    authorRole: "Salud",
    date: "Hace 2 semanas",
    content:
      "Prevención de lesiones en voleibol de playa. Guía completa sobre calentamiento, estiramientos y cuidados específicos para el deporte.",
    likes: 198,
    comments: 31,
  },
  {
    id: 25,
    author: "Blackers Beach Club",
    authorRole: "Oficial",
    date: "Hace 2 semanas",
    content:
      "Nuevos entrenadores certificados se unen al equipo. Profesionales con experiencia internacional para elevar el nivel de entrenamiento.",
    likes: 145,
    comments: 18,
  },
  {
    id: 26,
    author: "Beach Volleyball Stats",
    authorRole: "Estadísticas",
    date: "Hace 2 semanas",
    content:
      "Análisis estadístico de la temporada pasada. Datos interesantes sobre rendimiento, estrategias más efectivas y tendencias del juego.",
    likes: 123,
    comments: 16,
  },
  {
    id: 27,
    author: "Blackers Beach Club",
    authorRole: "Oficial",
    date: "Hace 3 semanas",
    content:
      "Programa de intercambio deportivo con clubes internacionales. Oportunidades para entrenar en el extranjero y conocer nuevas técnicas.",
    likes: 189,
    comments: 27,
    trending: true,
  },
  {
    id: 28,
    author: "Volleyball Equipment Co.",
    authorRole: "Equipamiento",
    date: "Hace 3 semanas",
    content:
      "Nueva línea de pelotas oficiales para competencia. Tecnología mejorada para mejor control y durabilidad en condiciones de playa.",
    likes: 112,
    comments: 14,
  },
  {
    id: 29,
    author: "Blackers Beach Club",
    authorRole: "Oficial",
    date: "Hace 3 semanas",
    content:
      "Sistema de evaluación de progreso para miembros. Nuevas métricas y seguimiento personalizado para optimizar el desarrollo deportivo.",
    likes: 134,
    comments: 19,
  },
  {
    id: 30,
    author: "Beach Volleyball Legends",
    authorRole: "Historia",
    date: "Hace 3 semanas",
    content:
      "Homenaje a los pioneros del voleibol de playa en nuestro país. Reconocimiento a quienes sentaron las bases del deporte que amamos hoy.",
    likes: 245,
    comments: 38,
    trending: true,
  },
]

export function NewsFeed() {
  const [likedPosts, setLikedPosts] = useState<Set<number>>(new Set())
  const [visiblePosts, setVisiblePosts] = useState(10)
  const [isLoadingMore, setIsLoadingMore] = useState(false)
  const observerRef = useRef<IntersectionObserver | null>(null)
  const loadMoreRef = useRef<HTMLDivElement>(null)
  const postsPerLoad = 10

  const toggleLike = (postId: number) => {
    setLikedPosts((prev) => {
      const newSet = new Set(prev)
      newSet.has(postId) ? newSet.delete(postId) : newSet.add(postId)
      return newSet
    })
  }

  const loadMorePosts = useCallback(async () => {
    if (isLoadingMore || visiblePosts >= newsData.length) return

    setIsLoadingMore(true)
    await new Promise((resolve) => setTimeout(resolve, 800))
    setVisiblePosts((prev) => Math.min(prev + postsPerLoad, newsData.length))
    setIsLoadingMore(false)
  }, [isLoadingMore, visiblePosts])

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !isLoadingMore && visiblePosts < newsData.length) {
          loadMorePosts()
        }
      },
      { threshold: 0.1, rootMargin: '100px' }
    )

    if (loadMoreRef.current) {
      observerRef.current.observe(loadMoreRef.current)
    }

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect()
      }
    }
  }, [loadMorePosts, isLoadingMore, visiblePosts])

  const currentPosts = newsData.slice(0, visiblePosts)
  const hasMorePosts = visiblePosts < newsData.length

  return (
    <section className="py-8 relative bg-gradient-to-b from-background via-background to-secondary/10">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto space-y-6">
          {currentPosts.map((post, index) => (
            <Card
              key={post.id}
              style={{
                animation: index >= visiblePosts - postsPerLoad
                  ? `fadeInUp 0.3s ease-out ${(index - (visiblePosts - postsPerLoad)) * 0.05}s both`
                  : 'none'
              }}
              className="bg-card/80 backdrop-blur-sm border-border hover:border-primary/30 transition-all duration-500 overflow-hidden group hover:shadow-xl hover:shadow-primary/10"
            >
              <div className="p-6">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-primary font-black text-lg">{post.author.charAt(0)}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap mb-1">
                      <h3 className="font-bold text-foreground text-base">{post.author}</h3>
                      <span className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-full font-medium uppercase tracking-wide">
                        {post.authorRole}
                      </span>
                      {post.trending && (
                        <span className="flex items-center gap-1 text-xs px-2 py-1 bg-gradient-to-r from-accent/10 to-accent/5 text-accent rounded-full font-medium">
                          <TrendingUp className="w-3 h-3" />
                          Trending
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      <span>{post.date}</span>
                    </div>
                  </div>
                </div>

                <div className="mb-4">
                  <p className="text-foreground leading-relaxed text-base">{post.content}</p>
                </div>

                {post.image && (
                  <div className="mb-4 rounded-lg overflow-hidden border border-border/50 group-hover:border-primary/20 transition-colors duration-300">
                    <img
                      src={post.image}
                      alt="Post image"
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                )}

                <div className="flex items-center gap-6 pt-4 border-t border-border/50">
                  <Button
                    variant="ghost"
                    size="sm"
                    className={`gap-2 px-3 py-2 ${likedPosts.has(post.id)
                      ? "text-primary bg-primary/10"
                      : "text-muted-foreground hover:text-primary hover:bg-primary/5"
                      } transition-all duration-300`}
                    onClick={() => toggleLike(post.id)}
                  >
                    <Heart className={`w-4 h-4 ${likedPosts.has(post.id) ? "fill-primary" : ""}`} />
                    <span className="font-medium text-sm">
                      {post.likes + (likedPosts.has(post.id) ? 1 : 0)}
                    </span>
                  </Button>

                  <Button
                    variant="ghost"
                    size="sm"
                    className="gap-2 px-3 py-2 text-muted-foreground hover:text-primary hover:bg-primary/5 transition-all duration-300"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span className="font-medium text-sm">{post.comments}</span>
                  </Button>

                  <Button
                    variant="ghost"
                    size="sm"
                    className="gap-2 px-3 py-2 text-muted-foreground hover:text-primary hover:bg-primary/5 transition-all duration-300 ml-auto"
                  >
                    <Share2 className="w-4 h-4" />
                    <span className="font-medium text-sm">Compartir</span>
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Elemento de observación para infinite scroll */}
        {!isLoadingMore && <div ref={loadMoreRef} className="h-20" />}

        {/* Loader mejorado */}
        {isLoadingMore && (
          <div className="max-w-3xl mx-auto mt-12">
            <div className="flex flex-col items-center justify-center py-16 space-y-6">
              {/* Spinner principal */}
              <div className="relative">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/30 to-primary/10 flex items-center justify-center">
                    <div className="relative w-12 h-12">
                      <div className="absolute inset-0 border-4 border-primary/20 rounded-full" />
                      <div className="absolute inset-0 border-4 border-primary border-t-transparent rounded-full animate-spin" />
                    </div>
                  </div>
                </div>
                <div className="absolute -inset-3 rounded-full bg-primary/10 animate-ping" />
              </div>

              {/* Texto y dots animados */}
              <div className="space-y-3 text-center">
                <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 rounded-full">
                  <span className="font-bold text-primary text-lg">Cargando más noticias</span>
                  <div className="flex gap-1">
                    <div className="w-2 h-2 bg-primary rounded-full animate-bounce" />
                    <div className="w-2 h-2 bg-primary rounded-full animate-bounce [animation-delay:150ms]" />
                    <div className="w-2 h-2 bg-primary rounded-full animate-bounce [animation-delay:300ms]" />
                  </div>
                </div>
                <p className="text-muted-foreground text-sm">Estamos trayendo contenido nuevo para ti</p>
              </div>

              {/* Progress bar animado */}
              <div className="w-64 h-1 bg-primary/10 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-primary to-accent animate-[progress_1.5s_ease-in-out_infinite]" />
              </div>
            </div>
          </div>
        )}

        {/* Fin de noticias */}
        {!hasMorePosts && !isLoadingMore && (
          <div className="text-center mt-16 mb-8">
            <div className="inline-flex flex-col items-center gap-4">
              <div className="relative">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/30 to-primary/10 flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <div className="absolute -inset-2 rounded-full bg-primary/5 animate-ping" />
              </div>
              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 rounded-full">
                  <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                  <span className="text-sm font-bold text-primary uppercase tracking-wider">
                    Estás al día
                  </span>
                </div>
                <p className="text-muted-foreground text-sm">Has visto todas las noticias disponibles</p>
              </div>
            </div>
          </div>
        )}
      </div>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes progress {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(400%);
          }
        }
      `}</style>
    </section>
  )
}