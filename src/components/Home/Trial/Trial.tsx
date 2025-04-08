import Image from 'next/image'
import person1 from '@/assets/person-1.jpeg'
import person2 from '@/assets/person-2.jpeg'
import person3 from '@/assets/person-3.png'
import person4 from '@/assets/person-4.jpeg'
import person5 from '@/assets/image-5.jpeg'
import { PrimaryButton } from '@/components/shared/Buttons/PrimaryButton/PrimaryButton'
import { SecondaryButton } from '@/components/shared/Buttons/SecondaryButton/SecondaryButton'

export const Trial = () => {
  return (
    <div className='my-10'>
      <div className="w-full bg-gray-50 py-16 px-10">
        <div className="mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12">
          <div className="text-center md:text-left space-y-6 ml-4">
            <h2 className="text-3xl md:text-4xl xl:text-5xl font-semibold text-gray-900">
              No long-term contracts.<br />No catches.
            </h2>
            <p className="text-gray-600 text-lg">
              Start your 30-day free trial today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <SecondaryButton content='Learn more' />
              <PrimaryButton content='Get started' />
            </div>
          </div>
          <div className="grid grid-cols-3 grid-rows-2 gap-4 justify-center items-center relative w-full max-w-md mx-auto">
            <div className="col-start-2 row-start-1">
              <Image
                src={person1}
                alt="person1"
                width={120}
                height={160}
                className="rounded-lg object-cover"
              />
            </div>
            <div className="col-start-3 row-start-1">
              <Image
                src={person2}
                alt="person2"
                width={120}
                height={160}
                className="rounded-lg object-cover"
              />
            </div>
            <div className="col-start-1 row-start-2">
              <Image
                src={person3}
                alt="person3"
                width={120}
                height={160}
                className="rounded-lg object-cover"
              />
            </div>
            <div className="col-start-2 row-start-2">
              <Image
                src={person4}
                alt="person4"
                width={120}
                height={160}
                className="rounded-lg object-cover"
              />
            </div>
            <div className="col-start-3 row-start-2">
              <Image
                src={person5}
                alt="person5"
                width={120}
                height={160}
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}