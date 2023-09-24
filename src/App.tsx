import { useRef, useState } from 'react'
import './App.scss'
import Nav from './Nav'
import Home from './sections/home'
import Projects from './sections/proyect'
import { Sections } from './enum'
import About from './sections/About'

function App() {
  const hashtag = useRef(window.location.hash.replace('#', ''))
  const [sectionSelected, setSectionSelected] = useState(hashtag.current === '' ? Sections.home : hashtag.current) as [
    Sections,
    (v: Sections) => void
  ]
  return (
    <div className='root'>
      <Nav sectionSelected={sectionSelected} setSectionSelected={setSectionSelected} />
      <Home id={Sections.home} setSectionSelected={setSectionSelected} />
      <Projects id={Sections.projects} setSectionSelected={setSectionSelected} />
      <About id={Sections.about} setSectionSelected={setSectionSelected} />
    </div>
  )
}

export default App
