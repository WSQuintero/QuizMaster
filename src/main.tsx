import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import router from './router/router.tsx'
import './index.css'

const rootElement = document.getElementById('root')

if (rootElement != null && rootElement !== undefined) {
  ReactDOM.createRoot(rootElement).render(
      <RouterProvider router={router}/>
  )
} else {
  console.error('Element with ID "root" not found')
}
