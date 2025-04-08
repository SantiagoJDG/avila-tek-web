import Image from 'next/image'
import { StarIcon } from '@heroicons/react/20/solid'
import girl from '@/assets/girl.jpeg'
import { Testimonial } from './types'


const testimonial: Testimonial = {
  image: girl,
  name: 'Renee Wells',
  role: 'Product Designer, Quotient',
  message:
    'Love the simplicity of the service and the prompt customer support. We can’t imagine working without it.',
}

export const TestimonialCard = () => {
  return (
    <div className='p-10 rounded-2xl overflow-hidden'>

      <div className="flex flex-col w-full h-[20rem] md:h-[25rem] lg:h-[25rem] xl:h-[25rem] md:flex-row rounded-2xl my-10">
        {/* Image */}
        <div className="w-full w-1/2 md:h-auto relative overflow-hidden rounded-l-2xl">
          <Image
            src={testimonial.image}
            alt={testimonial.name}
            layout='fill'
            objectFit="cover"
            className="object-cover"
          />
        </div>
        {/* Text */}
        <div className="flex flex-col justify-center overflow-hidden rounded-r-2xl gap-4 w-full md:w-1/2 lg:w-4/5 xl:w-4/5 bg-[#53389E] text-white p-6 md:p-10">
            {/* Stars */}
            <div className="flex gap-1 text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <StarIcon key={i} className="h-5 w-5" />
              ))}
            </div>

            {/* Message */}
            <p className="text-2xl md:text-xl lg:text-2xl xl:text-3xl ">
              {testimonial.message}
            </p>

          {/* Author */}
          <div className="mt-6">
            <p className="text-sm font-semibold">{`— ${testimonial.name}`}</p>
            <p className="text-sm text-white/80">{testimonial.role}</p>
          </div>

          {/* Pagination dots */}
          <div className="flex gap-2 mt-6">
            <span className="h-2 w-2 rounded-full bg-white/70" />
            <span className="h-2 w-2 rounded-full bg-white/30" />
            <span className="h-2 w-2 rounded-full bg-white/30" />
          </div>
        </div>
      </div>
    </div>
  )
}