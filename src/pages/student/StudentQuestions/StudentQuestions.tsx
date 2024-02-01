import React from 'react'
import StudentQuestion from '../../../components/student/StudentQuestion/StudentQuestion'

function StudentQuestions (): JSX.Element {
  return (
    <section className="w-full min-h-[100vh] flex flex-col  justify-center items-center bg-violet-100/50 background rounded-3xl shadow-xl shadow-slate-700">
      <div className="bg-violet-100 relative  overflow-hidden rounded-3xl border-r mt-10 border-l border-violet-400/50 w-full xl:w-3/6  min-h-[90vh]   flex justify-start items-center flex-col shadow-xl gap-10 hover:shadow-violet-500/70 shadow-violet-500/40  transition-transform duration-300 ease-in-out overflow-y-auto">
        {[1, 2, 3, 4].map((test, index) => (
          <StudentQuestion key={index + test} numberQuestion={test} />
        ))}
      </div>
      <div className="flex flex-col sm:flex-row gap-5 p-10">
        <button
          type="submit"
          className="inline-block rounded-lg bg-green-500 hover:bg-green-400 px-5 py-3 text-sm font-medium text-white m-auto"
        >
          Enviar respuestas
        </button>
      </div>
    </section>
  )
}

export default StudentQuestions
