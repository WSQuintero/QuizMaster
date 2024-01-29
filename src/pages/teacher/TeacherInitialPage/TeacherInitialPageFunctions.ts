export const handleCreateNewForm = (event: React.FormEvent<HTMLFormElement> ,setQuestionsTeacher:React.Dispatch<React.SetStateAction<number>>,setAnswersTeacher:React.Dispatch<React.SetStateAction<number>>) => {
  event.preventDefault()
  const formElement = event.target as HTMLFormElement | null
  if (!formElement) {
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

  setQuestionsTeacher(questions)
  setAnswersTeacher(answers)
}