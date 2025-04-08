'use client';

import { ChevronDownIcon, Bars3Icon } from '@heroicons/react/24/solid';
import Navigation from './types';

export const Header = () => {
  const navigation: Navigation[] = [
    { name: 'Home', href: '#' },
    {
      name: 'Products',
      href: '#',
      icon: <ChevronDownIcon className="h-4 w-4" />,
    },
    {
      name: 'Resources',
      href: '#',
      icon: <ChevronDownIcon className="h-4 w-4" />,
    },
    { name: 'Pricing', href: '#' },
  ];

  return (
    <div className="w-full flex items-center justify-between px-5 py-4">

      <div className="text-2xl font-bold">
        Untitled UI
      </div>

      <div className="flex flex-1 items-center justify-between gap-6 pl-5">
        <div className="hidden md:flex gap-6 pl-3">
          {navigation.map((option, index) => (
            <div key={index} className="flex items-center gap-2">
              <a
                className="text-base leading-6 font-inter bold text-gray-700 hover:text-gray-900 transition"
                href={option.href}
              >
                {option.name}
              </a>
              <div>{option.icon}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="hidden sm:flex items-center gap-4 ml-4">
        <button className="px-4 py-2 text-sm font-medium">
          Log in
        </button>
        <button className="bg-[#7F56D9] text-white border border-[#7F56D9] rounded-md px-4 py-2 text-sm font-medium">
          Sign up
        </button>

      </div>

        <div className="block md:hidden ml-auto">
          <Bars3Icon className="h-6 w-6 text-gray-700" />
        </div>

    </div>
  );
};