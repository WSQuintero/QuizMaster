import React from 'react'

function CodeFormCreated (): JSX.Element {
  return (
    <section className="w-full h-[100vh] flex justify-center items-center bg-violet-100/50 background rounded-3xl shadow-xl shadow-slate-700">
      <article className="bg-violet-100 relative  overflow-hidden rounded-3xl border-r border-l border-violet-400/50 w-full xl:w-3/6 p-4 h-[90vh] xl:h-[80vh] xl:p-10 flex justify-center items-center flex-col shadow-xl hover:shadow-violet-500/70 shadow-violet-500/40  hover:scale-110 transition-transform duration-300 ease-in-out">
        <div>
          <h1 className="text-lg font-bold text-white sm:text-xl text-center p-2 bg-gradient-to-r from-green-300 via-violet-400 to-purple-600 w-full">
            Tu código de questionario es:
          </h1>

          <p className="mt-10 text-green-500 text-md text-wrap break-all sm:text-2xl font-semibold">
            nasbiasfbñasjfjsbanñjabnsñjf
          </p>
        </div>
      </article>
    </section>
  )
}

export default CodeFormCreated
