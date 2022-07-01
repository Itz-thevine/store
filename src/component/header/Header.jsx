import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import * as AiIcons from 'react-icons/ai'
import Button from '../button/Button';

const Header = () => {
    const [nav, setNav] = useState('visible');

    const close = () =>{
        setNav('hidden')

        if(nav === 'hidden'){
            setNav('visible')
        }
    }

  return (
     <>
        <div className='bg-mainColorOne flex pr-32'>
            <div className='bg-mainColorTwo font-semibold h-28 w-28 text-2xl flex justify-center items-center' onClick={close}>
                    <AiIcons.AiOutlineMenu/>
            </div>
           
            <div className='text-mainColorTwo text-2xl pl-9 flex items-center font-black w-3/12'>
                Store
            </div>
            <div className='w-6/12 flex justify-around items-center hidden md:flex'>
              <Link className='flex justify-center items-center text-white mx-7' to='/'>Home</Link>
              <Link className='flex justify-center items-center text-white mx-7'  to='/About'>About</Link>
              <Link className='flex justify-center items-center text-white mx-7 mr-28'  to='/Contact'>Contact</Link>
            </div>
            <div className='flex  font-medium justify-end items-center hidden lg:flex w-4/12'>
              
                <Link to='/cart'>
                    <div className='flex text-white justify-center items-center text-2xl mx-7'><AiIcons.AiOutlineShoppingCart/></div>
                </Link>
                <Link to='/login'>
                    <Button title='Log In'/>
                </Link> 
            </div>

        </div>
        {
                nav && (
                    <div className='bg-mainColorThree px-6 flex justify-between h-16 item-center  items-center font-bold' style={{visibility: nav}}>
                       <div className=' justify-around items-center flex md:hidden'>
                            <Link className='flex justify-center items-center text-white mr-3' to='/'>Home</Link>
                            <Link className='flex justify-center items-center text-white mx-3'  to='/About'>About</Link>
                            <Link className='flex justify-center items-center text-white mx-3'  to='/Contact'>Contact</Link>
                        </div>
                        <div className='flex  font-medium justify-end items-center md:hidden flex '>
                        
                            <Link to='/cart'>
                                <div className='flex text-white justify-center items-center text-2xl mx-4'><AiIcons.AiOutlineShoppingCart/></div>
                            </Link>
                            <Link to='/login'>
                                <Button title='Log In'/>
                            </Link> 
                        </div>
                    </div>
                )
            }
     </> 
  )
}

export default Header