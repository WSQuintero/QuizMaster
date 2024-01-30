import { create } from 'zustand'
import { type BuiltQuestion, type StoreBuiltQuestions } from './TeacherBuiltQuestionsProps'

const useStoreBuiltQuestions = create<StoreBuiltQuestions>()((set) => ({
  builtQuestions: [],
  updateBuiltQuestion: (newBuiltQuestion: BuiltQuestion) => {
    set((state) => ({
      builtQuestions: [...state.builtQuestions, newBuiltQuestion]
    }))
  }
}))

export { useStoreBuiltQuestions }
