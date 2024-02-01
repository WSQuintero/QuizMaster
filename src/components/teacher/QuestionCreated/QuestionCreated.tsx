import React from 'react'
import { type BuiltQuestion } from '../../../globalStates/teacherFinalQuestions/TeacherBuiltQuestionsProps'
import clsx from 'clsx'

function QuestionCreated ({
  numberQuestion,
  correctAnswer,
  possibleAnswers,
  question
}: BuiltQuestion): JSX.Element {
  const asnwerStyles = (answer: string): string =>
    clsx(
      answer === correctAnswer
        ? 'border-4 border-green-500 relative w-full'
        : 'border border-gray-500 relative w-full'
    )

  return (
    <article className="w-full p-5">
      <div className="text-lg font-bold  sm:text-xl  p-2 bg-gradient-to-r from-green-300 via-violet-400 to-purple-600 w-full  flex justify-center items-center h-full">
        <span className="border border-violet-400 flex justify-center items-center p-2 rounded-full  w-[40px] h-[40px]   bg-violet-100 text-violet-700 ">
          {numberQuestion}
        </span>
        <h3 className="bg-transparent border-none outline-none w-full placeholder:text-center  break-all px-5 text-white placeholder:text-white/70  placeholder:grid placeholder:place-content-center h-auto  text-wrap text-lg ">
          {question}{' '}
        </h3>
      </div>

      <div className="mb-0 mt-8 space-y-4 flex justify-center flex-col w-full p-4">
        <ul className="flex flex-col gap-4">
          {possibleAnswers.map((answer, index) => (
            <li key={answer} className={asnwerStyles(answer)}>
              <p
                id={`answer-${answer}`}
                className="w-full rounded-lg flex justify-start items-center border-gray-200 p-4 pe-12 text-sm shadow-sm  placeholder:text-violet-800/40 placeholder:font-semibold text-wrap break-all text-violet-800"
              >
                <span
                  className='border mr-5 border-violet-400 flex justify-center items-center p-2 rounded-full  w-[40px] h-[40px]   bg-violet-100 text-violet-700 '
                >
                  {index + 1}
                </span>
                {answer}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </article>
  )
}

export default QuestionCreated
