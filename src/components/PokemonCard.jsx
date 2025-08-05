import React, { useEffect, useState } from 'react'
import { useOutletContext } from 'react-router-dom';

const PokemonCard = ({ info }) => {
    const [isSaved, setIsSaved] = useState(false);
    const { setSavedCount } = useOutletContext()

    const handleToggleSave = () => {
        const storedPokemons = JSON.parse(localStorage.getItem('savedPokemon')) || [];

        const exists = storedPokemons.some((p) => p.id === info.id);

        let updated;
        if (exists) {
            updated = storedPokemons.filter((p) => p.id !== info.id);
        } else {
            updated = [...storedPokemons, info];
        }
        localStorage.setItem('savedPokemon', JSON.stringify(updated));
        setIsSaved(!exists);
        setSavedCount(updated?.length)
    };

    useEffect(() => {
        const saved = JSON.parse(localStorage.getItem('savedPokemon')) || [];
        setIsSaved(saved.some((p) => p.id === info.id));
        setSavedCount(saved?.length)
    }, [info.id]);

    const typeStyles = {
        normal: { bg: 'bg-gray-400', emoji: '🔘' },
        fighting: { bg: 'bg-red-700', emoji: '🥊' },
        flying: { bg: 'bg-sky-300', emoji: '🕊️' },
        poison: { bg: 'bg-purple-500', emoji: '☠️' },
        ground: { bg: 'bg-yellow-700', emoji: '🌍' },
        rock: { bg: 'bg-yellow-600', emoji: '🪨' },
        bug: { bg: 'bg-green-600', emoji: '🐛' },
        ghost: { bg: 'bg-indigo-700', emoji: '👻' },
        steel: { bg: 'bg-gray-500', emoji: '⚙️' },
        fire: { bg: 'bg-red-500', emoji: '🔥' },
        water: { bg: 'bg-blue-400', emoji: '💧' },
        grass: { bg: 'bg-green-500', emoji: '🌿' },
        electric: { bg: 'bg-yellow-300', emoji: '⚡' },
        psychic: { bg: 'bg-pink-400', emoji: '🔮' },
        ice: { bg: 'bg-blue-200', emoji: '❄️' },
        dragon: { bg: 'bg-indigo-500', emoji: '🐉' },
        dark: { bg: 'bg-gray-800', emoji: '🌑' },
        fairy: { bg: 'bg-pink-300', emoji: '🧚' },
        stellar: { bg: 'bg-yellow-500', emoji: '🌟' },
        unknown: { bg: 'bg-gray-600', emoji: '❓' },
    };

    return (
        <div
            className="bg-white rounded-xl p-6 relative shadow-md h-68"
        >
            <button
                className={`absolute top-4 right-4 ${isSaved ? "bg-red-500" : "bg-green-500"}  rounded-full w-8 h-8 flex items-center justify-center hover:cursor-pointer ${isSaved ? "hover:bg-red-400" : "hover:bg-green-400"} ease-linear transition`}
                onClick={handleToggleSave}
            >
                <span className='text-white font-bold text-xl -mt-1.5'>
                    {isSaved ? "x" : "+"}
                </span>
            </button>
            <div className="flex justify-center">
                <div className="w-22 h-22 rounded-full bg-gradient-to-tr from-pink-500 to-purple-500 flex items-center justify-center">
                    <span className='text-3xl'>
                        {typeStyles[info?.types[0].type?.name].emoji}
                    </span>
                </div>
            </div>
            <h2 className="text-center font-bold text-xl text-gray-900 mt-4">
                {info.name.charAt(0).toUpperCase() + info.name.slice(1)}
            </h2>
            <div className="flex justify-center gap-2 my-2">
                {info?.types.map((type) => {
                    const typeName = type?.type?.name;
                    const bgColor = typeStyles[typeName].bg || 'bg-gray-400';

                    return (
                        <span
                            key={type?.slot}
                            className={`${bgColor} text-white text-xs px-3 py-1 rounded-full font-bold`}
                        >
                            {type.type.name.charAt(0).toUpperCase() + type.type.name.slice(1)}
                        </span>
                    )
                })}
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