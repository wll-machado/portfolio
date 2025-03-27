import NavBar from "./components/NavBar"
import './App.css'
import Banner from "./components/Banner"
import { Skills } from "./components/Skills"
import { Projects } from "./components/Projects"

function App() {
  
  return (
    <div className="App">
     <NavBar/>
     <Banner/>
     <Skills/>
     <Projects/>
    </div>
  )
}

export default App
