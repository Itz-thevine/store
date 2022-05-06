import React from 'react'
import * as AiIcons from 'react-icons/ai'

const Home = () => {
  return (
    <div>
       <div className="bg-mainColorOne h-banner flex justify-center items-center">
          <div className='text-white flex flex-1 flex-col pl-36 '>

            <div className=''>
              <h1 className='text-6xl font-bold'>Clothe Title</h1>
            </div>
            <div className='w-2/5 mt-5 text-sm text-neutral-300'> 
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,</p>
            </div>

            <div className='flex gap-x-16 mt-14'>
              <div className=''>
                <p className='text-sm text-neutral-300'>Price</p>
                <p>$150</p>
              </div>
              <div className=''>
                <p className='text-sm text-neutral-300'>Category</p>
                <p>Male</p>
              </div>
            </div>

            <div className='flex mt-7 gap-x-10'>
              <div className='flex border-2 bg-mainColorThree text-mainColorOne font-bold border-mainColorTwo h-11 w-32 justify-center items-center cursor-pointer'>Shop Now</div>
              <div className='flex text-white justify-center text-2xl items-center'><AiIcons.AiOutlineHeart/></div>
              <div className='flex text-white justify-center items-center text-2xl'><AiIcons.AiOutlineShoppingCart/></div>
            </div>

          </div>


          <div></div>
      </div> 
    </div>
  )
}

export default Home