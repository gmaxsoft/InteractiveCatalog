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
    leftPercent: 68,
    topPercent: 14.2,
  },
  {
    id: 2,
    name: 'Cylinder housing L/H',
    catalogNumber: '345201',
    leftPercent: 27.1,
    topPercent: 33.7,
  },
  {
    id: 3,
    name: 'Shaft tipping arm R/H',
    catalogNumber: '30117',
    leftPercent: 83,
    topPercent: 19.3,
  },
  {
    id: 4,
    name: 'Shaft tipping arm L/H',
    catalogNumber: '30116',
    leftPercent: 11.5,
    topPercent: 50,
  },
  {
    id: 5,
    name: 'Strip locking',
    catalogNumber: '30128',
    leftPercent: 43.3,
    topPercent: 54.1,
  },
  {
    id: 6,
    name: 'Shaft',
    catalogNumber: '38834',
    leftPercent: 84,
    topPercent: 41.3,
  },
  {
    id: 7,
    name: 'Essieu',
    catalogNumber: '345127',
    leftPercent: 59.4,
    topPercent: 64.8,
  },
  {
    id: 8,
    name: 'Locking plate',
    catalogNumber: '341246',
    leftPercent: 53.9,
    topPercent: 67.1,
  },
  {
    id: 9,
    name: 'Footboard mounting',
    catalogNumber: '345294',
    leftPercent: 21.5,
    topPercent: 85.7,
  }
]
