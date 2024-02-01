import React from 'react'
import QuestionCreated from '../../../components/teacher/QuestionCreated/QuestionCreated'
import { useStoreBuiltQuestions } from '../../../globalStates/teacherFinalQuestions/teacherBuiltQuestionsState'
import useBackToBuilderQuestions from '../../../customHooks/useBackToBuilderQuestions'
import { useStoreTeacherAnswers } from '../../../globalStates/teacherAnswersState/teacherAnswersState'
import { useStoreTeacherQuestions } from '../../../globalStates/teacherQuestionsState/teacherQuestionsState'

function TeacherQuestionsCreated (): JSX.Element {
  const { builtQuestions, resetBuiltQuestion } = useStoreBuiltQuestions()
  const { resetTeacherAnswers } = useStoreTeacherAnswers()
  const { resetTeacherQuestions } = useStoreTeacherQuestions()
  useBackToBuilderQuestions(builtQuestions)

  const handleResetQuestions = (): void => {
    resetBuiltQuestion()
    resetTeacherAnswers()
    resetTeacherQuestions()
  }

  return (
    <section className='w-full min-h-[100vh] flex flex-col  justify-center items-center bg-violet-100/50 background rounded-3xl shadow-xl shadow-slate-700'>
      <div className='bg-violet-100 relative  overflow-hidden rounded-3xl border-r mt-10 border-l border-violet-400/50 w-full xl:w-3/6  h-auto   flex justify-start items-center flex-col shadow-xl  hover:shadow-violet-500/70 shadow-violet-500/40  transition-transform duration-300 ease-in-out overflow-y-auto'>
        {builtQuestions.map((question) => (
          <QuestionCreated
            key={question.question}
            numberQuestion={question.numberQuestion}
            correctAnswer={question.correctAnswer}
            possibleAnswers={question.possibleAnswers}
            question={question.question}
          />
        ))}
      </div>
      <div className='flex flex-col sm:flex-row gap-5 p-10'>
        <button
          type='submit'
          className='inline-block rounded-lg bg-green-500 hover:bg-green-400 px-5 py-3 text-sm font-medium text-white m-auto'>
          Crear questionario
        </button>
        <button
          type='button'
          onClick={ handleResetQuestions }
          className='inline-block rounded-lg bg-red-500 hover:bg-red-400 px-5 py-3 text-sm font-medium text-white m-auto'>
          Reiniciar formulario
        </button>{' '}
      </div>
    </section>
  )
}

export default TeacherQuestionsCreated
