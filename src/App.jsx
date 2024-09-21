
import { createBrowserRouter, Link, RouterProvider } from 'react-router-dom'
import AppLayout from './layout/app-layout'
import './App.css'
import LandingPage from './pages/landing'
import Auth from './pages/auth'
import Dashboard from './pages/dashboard'
import RedirectLink from './pages/redirect-link'


const router = createBrowserRouter([
  {
    element:<AppLayout/>,
    children:[
      {
        path:'/',
        element:<LandingPage/>
      },
      {
        path:'/dashboard',
        element:<Dashboard/>
      },
      {
        path:'/auth',
        element:<Auth/>
      },
      {
        path:'/link/:id',
        element:<Link/>
      },
      {
        path:'/:id',
        element:<RedirectLink/>
      },
    ]
  }
])

function App() {

  return <RouterProvider router={router} />
}

export default App
