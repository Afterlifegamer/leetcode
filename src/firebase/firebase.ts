// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA4shtxvFrZedEeV0DYUxsNaHTpw1CFYbo",
  authDomain: "leetclone-3a3d0.firebaseapp.com",
  projectId: "leetclone-3a3d0",
  storageBucket: "leetclone-3a3d0.firebasestorage.app",
  messagingSenderId: "785661006562",
  appId: "1:785661006562:web:8bb57819dbf4777ee544bb",
  measurementId: "G-8TZC54EK7J",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

const auth = getAuth(app);
const firestore = getFirestore(app);

export { auth, firestore, app };
