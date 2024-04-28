// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBZInTvInl2Q_4AYB4bTxoQhiJwrWOAULw",
  authDomain: "online-shop-app-78041.firebaseapp.com",
  projectId: "online-shop-app-78041",
  storageBucket: "online-shop-app-78041.appspot.com",
  messagingSenderId: "1062424892801",
  appId: "1:1062424892801:web:bed582d6268f1c8f268480"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db=getFirestore(app);