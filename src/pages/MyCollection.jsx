import React from 'react'

const MyCollection = () => {
    return (
        <section className="text-gray-600 body-font h-full overflow-y-auto">
            <div className="container px-8 md:px-18 md:py-12 py-12 mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {Array.from({ length: 6 }).map((_, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-xl p-6 relative shadow-md h-68"
                        >
                            <button className="absolute top-4 right-4 bg-red-500 rounded-full w-8 h-8 flex items-center justify-center hover:cursor-pointer hover:bg-red-400 ease-linear transition">
                                <span className='text-white font-bold text-sm -mt-0.5'>X</span>
                            </button>
                            <div className="flex justify-center">
                                <div className="w-22 h-22 rounded-full bg-gradient-to-tr from-pink-500 to-purple-500 flex items-center justify-center">
                                    <span className='text-3xl'>
                                        🔥
                                    </span>
                                </div>
                            </div>
                            <h2 className="text-center font-bold text-xl text-gray-900 mt-4">
                                Charizard
                            </h2>
                            <div className="flex justify-center gap-2 my-2">
                                <span className="bg-red-500 text-white text-xs px-3 py-1 rounded-full font-bold">
                                    FIRE
                                </span>
                                <span className="bg-gray-400 text-white text-xs px-3 py-1 rounded-full font-bold">
                                    FLYING
                                </span>
                            </div>
                            <div className="flex justify-between text-center text-sm mt-4">
                                <div>
                                    <p className="text-indigo-500 font-bold text-lg">78</p>
                                    <p className="text-gray-500 font-normal">HP</p>
                                </div>
                                <div>
                                    <p className="text-indigo-500 font-bold text-lg">84</p>
                                    <p className="text-gray-500 font-normal">Attack</p>
                                </div>
                                <div>
                                    <p className="text-indigo-500 font-bold text-lg">78</p>
                                    <p className="text-gray-500 font-normal">Defense</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default MyCollection