import React from 'react'
import QuestionBuilder from '../../../../components/teacher/QuestionBuilder/QuestionBuilder'
import { useStoreTeacherQuestions } from '../../../../globalStates/teacherQuestionsState/teacherQuestionsState'

function QuestionOptions (): JSX.Element | undefined {
  const { teacherQuestions } = useStoreTeacherQuestions()
  const numberQuestions: number[] = Array.from(
    { length: teacherQuestions },
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
