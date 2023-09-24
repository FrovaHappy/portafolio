import { useRef, useState } from 'react'
import './index.scss'
import BuildArticle from './BuildArticle'
import { articles } from './articles'
import type { SectionProps } from '../../types'
import useObserverSections from '../../useObserverSections'
import { Sections } from '../../enum'
function Index({ id, setSectionSelected }: SectionProps) {
  const [index, setIndex] = useState(0)
  const buttonActive = (i: number) => (index === i ? '--active' : '')
  const ref = useRef<HTMLDivElement>(null)
  useObserverSections(ref, () => {
    setSectionSelected(Sections.projects)
  })

  return (
    <div id={id} ref={ref}>
      <div className='mainSection'>
        <h2 className='mainSection__title'> Proyectos</h2>
        <div className='project__buttons'>
          {articles.map((article, i) => {
            const Img = <img src={article.iconLink} alt={`${article.title} icons`} className='project__img' />

            return (
              <a
                href={`#${id}`}
                className={`project__button project__button${buttonActive(i)}`}
                key={article.title}
                onClick={() => {
                  setIndex(i)
                }}>
                {article.iconLink !== undefined ? Img : undefined}
                {article.title}
              </a>
            )
          })}
        </div>
        {articles[index].articles.map((article, index) => {
          return <BuildArticle key={index} article={article} />
        })}
      </div>
    </div>
  )
}

export default Index
