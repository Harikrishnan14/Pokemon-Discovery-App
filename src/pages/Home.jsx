import { useQueries, useQuery } from '@tanstack/react-query'
import React, { useEffect, useState } from 'react'
import PokemonCard from '../components/PokemonCard'

const Home = () => {
    const [pokemonDetails, setPokemonDetails] = useState([]);

    const getPokemonList = async () => {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=6')
        return await response.json()
    }

    const {
        data: list,
        isLoading: listLoading
    } = useQuery({
        queryKey: ['pokemon-list', 6],
        queryFn: getPokemonList,
    });

    useEffect(() => {
        const fetchPokemonDetails = async () => {
            if (list?.results?.length) {
                const detailPromises = list.results.map((pokemon) =>
                    fetch(pokemon.url).then((res) => res.json())
                );

                try {
                    const results = await Promise.all(detailPromises);
                    setPokemonDetails(results);
                } catch (err) {
                    console.error('Error fetching pokemon details:', err);
                }
            }
        };

        fetchPokemonDetails();
    }, [list]);

    console.log(pokemonDetails);

    if (listLoading) {
        return (
            <div className="flex items-center justify-center mt-8 gap-3">
                <p className="text-center text-white text-lg">Loading more Pokemon...</p>
                <div className="w-6 h-6 border-3 border-white border-t-transparent rounded-full animate-spin"></div>
            </div>
        );
    }

    return (
        <section className="text-gray-600 body-font h-full overflow-y-auto">
            <div className="container px-8 md:px-18 md:py-12 py-12 mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {pokemonDetails.map((item) => (
                        <PokemonCard key={item.id} info={item} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Home