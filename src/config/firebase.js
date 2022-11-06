// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDdncqGznwctRH4vG2zX4bk7k58jAWVYqo",
    authDomain: "hayes-f75de.firebaseapp.com",
    projectId: "hayes-f75de",
    storageBucket: "hayes-f75de.appspot.com",
    messagingSenderId: "636731131361",
    appId: "1:636731131361:web:f38abc0842e8af39ebbea0",
    measurementId: "G-DV52RP8F5W"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
