import { type FormEvent } from 'react'
import { type TeacherAnswers } from '../../../globalStates/teacherAnswersState/TeacherAnswersStateProps'
import { type CorrectAnswer } from '../../../globalStates/teacherFinalQuestions/TeacherBuiltQuestionsProps'

interface QuestionBuilderProps {
  numberQuestion: number
}

interface UpdateListOfAnswersProps {
  event: FormEvent<HTMLFormElement>
  numberQuestion: NumberQuestion
  teacherAnswers: TeacherAnswers
}

interface UpdateListOfAnswersReturn {
  correctAnswer: CorrectAnswer | undefined
  listOfAnswers: string[]
}

interface HandleAddNewQuestionProps {
  event: FormEvent<HTMLFormElement>
  teacherAnswers: TeacherAnswers
  updateBuiltQuestion: UpdateBuiltQuestion
  numberQuestion: NumberQuestion
  questionRef: React.MutableRefObject<HTMLTextAreaElement | null>
}

type NumberQuestion = Pick<QuestionBuilderProps, 'numberQuestion'>['numberQuestion']

type ListOfAnswers = Pick<UpdateListOfAnswersReturn, 'listOfAnswers'>['listOfAnswers']

export type {
  QuestionBuilderProps,
  NumberQuestion,
  UpdateListOfAnswersProps,
  UpdateListOfAnswersReturn,
  ListOfAnswers,
  HandleAddNewQuestionProps
}
