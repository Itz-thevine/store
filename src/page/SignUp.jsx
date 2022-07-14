import React from 'react'
import { useState } from 'react'
import * as AiIcons from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { Formik } from 'formik'

const SignUp = () => {
    let success = 'px-3 focus:outline-none focus:border-green-400 border-2 w-96 h-10 '
    let haveError = 'px-3 focus:outline-none border-red-400 border-2 w-96 h-10 '
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const changeEmail = (email) => {
        setEmail(email)       
        // console.log(email) 
    }
    const changePassword = (password) => {
        setPassword(password) 
        // console.log(password) 
    }

  return (
    <div>
    <div className='flex justify-center items-center h-banner w-screen'>
        <div>
            <p className='font-bold text-2xl mb-5 text-center'>Sign Up</p>
            <div className='flex justify-center md:justify-end'>
                <div className='bg-red-500 w-96 mb-5 py-2 px-3 text-white flex justify-between'>
                    <p>Error</p>
                    <div className='flex justify-center items-center'><AiIcons.AiOutlineClose/></div>
                </div>
            </div>
            <div className='flex'>
                {/* image */}
                <label htmlFor=""></label>

                {/* <div className='flex-auto w-56 bg-black mr-5'>
                </div> */}
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
                            let authVal = JSON.stringify(values, null, 2);
                            
                            
          
                            setSubmitting(false);
                          }, 400);
                    }}
                >
                    {({
                        values,
                        errors,
                        touched,
                        handleChange,
                        handleBlur,
                        handleSubmit,
                        isSubmitting,
                        /* and other goodies */
                    }) => (
                        <form action="" className='flex-wrap flex'>
                            
                            <div  className='flex-auto justify-center flex w-56 md:mr-5 text-white'>
                                <label htmlFor="dropzone-file" className="flex flex-col justify-center py-8 items-center w-96 md:w-full h-36 md:h-auto bg-gray-50 rounded-none border-2 border-gray-300 border-dashed cursor-pointer dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                                    <div className="flex flex-col justify-center items-center pt-5 pb-6">
                                        <svg className="mb-3 w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                                        <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                                        <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                                    </div>
                                    <input id="dropzone-file" type="file" className="hidden" />
                                    <div></div>
                                </label>
                            </div>
                        <div className='flex-auto w-96 flex justify-center flex-col items-center mt-7 md:mt-1'>
                                <div>
                                    <label >
                                    <p>Email</p>
                                    <input type='email' name="email" onChange={(e)=>changeEmail(e.target.value), handleChange} value={values.email} onBlur={ handleBlur} className={!errors.email ? success : haveError}/>
                                    {/* <input type='email' name="email" onChange={handleChange}  value={values.email} className={!errors.email ? success : haveError}/> */}
                                    {/* <input type="email"  name="email" value={values.email} onChange={(e)=>changeEmail(e.target.value)} className={!errors.email ? success : haveError}/> */}
                                    <p className='mb-4 text-right text-red-400 italic text-sm'>{touched.email && errors.email}</p>
                                    </label>
                                </div>

                                <div>
                                <label >
                                <p>Password</p>
                                <input type="password" name='password' onChange={(e)=>changePassword(e.target.value), handleChange}  onBlur={handleBlur} value={values.password} className={!errors.password ? success  : haveError }/>
                                <p className='mb-4 text-right text-red-400 italic text-sm'>{touched.password && errors.password}</p>
                                </label>
                                </div>
                                <input type="submit" onClick={handleSubmit} className='w-96 bg-mainColorTwo font-bold py-2 cursor-pointer' />
                        </div>
                        </form>
                    )}
                </Formik>
            </div>
            <div className='mt-2 text-center md:text-right'>
                <p>Already a member <Link to='/login' className='text-blue-400 font-bold cursor-pointer'>Log In</Link></p>
            </div>
            
        </div>        
     </div>
    </div>
  )
}

export default SignUp