import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from "../images/logo.png"
import "../Styles/login.css"
import PopUp from '../Components/PopUp'

const Booking = () => {
    const [statePopUp, setStatePopUp] = useState(false)
    return (<>
        <PopUp open={statePopUp} close={()=>{setStatePopUp(false)}} />
        {/* <div id='navbar' className='flex justify-between items-center'>
            <div className='p-5 ml-5 flex items-center'>
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
            </div>

        </div> */}
        <div className="flex items-center justify-center h-87">
            <div className='flex bg-btn-feedback rounded-lg flex-col items-center justify-center'>
                <div className='text-3xl py-12 text-white font-semibold'>Booking</div>

                <div className="bg-travel-2-booking w-80 h-44 my-10 mx-20 rounded-lg">
                </div>
                <p className='text-white font-semibold text-lg hover-green'>
                    Pay Now for : 400$
                </p>

                <div className='flex flex-col px-14 pb-10'>
                    <button onClick={()=>{setStatePopUp(true) }} className={"mt-16 w-full btn-login px-5 py-2 text-lg font-semibold rounded-lg text-white"} >Book Now</button>

                </div>
            </div>

        </div>



    </>)
}

export default Booking