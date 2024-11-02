import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Nav from './components/Nav'
import CreateProduct from './components/CreateProduct'

const App = () => {
  return (
    <div>

      <BrowserRouter basename='/CURD-3/'>
      <Nav/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='create' element={<CreateProduct/> } />
        </Routes>

      </BrowserRouter>

    </div>
  )
}

export default App
