import React from 'react'
import Navbar from './components/Navbar'
import { Outlet } from 'react-router-dom'
import { Footer } from './components/Footer'
import Login from './login'

const App = () => {
  return (
    <div className="font-serif dark:bg-gray-900 overflow-hidden">
      <Navbar/>
      <Outlet/>
      <Footer/>
      
    </div>
  )
}

export default App
