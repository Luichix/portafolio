import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { LanguageProvider, ThemeProvider } from '@Contexts/index'
import '@Styles/index.css'
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <LanguageProvider>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </LanguageProvider>
  </React.StrictMode>
)
