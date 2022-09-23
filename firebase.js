
// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// https://firebase.google.com/docs/web/setup#available-libraries
// TODO: Add SDKs for Firebase products that you want to use
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyAE3ArPWpdwDQRX1MvXRTuKUTl4OKKJHzE",
  authDomain: "secondtwiter-3dabc.firebaseapp.com",
  projectId: "secondtwiter-3dabc",
  storageBucket: "secondtwiter-3dabc.appspot.com",
  messagingSenderId: "964421307434",
  appId: "1:964421307434:web:e9b4424db0028e31a1c753",
  measurementId: "G-MHZ3RHNFK1"
};



// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export default app;
export { db, storage };



