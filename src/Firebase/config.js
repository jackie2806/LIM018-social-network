// Import the functions you need from the SDKs you need
// eslint-disable-next-line import/no-unresolved
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.9.0/firebase-app.js';
// eslint-disable-next-line import/no-unresolved
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged } from 'https://www.gstatic.com/firebasejs/9.9.0/firebase-auth.js';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// 'https://www.gstatic.com/firebasejs/9.9.0/firebase-firestore.js'
// 'https://www.gstatic.com/firebasejs/9.9.0/firebase-auth.js'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDU_PJehjpoNuEP16NALJnk8UBnTcTlIyw',
  authDomain: 'placematch-cc756.firebaseapp.com',
  projectId: 'placematch-cc756',
  storageBucket: 'placematch-cc756.appspot.com',
  messagingSenderId: '969722312897',
  appId: '1:969722312897:web:0de49887f648c80d473c40',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth, onAuthStateChanged };
