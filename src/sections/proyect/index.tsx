import { useState } from 'react'
import './index.scss'
import Articles from './Articles'
import type { IconNames } from '../../components/icons'
export interface Article {
  title: string
  article: string
  iconLink?: string
  socials?: Array<[icons: IconNames, title: string, link: string]>
}
const articles: Article[] = [
  {
    title: 'anime Hoshi',
    article: 'https://raw.githubusercontent.com/FrovaHappy/monorepo-scrapping-anime/main/README.md',
    iconLink:
      'https://raw.githubusercontent.com/FrovaHappy/monorepo-scrapping-anime/main/packages/frontend/public/windows11/SmallTile.scale-400.png',
    socials: [
      ['discord', 'link a discord', 'https://google.com/'],
      ['github', 'link al repositorio', 'github']
    ]
  },
  {
    title: 'discord bot',
    article: 'https://raw.githubusercontent.com/FrovaHappy/bot-discord/main/README.md'
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
            const Img = <img src={article.iconLink} alt={`${article.title} icons`} className='project__img' />

            return (
              <a
                href={`#${cssId}`}
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
        <Articles article={articles[index]} />
      </div>
    </div>
  )
}

export default Index
