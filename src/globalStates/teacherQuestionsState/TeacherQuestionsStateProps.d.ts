interface StoreTeacherQuestions {
  teacherQuestions: number
  updateTeacherQuestions: (teacherQuestions: number) => void
}

type TeacherQuestions = Pick<StoreTeacherQuestions, 'teacherQuestions'>['teacherQuestions']

export type { StoreTeacherQuestions, TeacherQuestions }
