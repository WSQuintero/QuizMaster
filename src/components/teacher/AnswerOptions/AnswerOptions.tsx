import React from 'react'
import { useStoreTeacherAnswers } from '../../../globalStates/teacherAnswersState/teacherAnswersState'
import { type NumberQuestion } from '../QuestionBuilder/QuestionBuilderProps'

function AnswerOptions ({ numberQuestion }: { numberQuestion: NumberQuestion }): JSX.Element {
  const { teacherAnswers } = useStoreTeacherAnswers()

  const numberAnswers: number[] = Array.from(
    { length: teacherAnswers },
    (_, index) => index + 1
  )

  return (
    <>
      {numberAnswers?.map((_, index) => (
        <div key={index} className='relative w-full flex'>
          <label
            htmlFor={`answer-${index}`}
            className='sr-only'>{`Posible respuesta ${index}`}</label>
          <input
            type='text'
            id={`answer-${index}`}
            name={`answer-${index}`}
            placeholder={`Posible respuesta ${index}`}
            required
            className='w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm flex placeholder:text-violet-800/40 placeholder:font-semibold'
          />
          <input type="radio" className='w-[30px]' name={`group-${numberQuestion}`} value={index} required/>
        </div>
      ))}
    </>
  )
}

export default AnswerOptions
