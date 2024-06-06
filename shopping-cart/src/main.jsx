import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import Home from './pages/home/home.jsx'
import Cart from './pages/cart/cart.jsx'

import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Favoritos from './pages/favoritos/favoritos.jsx'

const router = createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[
      {
        path:"/",
        element:<Home/>

      },
      {
        path:"/favoritos",
        element:<Favoritos/>
      },
      {
        path:"/carrinho",
        element:<Cart/>
      }
    ]
    
  }
])






ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
