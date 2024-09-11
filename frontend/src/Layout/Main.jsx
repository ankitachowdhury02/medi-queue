import React from 'react'
import Navbar from '../Components/User-Components/Navbar'
import Footer from '../Components/User-Components/Footer'
import { Outlet } from 'react-router-dom'
import Sidebar from '../Components/User-Components/Sidebar'

const Main = () => {
   return (
      <div className='flex w-[100%]'>
         <Sidebar />
         <div className=' w-full'>
            <Navbar />
            <div className='min-h-screen'>
               <Outlet />
            </div>
            <Footer />
         </div>
      </div>
   )
}

export default Main