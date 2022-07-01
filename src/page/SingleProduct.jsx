import axios from 'axios'
import React from 'react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Button from '../component/button/Button'

const SingleProduct = () => {
    let {id} = useParams()
    const name = id

    const[pagedata, setPagedata] = useState([])

    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products/${name}`).then(
            (res)=>{
                setPagedata(res.data)
            }
        )
    }, [])
    
    console.log(pagedata)

  return (
    <div className='flex flex-col md:flex-row flex-wrap items-center py-10 md:px-24'>
        <div className='flex flex-auto my-10 md:my-0 w-7/12 md:w-4/12'>
            <img src={pagedata.image} alt="" className='md:w-10/12' />
        </div>
        <div className='flex flex-auto flex-col w-9/12 md:w-8/12 md:pl-8'>
            <p className='text-2xl font-bold'>{pagedata.title}</p>
            <p className='text-lg font-bold text-slate-500 mb-7'>{pagedata.category}</p>
            <p className='text-2xl font-bold text-mainColorTwo'>${pagedata.price}</p>
            <div>
                <p className='text-lg font-bold text-slate-500 mt-3'>Description</p>
                <hr className='w-full bg-slate-500 my-2' />
                <p className='text-mainColorOne'>{pagedata.description}</p>
            </div>
            <div className=' flex pt-4 pb-7'>
                <p className='font-bold text-slate-500'>Size:</p>
                <div className='flex'>
                    <p className='mx-5'>SM</p>
                    <p className='mx-5 border-2 px-2'>MD</p>
                    <p className='mx-5'>LG</p>
                    <p className='mx-5'>XL</p>
                </div>
            </div>
            <Button title='Add to Cart'/>
        </div>
    </div>
  )
}

export default SingleProduct