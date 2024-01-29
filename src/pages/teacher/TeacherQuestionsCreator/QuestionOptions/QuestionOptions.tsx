import React, { useContext } from 'react'
import QuestionBuilder from '../../../../components/teacher/QuestionBuilder/QuestionBuilder'
import { Context } from '../../../../Context/Context'
import { type questionsTeacher } from '../../../../Context/ContextProps'

function QuestionOptions (): JSX.Element | undefined {
  const { questionsTeacher } = useContext(Context) as questionsTeacher

  const numberQuestions: number[] = Array.from(
    { length: questionsTeacher },
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
