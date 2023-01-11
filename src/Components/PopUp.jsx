import React from 'react'
import "../Styles/PopUp.css"
import { Link } from 'react-router-dom'

const PopUp = ({ open, close }) => {
    if (!open) {
        return null;
    }
    return (<>
        <div onClick={close} className="pop-up">
            <div onClick={(e)=>{e.stopPropagation()}} className="w-2/6 absolute bg-confirmation rounded-xl">
                <p onClick={close} className='text-right text-xl cursor-pointer font-semibold mr-4 mt-4'>X</p>
                <div className="flex flex-col justify-center h-full items-center">
                    <p className='text-2xl font-bold text-center mt-6 mb-12'>Confirmation</p>
                    <div className="flex mb-12">
                        <Link to={'/payment'}>
                        <button className="text-center mr-5 bg-black px-6 py-1 text-base font-medium rounded-lg hover:text-white">Confirm Booking</button>
                        </Link>
                        <button onClick={close} className="text-center bg-black px-6 py-1 text-base font-medium rounded-lg hover:text-white">Cancel</button>
                    </div>
                </div>
            </div>
        </div>

    </>)
}

export default PopUp;