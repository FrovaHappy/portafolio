import './index.scss'
export type Secctions = { title: string; body: JSX.Element }[]

interface Props {
  sections: Secctions
  links: JSX.Element
}

function index({ sections, links }: Props) {
  const parse = (title: string) => title.toLowerCase().replace(/[\s]/g, '_')
  return (
    <div className="docs">
      <div className="docs__contents">
        {sections.map((section, i) => {
          return (
            <a className="docs__contents--link" href={`#${parse(section.title)}`} key={i}>
              {section.title}
            </a>
          )
        })}
        {sections.map((section, i) => {
          return (
            <div className="sectionsDocs" key={i}>
              <h4 id={parse(section.title)} className="sectionsDocs__title">
                {section.title + '.'}
              </h4>
              <div className="sectionsDocs__body">{section.body}</div>
            </div>
          )
        })}

        <div className="docs__links">{links}</div>
      </div>
    </div>
  )
}

export default index
