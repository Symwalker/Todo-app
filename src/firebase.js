// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBLkBVoEyahWKlfwKZATgCr2WHE4cRc8AY",
  authDomain: "todo-posting-4825c.firebaseapp.com",
  projectId: "todo-posting-4825c",
  storageBucket: "todo-posting-4825c.appspot.com",
  messagingSenderId: "463078873010",
  appId: "1:463078873010:web:e3161955da1058e36936ab",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export{db}