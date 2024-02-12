// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASEKEY,
  authDomain: "mern-blog-90eec.firebaseapp.com",
  projectId: "mern-blog-90eec",
  storageBucket: "mern-blog-90eec.appspot.com",
  messagingSenderId: "512585058224",
  appId: "1:512585058224:web:f3b0836d65b24c08cfb875"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);