// Import the functions you need from the SDKs you need
// eslint-disable-next-line import/no-unresolved
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.9.0/firebase-app.js';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAa5a6CUrWp58LY9N7CZU3t_AziHLmdoh0',
  authDomain: 'placematch-e45a0.firebaseapp.com',
  projectId: 'placematch-e45a0',
  storageBucket: 'placematch-e45a0.appspot.com',
  messagingSenderId: '84299651513',
  appId: '1:84299651513:web:4fcad2183d4ffcfa793e68',

};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
