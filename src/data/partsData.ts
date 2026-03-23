export type PartRecord = {
  id: number
  name: string
  catalogNumber: string
  /** Pozycja pozioma hotspotu względem szerokości obrazka (0–100). */
  leftPercent: number
  /** Pozycja pionowa hotspotu względem wysokości obrazka (0–100). */
  topPercent: number
}

export const partsData: PartRecord[] = [
  {
    id: 1,
    name: 'Cylinder housing R/H',
    catalogNumber: '345202',
    leftPercent: 22,
    topPercent: 38,
  },
  {
    id: 2,
    name: 'Cylinder housing L/H',
    catalogNumber: '345201',
    leftPercent: 48,
    topPercent: 42,
  },
  {
    id: 3,
    name: 'Shaft tipping arm R/H',
    catalogNumber: '30117',
    leftPercent: 72,
    topPercent: 55,
  },
]
