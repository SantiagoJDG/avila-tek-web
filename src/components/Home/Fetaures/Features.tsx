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
        <div className="my-10">
            <div className="flex flex-col items-center justify-center gap-6 w-100% h-full m-10">
                    <p className="text-3xl font-bold text-center">
                        Cutting-edge features for advanced analytics
                    </p>
                    <p className="text-center text-gray-500 text-sm sm:text-base md:text-lg px-4 md:w-full lg:w-2/5 xl:w-2/3">
                        Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups.
                    </p>
            </div>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-3 p-5'>
                {features.map((feature: Feature, index: number) => (
                        <div className='flex flex-col items-center justify-center gap-5 p-4' key={index}>
                            <div>
                                {feature.icon}
                            </div>
                            <p className='text-center font-bold text-sm sm:text-base md:text-lg  px-4'>
                                {feature.name}
                            </p>
                            <p className='text-center text-sm sm:text-base md:text-md text-gray-500 px-4'>
                                {feature.description}
                            </p>
                            <div className='flex flex-row items-center justify-center'>
                            <p className='text-[#6941C6]'>
                                Learn more
                            </p>
                            <ArrowRightIcon className='h-4 w-4 text-[#6941C6] ml-2' />
                            </div>
                        </div>
                    ))}
            </div>
        </div>
    )
    
}