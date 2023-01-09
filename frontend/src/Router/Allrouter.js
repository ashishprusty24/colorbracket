import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Receipedetail from '../component/Receipedetail'
import Home from '../pages/Home'

const Allrouter = () => {
  return (
    <div>
        <Routes>

            <Route path = "/" element = {<Home/>} ></Route>
            <Route path = "/user/:id" element = {<Receipedetail/>} ></Route>
        </Routes>


    </div>
  )
}

export default Allrouter