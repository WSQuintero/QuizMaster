import React from 'react'

function StudentResultAnswers (): JSX.Element {
  return (
    <section className='w-full h-[100vh] flex flex-col justify-center items-center bg-violet-100/50 background rounded-3xl shadow-xl shadow-slate-700'>
      <article className='bg-violet-100 relative  overflow-hidden rounded-3xl border-r border-l border-violet-400/50 w-full xl:w-3/6 p-4 h-[90vh] xl:h-[80vh] xl:p-5 flex justify-center items-center flex-col shadow-xl hover:shadow-violet-500/70 shadow-violet-500/40  hover:scale-110 transition-transform duration-300 ease-in-out'>
        <div>
          <h1 className='text-lg font-bold text-white sm:text-xl text-center p-2 bg-gradient-to-r from-green-300 via-violet-400 to-purple-600 w-full'>
            Tus respuestas han sido enviadas
          </h1>

          <p className='mt-10 text-violet-500 text-md text-wrap break-all sm:text-xl font-semibold'>
            Tuviste <span className='text-green-500'>2</span> de{' '}
            <span className='text-green-500'>3</span> respuestas correctas.
          </p>
        </div>
        <button
          type='submit'
          className='inline-block rounded-lg bg-green-500 hover:bg-green-400 px-5 py-3 text-sm font-medium text-white m-10'>
          Ver respuestas
        </button>
      </article>
    </section>
  )
}

export default StudentResultAnswers
