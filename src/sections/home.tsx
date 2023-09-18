import Icons from '../components/icons'
import config from '../config'
import { Sections } from '../enum'
import './home.scss'

function home({ cssId }: { cssId: string }) {
  return (
    <div id={cssId}>
      <div className='home'>
        <span className='home__separate'></span>
        <h1 className='home__text'>
          Hola, soy <span className='home__name'>FROVA</span>
        </h1>
        <Icons iconName='logo' className='home__logo' />
        <h2 className='home__text'>
          Desarrollador <span className='home__prof'>FULLSTACK</span>
        </h2>
        <div className='home__links'>
          <a href={config.urlDiscord} target='_blank'>
            <Icons iconName='discord' className='home__links--icon' />
          </a>
          <a href={config.urlGithub} target='_blank'>
            <Icons iconName='github' className='home__links--icon' />
          </a>
          <a href={'' + config.urlLinkedIn} target='_blank'>
            <Icons iconName='linkedin' className='home__links--icon' />
          </a>
        </div>
        <span className='home__separate'></span>
        <a href={`#${Sections.projects}`}>
          <Icons iconName='navFocus' className='home__navToDown' />
        </a>
      </div>
    </div>
  )
}

export default home
