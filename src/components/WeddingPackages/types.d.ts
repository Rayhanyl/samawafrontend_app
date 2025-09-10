export type Tshow = 'popular' | 'newest'

import { TBonus } from '@/components/Bonus/types'
import { TCity } from '@/components/Cities/types'
import { TTestimonials } from '@/components/Testimonials/types'
import { TOrganizer } from '@/components/WeddingOrganizers/types'

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
  photos: { id: number; photo: stirng }[]
  weddingBonusPackages: { id: number; bonusPackage: TBonus }[]
  weddingTestimonials: TTestimonials[]
}