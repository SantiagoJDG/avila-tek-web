'use client'

import { useState } from 'react'
import { PlusCircleIcon, MinusCircleIcon } from '@heroicons/react/24/outline'
import { FaqItem } from './types'
import { SecondaryTitle } from '@/components/shared/SecondaryTitle'

const faqData: FaqItem[] = [
  {
    question: 'Is there a free trial available?',
    answer: 'Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.',
  },
  {
    question: 'Can I change my plan later?',
    answer: 'Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.',
  },
  {
    question: 'What is your cancellation policy?',
    answer: 'Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.',
  },
  {
    question: 'Can other info be added to an invoice?',
    answer: 'Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.',
  },
  {
    question: 'How does billing work?',
    answer: 'Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.',
  },
  {
    question: 'How do I change my account email?',
    answer: 'Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.',
  },
]

export const FrequentQuestions = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggle = (index: number) => {
    setOpenIndex(prev => (prev === index ? null : index))
  }

    return (
      <div className='py-10'>
            <SecondaryTitle
              title='Frequently asked questions'
              subtitle='Everything you need to know about the product and billing.'
            /> 
            <div className="max-w-3xl mx-auto p-4 rounded-xl">
            {faqData.map((item, index) => (
                <div key={index} className="border-b">
                <button
                    className="w-full flex justify-between items-center py-4 text-left"
                    onClick={() => toggle(index)}
                >
                    <div className="font-medium text-base">{item.question}</div>
                    {openIndex === index ? (
                    <PlusCircleIcon className="w-5 h-5 text-gray-500" />
                    ) : (
                    <MinusCircleIcon className="w-5 h-5 text-gray-500" />
                    )}
                </button>

                <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openIndex === index ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                >
                    <p className="text-gray-600 text-sm pb-4 pr-6">{item.answer}</p>
                </div>
                </div>
            ))}
            </div>
      </div>
  )
}