import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD1Upgcm0FMkx_RA9qZyLx-PxmLvYWHHjY",
  authDomain: "sdfa-47c53.firebaseapp.com",
  projectId: "sdfa-47c53",
  storageBucket: "sdfa-47c53.appspot.com",
  messagingSenderId: "860230998737",
  appId: "1:860230998737:web:84dbbf9a2d875b101843f0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getDatabase(app);