import { useRef, useState } from 'react'
import './App.scss'
import Nav from './Nav'
import Home from './sections/home'
import Proyect from './sections/proyect'
export const enum Secctions {
  home = 'home',
  about = 'about',
  projects = 'projects',
}
function App() {
  const hashtag = useRef(window.location.hash.replace('#', ''))
  const [sectionSelected, setSectionSelected] = useState(hashtag.current === '' ? Secctions.home : hashtag.current) as [
    Secctions,
    (v: Secctions) => void
  ]
  return (
    <>
      <Nav sectionSelected={sectionSelected} setSectionSelected={setSectionSelected} />
      <div className="app__main">
        <Home cssId={Secctions.home} />
        <Proyect cssId={Secctions.projects} />
        <div id="projects">holas</div>
        <div id="about"></div>
      </div>
    </>
  )
}

export default App
