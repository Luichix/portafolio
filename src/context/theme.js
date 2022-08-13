import React, { createContext, useState } from 'react'
import { saveToLocalStorage, loadFromLocalStorage } from '../services/helpers'

const initialTheme = loadFromLocalStorage('themePortfolio') || 'light'
const ThemeContext = createContext()

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(initialTheme)

  const handleTheme = () => {
    if (theme === 'dark') {
      saveToLocalStorage('themePortfolio', 'light')
      setTheme('light')
    } else {
      saveToLocalStorage('themePortfolio', 'dark')
      setTheme('dark')
    }
  }

  const data = {
    handleTheme,
    theme,
  }

  return <ThemeContext.Provider value={data}>{children}</ThemeContext.Provider>
}

export default ThemeContext
