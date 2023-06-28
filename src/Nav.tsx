import { useState } from 'react'
import { Secctions } from './App'
import './Nav.scss'
import Icons from './components/icons'
import { IconsName } from './components/icons/imports'
function Nav({
  sectionSelected,
  setSectionSelected,
}: {
  sectionSelected: Secctions
  setSectionSelected: (v: Secctions) => void
}) {
  const [active, setActive] = useState(false)
  const isSelected = (section: Secctions, icon: IconsName) => (
    <Icons icon={section === sectionSelected ? icon : 'navDefault'} className="nav__icon" />
  )
  const isActive = active ? 'nav__menu' : 'nav__menu nav__menu--active'
  return (
    <div className="root__nav">
      <nav className="nav" onClick={() => setActive(!active)}>
        <div className="nav__space"></div>
        <a href={`#${Secctions.home}`} className={'nav__a'} onClick={() => setSectionSelected(Secctions.home)}>
          {isSelected(Secctions.home, 'home')}
          <p className="nav__text">Home</p>
        </a>

        <a href={`#${Secctions.projects}`} className={'nav__a'} onClick={() => setSectionSelected(Secctions.projects)}>
          {isSelected(Secctions.projects, 'proyect')}
          projects
        </a>
        <a href={`#${Secctions.about}`} className={'nav__a'} onClick={() => setSectionSelected(Secctions.about)}>
          {isSelected(Secctions.about, 'profile')}
          about
        </a>
        <div className="nav__space"></div>
        <Icons icon="menu" className={isActive} />
      </nav>
    </div>
  )
}

export default Nav
