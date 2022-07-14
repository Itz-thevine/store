import React from 'react'
import * as AiIcons from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { Formik } from 'formik'
import { useState } from 'react'

const Login = () => {
    let success = 'px-3 focus:outline-none focus:border-green-400 border-2 w-96 h-10 '
    let haveError = 'px-3 focus:outline-none border-red-400 border-2 w-96 h-10 '
  return (
    <div className='flex justify-center items-center h-banner w-screen'>
        <div>
            <p className='font-bold text-2xl mb-5 text-center'>Login</p>
            <Formik
                initialValues={{ 
                    email: '', 
                    password: '' 
                }}
                validate={values => {
                  const errors = {};
                  if (!values.email) {
                    errors.email = 'Required';
                  } else if (
                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                  ) {
                    errors.email = 'Invalid email address';
                  }
                  
                  if(!values.password){
                      errors.password = 'Required';
                    }else if(
                        !/^(?=[\w' \t]{4,60}$)[\w']+(?:[ \t][\w']+)*$/i.test(values.password)
                    ){
                        errors.password = 'Your password must contain between 4 and 60 characters.'
                    }
                        
                    return errors;
                }}

                onSubmit={(values, { setSubmitting }) => {
                  setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    setSubmitting(false);
                  }, 400);
                }}
            >{
                ({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting, 
                }) => (
                    <>
                    <div className='bg-red-500 w-96 mb-5 py-2 px-3 text-white flex justify-between'>
                        <p>{errors.email}</p>
                        <div className='flex justify-center items-center'><AiIcons.AiOutlineClose/></div>
                    </div>
                    <form action="" className='flex-wrap'>
                        <div>
                            <label >
                            <p>Email</p>
                            <input type="email" name="email" onChange={handleChange} value={values.email} onClick={touched} 
                            onBlur={handleBlur} className={!errors.email ? success : haveError}/>
                             <p className='mb-4 text-right text-red-400 italic text-sm'>{errors.email}</p>
                            </label>
                        </div>

                        <div>
                        <label >
                        <p>Password</p>
                        <input type="password" name='password' onChange={handleChange} onClick={touched} onBlur={handleBlur} value={values.password} className={!errors.password ? success  : haveError } />
                        <p className='mb-4 text-right text-red-400 italic text-sm'>{errors.password}</p>
                        </label>
                        </div>
                        <input type="submit" onSubmit={handleSubmit} className='w-96 bg-mainColorTwo font-bold py-2 cursor-pointer' />
                    </form>
                    </>
                )
            }
            </Formik>
            <div className='mt-2 text-right'>
                <p>Not a member <Link to='/signUp' className='text-blue-400 font-bold cursor-pointer'>Sign Up</Link></p>
            </div>
            <div className='flex justify-center items-center mt-3'>
                    <p className='border-2 rounded-full w-10 p-1 text-center'>or</p>
            </div>
            <div className='flex mt-5'>
                <div className='bg-red-500 py-2 flex-1 text-center text-white font-bold mr-2 cursor-pointer'>Google</div>
                <div className='bg-blue-500 py-2 flex-1 text-center text-white font-bold ml-2 cursor-pointer'>Facebook</div>
            </div>
        </div>        
    </div>
  )
}

export default Login