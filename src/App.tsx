/* eslint-disable react/react-in-jsx-scope */
import React from 'react'
import Main from './components/Main/Main'
import HomePage from './pages/HomePage/HomePage.js'
import './App.css'

function App (): JSX.Element {
  return (
    <>
      <Main>
        <HomePage />
      </Main>
    </>
  )
}

export default App
