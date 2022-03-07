
// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
    apiKey: "AIzaSyBkQNxopun5A6VGxV1jKEp7HlVKi2CjY84",
    authDomain: "twitter-clone-3d91f.firebaseapp.com",
    projectId: "twitter-clone-3d91f",
    storageBucket: "twitter-clone-3d91f.appspot.com",
    messagingSenderId: "430581409498",
    appId: "1:430581409498:web:363110b8ea777c5eade7e3",
    measurementId: "G-2PEJZ11VC6"
  };


// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export default app;
export { db, storage };



