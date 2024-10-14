// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBiHdt43qdFC7HwpjOwudVLMf13cukevJw",
  authDomain: "lab5seg3102-ca9c8.firebaseapp.com",
  projectId: "lab5seg3102-ca9c8",
  storageBucket: "lab5seg3102-ca9c8.appspot.com",
  messagingSenderId: "142041596527",
  appId: "1:142041596527:web:31fc693d6652309684439a",
  measurementId: "G-93R1GN2BRF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);