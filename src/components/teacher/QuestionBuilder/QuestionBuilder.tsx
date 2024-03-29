import React, { useRef } from 'react'
import AnswerOptions from '../AnswerOptions/AnswerOptions'
import { useStoreTeacherAnswers } from '../../../globalStates/teacherAnswersState/teacherAnswersState'
import { useStoreBuiltQuestions } from '../../../globalStates/teacherFinalQuestions/teacherBuiltQuestionsState'
import { handleAddNewQuestion } from './QuestionBuilderFunctions'
import { type QuestionBuilderProps } from './QuestionBuilderProps'
import useGoToCreatedQuetions from '../../../customHooks/useGoToCreatedQuetions'
import clsx from 'clsx'

function QuestionBuilder ({
  numberQuestion
}: QuestionBuilderProps): JSX.Element {
  const { teacherAnswers } = useStoreTeacherAnswers()
  const { updateBuiltQuestion, builtQuestions } = useStoreBuiltQuestions()
  const questionRef = useRef<HTMLTextAreaElement | null>(null)
  const articleQuestionStyles = clsx(
    builtQuestions.some(
      (question) => question.question === questionRef.current?.value
    )
      ? 'hidden'
      : 'inline-block',
    'w-full'
  )

  useGoToCreatedQuetions({ builtQuestions })

  return (
    <article className={articleQuestionStyles}>
      <div className="text-lg font-bold sm:text-xl p-2 bg-gradient-to-r from-green-300 via-violet-400 to-purple-600 w-full flex justify-center items-center">
        <span className="border border-violet-400 flex justify-center items-center p-2 rounded-full w-[40px] h-[40px] bg-violet-100 text-violet-700 ">
          {numberQuestion}
        </span>
        <textarea
          placeholder="Escribe tu pregunta aquí"
          ref={questionRef}
          required
          className="bg-transparent border-none outline-none w-full placeholder:text-center pl-4 translate-y-5 break-all pr-14 mb-3 text-white placeholder:text-white/70 placeholder:grid placeholder:place-content-center h-auto text-wrap"
        />
      </div>

      <form
        className="mb-0 mt-8 space-y-4 flex justify-center flex-col w-full p-4"
        onSubmit={(event) => {
          handleAddNewQuestion({
            event,
            teacherAnswers,
            updateBuiltQuestion,
            numberQuestion,
            questionRef
          })
        }}
        data-question={numberQuestion}
      >
        <div className="flex flex-col gap-4">
          <AnswerOptions numberQuestion={numberQuestion} />
        </div>
        <div className="flex items-center justify-center">
          <button
            type="submit"
            className="inline-block rounded-lg bg-green-500 hover:bg-green-400 px-5 py-3 text-sm font-medium text-white"
          >
            Crear pregunta
          </button>
        </div>
      </form>
    </article>
  )
}

export default QuestionBuilder
