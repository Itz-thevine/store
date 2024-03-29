import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { storage } from '../firebase'
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage'
import { updateProfile } from 'firebase/auth'

const AddProfileImage = () => {
    const [photoBinary, setPhotoBinary] = useState(null);
    const [photoName, setPhotoName] = useState('Click to upload');
    const [loading, setLoading] = useState(false);

    // redirection
    const navigate = useNavigate()

    const user = JSON.parse(localStorage.getItem('user_id'));
    

    //  upload image
     async function upload (file, currentUser, setLoading) {
        const fileRef = ref(storage, currentUser.uid + '.png')
        
        setLoading(true)    

        await uploadBytes(fileRef, file)
        const PhotoUrl = await getDownloadURL(fileRef)

        updateProfile(currentUser, {
             PhotoUrl
          }).then((res) => {
            // console.log(res)
          }).catch((error) => {
            // console.log(error)
          })

     
        setLoading(false)
        // console.log(PhotoUrl)
        // console.log(currentUser.photoURL)
       
        
        currentUser.photoURL = PhotoUrl;

        localStorage.setItem("user_id", JSON.stringify(currentUser));
         navigate('/')
    }
    // handle the image change
    const handleImgChange = (e) => {
        const file = e.target.files[0];
        if (e.target.files[0]) {
            setPhotoBinary(e.target.files[0])
        }
        setPhotoName(file.name)
    }

    
    const handleImgClick = () => {
        upload(photoBinary, user, setLoading)
    }
    
    // console.log(photoBinary.name)
    
    
    

  return (
    <div>
        <div className='flex justify-center items-center h-banner w-screen'>
            <div>
                <p className='font-bold text-2xl mb-5 text-center'>Edit Profile image</p>
                <div className='flex'>
                    <div action="" className='flex-wrap flex flex-col'>
                        
                        <div  className='flex-auto justify-center flex w-full md:mr-5 text-white'>
                            <label htmlFor="dropzone-file" className="flex flex-col justify-center py-8 items-center w-96 md:w-full h-36 md:h-auto bg-gray-50 rounded-none border-2 border-gray-300 border-dashed cursor-pointer dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                                <div className="flex flex-col justify-center items-center pt-5 pb-6">
                                    <svg className="mb-3 w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                                    <p className="mb-2 text-sm text-gray-500 dark:text-gray-400 font-semibold">{photoName}</p>
                                </div>
                                <input id="dropzone-file" type="file" onChange={handleImgChange} className="hidden" />
                                <div></div>
                            </label>
                        </div>
                        <button onClick={handleImgClick} disabled={loading || !photoBinary}  className='w-96 mt-5 bg-mainColorTwo font-bold py-2 cursor-pointer text-white flex justify-center' >Use image</button>
                    </div>
                </div>
                
                
            </div>         
        </div>
    </div>
  )
}

export default AddProfileImage