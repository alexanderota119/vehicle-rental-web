import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Routes } from "react-router-dom";

import './style.css'
import Register from './views/register'
import Explore from './views/explore'
import Login from './views/login'
import Home from './views/home'
import VehicleDetail from './views/vehicle-detail';

const App = () => {
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
  );
}

ReactDOM.render(<App />, document.getElementById('app'))
