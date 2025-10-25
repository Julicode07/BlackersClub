import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { NewsHero } from "@/components/news-hero"
import { NewsFeed } from "@/components/news-feed"

export default function NoticiasPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <NewsHero />
      <NewsFeed />
      <Footer />
    </div>
  )
}
