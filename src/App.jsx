import Benefits from "./components/page/Benefits"
import Blog from "./components/page/Blog"
import Footer from "./components/page/Footer"
import Header from "./components/page/Header"
import Hero from "./components/page/Hero"

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Benefits />
        <Blog />
      </main>
      <Footer />
    </>
  )
}

export default App
