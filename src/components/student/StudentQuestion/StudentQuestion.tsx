import React from 'react'
import type StudentQuestionProps from './StudentQuestionProps'

function StudentQuestion ({ numberQuestion }: StudentQuestionProps): JSX.Element {
  return (
    <article className='w-full'>
      <div className='text-lg font-bold  sm:text-xl  p-2 bg-gradient-to-r from-green-300 via-violet-400 to-purple-600 w-full  flex justify-center items-center h-full'>
        <span className='border border-violet-400 flex justify-center items-center p-2 rounded-full  w-[40px] h-[40px]   bg-violet-100 text-violet-700 '>
          {numberQuestion}
        </span>
        <p className='bg-transparent border-none outline-none w-full placeholder:text-center  break-all px-5 text-white placeholder:text-white/70  placeholder:grid placeholder:place-content-center h-auto  text-wrap text-lg  '>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem, eius
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </div>

      <div className='mb-0 mt-8 space-y-4 flex justify-center flex-col w-full p-4'>
        <div className='flex flex-col gap-4'>
          {[1, 2].map((test) => (
            <div
              key={test}
              className='relative w-full flex p-5 justify-center items-center'>
              <p
                id={`answer-${test}`}
                className='w-full rounded-lg flex justify-start items-center border-gray-200  text-sm shadow-sm  placeholder:text-violet-800/40 placeholder:font-semibold text-wrap break-all text-violet-800'>
                <span className='border mr-5 border-violet-400 flex justify-center items-center p-2 rounded-full  w-[40px] h-[40px]   bg-violet-100 text-violet-700 '>
                  {test}
                </span>
                Respuesta {test}
              </p>
              <input
                type='radio'
                name={'si'}
                id={'si'}
                className='w-[20px] h-[20px]'></input>
            </div>
          ))}
        </div>
      </div>
    </article>
  )
}

export default StudentQuestion
