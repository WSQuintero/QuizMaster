import { ReactNode, createContext } from 'react'
import MyContextType from './ContextProps'

const Context = createContext<MyContextType | undefined>(undefined)

function ContextProvider({ children }: { children: ReactNode }) {
  const hoa = 'hooa'

  return <Context.Provider value={{ hoa }}>{children}</Context.Provider>
}

export { ContextProvider, Context }
