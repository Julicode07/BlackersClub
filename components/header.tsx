"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()
  const isHomePage = pathname === "/"

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMenuOpen(false)
    }
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-primary/20">
      <nav className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <div className="flex flex-col leading-none">
              <span className="text-xl md:text-2xl font-black text-foreground tracking-tighter">BLACKERS</span>
              <span className="text-xs md:text-sm font-bold text-primary tracking-wider">BEACH CLUB</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {isHomePage ? (
              <>
                <button
                  onClick={() => scrollToSection("inicio")}
                  className="text-foreground hover:text-primary transition-colors text-sm font-medium uppercase tracking-wider"
                >
                  Inicio
                </button>
                <button
                  onClick={() => scrollToSection("nosotros")}
                  className="text-foreground hover:text-primary transition-colors text-sm font-medium uppercase tracking-wider"
                >
                  Nosotros
                </button>
                <button
                  onClick={() => scrollToSection("voleibol")}
                  className="text-foreground hover:text-primary transition-colors text-sm font-medium uppercase tracking-wider"
                >
                  Voleibol
                </button>
                <button
                  onClick={() => scrollToSection("planes")}
                  className="text-foreground hover:text-primary transition-colors text-sm font-medium uppercase tracking-wider"
                >
                  Planes
                </button>
              </>
            ) : (
              <Link
                href="/"
                className="text-foreground hover:text-primary transition-colors text-sm font-medium uppercase tracking-wider"
              >
                Inicio
              </Link>
            )}
            <Link
              href={pathname === "/noticias" ? "/" : "/noticias"}
              className={`transition-colors text-sm font-medium uppercase tracking-wider ${pathname === "/noticias" ? "text-primary" : "text-foreground hover:text-primary"
                }`}
            >
              Noticias
            </Link>
            {/* <Link
              href="/admin"
              className={`transition-colors text-sm font-medium uppercase tracking-wider ${pathname === "/admin" ? "text-primary" : "text-foreground hover:text-primary"
                }`}
            >
              Admin
            </Link> */}
            <Button
              onClick={() => isHomePage ? scrollToSection("unete") : window.location.href = "/"}
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              Únete
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-foreground" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 flex flex-col gap-4">
            {isHomePage ? (
              <>
                <button
                  onClick={() => scrollToSection("inicio")}
                  className="text-foreground hover:text-primary transition-colors text-sm font-medium uppercase tracking-wider text-left"
                >
                  Inicio
                </button>
                <button
                  onClick={() => scrollToSection("nosotros")}
                  className="text-foreground hover:text-primary transition-colors text-sm font-medium uppercase tracking-wider text-left"
                >
                  Nosotros
                </button>
                <button
                  onClick={() => scrollToSection("voleibol")}
                  className="text-foreground hover:text-primary transition-colors text-sm font-medium uppercase tracking-wider text-left"
                >
                  Voleibol
                </button>
                <button
                  onClick={() => scrollToSection("planes")}
                  className="text-foreground hover:text-primary transition-colors text-sm font-medium uppercase tracking-wider text-left"
                >
                  Planes
                </button>
              </>
            ) : (
              <Link
                href="/"
                className="text-foreground hover:text-primary transition-colors text-sm font-medium uppercase tracking-wider text-left"
                onClick={() => setIsMenuOpen(false)}
              >
                Inicio
              </Link>
            )}
            <Link
              href={pathname === "/noticias" ? "/" : "/noticias"}
              className={`transition-colors text-sm font-medium uppercase tracking-wider text-left ${pathname === "/noticias" ? "text-primary" : "text-foreground hover:text-primary"
                }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Noticias
            </Link>
            <Link
              href="/admin"
              className={`transition-colors text-sm font-medium uppercase tracking-wider text-left ${pathname === "/admin" ? "text-primary" : "text-foreground hover:text-primary"
                }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Admin
            </Link>
            <Button
              onClick={() => {
                if (isHomePage) {
                  scrollToSection("unete")
                } else {
                  window.location.href = "/"
                }
                setIsMenuOpen(false)
              }}
              className="bg-primary hover:bg-primary/90 text-primary-foreground w-full"
            >
              Únete
            </Button>
          </div>
        )}
      </nav>
    </header>
  )
}
