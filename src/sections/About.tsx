import Icons from '../components/icons'

const skills = [
  'TypesScript',
  'JavasScript',
  'Node',
  'React',
  'SASS',
  'CSS',
  'Git',
  'Responsive Design',
  'Adaptive Design'
]
function About({ cssId }: { cssId: string }) {
  return (
    <div id={cssId}>
      <div className='mainSection about'>
        <section className='about__full'>
          <h2 className='mainSection__title'>Sobre Mí</h2>
          <h3 className='mainSection__description'>
            Me gusta buscar soluciones a problemas concurrentes, he encontrado mi lugar en el mundo de la
            programación... mi nombre es Francisco Vera y este soy yo.
          </h3>
        </section>
        <section>
          <h4 className='mainSection__subtitle'>Mi historia</h4>
          <p className='mainSection__description'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus consectetur aut tenetur ipsum. Nemo
            aliquid sequi alias eos illum consequatur, dolores neque. Impedit, maiores debitis magnam laudantium hic
            saepe. Eos.
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
          <p className='mainSection__description'>
            te recomiendo que me contactes por Linkedin pero puedes usar las siguientes redes.
          </p>
          <div className='about__socials'>
            <a href='https://www.linkedin.com/in/frovahappy' className='about__social about__social--linkedin'>
              <Icons iconName='linkedin' className='about__social--icon' />
              LinkedIn
            </a>
            <a href='https://discordapp.com/users/653429940502659111' className='about__social about__social--discord'>
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
