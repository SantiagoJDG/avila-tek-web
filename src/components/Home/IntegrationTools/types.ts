import { StaticImageData } from 'next/image'

export interface Tool {
  name: string
  image: StaticImageData // comes from next/image
  description: string
}