import React from 'react'

const PokemonCard = ({ info }) => {
    return (
        <div
            className="bg-white rounded-xl p-6 relative shadow-md h-68"
        >
            <button className="absolute top-4 right-4 bg-green-500 rounded-full w-8 h-8 flex items-center justify-center hover:cursor-pointer hover:bg-green-400 ease-linear transition">
                <span className='text-white font-bold text-xl -mt-1.5'>+</span>
            </button>
            <div className="flex justify-center">
                <div className="w-22 h-22 rounded-full bg-gradient-to-tr from-pink-500 to-purple-500 flex items-center justify-center">
                    <span className='text-3xl'>
                        🔥
                    </span>
                </div>
            </div>
            <h2 className="text-center font-bold text-xl text-gray-900 mt-4">
                {info.name}
            </h2>
            <div className="flex justify-center gap-2 my-2">
                {info?.types.map((type) => (
                    <span className="bg-red-500 text-white text-xs px-3 py-1 rounded-full font-bold">
                        {type.type.name}
                    </span>
                ))}
            </div>
            <div className="flex justify-between text-center text-sm mt-4">
                <div>
                    <p className="text-indigo-500 font-bold text-lg">{info?.stats[0]?.base_stat}</p>
                    <p className="text-gray-500 font-normal">HP</p>
                </div>
                <div>
                    <p className="text-indigo-500 font-bold text-lg">{info?.stats[1]?.base_stat}</p>
                    <p className="text-gray-500 font-normal">Attack</p>
                </div>
                <div>
                    <p className="text-indigo-500 font-bold text-lg">{info?.stats[2]?.base_stat}</p>
                    <p className="text-gray-500 font-normal">Defense</p>
                </div>
            </div>
        </div>
    )
}

export default PokemonCard