import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Register from './views/register'
import Explore from './views/explore'
import Login from './views/login'
import Home from './views/home'
import VehicleDetail from './views/vehicle-detail';


function router() {
    return (
        <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/explore" element={<Explore />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/register" element={<Register />}/>
        <Route path="/vehicle/:slug" element={<VehicleDetail />}/>       
      </Routes>
    </BrowserRouter>
    )
}

export default router













