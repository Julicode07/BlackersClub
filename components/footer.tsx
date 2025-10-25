import { Facebook, Instagram, Twitter, Youtube } from "lucide-react"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-secondary/50 border-t-2 border-primary/20 py-12 relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent"></div>

      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Image src="/blackers-logo.png" alt="Blackers Logo" width={48} height={48} className="w-12 h-12" />
                <span className="text-xl font-black text-foreground">BLACKERS</span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Club de voleibol dedicado a formar atletas completos con pasión, disciplina y excelencia.
              </p>
            </div>

            <div>
              <h4 className="text-foreground font-black mb-4 uppercase tracking-wide">Enlaces</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#inicio" className="hover:text-primary transition-colors font-medium">
                    Inicio
                  </a>
                </li>
                <li>
                  <a href="#nosotros" className="hover:text-primary transition-colors font-medium">
                    Nosotros
                  </a>
                </li>
                <li>
                  <a href="#voleibol" className="hover:text-primary transition-colors font-medium">
                    Voleibol
                  </a>
                </li>
                <li>
                  <a href="#planes" className="hover:text-primary transition-colors font-medium">
                    Planes
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-foreground font-black mb-4 uppercase tracking-wide">Contacto</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="font-medium">Av. Principal 123</li>
                <li className="font-medium">Ciudad, Estado 12345</li>
                <li className="font-medium">+1 (555) 123-4567</li>
                <li className="font-medium">info@blackers.com</li>
              </ul>
            </div>

            <div>
              <h4 className="text-foreground font-black mb-4 uppercase tracking-wide">Síguenos</h4>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center hover:bg-primary hover:scale-110 transition-all duration-300 group"
                >
                  <Facebook className="w-5 h-5 text-foreground group-hover:text-primary-foreground transition-colors" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center hover:bg-primary hover:scale-110 transition-all duration-300 group"
                >
                  <Instagram className="w-5 h-5 text-foreground group-hover:text-primary-foreground transition-colors" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center hover:bg-primary hover:scale-110 transition-all duration-300 group"
                >
                  <Twitter className="w-5 h-5 text-foreground group-hover:text-primary-foreground transition-colors" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center hover:bg-primary hover:scale-110 transition-all duration-300 group"
                >
                  <Youtube className="w-5 h-5 text-foreground group-hover:text-primary-foreground transition-colors" />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-border pt-8 text-center">
            <p className="text-sm text-muted-foreground font-medium">
              © {new Date().getFullYear()} Blackers Volleyball Club. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
