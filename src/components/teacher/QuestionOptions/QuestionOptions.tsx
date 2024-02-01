import React from 'react'
import QuestionBuilder from '../QuestionBuilder/QuestionBuilder'
import { useStoreTeacherQuestions } from '../../../globalStates/teacherQuestionsState/teacherQuestionsState'

function QuestionOptions (): JSX.Element | undefined {
  const { teacherQuestions } = useStoreTeacherQuestions()
  const numberQuestions: number[] = Array.from(
    { length: teacherQuestions },
    (_, index) => index + 1
  )

  return (
    <>
      {numberQuestions?.map((test) => (
        <QuestionBuilder numberQuestion={test} key={`question-${test}`} />
      ))}
    </>
  )
}

export default QuestionOptions
