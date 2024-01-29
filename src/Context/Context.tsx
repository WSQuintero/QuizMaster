import { ReactNode, createContext, useState } from 'react'
import { MyContextType } from './ContextProps'

const Context = createContext<MyContextType | undefined>(undefined)

function ContextProvider({ children }: { children: ReactNode }) {
  const [questionsTeacher, setQuestionsTeacher] = useState<number>(0)
  const [answersTeacher, setAnswersTeacher] = useState<number>(0)

  return (
    <Context.Provider
      value={{
        questionsTeacher,
        setQuestionsTeacher,
        answersTeacher,
        setAnswersTeacher
      }}>
      {children}
    </Context.Provider>
  )
}

export { ContextProvider, Context }
