import Navbar from './components/Navbar';
import { useNavigate, Routes, Route, Link, Navigate } from "react-router-dom";
import Stores from './components/Stores';
import Navigator from './components/Navigator';
import StoreDetail from './components/StoreDetail';
import Spotlight from './components/Spotlight';
import { useState } from 'react';
import Dc from './components/Dc'
import Md from './components/Md';


function App() {

  const [area, setArea] = useState("")
  const navigate = useNavigate()

  return (
    <div className='bg-zinc-800 text-center'>
      <Navbar setArea={setArea} />
      <Routes>
        <Route path="/" element={<Spotlight setArea={setArea} />} />
        <Route path="/store" element={<Stores setArea={setArea} area={area} />} />
        <Route path="/store/dc" element={<Dc setArea={setArea} area={area} />} />
        <Route path="/store/md" element={<Md setArea={setArea} area={area} />} />
        <Route path="/store/va" element={<Stores setArea={setArea} area={area} />} />
        <Route path="/store/:id" element={<StoreDetail />} />
        <Route path='/contact' element={<div>contact</div>} />
      </Routes>

    </div>
  );
}

export default App;

// https://stackoverflow.com/questions/68255008/tailwind-css-text-over-image-problems