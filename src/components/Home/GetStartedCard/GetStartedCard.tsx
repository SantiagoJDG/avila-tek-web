'use client'

import Image from 'next/image'
import image5 from '@/assets/image-5.jpeg'
import { SecondaryButton } from '@/components/shared/Buttons/SecondaryButton/SecondaryButton'
import { PrimaryButton } from '@/components/shared/Buttons/PrimaryButton/PrimaryButton'

export const GetStartedCard = () => {
  return (
    <div className="py-5 px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row w-full overflow-hidden rounded-2xl bg-[#53389E] text-white xl:h-[20rem]">
        
        <div className="w-full md:w-4/6 p-8 sm:p-10 flex flex-col justify-center">
          <div className="text-center md:text-left space-y-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl xl:text-4xl font-semibold">
              Give us a shot
            </h2>
            <p className="text-[#E9D7FE] text-base sm:text-lg">
              Join over 4,000+ startups already growing with Untitled.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <SecondaryButton content='Learn more' />
              <PrimaryButton content='Get started' />
            </div>
          </div>
        </div>

        <div className="relative w-full md:w-1/2 h-64 md:h-auto">
          <Image
            src={image5}
            alt="Laughing person"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </div>
  )
}