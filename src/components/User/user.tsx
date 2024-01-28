import UserProps from './UserProps'

function User({ name }: UserProps) {
  return (
    <article className='relative bg-violet-100 overflow-hidden rounded-3xl border-r border-l border-violet-400/50 w-full xl:w-2/6 h-[40vh] sm:h-[50vh] flex justify-center items-center shadow-xl hover:shadow-violet-400/70 cursor-pointer hover:scale-110 transition-transform duration-300 ease-in-out'>
      <span className='absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-violet-400 to-purple-600' />

      <div className='sm:flex sm:justify-between sm:gap-4 flex-col w-full'>
        <div>
          <h3 className='text-lg text-white sm:text-xl text-center p-2 bg-gradient-to-r from-green-300 via-violet-400 to-purple-600 font-bold w-full'>
            {name}
          </h3>
        </div>

        <div className='w-full h-full flex justify-center'>
          <img
            alt='Paul Clapton'
            src={`${name === 'Profesor' ? '/teacher.png' : name === 'Estudiante' ? '/student.png' : false}`}
            className=' rounded-lg object-contain shadow-sm max-h-[500px] h-[200px] mix-blend-darken'
          />
        </div>
      </div>
    </article>
  )
}

export default User
