// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  // apiKey: "AIzaSyD-p3-icAqyF1PqZgmjDX8dt_OhXq7FHxU",
  authDomain: "mern-estate-9ef68.firebaseapp.com",
  projectId: "mern-estate-9ef68",
  storageBucket: "mern-estate-9ef68.appspot.com",
  messagingSenderId: "651455410013",
  appId: "1:651455410013:web:132f660685e88fc2b382b4"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
