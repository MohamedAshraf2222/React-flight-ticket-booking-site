// import Axios from 'axios'
import React, { useState } from 'react'
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase.config';
import { toast } from "react-toastify";
import { Link } from 'react-router-dom';

const Register = () => {
    // const [user, setUser] = useState({
    //     first_name: '',
    //     last_name: '',
    //     age: 0,
    //     email: '',
    //     password: ''
    // })
    // function getUserData(e) {
    //     let myUsers = { ...user }//Deep Copy
    //     myUsers[e.target.name] = e.target.value;
    //     setUser(myUsers)
    // }

    const [email, setEmail] = useState('')
    const [pwd, setPwd] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    async function submitRegisterForm(e) {
        e.preventDefault();
        setIsLoading(true)
        // let {data} = await Axios.post('',user)
        // console.log(data);
        try {
            const response = await createUserWithEmailAndPassword(auth, email, pwd)
            const user = response.user
            console.log(user);
            
        } catch (error) {
            setIsLoading(false)
            toast.error(error.message)
        }
    }
    return (<>
        <div className="flex items-center justify-center h-screen">
            {isLoading ? <div className="text-center text-3xl text-white m-40">
                Loading ...
            </div> :
                <div className='flex bg-btn-feedback rounded-lg flex-col items-center justify-center'>
                    <div className='text-3xl py-12 text-white font-semibold'>Register</div>
                    <form className='flex flex-col px-14 pb-10' onSubmit={submitRegisterForm}>
                        <label className="text-white text-lg mb-2 mt-2" htmlFor="name">First Name :</label>
                        <input
                            name='first_name'
                            type="text"
                            required
                            placeholder='Enter Your First Name'
                            className="px-2 py-1 w-96 rounded-sm bg-gray"
                        />
                        <label className="text-white text-lg mb-2 mt-5" htmlFor="name">Last Name :</label>
                        <input
                            // onChange={getUserData}
                            name='last_name'
                            type="text"
                            required
                            placeholder='Enter Your Last Name'
                            className="px-2 py-1 w-96 rounded-sm bg-gray"
                        />
                        <label className="text-white text-lg mb-2 mt-5" htmlFor="name">Age :</label>
                        <input
                            // onChange={getUserData}
                            name='age'
                            type="number"
                            required
                            placeholder='Enter Your Age'
                            className="px-2 py-1 w-96 rounded-sm bg-gray"
                        />
                        <label className="mt-5 text-white text-lg mb-2" htmlFor="name">Email :</label>
                        <input
                            onChange={(e) => setEmail(e.target.value)}
                            name='email'
                            type="Email"
                            required
                            placeholder='Enter Your Email'
                            className="px-2 py-1 w-96 rounded-sm bg-gray"
                        />
                        <label className="mt-5 text-white text-lg mb-2" htmlFor="name">Password :</label>
                        <input
                            onChange={(e) => setPwd(e.target.value)}
                            name='password'
                            type="password"
                            required
                            placeholder='Enter Your Password'
                            className="px-2 py-1 w-96 rounded-sm bg-gray"
                        />
                        <button type='submit' className="mt-10 w-full btn-login px-5 py-2 text-lg font-semibold rounded-lg text-white" >Create an account</button>
                        <Link to={'/login'} className="mt-4">
                            <p className='text-white hover-color'>Already Have An Account ?</p>
                        </Link>

                    </form>
                </div>
            }
        </div>



    </>
    )
}

export default Register