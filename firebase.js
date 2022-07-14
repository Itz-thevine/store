// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';

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

export default auth;