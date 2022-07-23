import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import * as AiIcons from 'react-icons/ai'
import * as IoIcons from 'react-icons/io'
import Button from '../button/Button';
import auth from '../../firebase';
import { signOut } from 'firebase/auth';
// import { async } from '@firebase/util';

const Header = () => {
    const [nav, setNav] = useState('visible');
    const navigate = useNavigate()

    const close = () =>{
        setNav('hidden')

        if(nav === 'hidden'){
            setNav('visible')
        }
    }

    //user information
    const user = JSON.parse(localStorage.getItem('user_id'));
    // console.log(user)

   const [drop , setDrop] = useState(false)

   console.log(drop)

    const dropped = () => {
        setDrop(!drop)
    }

    async function logout() {

        try {
    
          await signOut(auth).then((res)=>{
            localStorage.setItem('user_id', 'null')
            navigate('/')
          })
            
        } catch (error) {
          console.log(error);
        }

        navigate('/')
    
      }

      let signUserImg = false

      if (user === null) {
        signUserImg = false
      } else {
        signUserImg = true
      }

    //   console.log(user.photoURL)

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
              
              {
                user === null ? (
                    <>
                        <Link to='/cart'>
                            <div className='flex text-white justify-center items-center text-2xl mx-7'><AiIcons.AiOutlineShoppingCart/></div>
                        </Link>
                        <Link to='/login' onClick={()=>setDrop(false)}>
                            <Button title='Log In'/>
                        </Link> 
                        <Link to='/signup' className='ml-4' onClick={()=>setDrop(false)}>
                        <div className='flex bg-mainColorOne border-2 text-white font-bold h-12 w-32  justify-center items-center'>Register</div>
                        </Link> 
                    </>
                ):(
                    <div className='flex justify-center items-center relative'>
                            <p className='text-white'>Welcome! {user.email}</p>
                            <div className='bg-mainColorTwo overflow-hidden mx-3 h-10 w-10 rounded-full flex justify-center items-center text-3xl'>
                               {signUserImg != false ? (<img src={user.photoURL}  className='w-full h-full'/>) :(<IoIcons.IoIosContact/>)}
                            </div>
                            <div className='flex justify-center items-center text-white text-1xl' onClick={dropped}><AiIcons.AiFillCaretDown/></div>
                            { drop && (
                                <div className='bg-mainColorTwo px-3 py-2 absolute right-0 top-14 w-32 cursor-pointer   '>
                                    <ul>
                                        <Link to='/cart' onClick={()=>setDrop(false)}>
                                            <li className='flex justify-start items-center py-2'>
                                                <AiIcons.AiOutlineShoppingCart/>
                                                <p className='ml-4'>Cart</p>   
                                            </li>
                                        </Link>
                                        <li className='flex justify-start items-center py-2' onClick={logout}>
                                            <IoIcons.IoIosExit/>
                                            <p className='ml-4'>Log out</p>   
                                        </li>
                                    </ul>
                                </div>
                            )}
                    </div>
                    
                )
              }
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