import type { IconNames } from '../../components/icons'

export interface Article {
  title: string
  article: string
  iconLink?: string
  socials?: Array<[icons: IconNames, title: string, link: string]>
}
export const articles: Article[] = [
  {
    title: 'Anime Hoshi',
    article: 'https://raw.githubusercontent.com/FrovaHappy/monorepo-scrapping-anime/main/README.md',
    iconLink:
      'https://raw.githubusercontent.com/FrovaHappy/monorepo-scrapping-anime/main/packages/frontend/public/windows11/SmallTile.scale-400.png',
    socials: [
      ['discord', 'link a discord', 'https://discord.gg/DSSfHnwMw9/DSSfHnwMw9'],
      ['github', 'link al repositorio', 'https://github.com/FrovaHappy/monorepo-scrapping-anime']
    ]
  },
  {
    title: 'discord bot',
    article: 'https://raw.githubusercontent.com/FrovaHappy/bot-discord/main/README.md'
  }
]
