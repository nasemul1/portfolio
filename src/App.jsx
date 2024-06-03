import './App.css'
import About from './about-me/About'
import Certificate from './certificates/Certificate'
import Contact from './contacts/Contact'
import First from './first-page/First'
import Navbar from './navbar/Navbar'
import Skill from './skill/Skill'
import Work from './works/Work'

function App() {

  return (
    <>
      <Navbar />
      <First />
      <About />
      <Skill />
      <Work />
      <Certificate />
      <Contact />
      <footer>
        <p>© 2024 | Coded with ❤️ by Nasemul</p>
      </footer>
    </>
  )
}

export default App
