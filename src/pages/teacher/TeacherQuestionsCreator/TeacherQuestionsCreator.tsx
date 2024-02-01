import React from 'react'
import QuestionOptions from '../../../components/teacher/QuestionOptions/QuestionOptions'

function TeacherQuestionsCreator (): JSX.Element {
  return (
    <section className='w-full min-h-[100vh] flex justify-center items-center bg-violet-100/50 background rounded-3xl shadow-xl shadow-slate-700 p-10'>
      <div className='bg-violet-100 relative  overflow-hidden rounded-3xl border-r mt-10 border-l border-violet-400/50 w-full xl:w-3/6  min-h-[90vh]   flex justify-start items-center flex-col shadow-xl gap-10 hover:shadow-violet-500/70 shadow-violet-500/40  transition-transform duration-300 ease-in-out overflow-y-auto'>
        <QuestionOptions />
      </div>
    </section>
  )
}

export default TeacherQuestionsCreator
