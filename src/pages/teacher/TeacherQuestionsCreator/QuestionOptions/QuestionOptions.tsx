import { useContext } from 'react'
import QuestionBuilder from '../../../../components/teacher/QuestionBuilder/QuestionBuilder'
import { Context } from '../../../../Context/Context'

function QuestionOptions() {
  const context = useContext(Context)
  if (!context) return
  const numberQuestions: number[] = Array.from(
    { length: context.questionsTeacher },
    (_, index) => index + 1
  )
  return (
    <>
      {numberQuestions?.map((test, index) => (
        <QuestionBuilder key={index + test} numberQuestion={test} />
      ))}
    </>
  )
}
export default QuestionOptions
