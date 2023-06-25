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
        {sections.map((section) => {
          return (
            <a href={`#${parse(section.title)}`} key={section.title}>
              {section.title}
            </a>
          )
        })}
        {sections.map((section) => {
          return (
            <>
              <h4 id={parse(section.title)} className="docs__sections--title">
                {section.title + '.'}
              </h4>
              <div className="docs__sections">{section.body}</div>
            </>
          )
        })}

        <div className="docs__links">{links}</div>
      </div>
    </div>
  )
}

export default index
