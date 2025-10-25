import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { NewsHero } from "@/components/news-hero"
import { NewsFeed } from "@/components/news-feed"

export default function NoticiasPage() {
  return (
    <div className="min-h-screen bg-background relative">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 opacity-5 animate-float-slow">
          <svg viewBox="0 0 100 100" className="w-full h-full text-primary">
            <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="2" />
            <path d="M 50 5 Q 30 50 50 95" fill="none" stroke="currentColor" strokeWidth="2" />
            <path d="M 50 5 Q 70 50 50 95" fill="none" stroke="currentColor" strokeWidth="2" />
          </svg>
        </div>
        <div className="absolute bottom-20 right-10 w-24 h-24 opacity-5 animate-float-delayed">
          <svg viewBox="0 0 100 100" className="w-full h-full text-primary">
            <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="2" />
            <path d="M 5 50 Q 50 30 95 50" fill="none" stroke="currentColor" strokeWidth="2" />
          </svg>
        </div>
      </div>

      <Header />

      {/* Hero Section */}
      <section className="relative">
        <NewsHero />
      </section>

      {/* News Feed Section */}
      <section className="relative">
        <NewsFeed />
      </section>

      <Footer />
    </div>
  )
}
