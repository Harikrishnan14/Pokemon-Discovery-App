import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from './Layouts/MainLayout';
import Home from './pages/Home';
import MyCollection from './pages/MyCollection';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="collections" element={<MyCollection />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
