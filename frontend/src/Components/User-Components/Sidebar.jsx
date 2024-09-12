import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className='bg-gradient-to-r from-[#9083D5] to-[#807593] sticky top-0 h-[100vh] hidden sm:block w-[25%]'>
      <div className='w-full h-16 flex items-center justify-center'>
        <h1 className='bold text-white'>Medi-Queue</h1>
      </div>
      <div className='h-full flex flex-col '>
        <div className=' h-3 w-full mt-4 p-5  flex items-center justify-center '><Link className='text-xl text-white' to="/">Home</Link></div>
        <div className=' h-3 w-full mt-4 p-5  flex items-center justify-center '><Link className='text-xl text-white' to="/appointment">Appointment</Link></div>
        <div className=' h-3 w-full mt-4 p-5  flex items-center justify-center '><Link className='text-xl text-white' to="/update-profile">Profile Update</Link></div>
        <div className=' h-3 w-full mt-4 p-5  flex items-center justify-center '><Link className='text-xl text-white' to="/help-support">Help And Support</Link></div>
      </div>
    </div>
  )
}

export default Sidebar