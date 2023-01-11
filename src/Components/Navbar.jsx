import React from 'react'
import logo from "../images/logo.png";
import "../Styles/navbar.css"
import { Link } from "react-router-dom";
import "../index.css"

function Navbar  (props)  {
    return (<>
        <div id='navbar' className='flex justify-between items-center'>
            <div className='p-5 ml-5 flex items-center'>
                <Link to={'/home'}>
                    <img className='text-white' src={logo} alt="logo" />
                </Link>
                <Link to={'/home'} className="ml-6">
                    <p className='text-3xl font-roboto font-bold text-white' >Around the world</p>
                </Link>
            </div>
            <div className='flex items-center mr-10'>
                {/* <Link to={'/register'} className="mr-8">
                    <button className="text-black text-center bg-white px-6 py-1 text-base font-medium rounded-sm hover:text-white">Register</button>
                </Link> */}

                    <button onClick={props.logout} className="text-black text-center bg-white px-6 py-1 text-base font-medium rounded-sm hover:text-white">Logout</button>

            </div>

        </div>


    </>
    )
}

export default Navbar