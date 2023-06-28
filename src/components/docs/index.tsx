import { useState } from 'react'
import './index.scss'
export type Secctions = { title: string; body: JSX.Element }[]

interface Props {
  sections: Secctions
  links: JSX.Element
}

function Index({ sections, links }: Props) {
  const parse = (title: string) => title.toLowerCase().replace(/[\s]/g, '_')
  const [index, setIndex] = useState(0)
  const activeIndex = (i: number) => (i === index ? '--linkActive' : '')
  return (
    <div className="docs">
      <div className="docs__nav">
        {sections.map((section, i) => {
          return (
            <a
              className={`docs__nav--link docs__nav${activeIndex}`}
              href={`#${parse(section.title)}`}
              key={i}
              onClick={() => setIndex(i)}
            >
              {section.title}
            </a>
          )
        })}
      </div>
      <div className="docs__content">
        {sections.map((section, i) => {
          return (
            <div className="parcialDocs" key={i}>
              <span id={parse(section.title)} className="parcialDocs__ancor"></span>
              <h4 className="parcialDocs__title">{section.title + '.'}</h4>
              <div className="parcialDocs__body">{section.body}</div>
            </div>
          )
        })}
      </div>

      <div className="docs__links">{links}</div>
    </div>
  )
}

export default Index
