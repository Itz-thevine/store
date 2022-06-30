import React from 'react'
import * as AiIcons from 'react-icons/ai'
import { Link } from 'react-router-dom'

const SignUp = () => {
  return (
    <div>
    <div className='flex justify-center items-center h-banner w-screen'>
        <div>
            <p className='font-bold text-2xl mb-5 text-center'>Sign Up</p>
            <div className='flex justify-center md:justify-end'>
                <div className='bg-red-500 w-96 mb-5 py-2 px-3 text-white flex justify-between'>
                    <p>Error</p>
                    <div className='flex justify-center items-center'><AiIcons.AiOutlineClose/></div>
                </div>
            </div>
            <div className='flex'>
                {/* image */}
                <label htmlFor=""></label>

                {/* <div className='flex-auto w-56 bg-black mr-5'>
                </div> */}

                <form action="" className='flex-wrap flex'>
                    {/* <label htmlFor="img" className='flex-auto w-56 bg-black mr-5 text-white'>
                        <p>here</p>
                    <input type="file" id='img' className='flex-auto w-56 bg-black mr-5 text-white' />
                    </label> */}
                    <div  className='flex-auto justify-center flex w-56 md:mr-5 text-white'>
                        <label for="dropzone-file" class="flex flex-col justify-center py-8 items-center w-96 md:w-full h-36 md:h-auto bg-gray-50 rounded-none border-2 border-gray-300 border-dashed cursor-pointer dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                            <div class="flex flex-col justify-center items-center pt-5 pb-6">
                                <svg class="mb-3 w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                                <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Click to upload</span> or drag and drop</p>
                                <p class="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                            </div>
                            <input id="dropzone-file" type="file" class="hidden" />
                        </label>
                    </div>
                   <div className='flex-auto w-96 flex justify-center flex-col items-center mt-7 md:mt-1'>
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
                   </div>
                </form>
            </div>
            <div className='mt-2 text-center md:text-right'>
                <p>Already a member <Link to='/login' className='text-blue-400 font-bold cursor-pointer'>Log In</Link></p>
            </div>
            
        </div>        
     </div>
    </div>
  )
}

export default SignUp