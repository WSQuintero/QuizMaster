interface TeacherInitialPageProps {
  event: FormEvent<HTMLFormElement>
  updateTeacherQuestions: (teacherQuestions: number) => void
  updateTeacherAnswers: (teacherAnswers: number) => void
}

export default TeacherInitialPageProps
