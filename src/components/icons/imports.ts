import home from './assets/home'
import navDefault from './assets/navDefalult'
import profile from './assets/profile'
import proyect from './assets/proyect'

type ArrayImports = { [x: string]: JSX.Element }
export const arrayImports: ArrayImports = { home, profile, proyect, navDefault }

export type IconsName = 'home' | 'profile' | 'proyect' | 'navDefault'
