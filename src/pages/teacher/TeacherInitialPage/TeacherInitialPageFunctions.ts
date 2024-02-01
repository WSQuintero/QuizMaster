import type TeacherInitialPageProps from './TeacherInitialPageProps'

export const handleCreateNewForm = ({
  event,
  updateTeacherQuestions,
  updateTeacherAnswers
}: TeacherInitialPageProps): void => {
  event.preventDefault()

  const formElement = event.currentTarget as HTMLFormElement | null
  if (formElement == null) {
    return
  }

  const questionsElement = formElement.elements.namedItem(
    'questions'
  ) as HTMLInputElement | null

  const answersElement = formElement.elements.namedItem(
    'answers'
  ) as HTMLInputElement | null

  const questions = questionsElement?.value as unknown as number
  const answers = answersElement?.value as unknown as number
  updateTeacherQuestions(questions)
  updateTeacherAnswers(answers)
}
