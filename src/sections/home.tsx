import { Secctions } from '../App'
import Icons from '../components/icons'
import config from '../config'
import './home.scss'

function home({ cssId }: { cssId: string }) {
  return (
    <div id={cssId}>
      <div className="home">
        <span className="home__separate"></span>
        <h1 className="home__text">
          Hola, soy <span className="home__name">FROVA</span>
        </h1>
        <Icons icon="logo" className="home__logo" />
        <h2 className="home__text">
          Desarrollador <span className="home__prof">FULLSTACK</span>
        </h2>
        <div className="home__links">
          <a href={config.urlDiscord} target="_blank">
            <Icons icon="discord" className="home__links--icon" />
          </a>
          <a href={config.urlGithub} target="_blank">
            <Icons icon="github" className="home__links--icon" />
          </a>
          <a href={'' + config.urlLinkedIn} target="_blank">
            <Icons icon="linkedin" className="home__links--icon" />
          </a>
        </div>
        <span className="home__separate"></span>
        <a href={`#${Secctions.projects}`}>
          <Icons icon="navTodown" className="home__navToDown" />
        </a>
      </div>
    </div>
  )
}

export default home
