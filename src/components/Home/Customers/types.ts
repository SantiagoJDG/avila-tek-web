import { StaticImageData } from "next/image"

export interface Customer {
  name: string
  role: string
  agency: string
  image: StaticImageData
  quote?: string
}