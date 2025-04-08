'use client'
import Image from 'next/image'
import stores from '@/assets/icons Background Removed.png'
import { FooterColumn } from './types'

export const footerColumns: FooterColumn[] = [
  {
    title: 'Product',
    links: [
      { label: 'Overview' },
      { label: 'Features' },
      { label: 'Solutions', isNew: true },
      { label: 'Tutorials' },
      { label: 'Pricing' },
      { label: 'Releases' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About us' },
      { label: 'Careers' },
      { label: 'Press' },
      { label: 'News' },
      { label: 'Media kit' },
      { label: 'Contact' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Blog' },
      { label: 'Newsletter' },
      { label: 'Events' },
      { label: 'Help centre' },
      { label: 'Tutorials' },
      { label: 'Support' },
    ],
  },
  {
    title: 'Social',
    links: [
      { label: 'Twitter' },
      { label: 'LinkedIn' },
      { label: 'Facebook' },
      { label: 'GitHub' },
      { label: 'AngelList' },
      { label: 'Dribbble' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Terms' },
      { label: 'Privacy' },
      { label: 'Cookies' },
      { label: 'Licenses' },
      { label: 'Settings' },
      { label: 'Contact' },
    ],
  },
]

export const Footer = () => {
  return (
    <div className="my-10">
      <div className="w-full flex flex-wrap justify-between px-4 py-10">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-10">
          {footerColumns.map((column, index) => (
            <div key={index} className='w-[full] md:w-[150px] lg:w-[200px] xl:w-[180px]'>
              <div className="text-sm font-bold text-gray-900 mb-4">
                {column.title}
              </div>
              <div className="space-y-2">
                {column.links.map((link, i) => (
                  <li key={i} className="text-sm text-violet-600 font-semibold hover:underline flex items-center gap-1">
                    {link.label}
                    {link.isNew && (
                      <span className="text-xs border border-violet-400 rounded-full px-2 py-0.5 text-violet-600 ml-1">
                        New
                      </span>
                    )}
                  </li>
                ))}
              </div>
            </div>
          ))}

        </div>

        <div className="flex flex-col gap-4 py-5">
            <h4 className="text-sm font-semibold text-gray-900 mb-2">Get the app</h4>
            <div>
              <Image
                src={stores}
                alt="Download on the App Store"
                width={120}
                height={60}
              />
            </div>
        </div>

        {/* Bottom bar */}
      </div>
        <div className="px-4 py-10 mt-10 pt-6 border-t flex flex-wrap items-center justify-between text-sm text-gray-500">
          <div className="flex items-center gap-2">
            <span className="font-medium text-gray-900">Untitled UI</span>
          </div>
          <p>© 2077 Untitled UI. All rights reserved.</p>
        </div>
    </div>
  )
}