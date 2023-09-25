import { useRef } from 'react'
import Icons from '../components/icons'
import config from '../config'
import { Sections } from '../enum'
import type { SectionProps } from '../types'
import useObserverSections from '../useObserverSections'
import './About.scss'
const skills = [
  'TypesScript',
  'JavasScript',
  'Node',
  'express',
  'React',
  'SASS',
  'CSS',
  'Git',
  'GitHub',
  'Responsive Design',
  'Adaptive Design'
]
function About({ id, setSectionSelected }: SectionProps) {
  const ref = useRef<HTMLDivElement>(null)
  useObserverSections(ref, () => {
    setSectionSelected(Sections.about)
  })
  return (
    <div id={id} ref={ref}>
      <div className='mainSection about'>
        <section className='about__full'>
          <h2 className='mainSection__title'>Sobre Mí</h2>
          <h3 className='mainSection__description'>
            <p>¡Hola! Me llamo Francisco Vera.</p>
            <p>
              Soy un programador apasionado por la tecnología y la resolución de problemas a través del código, y estoy
              emocionado por la oportunidad de colaborar en proyectos innovadores y desafiantes.
            </p>
          </h3>
        </section>
        <section>
          <h4 className='mainSection__subtitle'>Mi historia</h4>
          <p className='mainSection__description'>
            mi excursión por la informática empezó desde la secundaria, ya en mi ultimo año da la misma me llamo la
            atenciones programación, aprendiendo lo básico con visual basic.
          </p>
          <p className='mainSection__description'>
            Estudie un año y medio la carrera de licenciatura en sistema de información, tras dejarla después de la
            pandemia, estuve trabajando en negro durante dos año, sin saber si retomaría la carrera.
          </p>
          <p className='mainSection__description'>
            Desde entonces decidí retomar mis estudios de manera autodidactas, y aprender un stack de tecnologías y de
            esta manera cumplir mis objetivos
          </p>
        </section>
        <section>
          <h4 className='mainSection__subtitle'>Mis Skills</h4>

          <div className='about__tags'>
            {skills.map(skill => (
              <div key={skill} className='about__tag'>
                {skill}
              </div>
            ))}
          </div>
        </section>
        <section className='about__full'>
          <h4 className='mainSection__subtitle'>Contácteme</h4>
          <div className='about__socials'>
            <a href={config.urlLinkedIn} className='about__social about__social--linkedin'>
              <Icons iconName='linkedin' className='about__social--icon' />
              LinkedIn
            </a>
            <a href={config.urlDiscord} className='about__social about__social--discord'>
              <Icons iconName='discord' className='about__social--icon' />
              Discord
            </a>
          </div>
        </section>
      </div>
    </div>
  )
}

export default About
