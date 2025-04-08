import { Feature } from "./types"
import {
  ChatBubbleLeftRightIcon,
  RocketLaunchIcon,
  PresentationChartLineIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline'

export const Features = () => {

  const features: Feature[] = [
    {
      name: 'Share team inboxes',
      description: 'Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.',
      icon: <ChatBubbleLeftRightIcon className="h-8 w-8" />,
    },
    {
      name: 'Deliver instant answers',
      description: 'An all-in-one customer service platform that helps you balance everything your customers need to be happy.',
      icon: <RocketLaunchIcon className="h-8 w-8" />,
    },
    {
      name: 'Manage your team with reports',
      description: 'Measure what matters with Untitled’s easy-to-use reports. You can filter, export, and drilldown on the data in a couple clicks.',
      icon: <PresentationChartLineIcon className="h-8 w-8" />,
    },
  ]

  return (
    <section className="my-10 px-4 sm:px-6">
      {/* Title + Description */}
      <div className="flex flex-col items-center justify-center gap-6 text-center mb-10 max-w-4xl mx-auto">
        <p className="text-3xl font-bold">
          Cutting-edge features for advanced analytics
        </p>
        <p className="text-gray-500 text-sm sm:text-base md:text-lg px-2 sm:px-6 lg:px-8">
          Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups.
        </p>
      </div>

      {/* Feature Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {features.map((feature: Feature, index: number) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center text-center gap-5 p-6"
          >
            <div>{feature.icon}</div>

            <p className="font-bold text-sm sm:text-base md:text-lg px-4">
              {feature.name}
            </p>

            <p className="text-sm sm:text-base md:text-md text-gray-500 px-4">
              {feature.description}
            </p>

            <div className="flex flex-row items-center justify-center">
              <p className="text-[#6941C6]">Learn more</p>
              <ArrowRightIcon className="h-4 w-4 text-[#6941C6] ml-2" />
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}