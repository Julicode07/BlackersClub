import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { VolleyballInfo } from "@/components/volleyball-info"
import { Plans } from "@/components/plans"
import { JoinUs } from "@/components/join-us"
import { Footer } from "@/components/footer"
import { VolleyballDecorations } from "@/components/volleyball-decorations"

export default function Home() {
  return (
    <main className="min-h-screen bg-background relative">
      <VolleyballDecorations />
      <Header />

      {/* Hero Section */}
      <section className="relative">
        <Hero />
      </section>

      {/* About Section */}
      <section className="relative">
        <About />
      </section>

      {/* Volleyball Info Section */}
      <section className="relative">
        <VolleyballInfo />
      </section>

      {/* Plans Section */}
      <section className="relative">
        <Plans />
      </section>

      {/* Join Us Section */}
      <section className="relative">
        <JoinUs />
      </section>

      {/* Footer */}
      <Footer />
    </main>
  )
}
