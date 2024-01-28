function StudentInitialPage() {
  return (
    <section className='w-full h-[100vh] flex justify-center items-center bg-violet-100/50 background rounded-3xl shadow-xl shadow-slate-700'>
      <article className='bg-violet-100 relative  overflow-hidden rounded-3xl border-r border-l border-violet-400/50 w-full xl:w-3/6 p-4 h-[90vh] xl:h-[80vh] xl:p-10 flex justify-center items-center flex-col shadow-xl hover:shadow-violet-500/70 shadow-violet-500/40  hover:scale-110 transition-transform duration-300 ease-in-out'>
        <div>
          <h1 className='text-lg font-bold text-white sm:text-xl text-center p-2 bg-gradient-to-r from-green-300 via-violet-400 to-purple-600 w-full'>
            Quiz Master student
          </h1>

          <p className='mt-4 text-gray-500 text-pretty'>
            En esta página puedes indicar el código de formulario dado por tu
            profesor para que puedas responderlo correctamente.
          </p>
        </div>

        <form
          action=''
          className=' mb-0 mt-8  space-y-4 flex justify-center flex-col w-full'>
          <div>
            <div className='relative w-full'>
              <input
                type='number'
                className='w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm flex placeholder:text-violet-800/40 placeholder:font-semibold'
                placeholder='Aquí puedes poner el código'
                min={0}
              />
            </div>
          </div>

          <div className='flex items-center justify-between'>
            <button
              type='submit'
              className='inline-block rounded-lg bg-green-500 hover:bg-green-400 px-5 py-3 text-sm font-medium text-white m-auto'>
              Ingresar a formulario
            </button>
          </div>
        </form>
      </article>
    </section>
  )
}

export default StudentInitialPage
