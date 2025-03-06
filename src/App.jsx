import Benefits from "./components/page/Benefits"
import Blog from "./components/page/Blog"
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
    </>
  )
}

export default App
