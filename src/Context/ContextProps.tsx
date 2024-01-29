export interface MyContextType {
  questionsTeacher: number
  setQuestionsTeacher?: React.Dispatch<React.SetStateAction<number>>
  answersTeacher: number
  setAnswersTeacher: React.Dispatch<React.SetStateAction<number>>
}
