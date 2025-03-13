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
    <div className='front'>
      {/* <Navbar />
      <First />
      <About />
      <Skill />
      <Work />
      <Certificate />
      <Contact />
      <footer>
        <p>© 2024 | Coded with ❤️ by Nasemul</p>
      </footer> */}
      <p>New version of my portfolio has been released. Please click the below button...</p>
      <a className='link' href="https://portfolio-v2-beta-jet.vercel.app/">Portfolio v2</a>
    </div>
  )
}

export default App
