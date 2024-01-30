import { create } from 'zustand'
import { type StoreTeacherAnswers } from './TeacherAnswersStateProps'

const useStoreTeacherAnswers = create<StoreTeacherAnswers>()((set) => ({
  teacherAnswers: 0,
  updateTeacherAnswers: (teacherAnswers) => { set({ teacherAnswers }) }
}))
export { useStoreTeacherAnswers }
