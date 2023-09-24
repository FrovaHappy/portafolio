import type { Sections } from './enum'
export interface SectionProps {
  id: Sections
  setSectionSelected: (v: Sections) => void
}
