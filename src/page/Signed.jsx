import React from 'react'
import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import {useNavigate} from 'react-router-dom'

const Signed = () => {
    const user = JSON.parse(localStorage.getItem('user_id'));
    const navigate = useNavigate();

    console.log('user:' + user)

    useEffect(() => {
      if (user === null) {
        navigate('/login')
      }
    }, [])
    

  return (
    <div>
        { user === null ? (
            <div></div>
        ):(
            <div>
                <Outlet/>
            </div>
        )}
    </div>
  )
}

export default Signed