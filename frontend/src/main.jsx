import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import TripPlanner from './TripPlanner.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TripPlanner />
  </StrictMode>,
)
