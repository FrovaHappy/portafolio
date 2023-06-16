import home from './assets/home'
import navDefault from './assets/navDefalult'
import profile from './assets/profile'
import proyect from './assets/proyect'
import menu from './assets/menu'
import logo from './assets/logo'
import navTodown from './assets/navTodown'
import linkedin from './assets/linkedin'
import discord from './assets/discord'
import github from './assets/github'

type ArrayImports = { [x: string]: { jsx: JSX.Element; viewBox: string } }
export const arrayImports: ArrayImports = {
  home,
  profile,
  proyect,
  navDefault,
  menu,
  logo,
  navTodown,
  linkedin,
  github,
  discord,
}

export type IconsName =
  | 'home'
  | 'profile'
  | 'proyect'
  | 'navDefault'
  | 'menu'
  | 'logo'
  | 'navTodown'
  | 'linkedin'
  | 'github'
  | 'discord'
