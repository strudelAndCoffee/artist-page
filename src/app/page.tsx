import Hero from './components/Hero'
import Header from './components/Header'
import Footer from './components/Footer'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center pt-5 px-20">
      <Hero />
      <Header />
      <Footer />
    </main>
  )
}
