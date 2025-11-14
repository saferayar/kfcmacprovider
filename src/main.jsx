import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.scss'
import App from './App.jsx'
import { PrimeReactProvider } from 'primereact/api'
import PedidosProvider from './providers/PedidosProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PrimeReactProvider>
      <PedidosProvider>
        <App />
      </PedidosProvider>
    </PrimeReactProvider>
  </StrictMode>,
)
