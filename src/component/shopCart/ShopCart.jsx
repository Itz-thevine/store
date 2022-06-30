import React from 'react'

const ShopCart = () => {
  return (
    <div className='w-full'>
        <table class="table-auto w-full">
            <thead>
                <tr>
                    <th className='text-left'>Product Details</th>
                    <th className='text-left'>Quantity</th>
                    <th className='text-left'>Price</th>
                    <th className='text-left'>Total</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
                <td>Malcolm Lockyer</td>
                <td>Malcolm Lockyer</td>
                <td>1961</td>
                </tr>
               
            </tbody>
        </table>
    </div>
  )
}

export default ShopCart