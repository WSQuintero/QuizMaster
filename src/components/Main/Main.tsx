import { ReactNode } from 'react'

function Main({ children }: { children: ReactNode }) {
  return (
    <main className='min-h-[100vh] h-auto w-full p-5 bg-violet-200'>
      {children}
    </main>
  )
}

export default Main
