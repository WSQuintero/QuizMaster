interface BuiltQuestion {
  question: string
  numberQuestion: number
  possibleAnswers: string[]
  correctAnswer: string | undefined
}
type CorrectAnswer = Pick<BuiltQuestion, 'correctAnswer'>['correctAnswer']
type NumberQuestion = Pick<BuiltQuestion, 'numberQuestion'>['numberQuestion']

interface StoreBuiltQuestions {
  builtQuestions: BuiltQuestion[]
  updateBuiltQuestion: (newBuiltQuestion: BuiltQuestion) => void
}
type UpdateBuiltQuestion = Pick<UpdateBuiltQuestion, 'updateBuiltQuestion'>['updateBuiltQuestion']

export type { StoreBuiltQuestions, BuiltQuestion, CorrectAnswer, NumberQuestion, UpdateBuiltQuestion }
