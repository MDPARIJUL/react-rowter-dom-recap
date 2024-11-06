import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Components/Home/Home'
import About from './Components/About/About '
import Contact from './Components/Contact/Contact'
import SingleContact from './Components/SingleContact/SingleContact'
import ErrorMessage from './Components/ErrorMessage/ErrorMessage'

const router = createBrowserRouter([
  {
    path:'/',
    element:<Home></Home>,
    loader:()=>{return fetch('https://jsonplaceholder.typicode.com/todos')},
    errorElement:<ErrorMessage></ErrorMessage>,
    children:[
      {
        path:'about',
        element:<About></About>
      },
      {
        path:'contact',
        element: <Contact></Contact>,
        loader: () =>fetch('https://jsonplaceholder.typicode.com/todos')
      },
      {
        path:'contact/:userId',
        loader:({params})=>fetch(`https://jsonplaceholder.typicode.com/todos/${params.userId}`),
        element: <SingleContact></SingleContact>
      }
    ]
  },
 
])

createRoot(document.getElementById('root')).render(
  <StrictMode >
      <RouterProvider router = {router}></RouterProvider>
  </StrictMode>,
)
