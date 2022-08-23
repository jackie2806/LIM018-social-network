/* eslint-disable import/no-unresolved */
// eslint-disable-next-line import/no-unresolved
import {
  getAuth, createUserWithEmailAndPassword, onAuthStateChanged, sendEmailVerification

} from 'https://www.gstatic.com/firebasejs/9.9.0/firebase-auth.js';

import {
  getFirestore,
} from 'https://www.gstatic.com/firebasejs/9.9.0/firebase-firestore.js';

import { app } from './config.js';

export const dataBase = getFirestore(app);
export const auth = getAuth();
