// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDvenTz0aNM-OMCPu3-JTzv2UQb2ZPTsnw",
  authDomain: "red-social-5b8cd.firebaseapp.com",
  databaseURL: "https://red-social-5b8cd-default-rtdb.firebaseio.com",
  projectId: "red-social-5b8cd",
  storageBucket: "red-social-5b8cd.appspot.com",
  messagingSenderId: "148850547678",
  appId: "1:148850547678:web:0b8eb9fb2016d570911b4f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app