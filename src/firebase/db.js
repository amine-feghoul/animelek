// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

  apiKey: "AIzaSyCDICQe-clKyJq0wzAQ9A9pfKoNleTHUJE",

  authDomain: "animelek-c0857.firebaseapp.com",

  projectId: "animelek-c0857",

  storageBucket: "animelek-c0857.appspot.com",

  messagingSenderId: "875262254210",

  appId: "1:875262254210:web:abdba439316822e83d289b",

  measurementId: "G-VRYHRT5KZL"

};


// Initialize Firebase

const db = initializeApp(firebaseConfig);
const store = getFirestore(db);
const auth = getAuth(db)
export {store,auth}