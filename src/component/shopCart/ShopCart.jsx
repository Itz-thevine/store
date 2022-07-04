import React from 'react'
import { useState } from 'react'
import * as AiIcons from 'react-icons/ai'
import { useSelector, useDispatch } from 'react-redux/es/exports'
import { addProducts } from '../../redux/productSlice'

const ShopCart = () => {
    const cart = useSelector(state=> state.products)
    const cartObject = cart.products
    const cartPrice = cart.price
    const cartQuantity = cart.quantity
    console.log(cartQuantity)

    // const[quantity, setQuantity] = useState([])

    // console.log(quantity)


    const [quantity, setQuantity] = useState(cartQuantity)
    

    const dispatch = useDispatch();
    const redc = (i) => {

        setQuantity(quantity[i] - 1)
        console.log('qun' + quantity) 
        // quantity[i] = quantity[i] -1
        // dispatch(addProducts({ quantity }))
    }

    console.log('quan:' + quantity)

  return (
    <div className='w-full'>
        <table className="table-auto w-full">
            <thead className='mb-5'>
                <tr>
                    <th className='text-left text-slate-500 w-5/12 md:w-6/12'>Product Details</th>
                    <th className='text-left text-slate-500 w-3/12 md:w-auto '>
                        <div className='pl-4 mr-6'>Quantity</div>
                    </th>
                    <th className='text-left text-slate-500 w-3/12 md:w-auto'>Price</th>
                    <th className='text-left text-slate-500  w-3/12 md:w-auto'>Total</th>
                </tr>
            </thead>
            <tbody>
                { cartObject.map((d, i) => (
                <tr className='' key={i}>
                    <td>
                    <div className='flex justify-start flex-col md:flex-row md:items-center'>
                        <div>
                            <img src={d.image} alt="" className='h-auto w-20 md:w-36 my-3' />
                        </div>
                        <div className='flex  flex-col my-3 md:ml-5'>
                            <p className='font-bold text-lg md:text-xl mb-2'>{d.title}</p>
                            <p className='text-mainColorTwo mb-2 font-bold'>{d.category}</p>
                            <p className='text-slate-500 '>Remove</p>
                        </div>
                    </div>
                    </td>
                    <td className=''>
                        <div className='flex flex-col md:flex-row  items-center text-left'>
                            <div className='flex'>
                                <AiIcons.AiOutlineMinus onClick={()=> redc(i)}/>
                            </div>
                            <input type="number" value={quantity[i]} className='border-2 my-3 md:my-0 outline-none appearance-none text-center focus:border-green-500 focus:outline-none w-10 mx-3' />
                            <div>
                                <AiIcons.AiOutlinePlus/>
                            </div>
                        </div>
                    </td>
                    <td>${cartPrice[i]}</td>
                    <td>$200.42</td>
                </tr>
                ))}
            </tbody>
        </table>
    </div>
  )
}

export default ShopCart