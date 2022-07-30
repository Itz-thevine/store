import React from 'react'
import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import {useNavigate} from 'react-router-dom'

const Signed = () => {
    const user = JSON.parse(localStorage.getItem('user_id'));
    const navigate = useNavigate();

    useEffect(() => {
      if (user === null) {
        navigate('/login')
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
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