import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import TripPlanner from './pages/TripPlanner.jsx'
import TripDetails from './pages/TripDetails.jsx'
import Activities from './pages/Activities.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Activities />
  </StrictMode>,
)
