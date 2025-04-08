import Image from 'next/image'
import person1 from '@/assets/person-1.jpeg'
import person2 from '@/assets/person-2.jpeg'
import girl from '@/assets/girl.jpeg'
import { ArrowLeftCircleIcon, ArrowRightCircleIcon } from '@heroicons/react/24/outline'
import { StarIcon } from '@heroicons/react/20/solid'
import { Customer } from './types'

const customers: Customer[] = [
  {
    name: 'Alisa Hester',
    role: 'PM, Hourglass',
    agency: 'Web Design Agency',
    image: girl,
  },
  {
    name: 'Rich Wilson',
    role: 'COO, Command+R',
    agency: 'Web Development Agency',
    image: person2,
    quote: '“We’ve really sped up our workflow using Untitled.”',
  },
  {
    name: 'Annie Stanley',
    role: 'Designer, Catalog',
    agency: 'UX Agency',
    image: person1,
    }, 
  
]


export const Customers = () => {

    return (

        <div className="flex flex-col w-full py-10">

            <div className="flex flex-col justify-between gap-3 w-full">
                <div className="flex flex-col gap-6 mb-10">
                    <div className="flex flex-row justify-between"> 
                        
                        <p className="text-3xl md:text-4xl font-semibold">
                            Don’t just take our word for it
                        </p>
                    
                        <div className="flex flex-row sm:flex-row gap-4 justify-center md:justify-start">
                            <button className="px-5 py-3 border border-gray-300 text-gray-700 rounded-md text-sm font-medium bg-white hover:bg-gray-100">
                              Our Customers
                            </button>
                            
                            <button className="px-5 py-3 bg-[#7F56D9] text-white rounded-md text-sm font-medium hover:bg-[#6941C6]">
                              Create account
                            </button>
                        </div>
                    </div>
                    <p className="text-gray-500 text-sm sm:text-base md:text-lg">
                        Hear from some of our amazing customers who are automating their finances.
                    </p>
                </div>
            </div>

            <div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 justify-items-center">
                    {customers.map((customer, index) => (
                        <div
                          key={index}
                          className="relative w-full h-[20rem]"
                        >
                          <Image
                            src={customer.image}
                            alt={customer.name}
                            fill
                            className="object-cover"
                          />

                          {/* Bottom half blurred content with margin */}
                          <div className="absolute bottom-0 left-0 w-full px-5 pb-5">
                            <div className="bg-black/40 backdrop-blur-sm text-white p-5 ">
                              {customer.quote && (
                                <p className="text-sm italic mb-2">{customer.quote}</p>
                              )}

                              <div className="flex gap-1 text-yellow-400 mb-1">
                                {Array.from({ length: 5 }).map((_, i) => (
                                  <StarIcon key={i} className="w-4 h-4" />
                                ))}
                              </div>
                            
                              <p className="font-semibold text-lg">{customer.name}</p>
                            
                              <p className="text-sm">
                                {customer.role}
                                <br />
                                <span className="text-white/80">{customer.agency}</span>
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                </div>
                <div className='flex flex-row gap-4 justify-start py-5'>
                      <ArrowLeftCircleIcon className="w-10 h-10 text-gray-500" />
                      <ArrowRightCircleIcon className="w-10 h-10 text-gray-500" />
                </div>
            </div>

        </div>
        
    )

}