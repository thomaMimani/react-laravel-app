import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import RouterComponent from './router'
import { ContextProvider } from './context/ContextProvider'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContextProvider>
      <RouterComponent />
    </ContextProvider>
  </React.StrictMode>
)
