import Markdown from 'markdown-to-jsx'
import type { Article } from '.'
import { useEffect, useState } from 'react'
import axios from 'axios'

interface Props {
  article: Article
}
function DivContent({ children }: React.PropsWithChildren) {
  return <div>{children}</div>
}
function Articles({ article }: Props) {
  const [markdown, setMarkdown] = useState('')
  useEffect(() => {
    const waitingArticle = async () => {
      const text = await axios.get(article.article)
      if (text.status !== 200) {
        setMarkdown('### Article not found')
        return
      }
      setMarkdown(await text.data)
    }
    waitingArticle().catch(e => {
      console.log(e)
    })
  }, [article.article])
  return (
    <Markdown
      options={{
        overrides: {
          h1: {
            component: DivContent
          }
        }
      }}>
      {markdown}
    </Markdown>
  )
}

export default Articles
