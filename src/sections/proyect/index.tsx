import { useState } from 'react'
import './index.scss'
interface Articles {
  title: string
  article: JSX.Element
  iconLink: string
}
const articles: Articles[] = [{ title: 'anime Hoshi', article: <>hola</>, iconLink: '' }]

function Index({ cssId }: { cssId: string }) {
  const [index, setIndex] = useState(0)
  const buttonActive = (i: number) => (index === i ? '--active' : '')
  return (
    <div id={cssId}>
      <div className='proyect'>
        <h2 className='proyect__title'> Proyectos</h2>
        <div className='proyect__buttons'>
          {articles.map((article, i) => {
            return (
              <a
                href={`#${cssId}`}
                className={`proyect__button proyect__button${buttonActive(i)}`}
                key={article.title}
                onClick={() => {
                  setIndex(i)
                }}>
                {article.title}
              </a>
            )
          })}
        </div>
        {articles[index].article}
      </div>
    </div>
  )
}

export default Index
