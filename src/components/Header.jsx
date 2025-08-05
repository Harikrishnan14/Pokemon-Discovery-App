import React from 'react'
import { useNavigate } from 'react-router-dom'

const Header = () => {
    const navigate = useNavigate()
    return (
        <div className='p-6'>
            <h2 className='font-bold text-3xl text-center mb-2'>🔥 Pokemon Collection App</h2>
            <p className='font-normal text-lg text-center mb-3'>Discover, collect, and organize our favorite Pokemon!</p>
            <div className='flex items-center justify-center gap-6'>
                <button
                    className='px-5 py-2 bg-violet-400 rounded-full font-bold text-white hover:cursor-pointer hover:bg-violet-600 ease-linear transition'
                    onClick={() => navigate('/')}
                >
                    🔍 Discover Pokemon
                </button>
                <button
                    className='px-5 py-2 bg-blue-400 rounded-full font-bold text-white hover:cursor-pointer hover:bg-blue-600 ease-linear transition'
                    onClick={() => navigate('/collections')}
                >
                    📚 My Collection (3)
                </button>
            </div>
        </div>
    )
}

export default Header