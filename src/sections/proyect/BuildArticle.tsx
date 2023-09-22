import Markdown from 'markdown-to-jsx'
import type { Article } from './articles'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { a11yDark } from 'react-syntax-highlighter/dist/esm/styles/prism'
import './Articles.scss'
import Icons from '../../components/icons'
interface Props {
  article: Article
}
function Code({ children }: { children: string }) {
  return (
    <div className='code'>
      <SyntaxHighlighter language='typescript' style={a11yDark}>
        {children}
      </SyntaxHighlighter>
    </div>
  )
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
  const SocialsComponent = (
    <div className='socials'>
      {article.socials?.map((social, i) => {
        const [iconName, title, link] = social
        return (
          <a href={link} key={i} className='social' target='_blank' rel='noreferrer' title={title}>
            <Icons iconName={iconName} className='social__icon' />
          </a>
        )
      })}
    </div>
  )
  const TitleComponent = ({ children }: React.PropsWithChildren) => {
    return (
      <div className='markdown__title'>
        <h1>{children}</h1>
        {SocialsComponent}
      </div>
    )
  }
  return (
    <>
      <Markdown
        className='markdown'
        options={{
          overrides: {
            code: Code,
            h1: TitleComponent
          }
        }}>
        {markdown}
      </Markdown>
    </>
  )
}

export default Articles
