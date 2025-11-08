// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAl7zNaLTBNuUBT4ZUI6OKRm2U0z4Gnp84",
  authDomain: "finease-e4856.firebaseapp.com",
  projectId: "finease-e4856",
  storageBucket: "finease-e4856.firebasestorage.app",
  messagingSenderId: "933025679867",
  appId: "1:933025679867:web:5bf605025ee414f0c9235e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);