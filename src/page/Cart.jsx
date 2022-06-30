import React from 'react'
import * as MdIcons from 'react-icons/md'
import ShopCart from '../component/shopCart/ShopCart'

const Cart = () => {
  return (
    <div className='flex'>
        <div className='flex-auto w-4/5 px-12'>
            <p className='text-2xl font-bold mt-5'>Shop Cart</p>
            <hr className='w-full h-1 my-5'/>
            <ShopCart/>
            
        </div>
        <div className='flex-auto px-12 flex-col flex justify-center items-center w-2/5 bg-green-50  h-banner'>
            <p className='text-2xl font-bold'>Order Summary</p>
            <hr className='w-full h-1 my-5'/>
            <div className='flex justify-between w-full py-2'>
                <p>ITEMS <span>3</span></p>
                <p>$50</p>
            </div>
            <div className='flex flex-col w-full py-2'>
                <p>Shipping</p>
                <div className='bg-white border-2 justify-between flex w-full h-10 items-center px-4'>
                    <p>Standard Delivery - $4</p>
                    <MdIcons.MdOutlineExpandMore/>
                </div>
            </div>
            <div className='flex flex-col w-full py-2'>
                <p>Promo Code</p>
                <input type="text" id="" placeholder='Enter Promo code' className='px-3 focus:outline-none focus:border-green-400 border-2 w-full h-10 mb-4'/>
                <button className='w-40 bg-mainColorTwo font-bold py-2 cursor-pointer'>
                    Apply
                </button>
            </div>
            <hr className='w-full h-1 my-5'/>
            <div className='flex justify-between w-full'>
                <p>Total cost</p>
                <p>$50</p>
            </div>
            <div className='flex flex-col w-full'>
                <button className='w-full bg-mainColorTwo mt-5 font-bold py-2 cursor-pointer'>
                    Check out
                </button>
            </div>
        </div>
    </div>
  )
}

export default Cart