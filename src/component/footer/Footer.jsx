import React from 'react'

const Footer = () => {
  return (
    <div className=' py-24  px-14 md:px-36 bg-mainColorOne w-full flex flex-col justify-center items-center'>
       <div className='font-bold h-1 w-full text-neutral-400 mb-7 lg:justify-between flex-wrap mb-10 flex justify-center items-center'>
           <div className='flex-1 flex justify-between flex-wrap'>
               <p>Home</p>
               <p>Contact</p>
               <p>About us</p>
            </div>
           <div className='flex flex-1 pl-32'> 
               <h1 className='text-mainColorTwo text-2xl font-black'>Store</h1>
            </div>
           <div className='flex flex-1 justify-around'>
               <p>Sign Up</p>
               <p>Log In</p>
           </div>
       </div>
        
        <div className='h-1 w-full text-neutral-400 flex justify-around items-center mt-16'>
            <div><p>Copyright 2022</p></div>
            <div className='h-1 bg-neutral-400' style={{width: '40vw'}}></div>
            <div><p>designed by Ikechukwu Divine</p></div>
        </div>
    </div>
  )
}

export default Footer