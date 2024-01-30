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
export type { StoreBuiltQuestions, BuiltQuestion, CorrectAnswer, NumberQuestion }
