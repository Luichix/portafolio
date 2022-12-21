import React, { createContext, useState } from 'react'
const LanguageContext = createContext()
import { saveToLocalStorage, loadFromLocalStorage } from '../services/helpers'

const initialLanguage = loadFromLocalStorage('languagePortfolio') || 'es'

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(initialLanguage)

  const handleLanguage = (event) => {
    if (event.target.value === 'en') {
      saveToLocalStorage('languagePortfolio', 'en')
      setLanguage('en')
    } else if (event.target.value === 'es') {
      saveToLocalStorage('languagePortfolio', 'es')
      setLanguage('es')
    }
  }

  const data = {
    handleLanguage,
    language,
  }

  return (
    <LanguageContext.Provider value={data}>{children}</LanguageContext.Provider>
  )
}

export default LanguageContext
