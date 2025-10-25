"use client"

import { useEffect, useState } from "react"

export function VolleyballDecorations() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <>
      {/* Floating volleyball balls */}
      <div className="absolute top-1/4 right-10 w-16 h-16 opacity-10 animate-bounce-ball pointer-events-none">
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

      <div className="absolute bottom-1/3 left-20 w-12 h-12 opacity-10 animate-float-slow pointer-events-none">
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

      {/* Volleyball net decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-32 bg-gradient-to-b from-transparent via-primary/20 to-transparent pointer-events-none"></div>
    </>
  )
}
