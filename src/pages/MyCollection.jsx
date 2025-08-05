import React, { useEffect, useState } from 'react'
import PokemonCard from '../components/PokemonCard';
import { useOutletContext } from 'react-router-dom';

const MyCollection = () => {

    const { savedCount } = useOutletContext();
    const [data, setData] = useState([])

    useEffect(() => {
        const myData = JSON.parse(localStorage.getItem('savedPokemon')) || []
        setData(myData);
    }, [savedCount])

    return (
        <section className="text-gray-600 body-font h-full overflow-y-auto">
            <div className="container px-8 md:px-18 md:py-12 py-12 mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {data.map((item) => (
                        <PokemonCard key={item.id} info={item} />
                    ))}
                </div>
            </div>
            {savedCount === 0 && <p className='text-center text-white text-lg'>Nothing to see here!</p>}
        </section>
    )
}

export default MyCollection