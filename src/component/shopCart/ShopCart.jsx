import React from 'react'
import * as AiIcons from 'react-icons/ai'

const ShopCart = () => {
  return (
    <div className='w-full'>
        <table class="table-auto w-full">
            <thead className='mb-5'>
                <tr>
                    <th className='text-left text-slate-500 w-6/12'>Product Details</th>
                    <th className='text-left text-slate-500 '>
                        <div className='pl-4'>Quantity</div>
                    </th>
                    <th className='text-left text-slate-500'>Price</th>
                    <th className='text-left text-slate-500'>Total</th>
                </tr>
            </thead>
            <tbody>
                <tr className=''>
                    <td>
                    <div className='flex items-center'>
                        <div>
                                <img src="https://scontent.flos1-1.fna.fbcdn.net/v/t1.18169-9/1551469_213050845567855_1694742248_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeHTtwgAiDH638f87xef2FZ3XecvmjeaYold5y-aN5piib4pPDdARlVp1_ySfkOTq1Inx2zRw7bonIgzWfWvi52H&_nc_ohc=7YNFcJuuFX0AX-9SJ_y&_nc_ht=scontent.flos1-1.fna&oh=00_AT8h1ZgSQCScqeURIMqrgSucvB0vol_Vac-Tgj4tUhDghg&oe=62E64269" alt="" className='h-auto w-36 my-3' />
                            </div>
                            <div className='flex flex-col my-3 ml-5'>
                                <p className='font-bold text-xl mb-2'>Product Name</p>
                                <p className='text-mainColorTwo mb-2 font-bold'>Category</p>
                                <p className='text-slate-500 '>Remove</p>
                            </div>
                    </div>
                    </td>
                    <td className=''>
                        <div className='flex items-center text-left'>
                            <AiIcons.AiOutlineMinus/>
                            <input type="number" className='border-2 outline-none appearance-none text-center focus:border-green-500 focus:outline-none w-10 mx-3' />
                            <AiIcons.AiOutlinePlus/>
                        </div>
                    </td>
                    <td>$30.32</td>
                    <td>$200.42</td>
                </tr>
               
                <tr className=''>
                    <td>
                    <div className='flex items-center'>
                        <div>
                                <img src="https://scontent.flos1-1.fna.fbcdn.net/v/t1.18169-9/1551469_213050845567855_1694742248_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeHTtwgAiDH638f87xef2FZ3XecvmjeaYold5y-aN5piib4pPDdARlVp1_ySfkOTq1Inx2zRw7bonIgzWfWvi52H&_nc_ohc=7YNFcJuuFX0AX-9SJ_y&_nc_ht=scontent.flos1-1.fna&oh=00_AT8h1ZgSQCScqeURIMqrgSucvB0vol_Vac-Tgj4tUhDghg&oe=62E64269" alt="" className='h-auto w-36 my-3' />
                            </div>
                            <div className='flex flex-col my-3 ml-5'>
                                <p className='font-bold text-xl mb-2'>Product Name</p>
                                <p className='text-mainColorTwo mb-2 font-bold'>Category</p>
                                <p className='text-slate-500 '>Remove</p>
                            </div>
                    </div>
                    </td>
                    <td className=''>
                        <div className='flex items-center text-left'>
                            <AiIcons.AiOutlineMinus/>
                            <input type="number" className='border-2 outline-none appearance-none text-center focus:border-green-500 focus:outline-none w-10 mx-3' />
                            <AiIcons.AiOutlinePlus/>
                        </div>
                    </td>
                    <td>$30.32</td>
                    <td>$200.42</td>
                </tr>
               
                <tr className=''>
                    <td>
                    <div className='flex items-center'>
                        <div>
                                <img src="https://scontent.flos1-1.fna.fbcdn.net/v/t1.18169-9/1551469_213050845567855_1694742248_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeHTtwgAiDH638f87xef2FZ3XecvmjeaYold5y-aN5piib4pPDdARlVp1_ySfkOTq1Inx2zRw7bonIgzWfWvi52H&_nc_ohc=7YNFcJuuFX0AX-9SJ_y&_nc_ht=scontent.flos1-1.fna&oh=00_AT8h1ZgSQCScqeURIMqrgSucvB0vol_Vac-Tgj4tUhDghg&oe=62E64269" alt="" className='h-auto w-36 my-3' />
                            </div>
                            <div className='flex flex-col my-3 ml-5'>
                                <p className='font-bold text-xl mb-2'>Product Name</p>
                                <p className='text-mainColorTwo mb-2 font-bold'>Category</p>
                                <p className='text-slate-500 '>Remove</p>
                            </div>
                    </div>
                    </td>
                    <td className=''>
                        <div className='flex items-center text-left'>
                            <AiIcons.AiOutlineMinus/>
                            <input type="number" className='border-2 outline-none appearance-none text-center focus:border-green-500 focus:outline-none w-10 mx-3' />
                            <AiIcons.AiOutlinePlus/>
                        </div>
                    </td>
                    <td>$30.32</td>
                    <td>$200.42</td>
                </tr>
               
                <tr className=''>
                    <td>
                    <div className='flex items-center'>
                        <div>
                                <img src="https://scontent.flos1-1.fna.fbcdn.net/v/t1.18169-9/1551469_213050845567855_1694742248_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeHTtwgAiDH638f87xef2FZ3XecvmjeaYold5y-aN5piib4pPDdARlVp1_ySfkOTq1Inx2zRw7bonIgzWfWvi52H&_nc_ohc=7YNFcJuuFX0AX-9SJ_y&_nc_ht=scontent.flos1-1.fna&oh=00_AT8h1ZgSQCScqeURIMqrgSucvB0vol_Vac-Tgj4tUhDghg&oe=62E64269" alt="" className='h-auto w-36 my-3' />
                            </div>
                            <div className='flex flex-col my-3 ml-5'>
                                <p className='font-bold text-xl mb-2'>Product Name</p>
                                <p className='text-mainColorTwo mb-2 font-bold'>Category</p>
                                <p className='text-slate-500 '>Remove</p>
                            </div>
                    </div>
                    </td>
                    <td className=''>
                        <div className='flex items-center text-left'>
                            <AiIcons.AiOutlineMinus/>
                            <input type="number" className='border-2 outline-none appearance-none text-center focus:border-green-500 focus:outline-none w-10 mx-3' />
                            <AiIcons.AiOutlinePlus/>
                        </div>
                    </td>
                    <td>$30.32</td>
                    <td>$200.42</td>
                </tr>
               
                <tr className=''>
                    <td>
                    <div className='flex items-center'>
                        <div>
                                <img src="https://scontent.flos1-1.fna.fbcdn.net/v/t1.18169-9/1551469_213050845567855_1694742248_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeHTtwgAiDH638f87xef2FZ3XecvmjeaYold5y-aN5piib4pPDdARlVp1_ySfkOTq1Inx2zRw7bonIgzWfWvi52H&_nc_ohc=7YNFcJuuFX0AX-9SJ_y&_nc_ht=scontent.flos1-1.fna&oh=00_AT8h1ZgSQCScqeURIMqrgSucvB0vol_Vac-Tgj4tUhDghg&oe=62E64269" alt="" className='h-auto w-36 my-3' />
                            </div>
                            <div className='flex flex-col my-3 ml-5'>
                                <p className='font-bold text-xl mb-2'>Product Name</p>
                                <p className='text-mainColorTwo mb-2 font-bold'>Category</p>
                                <p className='text-slate-500 '>Remove</p>
                            </div>
                    </div>
                    </td>
                    <td className=''>
                        <div className='flex items-center text-left'>
                            <AiIcons.AiOutlineMinus/>
                            <input type="number" className='border-2 outline-none appearance-none text-center focus:border-green-500 focus:outline-none w-10 mx-3' />
                            <AiIcons.AiOutlinePlus/>
                        </div>
                    </td>
                    <td>$30.32</td>
                    <td>$200.42</td>
                </tr>
               
                <tr className=''>
                    <td>
                    <div className='flex items-center'>
                        <div>
                                <img src="https://scontent.flos1-1.fna.fbcdn.net/v/t1.18169-9/1551469_213050845567855_1694742248_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeHTtwgAiDH638f87xef2FZ3XecvmjeaYold5y-aN5piib4pPDdARlVp1_ySfkOTq1Inx2zRw7bonIgzWfWvi52H&_nc_ohc=7YNFcJuuFX0AX-9SJ_y&_nc_ht=scontent.flos1-1.fna&oh=00_AT8h1ZgSQCScqeURIMqrgSucvB0vol_Vac-Tgj4tUhDghg&oe=62E64269" alt="" className='h-auto w-36 my-3' />
                            </div>
                            <div className='flex flex-col my-3 ml-5'>
                                <p className='font-bold text-xl mb-2'>Product Name</p>
                                <p className='text-mainColorTwo mb-2 font-bold'>Category</p>
                                <p className='text-slate-500 '>Remove</p>
                            </div>
                    </div>
                    </td>
                    <td className=''>
                        <div className='flex items-center text-left'>
                            <AiIcons.AiOutlineMinus/>
                            <input type="number" className='border-2 outline-none appearance-none text-center focus:border-green-500 focus:outline-none w-10 mx-3' />
                            <AiIcons.AiOutlinePlus/>
                        </div>
                    </td>
                    <td>$30.32</td>
                    <td>$200.42</td>
                </tr>
               
                <tr className=''>
                    <td>
                    <div className='flex items-center'>
                        <div>
                                <img src="https://scontent.flos1-1.fna.fbcdn.net/v/t1.18169-9/1551469_213050845567855_1694742248_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeHTtwgAiDH638f87xef2FZ3XecvmjeaYold5y-aN5piib4pPDdARlVp1_ySfkOTq1Inx2zRw7bonIgzWfWvi52H&_nc_ohc=7YNFcJuuFX0AX-9SJ_y&_nc_ht=scontent.flos1-1.fna&oh=00_AT8h1ZgSQCScqeURIMqrgSucvB0vol_Vac-Tgj4tUhDghg&oe=62E64269" alt="" className='h-auto w-36 my-3' />
                            </div>
                            <div className='flex flex-col my-3 ml-5'>
                                <p className='font-bold text-xl mb-2'>Product Name</p>
                                <p className='text-mainColorTwo mb-2 font-bold'>Category</p>
                                <p className='text-slate-500 '>Remove</p>
                            </div>
                    </div>
                    </td>
                    <td className=''>
                        <div className='flex items-center text-left'>
                            <AiIcons.AiOutlineMinus/>
                            <input type="number" className='border-2 outline-none appearance-none text-center focus:border-green-500 focus:outline-none w-10 mx-3' />
                            <AiIcons.AiOutlinePlus/>
                        </div>
                    </td>
                    <td>$30.32</td>
                    <td>$200.42</td>
                </tr>
               
                <tr className=''>
                    <td>
                    <div className='flex items-center'>
                        <div>
                                <img src="https://scontent.flos1-1.fna.fbcdn.net/v/t1.18169-9/1551469_213050845567855_1694742248_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeHTtwgAiDH638f87xef2FZ3XecvmjeaYold5y-aN5piib4pPDdARlVp1_ySfkOTq1Inx2zRw7bonIgzWfWvi52H&_nc_ohc=7YNFcJuuFX0AX-9SJ_y&_nc_ht=scontent.flos1-1.fna&oh=00_AT8h1ZgSQCScqeURIMqrgSucvB0vol_Vac-Tgj4tUhDghg&oe=62E64269" alt="" className='h-auto w-36 my-3' />
                            </div>
                            <div className='flex flex-col my-3 ml-5'>
                                <p className='font-bold text-xl mb-2'>Product Name</p>
                                <p className='text-mainColorTwo mb-2 font-bold'>Category</p>
                                <p className='text-slate-500 '>Remove</p>
                            </div>
                    </div>
                    </td>
                    <td className=''>
                        <div className='flex items-center text-left'>
                            <AiIcons.AiOutlineMinus/>
                            <input type="number" className='border-2 outline-none appearance-none text-center focus:border-green-500 focus:outline-none w-10 mx-3' />
                            <AiIcons.AiOutlinePlus/>
                        </div>
                    </td>
                    <td>$30.32</td>
                    <td>$200.42</td>
                </tr>
               
  
            </tbody>
        </table>
    </div>
  )
}

export default ShopCart