export const PrincipalCard = () => {
  return (
    <>
      {/* Hero section */}
      <div className="mt-10 flex flex-col items-center w-full rounded-xl bg-[#53389E] border gap-6 px-4 py-10 md:py-16 lg:h-[60%] xl:h-[30rem]">
        <div className="flex flex-col items-center justify-center gap-6 w-full max-w-3xl">
          {/* Title */}
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-white">
              Grow your users.
            </h1>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-[#E9D7FE]">
              Smarter.
            </h1>
          </div>

          {/* Description */}
          <p className="text-sm sm:text-base md:text-lg text-[#E9D7FE] text-center px-4">
            Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups.
          </p>

          {/* Input + Button */}
          <div className="w-full flex flex-col sm:flex-row justify-center items-center gap-4 px-4">
            <div className="flex flex-col">           
              <div className="flex flex-row gap-4">
                  <input
                    type="text"
                    placeholder="Enter your email"
                    className="w-full sm:w-[335px] h-12 px-[14px] py-[14px] border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[#7F56D9]"
                  />
                  <button className="bg-[#7F56D9] text-white border border-[#7F56D9] rounded-md px-4 py-2 text-sm font-medium w-full sm:w-auto">
                    Get started
                  </button>
              </div>
                <p className="text-xs text-[#E9D7FE] mt-2">
                    We care about your data in our privacy policy.
                </p>
            </div>
          </div>
        </div>
      </div>

      {/* Card section */}
      <div className="flex justify-center md:-mt-8 lg:-mt-12 xl:-mt-18 px-4">
        <div className="w-full max-w-[800px] p-6 sm:p-10 sm: bg-white border border-[#EAECF0] rounded-xl shadow-[0px_24px_48px_-12px_#1018282E]">
          <h2 className="text-lg sm:text-xl font-semibold mb-4">Card Title</h2>
          <p className="text-gray-600 text-sm sm:text-base">
            This is your responsive card content based on the Figma design.
          </p>
           <h2 className="text-lg sm:text-xl font-semibold mb-4">Card Title</h2>
          <p className="text-gray-600 text-sm sm:text-base">
            This is your responsive card content based on the Figma design.
                  </p>
           <h2 className="text-lg sm:text-xl font-semibold mb-4">Card Title</h2>
          <p className="text-gray-600 text-sm sm:text-base">
            This is your responsive card content based on the Figma design.
          </p>
        </div>
      </div>

      {/* Circle Decoration */}
      <div className="flex justify-center -mt-16">
        <div className="flex items-center justify-end px-4 w-full max-w-[900px]">
          <div className="w-[120px] sm:w-[170px] h-[120px] sm:h-[170px] rounded-full p-6 bg-purple-500 flex items-center justify-center gap-10" />
        </div>
      </div>
    </>
  );
};