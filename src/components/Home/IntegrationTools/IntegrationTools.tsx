import Image from 'next/image'
import dropbox from '@/assets/dropbox.png'
import google_drive from '@/assets/google_drive.png'
import intercom from '@/assets/intercom.png'
import jira_new from '@/assets/jira-new.png'
import notion from '@/assets/notion.jpg'
import slack from '@/assets/slack.png'
import { ArrowRightIcon } from '@heroicons/react/24/outline'
import { Tool } from './types'

export const IntegrationTools = () => { 

    const tools: Tool[] = [
        {
            name: 'Dropbox integration',
            image: dropbox,
            description: 'Work faster and smarter by integrating directly with Notion, right in the app..',
        },
        {
            name: 'Google Drive integration',
            image: google_drive,
            description: 'Work faster and smarter by integrating directly with Notion, right in the app..',
        },
        {
            name: 'Intercom integration',
            image: intercom,
            description: 'Work faster and smarter by integrating directly with Notion, right in the app..',
        },
        {
            name: 'Jira integration',
            image: jira_new,
            description: 'Work faster and smarter by integrating directly with Notion, right in the app..',
        },
        {
            name: 'Notion integration',
            image: notion,
            description: 'Work faster and smarter by integrating directly with Notion, right in the app..',
        },
        {
            name: 'Slack integration',
            image: slack,
            description: 'Work faster and smarter by integrating directly with Notion, right in the app..',
        },
    ]

    return (
        <div> 
            <div className="flex flex-col items-center gap-6 m-10 w-100%">
                    <p className="text-3xl font-bold text-center">
                        Get more value from your tools
                    </p>
                    <p className="text-center text-sm sm:text-base md:text-lg text-gray-700 px-4 md:3/4 lg:w-1/2 xl:w-1/2">
                        Connect your tools, connect your teams. With over 100 apps already available in our directory, your teams favourite tools are just a click away.
                    </p>
            </div>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-3 p-5'>
                {tools.map((tool: Tool, index: number) => (
                    <div className='flex flex-col items-center justify-center gap-5 p-4' key={index}>
                        <Image
                            src={tool.image}
                            alt={tool.name}
                            className='w-10 h-10'
                        />
                        <p className='text-center font-bold text-sm sm:text-base md:text-lg  px-4'>
                            {tool.name}
                        </p>
                        <p className='text-center text-sm sm:text-base md:text-md text-gray-500 px-4'>
                            {tool.description}
                        </p>
                        <div className='flex flex-row items-center justify-center'>
                        <p className='text-[#6941C6]'>
                            View integration 
                        </p>
                        <ArrowRightIcon className='h-4 w-4 text-[#6941C6] ml-2' />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )    
}