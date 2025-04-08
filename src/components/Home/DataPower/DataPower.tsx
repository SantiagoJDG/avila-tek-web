export const DataPower = () => { 

    const dataValues = [
        {
            number: '400+',
            description: 'Projects completed'
        },
        {
            number: '600%',
            description: 'Return of investment'
        },
        {
            number: '10k',
            description: 'Global downloads'
        },
    ]

    return (
        <div className="py-10">
            <div className="flex flex-col items-center justify-center gap-6 w-100% h-full m-10">
                    <p className="text-3xl font-bold text-center">
                        Unleash the full power of data
                    </p>
                    <p className="text-center text-gray-500 text-sm sm:text-base md:text-lg px-4 md:w-full lg:w-2/5 xl:w-2/3">
                        Everything you need to convert, engage, and retain more users.
                    </p>
            </div>

            <div className="flex justify-around flex-wrap gap-5 bg-gray-50 rounded-xl m-10 p-5">
                {dataValues.map((data, index) => (
                    <div key={index} className="flex flex-col items-center gap-3 p-5">
                        <p className="text-6xl font-bold text-[#7F56D9]">{data.number}</p>
                        <p className="text-sm font-bold text-center">{data.description}</p>
                    </div>
                ))}
            </div>
        </div>
    )
    
}