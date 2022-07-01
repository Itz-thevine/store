import React, { useEffect, useState } from 'react'
import * as GiIcons from 'react-icons/gi'
import * as BiIcons from 'react-icons/bi'
import * as AiIcons from 'react-icons/ai'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Products = () => {
    const [value, setValue] = useState('products');
    const [getAll, setGetAll] = useState([]);
   
    const [more, setMore] = useState(6);
    const [category, setCategory] = useState(false);
    const [now, setNow] = useState(0)



    const valuer = (val) => {
        setValue(val)
        setCategory(false)
        setNow(0)
    }


    useEffect(()=>{
        axios.get(`https://fakestoreapi.com/${value}`).then(
            (res)=> {
                setGetAll(res.data)
            }
        )
    },[value] )
    
    
    
    let allColor = () => value === 'products' ? '#54D771' : '#08140A'
    let ElecColor = () => value === 'products/category/electronics' ? '#54D771' : '#08140A'
    let JewColor = () => value === 'products/category/jewelery' ? '#54D771' : '#08140A'
    let maleColor = ()=> value === 'products/category/men\'s clothing' ? '#54D771' : '#08140A'
    let femaleColor = () => value === 'products/category/women\'s clothing' ? '#54D771' : '#08140A'

    

    const incre = () => {
        setMore()
        console.log(more)
    }

  
    let remainder = getAll.length % 6
    let divider = ''
    if(remainder > 0){
      divider = Math.trunc((getAll.length/6) + 1)
    }else{
      divider = Math.trunc(getAll.length/6)
    }
    
    
    var rows = [];
    for (var z = 0; z < divider; z++) {
        rows.push(z);
    }

    
    const highest = () =>{
        if(now <= 0){
        let j = Math.abs(getAll.length )
        if (getAll.length >= 6) {
            return 6
        }else{
            return j
        }
        }else{
        let a = now
        let z = 0
        for (let index = 0; index < a; index++) {
            z += 6          
        }
        let k = Math.abs(getAll.length - z)
        a += 1
        if (k >= 6) {
            return (6*a)
        }else{
            return (lowest() + k )
        }
        }
    }

    
    const lowest =() =>{
        let a = now * 6
        return a

    }


    var displayWorks = []
    for(var i = lowest() ; i < highest(); i++){
        displayWorks.push(
            <Link to={`/${getAll[i].id}`} key={i} className="w-full my-10 lg:mx-3 w-80 h-auto shadow-2xl bg-white rounded-lg rounded-none pt-2 pb-3">
                <img src={getAll[i].image} alt="Hand holding black machined steel mechanical pencil with brass tip and top." className="w-80 h-72 object-center object-contain group-hover:opacity-75"/>
                <div className='px-4 text-mainColorOne'>
                    <h3 className="mt-4  text-2xl font-bold ">{getAll[i].title}</h3>
                    <p className="mt-3 text-sm text-neutral-500 " style={{wordWrap: 'break-word', overflow: 'hidden', maxHeight: '3.6em', lineHeight:'1.2em'}}>{getAll[i].description}</p>
                    <div className='flex flex-row justify-between items-end mt-5'>
                        <div>
                        <p className='text-sm text-neutral-500'>Category</p>
                            <p className=" text-lg font-medium text-gray-900">{getAll[i].category}</p>
                        </div>
                        <div>
                        <p className="mt-1 text-lg font-medium text-gray-900">${getAll[i].price}</p>
                        </div>
                    </div>
                </div>
            </Link>
        // console.log(worksArray[i].title)
        )

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
                <div className='w-52 text-white flex flex-col py-7 justify-center items-center' style={{backgroundColor: allColor()}} onClick={()=>valuer('products')} >
                    <div className='text-white text-5xl'>
                        <AiIcons.AiFillGold/>
                    </div>
                    <p className='text-2xl font-bold'>All</p>
                </div>
                <div className='w-52 text-white flex flex-col py-7 justify-center items-center' style={{backgroundColor: ElecColor()}} onClick={()=>valuer('products/category/electronics')}>
                    <div className='text-white text-5xl'>
                    <BiIcons.BiDevices/> 
                    </div>
                    <p className='text-2xl font-bold'>Electronics</p>
                </div>
                <div className='w-52 text-white flex flex-col py-7 justify-center items-center' style={{backgroundColor: JewColor()}} onClick={()=>valuer('products/category/jewelery')}>
                    <div className='text-5xl'>
                        <GiIcons.GiJewelCrown/>
                    </div>
                    <p className='text-2xl font-bold'>Jewelery</p>
                </div>
                <div className='w-52 text-white flex flex-col py-7 justify-center items-center'style={{backgroundColor: femaleColor()}} onClick={()=>valuer('products/category/women\'s clothing')}>
                    <div className='text-5xl text-white'>
                        <GiIcons.GiFemale/>
                    </div>
                    <p className='text-2xl font-bold'>Female Clothe</p>
                </div>
                <div className='w-52 text-white flex flex-col py-7 justify-center items-center' style={{backgroundColor: maleColor()}} onClick={()=>valuer('products/category/men\'s clothing')}>
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
                        <div className='py-3' onClick={()=>valuer('products')}>All</div>
                        <div className='py-3' onClick={()=>valuer('products/category/electronics')}>Electronics</div>
                        <div className='py-3' onClick={()=>valuer('products/category/jewelery')}>Jewelery</div>
                        <div className='py-3' onClick={()=>valuer('products/category/men\'s clothing')}>Male</div>
                        <div className='py-3' onClick={()=>valuer('products/category/women\'s clothing')}>Female</div>
                    </div>
                )
            }
       </div>

        <div className='flex justify-center items-center '>
            <div className='mt-14 w-auto flex flex-wrap pb-14 justify-center  md:justify-between'>
                {/* api display */}
                    {
                    
                        <>
                            {displayWorks}
                            <div className='w-full flex justify-center items-center'>
                                {rows.map((ro, i) => (
                                    <div key={i} className={now === i ? 'w-10 h-3 mr-3 cursor-pointer bg-mainColorTwo':
                                'w-10 h-3 mr-3 cursor-pointer bg-mainColorOne'} onClick={()=>setNow(i)}></div>
                                ))}
                            </div>
                            </>  
                    }
            </div>
        </div>
        
    </div>
  )
}

export default Products