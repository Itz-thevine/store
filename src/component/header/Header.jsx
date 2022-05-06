import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import * as AiIcons from 'react-icons/ai'

const Header = () => {
    const [nav, setNav] = useState(false);

    const close = () =>{
        setNav(true)

        if(nav){
            setNav(false)
        }
    }


  return (
     <>
        <div className='bg-mainColorOne flex pr-32'>
            <div className='bg-mainColorTwo font-semibold h-28 w-28 text-2xl flex justify-center items-center' onClick={close}>
                    <AiIcons.AiOutlineMenu/>
            </div>
           
            <div className='text-mainColorTwo text-2xl pl-9 flex items-center font-black flex-1'>
                Clothe
            </div>
            <div className=' flex flex-1 gap-x-10 font-medium justify-end items-center invisible lg:visible'>
              <div className='flex text-white justify-center text-2xl items-center'><AiIcons.AiOutlineSearch/></div>
              <div className='flex text-white justify-center text-2xl items-center'><AiIcons.AiOutlineHeart/></div>
              <div className='flex text-white justify-center items-center text-2xl'><AiIcons.AiOutlineShoppingCart/></div>
              <div className='flex bg-mainColorTwo h-11 w-24 justify-center items-center'>Login</div>
            </div>

        </div>
        {
                nav && (
                    <div className='bg-mainColorThree flex justify-center item-center gap-x-8 py-4 font-bold'>
                        <Link className='flex justify-center items-center' to='/'>Home</Link>
                        <Link className='flex justify-center items-center'  to='/About'>About</Link>
                        <Link className='flex justify-center items-center'  to='/Contact'>Contact</Link>
                    </div>
                )
            }
     </> 
  )
}

export default Header