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
      <Hero />
      <About />
      <VolleyballInfo />
      <Plans />
      <JoinUs />
      <Footer />
    </main>
  )
}
