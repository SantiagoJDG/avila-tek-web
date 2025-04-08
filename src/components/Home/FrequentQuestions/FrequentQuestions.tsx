'use client'

import { useState } from 'react'
import { PlusCircleIcon, MinusCircleIcon } from '@heroicons/react/24/outline'
import { FaqItem } from './types'

const faqData: FaqItem[] = [
  {
    question: 'Is there a free trial available?',
    answer: 'Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.',
  },
  {
    question: 'Can I change my plan later?',
    answer: 'Absolutely! You can upgrade, downgrade, or cancel your plan anytime through your dashboard.',
  },
  {
    question: 'What is your cancellation policy?',
    answer: 'You can cancel anytime without penalties. Your subscription will remain active until the end of the billing cycle.',
  },
  {
    question: 'Can other info be added to an invoice?',
    answer: 'Yes, you can add VAT info, company details, and more from your account settings before downloading invoices.',
  },
  {
    question: 'How does billing work?',
    answer: 'We charge monthly or annually, depending on the plan you choose. You can manage billing preferences in your account settings.',
  },
  {
    question: 'How do I change my account email?',
    answer: 'You can update your email in the profile settings. A confirmation email will be sent to the new address.',
  },
]

export const FrequentQuestions = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggle = (index: number) => {
    setOpenIndex(prev => (prev === index ? null : index))
  }

    return (
        <div className='py-10'>
            <div className="flex flex-col items-center justify-center gap-6 mb-10 text-center max-w-4xl mx-auto">
                <p className="text-3xl md:text-4xl font-semibold">
                Frequently asked questions
                </p>
                <p className="text-gray-500 text-sm sm:text-base md:text-lg px-2 sm:px-6 md:px-8">
                Everything you need to know about the product and billing.
                </p>
            </div>
            
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