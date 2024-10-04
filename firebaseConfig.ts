// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDdKm2zEr-5WEsjIcO7jIuxokBaf-SwAgM",
  authDomain: "pantrycheck-75a5a.firebaseapp.com",
  projectId: "pantrycheck-75a5a",
  storageBucket: "pantrycheck-75a5a.appspot.com",
  messagingSenderId: "1055483613510",
  appId: "1:1055483613510:web:1ee19f2ce99e0c1d691547"
};

// Initialize Firebase app
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
const auth = getAuth(app); // for authentication
const db = getFirestore(app); // for Firestore
export { auth, db };