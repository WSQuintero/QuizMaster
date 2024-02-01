import { type CorrectAnswer, type BuiltQuestion } from '../../../globalStates/teacherFinalQuestions/TeacherBuiltQuestionsProps'
import { type UpdateListOfAnswersReturn, type UpdateListOfAnswersProps, type ListOfAnswers, type HandleAddNewQuestionProps } from './QuestionBuilderProps'

function updateListOfAnswers ({ event, numberQuestion, teacherAnswers }: UpdateListOfAnswersProps): UpdateListOfAnswersReturn | undefined {
  let correctAnswer: CorrectAnswer | undefined
  const listOfAnswers: ListOfAnswers = [] as ListOfAnswers

  const formBuiltQuestion = event.target as HTMLFormElement
  const formElements = formBuiltQuestion.elements
  const dataQuestion = Number(formBuiltQuestion.dataset.question)
  const inputsToSelect = formElements.namedItem(`group-${numberQuestion}`) as unknown as NodeListOf<HTMLInputElement>

  if (dataQuestion !== numberQuestion) return undefined

  for (let i = 0; i < teacherAnswers; i++) {
    const answerElement = formBuiltQuestion.elements.namedItem(`answer-${i}`) as HTMLInputElement | null
    if (answerElement === null) return undefined

    const inputValue: string = answerElement.value

    if (inputValue === '') return undefined

    const selectedAnswer = inputsToSelect[i]

    if (selectedAnswer?.checked) {
      correctAnswer = inputValue as CorrectAnswer | undefined
    }

    listOfAnswers.push(inputValue)
  }

  return { correctAnswer, listOfAnswers }
}

function handleAddNewQuestion ({ event, teacherAnswers, updateBuiltQuestion, numberQuestion, questionRef }: HandleAddNewQuestionProps): void {
  event.preventDefault()

  const { correctAnswer, listOfAnswers } = updateListOfAnswers({
    event,
    numberQuestion,
    teacherAnswers
  }) as { correctAnswer: CorrectAnswer, listOfAnswers: string[] }

  if ((questionRef?.current == null) || correctAnswer === undefined) return

  const question = questionRef.current.value

  if (question !== '') {
    const builtQuestion: BuiltQuestion = {
      question,
      numberQuestion,
      possibleAnswers: listOfAnswers,
      correctAnswer
    }
    updateBuiltQuestion(builtQuestion)
  }
}

export { updateListOfAnswers, handleAddNewQuestion }
