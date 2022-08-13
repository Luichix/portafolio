import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from './App.js'
import './css/index.css'
import { LanguageProvider } from './context/language'
import { ThemeProvider } from './context/theme'

ReactDOM.render(
  <React.StrictMode>
    <LanguageProvider>
      <ThemeProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ThemeProvider>
    </LanguageProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
