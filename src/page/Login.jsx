import React from 'react'
import * as AiIcons from 'react-icons/ai'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className='flex justify-center items-center h-banner w-screen'>
        <div>
            <p className='font-bold text-2xl mb-5 text-center'>Login</p>
            <div className='bg-red-500 w-96 mb-5 py-2 px-3 text-white flex justify-between'>
                <p>Error</p>
                <div className='flex justify-center items-center'><AiIcons.AiOutlineClose/></div>
            </div>
        <form action="" className='flex-wrap'>
            <div>
                <label >
                <p>Email</p>
                <input type="text" id="Email" className='px-3 focus:outline-none focus:border-green-400 border-2 w-96 h-10 mb-4'/>
                </label>
            </div>

            <div>
            <label >
            <p>Password</p>
            <input type="password" id="password" className='px-3 focus:border-green-400 focus:outline-none border-2 w-96 h-10 mb-4' />
            </label>
            </div>
            <input type="submit" className='w-96 bg-mainColorTwo font-bold py-2 cursor-pointer' />
        </form>
            <div className='mt-2 text-right'>
                <p>Not a member <Link to='/signUp' className='text-blue-400 font-bold cursor-pointer'>Sign Up</Link></p>
            </div>
            <div className='flex justify-center items-center mt-3'>
                    <p className='border-2 rounded-full w-10 p-1 text-center'>or</p>
            </div>
            <div className='flex mt-5'>
                <div className='bg-red-500 py-2 flex-1 text-center text-white font-bold mr-2 cursor-pointer'>Google</div>
                <div className='bg-blue-500 py-2 flex-1 text-center text-white font-bold ml-2 cursor-pointer'>Facebook</div>
            </div>
        </div>        
    </div>
  )
}

export default Login