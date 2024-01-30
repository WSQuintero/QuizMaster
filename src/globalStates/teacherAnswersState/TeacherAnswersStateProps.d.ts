interface StoreTeacherAnswers {
  teacherAnswers: number
  updateTeacherAnswers: (teacherAnswers: number) => void
}

type TeacherAnswers = Pick<StoreTeacherAnswers, 'teacherAnswers'>['teacherAnswers']

export type { StoreTeacherAnswers, TeacherAnswers }
