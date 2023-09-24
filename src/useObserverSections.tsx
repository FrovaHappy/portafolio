import { useEffect } from 'react'

function useObserverSections(ref: React.RefObject<HTMLDivElement>, executeCallback: () => void) {
  useEffect(() => {
    const element = ref.current
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) executeCallback()
        })
      },
      { threshold: 0.5 }
    )
    if (element !== null) {
      observer.observe(element)
    }
    return () => {
      if (element !== null) {
        observer.unobserve(element)
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
}

export default useObserverSections
