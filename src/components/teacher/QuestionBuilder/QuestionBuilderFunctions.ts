import { type CorrectAnswer } from '../../../globalStates/teacherFinalQuestions/TeacherBuiltQuestionsProps'
import { type UpdateListOfAnswersReturn, type UpdateListOfAnswersProps } from './QuestionBuilderProps'

export const updateListOfAnswers = ({ event, numberQuestion, teacherAnswers }: UpdateListOfAnswersProps): UpdateListOfAnswersReturn | undefined => {
  let correctAnswer: CorrectAnswer | undefined
  const listOfAnswers: string[] = []

  const formElement = event.target as HTMLFormElement
  const dataQuestion = Number(formElement.dataset.question)
  const inputsToSelect = formElement.elements.namedItem(`group-${numberQuestion}`) as unknown as NodeListOf<HTMLInputElement>

  if (dataQuestion !== numberQuestion) return undefined

  for (let i = 0; i < teacherAnswers; i++) {
    const answerElement = formElement.elements.namedItem(`answer-${i}`) as HTMLInputElement | null
    if (answerElement === null) return undefined

    const inputValue: string = answerElement.value
    const selectedAnswer = inputsToSelect[i]

    if (selectedAnswer?.checked) {
      correctAnswer = inputValue as CorrectAnswer | undefined
    }

    listOfAnswers.push(inputValue)
  }

  return { correctAnswer, listOfAnswers }
}
