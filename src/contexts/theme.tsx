import {
  createContext,
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  useEffect,
  useState,
} from 'react'
import { saveToStorage, loadFromStorage } from '@Services/helpers'

export type Theme = 'light' | 'dark'

export interface IThemeContext {
  theme: boolean
  changeTheme: (value: boolean) => void
}

export const ThemeContext = createContext<IThemeContext>({
  theme: false,
  changeTheme(boolean) {},
})

export const ThemeProvider = ({ children }: PropsWithChildren) => {
  const [theme, setTheme] = useState<boolean>(false)

  useEffect(() => {
    initialTheme()
  }, [])

  const initialTheme = async () => {
    const value = loadFromStorage('@themeNomina') as Promise<Theme>
    if ((await value) === 'dark') {
      setTheme(true)
    } else {
      saveToStorage('@themeNomina', 'light')
      setTheme(false)
    }
  }

  const changeTheme = (value: boolean) => {
    if (value) {
      saveToStorage('@themeNomina', 'dark')
      setTheme(true)
    } else {
      saveToStorage('@themeNomina', 'light')
      setTheme(false)
    }
  }

  const value = {
    changeTheme,
    theme,
  }

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

export default ThemeProvider
