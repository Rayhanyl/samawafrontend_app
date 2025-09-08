export type Tshow = 'popular' | 'newest'

import { TCity } from '../Cities/types'
import { TOrganizer } from '../WeddingOrganizers/types'

type TPackage = {
  id: number
  name: string
  slug: string
  price: number
  isPopular: 1 | 0
  thumbnail: string
  about: string
  city: TCity
  weddingOrganizer: TOrganizer
}
