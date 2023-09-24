import { useState } from 'react'

import './Nav.scss'
import Icons, { type IconNames } from './components/icons'
import { Sections } from './enum'
function Nav({
  sectionSelected,
  setSectionSelected
}: {
  sectionSelected: Sections
  setSectionSelected: (v: Sections) => void
}) {
  const [active, setActive] = useState(false)
  const isSelected = (section: Sections, icon: IconNames) => (
    <Icons iconName={section === sectionSelected ? icon : 'navDefault'} className='nav__icon' />
  )
  const isActive = active ? 'nav__menu' : 'nav__menu nav__menu--active'
  return (
    <div className='root__nav'>
      <nav
        className='nav'
        onClick={() => {
          setActive(!active)
        }}>
        <div className='nav__space'></div>
        <a
          href={`#${Sections.home}`}
          className={'nav__a'}
          id={`#nav_${Sections.home}`}
          onClick={() => {
            setSectionSelected(Sections.home)
          }}>
          {isSelected(Sections.home, 'home')}
          Home
        </a>

        <a
          href={`#${Sections.projects}`}
          id={`#nav_${Sections.projects}`}
          className={'nav__a'}
          onClick={() => {
            setSectionSelected(Sections.projects)
          }}>
          {isSelected(Sections.projects, 'project')}
          Projects
        </a>
        <a
          href={`#${Sections.about}`}
          id={`#nav_${Sections.about}`}
          className={'nav__a'}
          onClick={() => {
            setSectionSelected(Sections.about)
          }}>
          {isSelected(Sections.about, 'profile')}
          About
        </a>
        <div className='nav__space'></div>
        <Icons iconName='menu' className={isActive} />
      </nav>
    </div>
  )
}

export default Nav
