import React from 'react'
import { useState } from 'react'
import * as AiIcons from 'react-icons/ai'
import { useSelector } from 'react-redux'
import ShopCart from '../component/shopCart/ShopCart'
import { useEffect } from "react";
import {
    PayPalScriptProvider,
    PayPalButtons,
    usePayPalScriptReducer
} from "@paypal/react-paypal-js";








const Cart = () => {
    
    const cart = useSelector(state=> state.products)
    const cartObject = cart.products
    const cartPrice = cart.price
    const cartQuantity = cart.quantity
    const cartTotal = cart.total 

    const [pay, setPay] = useState(false);
    // console.log(cartTotal)

    const total = () => {
        let dTotal = 0;
        for (let index = 0; index < cartTotal.length; index++) {
           dTotal += cartTotal[index]
        }
        return dTotal
    }

    const [showSelect, setShowselect] = useState(false);
    const handleSelect = (e) => {
        setShowselect(!e)
    }

    const [valueSelect, setValueselect] = useState('Standard Delivery - $2')
    const [delivery, setDelivery] = useState(2)
    const setSelect = (a , b) => {
        setValueselect(a)
        setDelivery(b)
        setShowselect(false)
    }


    // // This values are the props in the UI paypal
    const amount = total() + delivery;
    const currency = "USD";
    const style = {"layout":"vertical"};

    
    // Custom component to wrap the PayPalButtons and handle currency changes
    const ButtonWrapper = ({ currency, showSpinner }) => {
        // usePayPalScriptReducer can be use only inside children of PayPalScriptProviders
        // This is the main reason to wrap the PayPalButtons in a new component
        const [{ options, isPending }, dispatch] = usePayPalScriptReducer();

        useEffect(() => {
            dispatch({
                type: "resetOptions",
                value: {
                    ...options,
                    currency: currency,
                },
            });
        }, [currency, showSpinner]);


        return (<>
                { (showSpinner && isPending) && <div className="spinner" /> }
                <PayPalButtons
                    style={style}
                    disabled={false}
                    forceReRender={[amount, currency, style]}
                    fundingSource={undefined}
                    createOrder={(data, actions) => {
                        return actions.order
                            .create({
                                purchase_units: [
                                    {
                                        amount: {
                                            currency_code: currency,
                                            value: amount,
                                        },
                                    },
                                ],
                            })
                            .then((orderId) => {
                                // Your code here after create the order
                                return orderId;
                            });
                    }}
                    onApprove={function (data, actions) {
                        return actions.order.capture().then(function () {
                            // Your code here after capture the order
                        });
                    }}
                />
            </>
        );
    }

  return (
    <div className='flex flex-wrap lg:flex-nowrap'>
        <div className='flex-auto w-4/5 px-12'>
            <p className='text-2xl font-bold mt-5'>Shop Cart</p>
            <hr className='w-full h-1 my-5'/>
            <ShopCart/>
            
        </div>
        <div className='flex-auto px-12 flex-col flex justify-center items-center w-2/5 bg-green-50  h-banner'>
            <p className='text-2xl font-bold'>Order Summary</p>
            <hr className='w-full h-1 my-5'/>
            <div className='flex justify-between w-full py-2'>
                <p>ITEMS <span>{cartPrice.length || 0}</span></p>
                <p>${total()}</p>
            </div>
            <div className='flex flex-col w-full py-2'>
                <p>Shipping</p>
                <div className='relative'>
                    <div className='bg-white border-2 justify-between flex w-full h-10 items-center px-4' onClick={() => handleSelect(showSelect)}>
                        <p>{valueSelect}</p>
                        <AiIcons.AiOutlineCaretLeft className={showSelect === false ? 'flex' : 'hidden'}/>
                        <AiIcons.AiOutlineCaretDown className={showSelect === true ? 'flex' : 'hidden'}/>
                    </div>
                    {
                        showSelect && (
                            <div className='bg-white absolute border-2 justify-between flex w-full h-auto items-center '>
                                <div className='flex flex-col w-full'>
                                    <p className='hover:bg-mainColorThree w-full px-4' onClick={()=>setSelect('Standard Delivery - $2', 2)}>Standard Delivery - $2</p>
                                    <p className='hover:bg-mainColorThree w-full px-4' onClick={()=>setSelect('Premium Delivery - $4', 4)}>Premium Delivery - $4</p>
                                    <p className='hover:bg-mainColorThree w-full px-4' onClick={()=>setSelect('Master Delivery - $6', 6)}>Master Delivery - $6</p>
                                    <p className='hover:bg-mainColorThree w-full px-4' onClick={()=>setSelect('Gold Delivery - $8', 8)}>Gold Delivery - $8</p>
                                    <p className='hover:bg-mainColorThree w-full px-4' onClick={()=>setSelect('Platinum Delivery - $10', 10)}>Platinum Delivery - $10</p>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
            <div className='flex flex-col w-full py-2'>
                <p>Promo Code</p>
                <input type="text" id="" disabled placeholder='Enter Promo code' className='px-3 focus:outline-none focus:border-green-400 border-2 w-full h-10 mb-4'/>
                <button className='w-40 bg-mainColorTwo font-bold py-2 cursor-not-allowed' >
                    Apply
                </button>
            </div>
            <hr className='w-full h-1 my-5'/>
            <div className='flex justify-between w-full'>
                <p>Total cost</p>
                <p>${total() + delivery}</p>
            </div>
            <div className='flex flex-col w-full'>
                {
                    pay ? (
                        <PayPalScriptProvider
                            options={{
                                "client-id": "AaaRqg-ngjkBvbUI5vPbjRlrojcfBwb_6RMj1s46UCijpfXmDQio99WuwduakRIjr7cYQSK3SF58px9Z",
                                components: "buttons",
                                currency: "USD",
                                "disable-funding":"credit,card,p24"
                            }}
                        >
                            <ButtonWrapper
                                currency={currency}
                                showSpinner={false}
                            />
                        </PayPalScriptProvider>
                    ):(
                        <button className='w-full bg-mainColorTwo mt-5 font-bold py-2 cursor-pointer' onClick={() => setPay(true)}>
                            Check out
                        </button>

                    )
                }
            </div>
        </div>
    </div>
  )
}

export default Cart