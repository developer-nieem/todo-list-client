import React, { Children } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {  RouterProvider, createBrowserRouter } from 'react-router-dom'
import Main from './layout/Main.jsx'
import YourList from './components/YourList/YourList.jsx'


const router =  createBrowserRouter([
  {
    path:'/',
    element: <Main></Main>,
    children: [
      {
        path:'/',
        element: <YourList></YourList>
      }
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
