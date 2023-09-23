import type { IconNames } from '../../components/icons'

export interface Articles {
  title: string
  articles: Article[]
  iconLink?: string
}
export interface Article {
  article: string
  socials?: Array<[icons: IconNames, title: string, link: string]>
}
export const articles: Articles[] = [
  {
    title: 'Anime Hoshi',
    articles: [
      {
        article: 'https://raw.githubusercontent.com/FrovaHappy/monorepo-scrapping-anime/main/README.md',
        socials: [
          ['discord', 'link a discord', 'https://discord.gg/DSSfHnwMw9/DSSfHnwMw9'],
          ['github', 'link al repositorio', 'https://github.com/FrovaHappy/monorepo-scrapping-anime']
        ]
      }
    ],
    iconLink:
      'https://raw.githubusercontent.com/FrovaHappy/monorepo-scrapping-anime/main/packages/frontend/public/windows11/SmallTile.scale-400.png'
  },
  {
    title: 'Este Portafolio',
    articles: [{ article: 'https://raw.githubusercontent.com/FrovaHappy/portafolio/main/readme.md' }]
  }
]
