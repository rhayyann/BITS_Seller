import {Routes, Route, Navigate} from 'react-router-dom'

import React from 'react'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Product from '../pages/Product'
import AddProduct from '../pages/AddProduct'
import Orders from '../pages/Orders'
import UpdateProduct from '../pages/UpdateProduct'

function Routers() {
    return (
        <Routes>
            <Route path='/' element={<Navigate to='/home'/>}/>
            <Route path='home' element={<Home/>}/>
            <Route path='login' element={<Login/>}/>
            <Route path='product' element={<Product/>}/>
            <Route path='add-product' element={<AddProduct/>}/>
            <Route path='orders' element={<Orders/>}/>
            <Route path='product/update-product' element={<UpdateProduct/>}/>
        </Routes>
    )
}

export default Routers
