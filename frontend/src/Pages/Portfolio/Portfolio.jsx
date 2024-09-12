import React from 'react'
import PortfolioNavbar from '../../Components/Portfolio-Components/PortfolioNavbar'
import PortfolioFooter from '../../Components/Portfolio-Components/PortfolioFooter'
import { Link } from 'react-router-dom'

const Portfolio = () => {
  return (
    <div className='w-full min-h-screen'>
        <PortfolioNavbar />
        {/** log in buttons */}
        <div className='w-full flex flex-col h-screen md:flex-row'>
        <div className='flex-1 h-full flex flex-col  bg-gradient-to-br from-green-50 via-green-100 to-purple-100 justify-center items-center'>
               <div className='w-1/2 flex flex-col items-center justify-center gap-3'>
                    <h2 className='text-xl font-bold'>Patient</h2>
                    <p className='text-center text-sm'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem exercitationem saepe quod, ut error cum dolorum beatae ex animi expedita.</p>
                    <button className="btn btn-outline btn-success"><Link to='/user-login'>Log-In</Link></button>
               </div>
            </div>
            <div className=' flex-1 h-full flex justify-center items-center'>
                <div className='w-1/2 flex flex-col items-center justify-center gap-3'>
                    <h2 className=' text-xl font-bold'>Hospital</h2>
                    <p className='text-center text-sm'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati, placeat sed consectetur saepe quibusdam officiis laborum eaque ex quod sunt.</p>
                    <button className="btn btn-outline btn-success"><Link to='/hospital-login'>Log-In</Link></button>
                </div>
            </div>
            
        </div>
        
        <div></div>
        <PortfolioFooter/>
    </div>
  )
}

export default Portfolio