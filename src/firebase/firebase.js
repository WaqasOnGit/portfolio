// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD0Sr647mboLnMpLLixmmoWa7ja3lvNG8o",
  authDomain: "portfolio-for.firebaseapp.com",
  projectId: "portfolio-for",
  storageBucket: "portfolio-for.appspot.com",
  messagingSenderId: "429964122519",
  appId: "1:429964122519:web:833c4aba0d5b277388ccd2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
export const db = getFirestore(app);
