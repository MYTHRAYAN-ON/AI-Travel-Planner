// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AlzaSy8-8qoDtDuBJLb891NTWMf2lsfSI9n701W",
  authDomain: "ai-travel-planner-18355.firebaseapp.com",
  projectId: "ai-travel-planner-18355",
  storageBucket: "ai-travel-planner-18355.firebasestorage.app",
  messagingSenderId: "451478286464",
  appId: "1:451478286464:web:6142c998f6c03c37013665",
  measurementId: "G-W277X8TWQB"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db=getFirestore(app);
// const analytics = getAnalytics(app);