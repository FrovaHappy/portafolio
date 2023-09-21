import Markdown from 'markdown-to-jsx'
import type { Article } from '.'
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
  return (
    <>
      {article.socials !== undefined ? SocialsComponent : null}
      <Markdown
        className='markdown'
        options={{
          overrides: {
            code: Code
          }
        }}>
        {markdown}
      </Markdown>
    </>
  )
}

export default Articles
