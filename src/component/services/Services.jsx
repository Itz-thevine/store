import React from 'react'
import * as FaIcons from 'react-icons/fa'
import { ServiceData } from './ServiceData'

const Service = () => {
  return (
    <div className='px-36 py-24 flex gap-x-12 flex-wrap gap-y-12 justify-center items-center '>
        {
            ServiceData.map((service, i) => (
                <div key={i}>
                    <div className='bg-mainColorOne p-10 w-80 flex justify-center items-center flex-col'>
                        <div className='text-6xl text-mainColorTwo h-16 w-16 flex justify-center items-center'>
                            {
                                service.id === 1 && <FaIcons.FaDolly/>
                            }
                            {
                                service.id === 2 && <FaIcons.FaUserFriends/>
                            }
                            {
                                service.id === 3 && <FaIcons.FaUndoAlt/>
                            }

                        </div>
                        <h1 className='text-2xl text-white font-bold mt-7 text-center'>{service.title}</h1>
                        <p className='text-sm text-white text-center     mt-4'>{service.desc}</p>
                    </div>
                    <div></div>
                    <div></div>
                </div>
            ))
        }
    </div>
  )
}

export default Service