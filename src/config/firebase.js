// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAw4aRS-XC-DZEiMBkHnuiYMUr5k5BtEMM",
  authDomain: "fin-46172.firebaseapp.com",
  projectId: "fin-46172",
  storageBucket: "fin-46172.appspot.com",
  messagingSenderId: "562039826792",
  appId: "1:562039826792:web:15a7e3ba40720439ff8edd",
  measurementId: "G-J0R4F42H7Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);