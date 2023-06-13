import home from './assets/home'
import navDefault from './assets/navDefalult'
import profile from './assets/profile'
import proyect from './assets/proyect'
import menu from './assets/menu'

type ArrayImports = { [x: string]: JSX.Element }
export const arrayImports: ArrayImports = { home, profile, proyect, navDefault, menu }

export type IconsName = 'home' | 'profile' | 'proyect' | 'navDefault' | 'menu'
