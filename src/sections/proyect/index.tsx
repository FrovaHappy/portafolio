import { useState } from 'react'
import animeHoshi from './articles/animeHoshi'

const articles: { title: string; article: JSX.Element }[] = [animeHoshi()]

function Index({ cssId }: { cssId: string }) {
  const [index, setIndex] = useState(0)
  return (
    <div id={cssId}>
      <div className="buttons">
        {articles.map((article, i) => {
          return (
            <div className="button" key={article.title} onClick={() => setIndex(i)}>
              {article.title}
            </div>
          )
        })}
      </div>
      <div className="article">{articles[index].article}</div>
    </div>
  )
}

export default Index
