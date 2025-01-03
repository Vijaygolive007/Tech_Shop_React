import React from 'react'
import { Route, Routes } from 'react-router'
import Home from '../Pages/Home'
import Cart from '../Pages/Cart'
import Product from './Product.jsx'
import Filters from './Filters.jsx'

const Routers = () => {
  return (
    <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/Cart' element={<Cart/>} />
        <Route path='/product/:id' element={<Product />}/>
        <Route path="/all-products" element={<Filters />} />
    </Routes>
  )
}

export default Routers