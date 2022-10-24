// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD3lcBHGPmNBfkX-eKT81Jp82RzhfDcpZY",
  authDomain: "realtor-clone-react-e4e57.firebaseapp.com",
  projectId: "realtor-clone-react-e4e57",
  storageBucket: "realtor-clone-react-e4e57.appspot.com",
  messagingSenderId: "1008994293415",
  appId: "1:1008994293415:web:69bb8c8f402162dc15ad82",
  measurementId: "G-FN4TGYXHFX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore();