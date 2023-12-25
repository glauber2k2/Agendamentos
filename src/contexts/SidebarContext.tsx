'use client'

import { ReactNode, createContext, useContext, useState } from 'react'

interface SidebarContextProps {
  children?: ReactNode
}

interface ISidebarContext {
  sidebarIsOpen: boolean
  setSidebarIsOpen: (value: boolean) => void
}

export const SidebarContext = createContext({} as ISidebarContext)

export const SidebarProvider = ({ children }: SidebarContextProps) => {
  const [sidebarIsOpen, setSidebarIsOpen] = useState(false)
  return (
    <SidebarContext.Provider value={{ sidebarIsOpen, setSidebarIsOpen }}>
      {children}
    </SidebarContext.Provider>
  )
}

export const useSidebarContext = () => useContext(SidebarContext)
