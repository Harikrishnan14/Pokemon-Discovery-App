import { Outlet } from 'react-router'
import Header from '../components/Header'
import { useState } from 'react';

const MainLayout = () => {
    const [savedCount, setSavedCount] = useState(0);

    return (
        <div className="flex flex-col h-screen">
            <Header savedCount={savedCount} />
            <main className="flex-1 overflow-hidden bg-indigo-500">
                <Outlet context={{ setSavedCount }} />
            </main>
        </div>
    )
}

export default MainLayout