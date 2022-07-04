import React from 'react'

const Button = ({title, clickFunc}) => {
  return (
    <div onClick={clickFunc} className='flex bg-mainColorTwo font-bold h-12 w-32  justify-center items-center'>{title}</div>
  )
}

export default Button