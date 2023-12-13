'use client'

import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react'

interface ThemeContextProps {
  children?: ReactNode
}

interface IThemeContext {
  theme: string
  setTheme: (value: string) => void
}

export const ThemeContext = createContext({} as IThemeContext)

export const ThemeProvider = ({ children }: ThemeContextProps) => {
  // Verifica se há um tema armazenado no localStorage
  const storedTheme = localStorage.getItem('theme')
  const [theme, setTheme] = useState(storedTheme || 'defaultTheme')

  // Atualiza o localStorage sempre que o tema muda
  useEffect(() => {
    localStorage.setItem('theme', theme)
  }, [theme])

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useThemeContext = () => useContext(ThemeContext)
