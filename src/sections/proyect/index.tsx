import { useState } from 'react'
import './index.scss'
import Articles from './Articles'
export interface Article {
  title: string
  article: string
  iconLink: string
}
const articles: Article[] = [
  {
    title: 'anime Hoshi',
    article: 'https://raw.githubusercontent.com/FrovaHappy/monorepo-scrapping-anime/main/README.md',
    iconLink: ''
  },
  {
    title: 'discord bot',
    article: 'https://raw.githubusercontent.com/FrovaHappy/bot-discord/main/README.md',
    iconLink: ''
  }
]

function Index({ cssId }: { cssId: string }) {
  const [index, setIndex] = useState(0)
  const buttonActive = (i: number) => (index === i ? '--active' : '')
  return (
    <div id={cssId}>
      <div className='project'>
        <h2 className='protect__title'> Proyectos</h2>
        <div className='project__buttons'>
          {articles.map((article, i) => {
            return (
              <a
                href={`#${cssId}`}
                className={`project__button project__button${buttonActive(i)}`}
                key={article.title}
                onClick={() => {
                  setIndex(i)
                }}>
                {article.title}
              </a>
            )
          })}
        </div>
        <Articles article={articles[index]} />
      </div>
    </div>
  )
}

export default Index
