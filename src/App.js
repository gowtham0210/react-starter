import react from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Navbar from './Navbar';
import Raise_ticket from './pages/Raise_ticket';


function App() {
  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
          <Route path='/home' element={<Home />} />
          <Route path='/raise-ticket' element={<Raise_ticket />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
