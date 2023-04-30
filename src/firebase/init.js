// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB0XA4Inx4UEy_3pB8n5gMQuwxl5gBX5Xc",
  authDomain: "fir-zaf-housing.firebaseapp.com",
  projectId: "fir-zaf-housing",
  storageBucket: "fir-zaf-housing.appspot.com",
  messagingSenderId: "139761409895",
  appId: "1:139761409895:web:3175d1ad7d788104fa19c2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore();