import { create } from 'zustand'
import { type BuiltQuestion, type StoreBuiltQuestions } from './TeacherBuiltQuestionsProps'

const useStoreBuiltQuestions = create<StoreBuiltQuestions>()((set) => ({
  builtQuestions: [],
  updateBuiltQuestion: (newBuiltQuestion: BuiltQuestion) => {
    set((state) => ({
      builtQuestions: [...state.builtQuestions, newBuiltQuestion].sort((a, b) => a.numberQuestion - b.numberQuestion)
    }))
  },
  deleteBuiltQuestion: (builtQuestionToDelete: BuiltQuestion) => {
    set((state) => ({
      builtQuestions: state.builtQuestions.filter((question: BuiltQuestion) => question.question !== builtQuestionToDelete.question)
    }))
  }
}))

export { useStoreBuiltQuestions }
