import { arrayImports, IconsName } from './imports'

function index({ icon, className }: { icon: IconsName; className?: string }) {
  return (
    <svg className={className} viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
      {arrayImports[icon]}
    </svg>
  )
}

export default index
