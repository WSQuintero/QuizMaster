import { create } from 'zustand'
import { type StoreTeacherQuestions } from './TeacherQuestionsStateProps'

const useStoreTeacherQuestions = create<StoreTeacherQuestions>()((set) => ({
  teacherQuestions: 0,
  updateTeacherQuestions: (teacherQuestions) => { set({ teacherQuestions }) }
}))
export { useStoreTeacherQuestions }
