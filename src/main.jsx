import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Navbar from './web-page/navbar.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <App />
  </StrictMode>
)
