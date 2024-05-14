import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import Error from '../Pages/Error'
import Login from '../Pages/Login'

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/' element={<Error  />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes
