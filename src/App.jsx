import { useState } from 'react'
import Navbar from './component/Navbar'
import { Route,Routes } from 'react-router-dom'
import Home from './page/Home.jsx'
import NotFound from './page/NotFound.jsx'
import { ToastContainer } from 'react-toastify'

function App() {


  return (
    <>
      <div className=' w-full h-full'>
        <ToastContainer/>
        <Routes>
          <Route index element={<Home></Home>}></Route>
          <Route path='*' element={<NotFound></NotFound>}></Route>
        </Routes>
        {/* <Navbar></Navbar> */}
      </div>
    </>
  )
}

export default App
