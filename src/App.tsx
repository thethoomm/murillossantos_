import { Initial, AboutMe, Portifolio, ContactMe } from "./screens"
import { Navbar } from "./components/Navbar"
import { WhatsappContact } from "./components/WhatsappContact"

function App() {
  return (
    <div className="h-screen w-full">
      <Navbar />

      <Initial />
      <AboutMe />
      <Portifolio />
      <ContactMe />

      <WhatsappContact />
    </div>
  )
}

export default App
