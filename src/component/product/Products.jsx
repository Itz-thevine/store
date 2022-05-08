import React, { useEffect, useState } from 'react'
import * as GiIcons from 'react-icons/gi'
import * as BiIcons from 'react-icons/bi'
import * as AiIcons from 'react-icons/ai'
import axios from 'axios'

const Products = () => {
    const [value, setValue] = useState('all');
    const [getAll, setGetAll] = useState([]);
    const [elect, setElect] = useState([]);
    const [jew, setJew] = useState([]);
    const [male, setMale] = useState([]);
    const [female, setFemale] = useState([]);
    const [more, setMore] = useState(6);
    const [category, setCategory] = useState(false);


    useEffect(()=>{
        axios.get(`https://fakestoreapi.com/products?limit=${more}`).then(
            (res)=> {
                setGetAll(res.data)
            }
        )
    },[] )

    useEffect(()=>{
        axios.get(`https://fakestoreapi.com/products/category/electronics`).then(
            (res)=> {
                setElect(res.data)
            }
        )
    },[])

    useEffect(()=>{
        axios.get(`https://fakestoreapi.com/products/category/jewelery`).then(
            (res)=> {
                setJew(res.data)
            }
        )
    },[])

    useEffect(()=>{
        axios.get(`https://fakestoreapi.com/products/category/men's clothing`).then(
            (res)=> {
                setMale(res.data)
            }
        )
    },[])

    useEffect(()=>{
        axios.get(`https://fakestoreapi.com/products/category/women's clothing`).then(
            (res)=> {
                setFemale(res.data)
            }
        )
    },[])
    
    
    const valuer = (val) => {
        setValue(val)
        setCategory(false)
    }

    let allColor = () => value === 'all' ? '#54D771' : '#08140A'
    let ElecColor = () => value === 'electronics' ? '#54D771' : '#08140A'
    let JewColor = () => value === 'jewelery' ? '#54D771' : '#08140A'
    let maleColor = ()=> value === 'male' ? '#54D771' : '#08140A'
    let femaleColor = () => value === 'female' ? '#54D771' : '#08140A'

    

    const incre = () => {
        setMore()
        console.log(more)
    }
    
    
    const controlCat = () => {
        setCategory(true)
        if (category) {
            setCategory(false)
        }
    }
  
  return (
    <div className='px-14 md:px-36 bg-green-50 pt-24'>
        <p className='text-3xl font-bold text-mainColorOne'>Categories</p>

        <div className='flex justify-center mt-8'>
            <div className='bg-mainColorOne flex w-auto justify-between cursor-pointer hidden lg:flex'>
                <div className='w-52 text-white flex flex-col py-7 justify-center items-center' style={{backgroundColor: allColor()}} onClick={()=>valuer('all')} >
                    <div className='text-white text-5xl'>
                        <AiIcons.AiFillGold/>
                    </div>
                    <p className='text-2xl font-bold'>All</p>
                </div>
                <div className='w-52 text-white flex flex-col py-7 justify-center items-center' style={{backgroundColor: ElecColor()}} onClick={()=>valuer('electronics')}>
                    <div className='text-white text-5xl'>
                    <BiIcons.BiDevices/> 
                    </div>
                    <p className='text-2xl font-bold'>Electronics</p>
                </div>
                <div className='w-52 text-white flex flex-col py-7 justify-center items-center' style={{backgroundColor: JewColor()}} onClick={()=>valuer('jewelery')}>
                    <div className='text-5xl'>
                        <GiIcons.GiJewelCrown/>
                    </div>
                    <p className='text-2xl font-bold'>Jewelery</p>
                </div>
                <div className='w-52 text-white flex flex-col py-7 justify-center items-center'style={{backgroundColor: femaleColor()}} onClick={()=>valuer('female')}>
                    <div className='text-5xl text-white'>
                        <GiIcons.GiFemale/>
                    </div>
                    <p className='text-2xl font-bold'>Female Clothe</p>
                </div>
                <div className='w-52 text-white flex flex-col py-7 justify-center items-center' style={{backgroundColor: maleColor()}} onClick={()=>valuer('male')}>
                    <div className='text-4xl'>
                        <GiIcons.GiMale/>
                    </div>
                    <p className='text-2xl font-bold'>Male Clothe</p>
                </div>
            </div>
            
        </div>

       <div className='flex relative lg:hidden w-60 text-mainColorOne flex-col'>
            <div className='flex bg-mainColorTwo font-bold h-14 px-5 justify-around items-center' onClick={controlCat}>
                <p>Filter Categories</p> 
                <AiIcons.AiFillCaretDown/>
            </div>
            {
                category && (
                    <div className=' absolute w-60 top-14 py-3 bg-mainColorTwo mt-2 font-bold h-auto px-11 justify-center flex-col items-center cursor-pointer'>
                        <div className='py-3' onClick={()=>valuer('all')}>All</div>
                        <div className='py-3' onClick={()=>valuer('electronics')}>Electronics</div>
                        <div className='py-3' onClick={()=>valuer('jewelery')}>Jewelery</div>
                        <div className='py-3' onClick={()=>valuer('male')}>Male</div>
                        <div className='py-3' onClick={()=>valuer('female')}>Female</div>
                    </div>
                )
            }
       </div>

        <div className='mt-14 flex flex-row flex-wrap pb-14 justify-center'>
            {/* api display */}
                {
                    value === 'all' && (
                        <>
                        {getAll.map(i => (
                            <div key={i.id} className="w-full my-10 lg:mx-3 w-80 h-auto shadow-2xl bg-white rounded-lg rounded-none pt-2 pb-3">
                                <img src={i.image} alt="Hand holding black machined steel mechanical pencil with brass tip and top." className="w-80 h-72 object-center object-contain group-hover:opacity-75"/>
                                <div className='px-4 text-mainColorOne'>
                                    <h3 className="mt-4  text-2xl font-bold ">{i.title}</h3>
                                    <p className="mt-3 text-sm text-neutral-500 " style={{wordWrap: 'break-word', overflow: 'hidden', maxHeight: '3.6em', lineHeight:'1.2em'}}>{i.description}</p>
                                    <div className='flex flex-row justify-between items-end mt-5'>
                                        <div>
                                        <p className='text-sm text-neutral-500'>Category</p>
                                            <p className=" text-lg font-medium text-gray-900">{i.category}</p>
                                        </div>
                                        <div>
                                        <p className="mt-1 text-lg font-medium text-gray-900">${i.price}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                                
                        ))}
                        <div className='w-full flex justify-center items-center'>
                            <p className='text-2xl  cursor-pointer text-mainColorOne font-bold' onClick={incre}>More</p>
                        </div>
                        </>

                   )  
                    
                }

                
                {
                    value === 'electronics' && (
                        elect.map(i => (
                            <div key={i.id} className="w-full w-80 h-auto shadow-2xl bg-white rounded-lg rounded-none pt-2 pb-3">
                                <img src={i.image} alt="Hand holding black machined steel mechanical pencil with brass tip and top." className="w-80 h-72 object-center object-contain group-hover:opacity-75"/>
                                <div className='px-4 text-mainColorOne'>
                                    <h3 className="mt-4  text-2xl font-bold ">{i.title}</h3>
                                    <p className="mt-3 text-sm text-neutral-500 " style={{wordWrap: 'break-word', overflow: 'hidden', maxHeight: '3.6em', lineHeight:'1.2em'}}>{i.description}</p>
                                    <div className='flex flex-row justify-between items-end mt-5'>
                                        <div>
                                        <p className='text-sm text-neutral-500'>Category</p>
                                            <p className=" text-lg font-medium text-gray-900">{i.category}</p>
                                        </div>
                                        <div>
                                        <p className="mt-1 text-lg font-medium text-gray-900">${i.price}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        ))
                    )
                }
                {
                     value === 'jewelery' && (
                        jew.map(i => (
                            <div key={i.id} className="w-full w-80 h-auto shadow-2xl bg-white rounded-lg rounded-none pt-2 pb-3">
                                <img src={i.image} alt="Hand holding black machined steel mechanical pencil with brass tip and top." className="w-80 h-72 object-center object-contain group-hover:opacity-75"/>
                                <div className='px-4 text-mainColorOne'>
                                    <h3 className="mt-4  text-2xl font-bold ">{i.title}</h3>
                                    <p className="mt-3 text-sm text-neutral-500 " style={{wordWrap: 'break-word', overflow: 'hidden', maxHeight: '3.6em', lineHeight:'1.2em'}}>{i.description}</p>
                                    <div className='flex flex-row justify-between items-end mt-5'>
                                        <div>
                                        <p className='text-sm text-neutral-500'>Category</p>
                                            <p className=" text-lg font-medium text-gray-900">{i.category}</p>
                                        </div>
                                        <div>
                                        <p className="mt-1 text-lg font-medium text-gray-900">${i.price}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        ))
                    )
                }
                {
                    value === 'male' && (
                        male.map(i => (
                            <div key={i.id} className="w-full w-80 h-auto shadow-2xl bg-white rounded-lg rounded-none pt-2 pb-3">
                                <img src={i.image} alt="Hand holding black machined steel mechanical pencil with brass tip and top." className="w-80 h-72 object-center object-contain group-hover:opacity-75"/>
                                <div className='px-4 text-mainColorOne'>
                                    <h3 className="mt-4  text-2xl font-bold ">{i.title}</h3>
                                    <p className="mt-3 text-sm text-neutral-500 " style={{wordWrap: 'break-word', overflow: 'hidden', maxHeight: '3.6em', lineHeight:'1.2em'}}>{i.description}</p>
                                    <div className='flex flex-row justify-between items-end mt-5'>
                                        <div>
                                        <p className='text-sm text-neutral-500'>Category</p>
                                            <p className=" text-lg font-medium text-gray-900">{i.category}</p>
                                        </div>
                                        <div>
                                        <p className="mt-1 text-lg font-medium text-gray-900">${i.price}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        ))
                    )
                }
                {
                    value === 'female' && (
                        female.map(i => (
                            <div key={i.id} className="w-full w-80 h-auto shadow-2xl bg-white rounded-lg rounded-none pt-2 pb-3">
                                <img src={i.image} alt="Hand holding black machined steel mechanical pencil with brass tip and top." className="w-80 h-72 object-center object-contain group-hover:opacity-75"/>
                                <div className='px-4 text-mainColorOne'>
                                    <h3 className="mt-4  text-2xl font-bold ">{i.title}</h3>
                                    <p className="mt-3 text-sm text-neutral-500 " style={{wordWrap: 'break-word', overflow: 'hidden', maxHeight: '3.6em', lineHeight:'1.2em'}}>{i.description}</p>
                                    <div className='flex flex-row justify-between items-end mt-5'>
                                        <div>
                                        <p className='text-sm text-neutral-500'>Category</p>
                                            <p className=" text-lg font-medium text-gray-900">{i.category}</p>
                                        </div>
                                        <div>
                                        <p className="mt-1 text-lg font-medium text-gray-900">${i.price}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        ))
                    )
                }



        </div>
        
    </div>
  )
}

export default Products