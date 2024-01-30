import { type FormEvent } from 'react'
import { type TeacherAnswers } from '../../../globalStates/teacherAnswersState/TeacherAnswersStateProps'
import { type CorrectAnswer } from '../../../globalStates/teacherFinalQuestions/TeacherBuiltQuestionsProps'

interface QuestionBuilderProps {
  numberQuestion: number
}

type NumberQuestion = Pick<QuestionBuilderProps, 'numberQuestion'>['numberQuestion']

interface UpdateListOfAnswersProps {
  event: FormEvent<HTMLFormElement>
  numberQuestion: NumberQuestion
  teacherAnswers: TeacherAnswers
}

type UpdateListOfAnswersReturn = {
  correctAnswer: CorrectAnswer | undefined
  listOfAnswers: string[]
} | undefined

export type { QuestionBuilderProps, NumberQuestion, UpdateListOfAnswersProps, UpdateListOfAnswersReturn }
