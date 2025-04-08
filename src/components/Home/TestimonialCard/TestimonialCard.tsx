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
    <div className="p-4 sm:p-6 md:p-10">
      <div className="flex flex-col md:flex-row w-full rounded-2xl overflow-hidden bg-[#53389E] text-white xl:h-[25rem]">
        {/* Image */}
        <div className="relative w-full h-64 md:w-1/2 md:h-auto">
          <Image
            src={testimonial.image}
            alt={testimonial.name}
            fill
            className="object-cover"
          />
        </div>

        {/* Text */}
        <div className="flex flex-col justify-center gap-4 w-full md:w-1/2 p-6 sm:p-8 md:p-10">
          {/* Stars */}
          <div className="flex gap-1 text-yellow-400">
            {Array.from({ length: 5 }).map((_, i) => (
              <StarIcon key={i} className="h-5 w-5" />
            ))}
          </div>

          {/* Message */}
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl leading-relaxed">
            {testimonial.message}
          </p>

          {/* Author */}
          <div>
            <p className="text-sm font-semibold">{`— ${testimonial.name}`}</p>
            <p className="text-sm text-white/80">{testimonial.role}</p>
          </div>

          {/* Pagination dots */}
          <div className="flex gap-2 mt-4">
            <span className="h-2 w-2 rounded-full bg-white/70" />
            <span className="h-2 w-2 rounded-full bg-white/30" />
            <span className="h-2 w-2 rounded-full bg-white/30" />
          </div>
        </div>
      </div>
    </div>
  )
}