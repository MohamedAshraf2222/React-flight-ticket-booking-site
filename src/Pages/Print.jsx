import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../images/logo.png"
import "../Styles/login.css"


const Print = () => {
  return (<>
  
  <div id='navbar' className='flex justify-between items-center'>
            {/* <div className='p-5 ml-5 flex items-center'>
                <Link to={'/home'}>
                    <img className='text-white' src={logo} alt="logo" />
                </Link>
                <Link to={'/home'} className="ml-6">
                    <p className='text-3xl font-roboto font-bold text-white' >Around the world</p>
                </Link>
            </div>
            <div className='flex items-center mr-10'>
                <Link to={'/home'} className="mr-8">
                    <button className="text-black text-center bg-white px-6 py-1 text-base font-medium rounded-sm hover:text-white">Logout</button>
                </Link>
            </div> */}

        </div>
        <div className="flex items-center justify-center h-87">
            <div className='flex bg-btn-feedback rounded-lg flex-col items-center justify-center'>
                <div className='text-3xl py-12 text-white font-semibold'>Print Your Ticket</div>

                <div className="bg-ticket w-96 h-44 my-10 mx-20 rounded-lg">
                </div>


                <div className='flex flex-col px-14 pb-10'>
                    <button className={"mt-16 w-full btn-login px-5 py-2 text-lg font-semibold rounded-lg text-white"} >Print Now</button>

                </div>
            </div>

        </div>

  
  
  
  </>)
}

export default Print