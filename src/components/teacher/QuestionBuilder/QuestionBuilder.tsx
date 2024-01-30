import React, { useRef, type FormEvent } from 'react'
import AnswerOptions from './AnswerOptions/AnswerOptions'
import { useStoreTeacherAnswers } from '../../../globalStates/teacherAnswersState/teacherAnswersState'
import { useStoreBuiltQuestions } from '../../../globalStates/teacherFinalQuestions/teacherBuiltQuestionsState'
import { updateListOfAnswers } from './QuestionBuilderFunctions'
import { type QuestionBuilderProps } from './QuestionBuilderProps'
import { type CorrectAnswer, type BuiltQuestion } from '../../../globalStates/teacherFinalQuestions/TeacherBuiltQuestionsProps'

function QuestionBuilder ({ numberQuestion }: QuestionBuilderProps): JSX.Element {
  const { teacherAnswers } = useStoreTeacherAnswers()
  const { updateBuiltQuestion } = useStoreBuiltQuestions()
  const questionRef = useRef<HTMLTextAreaElement | null>(null)

  const handleAddNewQuestion = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault()

    const { correctAnswer, listOfAnswers } = updateListOfAnswers({
      event,
      numberQuestion,
      teacherAnswers
    }) as { correctAnswer: CorrectAnswer, listOfAnswers: string[] }

    if ((questionRef.current == null) || correctAnswer === undefined) return

    const builtQuestion: BuiltQuestion = {
      question: questionRef.current.value,
      numberQuestion,
      possibleAnswers: listOfAnswers,
      correctAnswer
    }

    updateBuiltQuestion(builtQuestion)

    console.log(builtQuestion)
  }

  return (
    <article className='w-full'>
      <div className='text-lg font-bold sm:text-xl p-2 bg-gradient-to-r from-green-300 via-violet-400 to-purple-600 w-full flex justify-center items-center'>
        <span className='border border-violet-400 flex justify-center items-center p-2 rounded-full w-[40px] h-[40px] bg-violet-100 text-violet-700 '>
          {numberQuestion}
        </span>
        <textarea
          placeholder='Escribe tu pregunta aquí'
          ref={questionRef}
          className='bg-transparent border-none outline-none w-full placeholder:text-center pl-4 translate-y-5 break-all pr-14 mb-3 text-white placeholder:text-white/70 placeholder:grid placeholder:place-content-center h-auto text-wrap'
        />
      </div>

      <form className='mb-0 mt-8 space-y-4 flex justify-center flex-col w-full p-4' onSubmit={handleAddNewQuestion} data-question={numberQuestion}>
        <div className='flex flex-col gap-4'>
          <AnswerOptions numberQuestion={numberQuestion} />
        </div>
        <div className='flex items-center justify-center'>
          <button
            type='submit'
            className='inline-block rounded-lg bg-green-500 hover:bg-green-400 px-5 py-3 text-sm font-medium text-white'>
            Crear pregunta
          </button>
        </div>
      </form>
    </article>
  )
}

export default QuestionBuilder
