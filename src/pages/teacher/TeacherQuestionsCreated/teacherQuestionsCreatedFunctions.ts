const handleResetQuestions = (resetBuiltQuestion: () => void, resetTeacherAnswers: () => void, resetTeacherQuestions: () => void): void => {
  resetBuiltQuestion()
  resetTeacherAnswers()
  resetTeacherQuestions()
}

export { handleResetQuestions }
