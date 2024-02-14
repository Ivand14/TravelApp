// Import the functions you need from the SDKs you need

import { getFirestore } from 'firebase/firestore'
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBZXDYCD_NlOE5ltk3AzmbBgqOFBYitZQs",
    authDomain: "travelapp-413621.firebaseapp.com",
    projectId: "travelapp-413621",
    storageBucket: "travelapp-413621.appspot.com",
    messagingSenderId: "385474869625",
    appId: "1:385474869625:web:b365dcebdc45d2479dd7a8"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
