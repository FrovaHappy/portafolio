import { arrayImports, IconsName } from './imports'

function index({ icon, className }: { icon: IconsName; className?: string }) {
  const extracted = arrayImports[icon]
  return (
    <svg className={className} viewBox={extracted.viewBox} xmlns="http://www.w3.org/2000/svg">
      {extracted.jsx}
    </svg>
  )
}

export default index
