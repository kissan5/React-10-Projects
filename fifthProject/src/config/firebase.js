// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDxUVs1Zann61I1FzU72_9jVjSiwFvSIuY",
  authDomain: "vite-contact-ca220.firebaseapp.com",
  projectId: "vite-contact-ca220",
  storageBucket: "vite-contact-ca220.appspot.com",
  messagingSenderId: "327269397520",
  appId: "1:327269397520:web:51b197c133228d9d4ec695",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
