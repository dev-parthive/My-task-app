import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider';
import {FcGoogle} from 'react-icons/fc'
import { toast } from 'react-hot-toast';

const Signup = () => {
    const location = useLocation()
    let from = location?.state?.pathname || "/";
    const navigate = useNavigate()
    const {createUser, googleSign, user, updateUser} = useContext(AuthContext)
    console.log(user)
    // handleSignup
    const handleSignup = (event) =>{
        event.preventDefault()
        const form = event.target;
        const email = event.target.email.value;
        const password = event.target.password.value;
        const name = event.target.name.value;
        console.log(name, email, password)
        createUser(email, password)
        .then(result => {
            const user = result.user
            console.log(user)
            const userInfo = {
                displayName: name
            }
            updateUser(userInfo)
            .then( () =>{
                toast.success("user profile updated")
            } )
            .catch( err => {
                console.log(err)
                toast.error(err.message)
            })
            // toast.success("User created")
            form.reset()
            navigate( from , {replace: true})
        })
        .catch(err => {
            const message  = err.message
            toast.error(`${message}`)
        })
    }
    //Hnalde googleSignIn
    const handleGoogleSignIn = () =>{
        googleSign()
        .then( result => {
            const user = result.user;
                console.log(user)

            toast.success("User created")
        })
        .catch(err => {
            const message = err.message;
            console.log(message)
            toast.error(`${message}`)
        })
    }
    return (
      <div className='w-full'>
          <div style={{width: "40%"}} className=' mt-7 mx-auto m-8 rounded-2xl bg-base-300 p-8 shadow-lg shadow-blue-500/50 '>
                <form onSubmit={handleSignup}>
                    <div className="mb-6">

                        <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Name</label>
                        <input type="text" id="name" className="bg-gray-50 border w-4/5 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your Name" name="name" required />
                    </div>
                    <div className="mb-6">

                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                        <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" name="email" required />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
                        <input type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" name="password" required />
                    </div>
                    {/* <div className="flex items-start mb-6">
                        <div className="flex items-center h-5">
                            <input id="remember" type="checkbox" value="" className="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required />
                        </div>
                        <label for="remember" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
                    </div> */}
                 <div className='flex justify-center'>
                 <button type="submit" className="text-white w-2/4 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Sign Up</button>
                 </div>
                </form>
                <div>
                    <p className='text-center'>--------Or Login With-------</p>

                   <div className='w-full flex justify-center'>
                   <p className='text-center text-2xl my-4'><FcGoogle className='cursor-pointer' onClick={handleGoogleSignIn}></FcGoogle></p>
                   </div>

                    <p className='text-center'>
                        Already have an account? <Link to="/login" className='text-orange-500 underline font-semibold'>Login</Link>
                    </p>
                    
                </div>


        </div>
      </div>
    );
};

export default Signup;