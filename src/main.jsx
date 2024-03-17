import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/home/Home.jsx'
import Login from './pages/home/login.jsx'
import Forget from './pages/home/forget-password.jsx'
import Resend from './pages/home/resend.jsx'
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children:[
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"/login",
        element:<Login/>
      },
      {
        path:"/forget",
        element: <Forget/>
      },
      {
        path:"/resend",
        element: <Resend />
      }
    ]
  }])
 
ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />,

)
