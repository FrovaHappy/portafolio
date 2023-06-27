import { useState } from 'react'
import animeHoshi from './articles/animeHoshi'
import DiscordBot from './articles/bot_discord'
import './index.scss'

const articles: { title: string; article: JSX.Element; iconlink: string }[] = [animeHoshi(), DiscordBot()]

function Index({ cssId }: { cssId: string }) {
  const [index, setIndex] = useState(0)
  const buttonActive = (i: number) => (index === i ? '--active' : '')
  return (
    <div id={cssId}>
      <div className="proyect">
        <h2 className="proyect__title"> Proyectos</h2>
        <div className="proyect__buttons">
          {articles.map((article, i) => {
            return (
              <div
                className={`proyect__button proyect__button${buttonActive(i)}`}
                key={article.title}
                onClick={() => setIndex(i)}
              >
                {article.title}
              </div>
            )
          })}
        </div>
        {articles[index].article}
      </div>
    </div>
  )
}

export default Index
