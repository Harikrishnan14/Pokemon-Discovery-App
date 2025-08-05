import { useQuery } from '@tanstack/react-query'
import React, { useEffect, useRef, useState } from 'react'
import PokemonCard from '../components/PokemonCard'

const Home = () => {
    const [pokemonDetails, setPokemonDetails] = useState([]);
    const [nextUrl, setNextUrl] = useState('https://pokeapi.co/api/v2/pokemon?limit=6');
    const [isFetchingMore, setIsFetchingMore] = useState(false);
    const [hasFetchedOnce, setHasFetchedOnce] = useState(false);

    const bottomRef = useRef(null);

    const getPokemonList = async (url) => {
        const response = await fetch(url)
        return await response.json()
    }

    const {
        data: list,
        isLoading: listLoading,
    } = useQuery({
        queryKey: ['pokemon-list', nextUrl],
        queryFn: () => getPokemonList(nextUrl),
        enabled: !!nextUrl && !hasFetchedOnce,
    });

    const fetchDetails = async (results) => {
        const detailPromises = results.map((pokemon) =>
            fetch(pokemon.url).then((res) => res.json())
        );

        const details = await Promise.all(detailPromises);
        setPokemonDetails((prev) => [...prev, ...details]);
    };

    useEffect(() => {
        if (list?.results) {
            fetchDetails(list.results);
            setNextUrl(list.next);
            setHasFetchedOnce(true);
        }
    }, [list]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                const first = entries[0];
                if (first.isIntersecting && nextUrl && !isFetchingMore) {
                    loadMore();
                }
            },
            { threshold: 1 }
        );

        const currentRef = bottomRef.current;
        if (currentRef) observer.observe(currentRef);

        return () => {
            if (currentRef) observer.unobserve(currentRef);
        };
    }, [nextUrl, isFetchingMore]);

    const loadMore = async () => {
        if (!nextUrl) return;

        setIsFetchingMore(true);

        try {
            const nextList = await getPokemonList(nextUrl);
            await fetchDetails(nextList.results);
            setNextUrl(nextList.next);
        } catch (err) {
            console.error('Error loading more Pokémon:', err);
        } finally {
            setIsFetchingMore(false);
        }
    };

    if (listLoading && pokemonDetails.length === 0) {
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
                {isFetchingMore && (
                    <div className="flex items-center justify-center mt-8 gap-3">
                        <p className="text-center text-white text-lg">Loading more Pokemon...</p>
                        <div className="w-6 h-6 border-3 border-white border-t-transparent rounded-full animate-spin"></div>
                    </div>
                )}
                <div ref={bottomRef} className="h-1 mt-4"></div>
            </div>
        </section>
    )
}

export default Home