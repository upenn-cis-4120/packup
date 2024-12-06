import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css'
import Trips from './pages/Trips.jsx'
import Activities from './pages/Activities.jsx'
import TripDetails from './pages/TripDetails.jsx'
import About from './pages/About.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Trips />} />
        <Route path="/trip-details" element={<TripDetails />} />
        <Route path="/activities" element={<Activities />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
