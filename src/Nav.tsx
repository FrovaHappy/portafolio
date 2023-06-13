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
  const isSelected = (section: Secctions, icon: IconsName) => (
    <Icons icon={section === sectionSelected ? icon : 'navDefault'} className="nav__icon" />
  )
  return (
    <div className="app__nav">
      <nav className="app__nav--content">
        <a href={`#${Secctions.home}`} className={'nav__a'} onClick={() => setSectionSelected(Secctions.home)}>
          {isSelected(Secctions.home, 'home')}
          <p className="nav__text">Home</p>
        </a>
        <a href={`#${Secctions.about}`} className={'nav__a'} onClick={() => setSectionSelected(Secctions.about)}>
          {isSelected(Secctions.about, 'profile')}
          about
        </a>
        <a href={`#${Secctions.projects}`} className={'nav__a'} onClick={() => setSectionSelected(Secctions.projects)}>
          {isSelected(Secctions.projects, 'proyect')}
          projects
        </a>
      </nav>
    </div>
  )
}

export default Nav
