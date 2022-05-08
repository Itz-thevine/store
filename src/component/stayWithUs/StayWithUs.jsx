import React from 'react'
import Button from '../button/Button'

const StayWithUs = () => {
  return (
    <div className='px-36 pt-24 pb-14 flex bg-green-100 gap-x-6 justify-center items-center flex-wrap'>
        <div className='mb-10'><p className='font-bold text-2xl text-mainColorOne'>Stay With us</p></div>
        <div className='flex mb-10'><input type="email" placeholder='Email Address' className='h-14 px-5' style={{width: '40vw'}} /><Button title='Subscribe Now'/></div>
    </div>
  )
}

export default StayWithUs