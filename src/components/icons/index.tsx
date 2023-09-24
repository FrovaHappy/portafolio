import home from './assets/home'
import navDefault from './assets/navDefault'
import profile from './assets/profile'
import project from './assets/project'
import menu from './assets/menu'
import logo from './assets/logo'
import navFocus from './assets/navFocus'
import linkedin from './assets/linkedin'
import discord from './assets/discord'
import github from './assets/github'
import shapes from './assets/shapes'

const icons = {
  home,
  profile,
  project,
  navDefault,
  menu,
  logo,
  navFocus,
  linkedin,
  github,
  discord,
  shapes
}
export type IconNames = keyof typeof icons
interface IconProps {
  className?: string
  style?: React.CSSProperties
  iconName: IconNames
}
const FilterIcon = (iconProps: IconProps) => {
  const { className, iconName, style } = iconProps
  const { jsx, viewBox } = icons[iconName ?? 'shapes']
  return (
    <svg className={className} style={style} viewBox={viewBox} xmlns='http://www.w3.org/2000/svg' fill='currentColor'>
      {jsx}
    </svg>
  )
}

export default FilterIcon
