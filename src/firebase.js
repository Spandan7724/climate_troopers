// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
//import { getFirestore } from 'firebase/firestore';
import { getDatabase } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyBgC078CiR-eEKTT5-YeyIFhjEe3Lxh7n8",
    authDomain: "exploreit-ngo-website.firebaseapp.com",
    databaseURL: "https://exploreit-ngo-website-default-rtdb.asia-southeast1.firebasedatabase.app", // Updated URL
    projectId: "exploreit-ngo-website",
    storageBucket: "exploreit-ngo-website.appspot.com",
    messagingSenderId: "824665759636",
    appId: "1:824665759636:web:2bd3b5318a7844b5bc7981",
    measurementId: "G-BRHMHZQJ9B"
  };
  

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

// Get reference to the Realtime Database
export const db = getDatabase(app);