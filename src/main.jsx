import React, { Children } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {  RouterProvider, createBrowserRouter } from 'react-router-dom'
import Main from './layout/Main.jsx'
import YourList from './components/YourList/YourList.jsx'
import AddNote from './components/AddNote/AddNote.jsx'
import UpdateNote from './components/UpdateNote/UpdateNote.jsx'


const router =  createBrowserRouter([
  {
    path:'/',
    element: <Main></Main>,
    children: [
      {
        path:'/',
        element: <YourList></YourList>
      },
      {
        path:'/add-note',
        element: <AddNote></AddNote>
      },
      {
        path:'/update-note/:id',
        element: <UpdateNote></UpdateNote>
      }
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
