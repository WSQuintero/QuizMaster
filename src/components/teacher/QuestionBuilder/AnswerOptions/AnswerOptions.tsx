import React, { useContext } from 'react'
import { Context } from '../../../../Context/Context'

function AnswerOptions (): JSX.Element {
  const context = useContext(Context)
  if (context == null) return <div/>
  const numberAnswers: number[] = Array.from(
    { length: context.answersTeacher },
    (_, index) => index + 1
  )
  return (
    <>
      {numberAnswers?.map((index) => (
        <div key={index} className='relative w-full'>
          <label
            htmlFor={`answer-${index}`}
            className='sr-only'>{`Posible respuesta ${index}`}</label>
          <input
            type='text'
            id={`answer-${index}`}
            className='w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm flex placeholder:text-violet-800/40 placeholder:font-semibold'
            placeholder={`Posible respuesta ${index}`}
          />
        </div>
      ))}
    </>
  )
}

export default AnswerOptions
