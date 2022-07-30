import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import * as AiIcons from 'react-icons/ai'
import { useSelector, useDispatch } from 'react-redux/es/exports'
import { increQuantity } from '../../redux/productSlice'


const ShopCart = () => {
    const cart = useSelector(state=> state.products) || ''
    const cartObject = cart.products
    const cartPrice = cart.price


    const dispatch = useDispatch();
    
    // create an array using the length of the array
    const total = []
    const valueArray = []
    for (let index = 0; index < cart.products.length; index++) {
        valueArray.push(1);
        total.push(0)
    }

    // 

    const[quantity, setQuantity] = useState(valueArray)
    
    // get the array of the total prices
    

    for (let i = 0; i < quantity.length; i++) {
        let dPrice = cartPrice[i] * quantity[i]
        total[i] = dPrice;
    }

    


    useEffect(() => {
        dispatch(increQuantity({...cart, quantity, total}))
        
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [quantity])
    


    const redc = (i) => {
        let temp_state = [...quantity];
        let temp_element =  temp_state[i] ;
        // temp_element.counter = temp_element.counter+1;
        let valuer = ''
        if (temp_element === 0) {
            valuer = 0
        }else{
            valuer = temp_element -1
        }
        
        temp_state[i] = parseInt(valuer)

        setQuantity(temp_state);

        // dispatch(increQuantity({...cart, quantity}))

    }


    
    const incr = (i) => {
        let temp_state = [...quantity];
        let temp_element =  temp_state[i] ;
        let valuer = temp_element + 1
        
        temp_state[i] = parseInt(valuer)

        setQuantity(temp_state);

        // dispatch(increQuantity({...cart, quantity}))

    }


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
                            <img src={d.image} alt="cart" className='h-auto w-20 md:w-36 my-3' />
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
                            <input type="number" readOnly value={quantity[i]} className='border-2 my-3 md:my-0 outline-none appearance-none text-center focus:outline-none w-10 mx-3' />
                            <div>
                                <AiIcons.AiOutlinePlus onClick={() => incr(i)}/>
                            </div>
                        </div>
                    </td>
                    <td>${cartPrice[i]}</td>
                    <td>${cartPrice[i] * quantity[i]}</td>
                </tr>
                ))}
            </tbody>
        </table>
    </div>
  )
}

export default ShopCart