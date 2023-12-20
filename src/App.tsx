import { Initial, AboutMe, Portifolio, Footer } from "./screens"
import { Navbar } from "./components/Navbar"
import { WhatsappContact } from "./components/WhatsappContact"

function App() {
  return (
    <div className="h-screen w-full">
      <Navbar />

      <Initial />
      <AboutMe />
      <Portifolio />
      <Footer />

      <WhatsappContact />
    </div>
  )
}

export default App
