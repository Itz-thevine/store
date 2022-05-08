import React from 'react'

const Hero = ({title}) => {
  return (
    <div className='h-banner px-14 md:px-36 pt-24 bg-white'>
        <div className='flex justify-center items-center'>
            <h1 className='text-4xl text-mainColorOne font-bold'>{title}</h1>
        </div>
    </div>
  )
}

export default Hero