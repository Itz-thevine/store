import React from 'react'
import { useState } from 'react'
import * as AiIcons from 'react-icons/ai'
import { Link, useNavigate } from 'react-router-dom'
import { Formik } from 'formik'
import auth from '../firebase'
import { createUserWithEmailAndPassword } from 'firebase/auth'

const SignUp = () => {
    let success = 'px-3 focus:outline-none focus:border-green-400 border-2 w-96 h-10 pr-16'
    let haveError = 'px-3 focus:outline-none border-red-400 border-2 w-96 h-10 '

    // redirection
    const navigate = useNavigate()
    
    // firebase error message 
    const [errMsg ,setErrMsg] = useState(null)

    
    // toggle password visibility
    const [passwordType, setPasswordType] = useState("password");
    
    const togglePassword =(e)=>{
        e.preventDefault()
    if(passwordType==="password")
    {
    setPasswordType("text")
    return;
    }
    setPasswordType("password")
    }
 
    auth.onAuthStateChanged(user=>{
        localStorage.setItem('user_id', JSON.stringify(user))
    })



  return (
    <div>
    <div className='flex justify-center items-center h-banner w-screen'>
        <div>
            <p className='font-bold text-2xl mb-5 text-center'>Sign Up</p>
            <div className='flex justify-center md:justify-end'>
                {errMsg && (<div className='bg-red-500 w-96 mb-5 py-2 px-3 text-white flex justify-between'>
                    <p>{errMsg}</p>
                    <div className='flex justify-center items-center' ><AiIcons.AiOutlineClose onClick={()=>setErrMsg(false)} className='cursor-pointer'/></div>
                </div>)}
            </div>
            <div className='flex'>
                
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
                            // let authVal = JSON.stringify(values, null, 2);
                            
                            createUserWithEmailAndPassword(auth, values.email, values.password).then((res)=>{
                                const user = JSON.parse(localStorage.getItem('user_id'));
                                navigate(`/${user.uid}/add-profile-image`)
                            }).catch((err)=>{
                                let dError = JSON.stringify(err);
                                let getError = JSON.parse(dError).code 
                                let value = getError.replace(/-/g, " ");
                                let mainErr = value.replace("auth/", '')
                                setErrMsg(mainErr.charAt(0).toUpperCase() + mainErr.slice(1))
                            })
          
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
                            
                           
                        <div className='flex-auto w-96 flex justify-center flex-col items-center mt-7 md:mt-1'>
                                <div>
                                    <label >
                                    <p>Email</p>
                                    <input type='email' name="email" onChange={handleChange} value={values.email} onBlur={ handleBlur} className={!errors.email ? success : haveError}/>
                                        <p className='mb-4 text-right text-red-400 italic text-sm'>{touched.email && errors.email}</p>
                                    </label>
                                </div>

                                <div>
                                    <label >
                                        <p>Password</p>
                                        <div className='relative'>
                                        <input type={passwordType} name='password' onChange={ handleChange}  onBlur={handleBlur} value={values.password} className={!errors.password ? success  : haveError }/>
                                            <div className="input-group-btn">
                                                <button className="absolute top-[12px] right-[3%]" onClick={togglePassword}>
                                                { passwordType==="password"? <AiIcons.AiOutlineEye/> :<AiIcons.AiOutlineEyeInvisible/> }
                                                </button>
                                            </div>
                                        </div>
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