// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBKnSyEe9XDmvvpp4Hr0yReOW1knXUzddg",
  authDomain: "pizzashop-712af.firebaseapp.com",
  projectId: "pizzashop-712af",
  storageBucket: "pizzashop-712af.appspot.com",
  messagingSenderId: "733020816015",
  appId: "1:733020816015:web:ac1020997b948174b8e6fa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
