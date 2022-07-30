// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider, FacebookAuthProvider} from 'firebase/auth';
import {getStorage} from 'firebase/storage'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAzCBO7FDauNqeme1L-brfH_hLLPBJMzyo",
  authDomain: "store-79c2a.firebaseapp.com",
  projectId: "store-79c2a",
  storageBucket: "store-79c2a.appspot.com",
  messagingSenderId: "546458484689",
  appId: "1:546458484689:web:9f5d5741bcecacf366eaf0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth()
const provider = new GoogleAuthProvider()
const facebookProvider = new FacebookAuthProvider();
const storage = getStorage()

export {provider, facebookProvider, storage}
export default auth;