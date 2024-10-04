// Import the functions you need from the SDKs you need
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDdKm2zEr-5WEsjIcO7jIuxokBaf-SwAgM",
  authDomain: "pantrycheck-75a5a.firebaseapp.com",
  projectId: "pantrycheck-75a5a",
  storageBucket: "pantrycheck-75a5a.appspot.com",
  messagingSenderId: "1055483613510",
  appId: "1:1055483613510:web:1ee19f2ce99e0c1d691547"
};

// Initialize Firebase
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export const auth = firebase.auth();
export const db = firebase.firestore();