import { StaticImageData } from 'next/image'

export interface Testimonial  {
  image: StaticImageData
  name: string
  role: string
  message: string
}
