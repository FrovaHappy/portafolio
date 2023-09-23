import { useState } from 'react'
import './index.scss'
import BuildArticle from './BuildArticle'
import { articles } from './articles'
function Index({ cssId }: { cssId: string }) {
  const [index, setIndex] = useState(0)
  const buttonActive = (i: number) => (index === i ? '--active' : '')
  return (
    <div id={cssId}>
      <div className='mainSection'>
        <h2 className='mainSection__title'> Proyectos</h2>
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
        {articles[index].articles.map((article, index) => {
          return <BuildArticle key={index} article={article} />
        })}
      </div>
    </div>
  )
}

export default Index
