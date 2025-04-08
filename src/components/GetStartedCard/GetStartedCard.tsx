'use client'

import Image from 'next/image'
import image5 from '@/assets/image-5.jpeg'

export const GetStartedCard = () => {

    return (
    <div className='py-5'>

      <div className="flex flex-col w-full h-[20rem] md:h-[20rem] lg:h-[20rem] xl:h-[20rem] md:flex-row rounded-2xl my-10">
        {/* Text */}
        <div className=" w-6/7 flex flex-col justify-center overflow-hidden rounded-l-2xl md:w-1/2 lg:w-4/5 xl:w-4/5 bg-[#53389E] text-white  md:p-10">
            <div className="text-center md:text-left space-y-6 p-10">
            <h2 className="text-2xl md:text-4xl xl:text-5xl font-semibold text-white">
                Give us a shot
            </h2>
            <p className="text-gray-600 text-lg text-white">
                Join over 4,000+ startups already growing with Untitled.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <button className="px-5 py-3 border border-gray-300 text-gray-700 rounded-md text-sm font-medium bg-white hover:bg-gray-100">
                Learn more
                </button>
                <button className="px-5 py-3 bg-[#7F56D9] text-white rounded-md text-sm font-medium hover:bg-[#6941C6]">
                Get started
                </button>
            </div>
            </div>
        </div> 
        {/* Image */}
        <div className="w-1/2 relative rounded-r-2xl overflow-hidden">
          <Image
            src={image5}
            alt={'Laughing person'}
            layout='fill'
            objectFit="cover"
            className="object-cover"
          />
        </div>

      </div>
    </div>
    )
    
}