import { Outlet } from 'react-router'
import Header from '../components/Header'

const MainLayout = () => {
    return (
        <div className="flex flex-col h-screen">
            <Header />
            <main className="flex-1 overflow-hidden bg-indigo-500">
                <Outlet />
            </main>
        </div>
    )
}

export default MainLayout