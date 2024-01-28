import { useContext } from 'react'
import User from '../../components/User/user'
import { Context } from '../../Context/Context'
import './HomePage.css'

function HomePage() {
  const hoa = useContext(Context)

  console.log(hoa?.hoa)
  return (
    <section className='border border-violet-400 xl:h-[100vh] w-full bg-violet-100/50 p-4 xl:max-h-[100vh] overflow-hidden background rounded-3xl shadow-xl shadow-slate-700'>
      <div className='w-full flex justify-center'>
        <h3 className='font-marisa font-bold bg-gradient-to-r from-green-400  via-blue-300 border-b border-blue-400 to-purple-900 text-transparent bg-clip-text text-center p-5 sm:text-6xl text-4xl   '>
          Creador de preguntas
        </h3>
      </div>
      <section className='flex justify-center items-center h-4/6 w-full'>
        <div className='flex flex-col xl:flex-row w-full p-5 justify-around gap-5'>
          <User name='Profesor' />
          <User name='Estudiante' />
        </div>
      </section>
    </section>
  )
}

export default HomePage
