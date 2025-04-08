'use client'

import { PrimaryButton } from "@/components/shared/Buttons/PrimaryButton/PrimaryButton";
import { Chart } from "@/components/shared/Charts/LineChart";
import { PieChartHome } from "@/components/shared/Charts/PieChart";
import { QuestionMarkCircleIcon } from "@heroicons/react/24/outline";

export const PrincipalCard = () => {

  return (
    <>

      <div className="mt-10 flex flex-col items-center w-full rounded-xl bg-[#53389E] gap-6 px-4 py-10 md:py-16 lg:h-[60%] xl:h-[30rem]">
        <div className="flex flex-col items-center justify-center gap-6 w-full max-w-3xl">

          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-white">
              Grow your users.
            </h1>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-[#E9D7FE]">
              Smarter.
            </h1>
          </div>


          <p className="text-sm sm:text-base md:text-lg text-[#E9D7FE] text-center px-4">
            Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups.
          </p>


          <div className="w-full flex flex-col sm:flex-row justify-center items-center gap-4 px-4">
            <div className="flex flex-col">           
              <div className="flex flex-row gap-4">
                <div className="flex w-full flex-wrap sm:w-[335px] h-12 border border-gray-300 rounded-md overflow-hidden focus-within:ring-2 focus-within:ring-[#7F56D9]">
                  <input
                    type="text"
                    placeholder="Enter your email"
                    className="flex-1 px-[14px] py-[14px] text-sm focus:outline-none"
                  />
                  <div className="flex items-center justify-center px-3 bg-white">
                    <QuestionMarkCircleIcon className="w-5 h-5 text-gray-400" />
                  </div>
                </div>
                  <PrimaryButton content="Get started" />
              </div>
                <p className="text-xs text-[#E9D7FE] mt-2">
                    We care about your data in our privacy policy.
                </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center md:-mt-8 lg:-mt-12 xl:-mt-18 px-4">
        <div className="w-full max-w-[800px] p-6 sm:p-10 sm: bg-white border border-[#EAECF0] rounded-xl shadow-[0px_24px_48px_-12px_#1018282E]">
          <Chart />
        </div>
      </div>

      <div className="hidden sm:flex justify-center -mt-16">
        <div className="flex items-center justify-end px-4 w-full max-w-[900px]">
          <div className="w-[170px] h-[120px] sm:h-[170px] lg:w-[40%] xl:w-[40%] flex items-center">
            <PieChartHome />
          </div>
        </div>
      </div>

    </>
  );
};