import React, { useEffect, useState } from 'react'
import PokemonCard from '../components/PokemonCard';
import { useOutletContext } from 'react-router-dom';
import {
    DndContext,
    closestCenter,
    PointerSensor,
    useSensor,
    useSensors
} from '@dnd-kit/core';

import {
    arrayMove,
    SortableContext,
    useSortable,
    verticalListSortingStrategy
} from '@dnd-kit/sortable';

import { CSS } from '@dnd-kit/utilities';

const SortableItem = ({ id, info }) => {
    const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id });

    const style = {
        transform: CSS.Transform.toString(transform),
        transition
    };

    return (
        <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
            <PokemonCard info={info} />
        </div>
    );
};

const MyCollection = () => {

    const { savedCount } = useOutletContext();
    const [data, setData] = useState([])

    useEffect(() => {
        const myData = JSON.parse(localStorage.getItem('savedPokemon')) || []
        setData(myData);
    }, [savedCount])

    const sensors = useSensors(
        useSensor(PointerSensor, { activationConstraint: { distance: 8 } })
    );

    const handleDragEnd = (event) => {
        const { active, over } = event;
        if (active.id !== over?.id) {
            const oldIndex = data.findIndex(p => p.id === active.id);
            const newIndex = data.findIndex(p => p.id === over.id);
            const newData = arrayMove(data, oldIndex, newIndex);
            setData(newData);
            localStorage.setItem('savedPokemon', JSON.stringify(newData));
        }
    };

    return (
        <section className="text-gray-600 body-font h-full overflow-y-auto">
            <div className="container px-8 md:px-18 md:py-12 py-12 mx-auto">
                <DndContext
                    sensors={sensors}
                    collisionDetection={closestCenter}
                    onDragEnd={handleDragEnd}
                >
                    <SortableContext items={data.map(p => p.id)} strategy={verticalListSortingStrategy}>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                            {data.map((item) => (
                                <SortableItem key={item.id} id={item.id} info={item} />
                            ))}
                        </div>
                    </SortableContext>
                </DndContext>
            </div>
            {savedCount === 0 && <p className='text-center text-white text-lg'>Nothing to see here!</p>}
        </section>
    )
}

export default MyCollection