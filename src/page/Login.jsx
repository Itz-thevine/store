import React from 'react'
import * as AiIcons from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { Formik } from 'formik'
import { useState } from 'react'
import { signInWithPopup, signInWithEmailAndPassword } from 'firebase/auth'
import auth from '../firebase'
import {provider, facebookProvider} from '../firebase'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  let success = 'px-3 focus:outline-none focus:border-green-400 border-2 w-96 h-10 '
  let haveError = 'px-3 focus:outline-none border-red-400 border-2 w-96 h-10 '

  const [errMsg, setErrMsg] = useState(false)

  // navigation
  const navigate = useNavigate()

  // authentication changes
  auth.onAuthStateChanged(user=>{
    localStorage.setItem('user_id', JSON.stringify(user))
    // console.log(user)
  })
  
  // google Sign In
  const signInWithGoogleFun= (e) =>{
    e.preventDefault();
    signInWithPopup(auth, provider).then((res)=> {
      navigate('/')
    }).catch((err)=> {
      let dError = JSON.stringify(err);
      let getError = JSON.parse(dError).code 
      let value = getError.replace(/-/g, " ");
      let mainErr = value.replace("auth/", '')
      setErrMsg(mainErr.charAt(0).toUpperCase() + mainErr.slice(1))
    })
  }

  // facebook Sign In
  const signInWithFacebookFun= (e) =>{
    e.preventDefault();
    signInWithPopup(auth, facebookProvider).then((res)=> {
      navigate('/')
      console.log(res)
    }).catch((err)=> {
      let dError = JSON.stringify(err);
      let getError = JSON.parse(dError).code 
      let value = getError.replace(/-/g, " ");
      let mainErr = value.replace("auth/", '')
      setErrMsg(mainErr.charAt(0).toUpperCase() + mainErr.slice(1))
    })
  }

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
                    let authVal = JSON.stringify(values, null, 2);
                    signInWithEmailAndPassword(auth, values.email, values.password).then((res)=>{
                      navigate('/')

                    }).catch((err)=> {
                      let dError = JSON.stringify(err);
                      let getError = JSON.parse(dError).code 
                      let value = getError.replace(/-/g, " ");
                      let mainErr = value.replace("auth/", '')
                      setErrMsg(mainErr.charAt(0).toUpperCase() + mainErr.slice(1))
                    })
  
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
                    <>{ errMsg && (
                      <div className='bg-red-500 w-96 mb-5 py-2 px-3 text-white flex justify-between'>
                          <p>{errMsg}</p>
                          <div className='flex justify-center items-center'><AiIcons.AiOutlineClose onClick={()=>setErrMsg(false)}/></div>
                      </div>)
                    }
                    <form action="" className='flex-wrap'>
                        <div>
                            <label >
                            <p>Email</p>
                            
                            <input type="email" name="email" onChange={handleChange} value={values.email}  
                            onBlur={handleBlur} className={!errors.email ? success : haveError}/>
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
                        <input type="submit" value='Log In'  onClick={handleSubmit} className='w-96 bg-mainColorTwo font-bold py-2 cursor-pointer' />
                    </form>
                 
                    <div className='mt-2 text-right'>
                        <p>Not a member <Link to='/signUp' className='text-blue-400 font-bold cursor-pointer'>Sign Up</Link></p>
                    </div>
                    <div className='flex justify-center items-center mt-3'>
                            <p className='border-2 rounded-full w-10 p-1 text-center'>or</p>
                    </div>
                    <div className='flex mt-5'>
                        <div className='bg-red-500 py-2 flex-1 text-center text-white font-bold mr-2 cursor-pointer' onClick={(e)=> signInWithGoogleFun(e)}>Google</div>
                        <div className='bg-blue-500 py-2 flex-1 text-center text-white font-bold ml-2 cursor-pointer' onClick={(e)=> signInWithFacebookFun(e)}>Facebook</div>
                    </div>
                    </>
                  )
              }
              </Formik>
        </div>        
    </div>
  )
}

export default Login