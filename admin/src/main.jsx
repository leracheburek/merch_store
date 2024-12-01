import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './input.css'
import Admin from './components/Admin/index'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Admin />
  </StrictMode>,
)