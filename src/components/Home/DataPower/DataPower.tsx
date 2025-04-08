import { SecondaryTitle } from "@/components/shared/SecondaryTitle"

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
      <SecondaryTitle
        title='Unleash the full power of data'
        subtitle='Everything you need to convert, engage, and retain more users.'
      />

      <div className="flex flex-wrap justify-around items-center bg-gray-50 rounded-xl xl:h-[15rem]">
        {dataValues.map((data, index) => (
          <div
            key={index}
            className="flex flex-col items-center gap-3 p-5"
          >
            <p className="text-4xl md:text-6xl font-semibold text-[#7F56D9]">{data.number}</p>
            <p className="text-sm font-bold text-center">{data.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}