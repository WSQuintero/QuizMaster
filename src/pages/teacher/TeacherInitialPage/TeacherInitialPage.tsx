import React, { useContext, useEffect } from 'react'
import { handleCreateNewForm } from './TeacherInitialPageFunctions'
import { Context } from '../../../Context/Context'
import { useNavigate } from 'react-router'

function TeacherInitialPage (): JSX.Element {
  const navigate = useNavigate()
  const context = useContext(Context)
  if (context == null) {
    return <div/>
  }
  const { setQuestionsTeacher, setAnswersTeacher, answersTeacher, questionsTeacher } = context

  useEffect(() => {
    if (answersTeacher !== 0 && questionsTeacher !== 0) {
      navigate('/teacher/questions-creator')
    }
  }, [answersTeacher, questionsTeacher])

  return (
    <section className='w-full h-[100vh] flex justify-center items-center bg-violet-100/50 background rounded-3xl shadow-xl shadow-slate-700'>
      <article className='bg-violet-100 relative  overflow-hidden rounded-3xl border-r border-l border-violet-400/50 w-full xl:w-3/6 p-4 h-[90vh] xl:h-[80vh] xl:p-10 flex justify-center items-center flex-col shadow-xl hover:shadow-violet-500/70 shadow-violet-500/40  lg:hover:scale-110 transition-transform duration-300 ease-in-out'>
        <div>
          <h1 className='text-lg font-bold text-white sm:text-xl text-center p-2 bg-gradient-to-r from-green-300 via-violet-400 to-purple-600 w-full'>
            Quiz Master teacher
          </h1>

          <p className='mt-4 text-gray-500 text-pretty'>
            En esta página estás a punto de crear un formulario de preguntas y
            respuestas. Para comenzar, ingresa el número de preguntas que deseas
            incluir y luego especifica cuántas respuestas quieres para cada
            pregunta. Esto nos ayudará a personalizar el formulario según tus
            necesidades. Una vez que hayas proporcionado esta información,
            simplemente haz clic en Crear formulario y estarás listo para
            diseñar tu cuestionario. ¡Simple y rápido!
          </p>
        </div>

        <form
          onSubmit={(event) => { handleCreateNewForm(event, setQuestionsTeacher, setAnswersTeacher) }
          }
          className=' mb-0 mt-8  space-y-4 flex justify-center flex-col w-full'>
          <div>
            <div className='relative w-full'>
              <input
                type='number'
                className='w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm flex placeholder:text-violet-800/40 placeholder:font-semibold'
                placeholder='¿Cuantas preguntas son?'
                min={0}
                name='questions'
                required
              />
            </div>
          </div>

          <div>
            <div className='relative'>
              <input
                type='number'
                className='w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm placeholder:text-violet-800/40 placeholder:font-semibold'
                placeholder='¿Cuantas respuestas por pregunta?'
                min={0}
                name='answers'
                required
              />
            </div>
          </div>

          <div className='flex items-center justify-between'>
            <button
              type='submit'
              className='inline-block rounded-lg bg-green-500 hover:bg-green-400 px-5 py-3 text-sm font-medium text-white m-auto'>
              Crear formulario
            </button>
          </div>
        </form>
      </article>
    </section>
  )
}

export default TeacherInitialPage
