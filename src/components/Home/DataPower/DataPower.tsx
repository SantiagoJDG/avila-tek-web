export const DataPower = () => {
  const dataValues = [
    {
      number: '400+',
      description: 'Projects completed',
    },
    {
      number: '600%',
      description: 'Return of investment',
    },
    {
      number: '10k',
      description: 'Global downloads',
    },
  ]

  return (
    <div className="py-10">
      {/* Heading */}
      <div className="flex flex-col items-center justify-center gap-6 mb-10 text-center max-w-4xl mx-auto">
        <p className="text-3xl md:text-4xl font-bold">
          Unleash the full power of data
        </p>
        <p className="text-gray-500 text-sm sm:text-base md:text-lg px-2 sm:px-6 md:px-8">
          Everything you need to convert, engage, and retain more users.
        </p>
      </div>

      {/* Data Cards */}
      <div className="flex flex-wrap justify-around bg-gray-50 rounded-xl">
        {dataValues.map((data, index) => (
          <div
            key={index}
            className="flex flex-col items-center gap-3 p-5"
          >
            <p className="text-5xl md:text-6xl font-bold text-[#7F56D9]">{data.number}</p>
            <p className="text-sm font-bold text-center">{data.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}