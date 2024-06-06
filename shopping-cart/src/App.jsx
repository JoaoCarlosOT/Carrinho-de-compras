import React from 'react'
import './App.css'
import { Outlet } from 'react-router-dom'
import Header from './componentes/header/header'

import Provider from './context/Provider'

function App() {

  return (
    <Provider>
      <Header/>
      <Outlet/>
    </Provider>
  )
}

export default App
