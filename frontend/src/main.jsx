import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Trips from './pages/Trips.jsx'
import TripDetails from './pages/TripDetails.jsx'
import Activities from './pages/Activities.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Trips />
  </StrictMode>,
)
