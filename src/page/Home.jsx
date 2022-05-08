import React from 'react'
import * as AiIcons from 'react-icons/ai'
import axios from 'axios';
import { useState, useEffect } from 'react';
import Products from '../component/product/Products';
import Service from '../component/services/Services';
import StayWithUs from '../component/stayWithUs/StayWithUs';
import Button from '../component/button/Button';
import Footer from '../component/footer/Footer';


const Home = () => {
  const [data, setData] = useState([]);

    // api call
    useEffect(()=> {
      axios.get('https://fakestoreapi.com/products').then(
          (res) => {
                var maxNumber = 20;
                var randomNumber = Math.floor((Math.random() * maxNumber) + 1);
                setData(res.data[randomNumber])
          }
      )

    },[])
    // console.log(data)
   
    
  return (
    <div>
       <div className="bg-white h-auto py-14 flex justify-center items-center px-14 md:px-36 flex-wrap ">
          <div className='text-mainColorOne flex flex-1 flex-col pb-7'>

            <div className=''>
              <h1 className='text-4xl font-bold'>{data.title}</h1>
            </div>
            <div className=' mt-5 text-sm text-neutral-500 '> 
              <p style={{wordWrap: 'break-word', overflow: 'hidden', maxHeight: '3.6em', lineHeight:'1.2em'}}>{data.description}</p>
            </div>

            <div className='flex gap-x-16 mt-14'>
              <div className=''>
                <p className='text-sm text-neutral-500'>Price</p>
                <p>${data.price}</p>
              </div>
              <div className=''>
                <p className='text-sm text-neutral-500'>Category</p>
                <p>{data.category}</p>
              </div>
            </div>

            <div className='flex mt-7 gap-x-10'>
              <Button title='Shop Now'/>
              <div className='flex text-mainColorOne justify-center text-2xl items-center'><AiIcons.AiOutlineHeart/></div>
              <div className='flex text-mainColorOne justify-center items-center text-2xl'><AiIcons.AiOutlineShoppingCart/></div>
            </div>

          </div>


          <div className='flex flex-1 justify-end py-7'>
            <img src={data.image} alt="" className='max-w-sm max-h-96 h-auto transition-shadow ease-in-out duration-300 shadow-none hover:shadow-xl'/>
          </div>
      </div> 

      <Products/>
      <Service/>
      <StayWithUs/>
      <Footer/>
    </div>
  )
}

export default Home