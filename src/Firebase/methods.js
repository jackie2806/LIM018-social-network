import { app } from './config.js';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  updateProfile,
} from 'https://www.gstatic.com/firebasejs/9.9.0/firebase-auth.js';

import {
  getFirestore,
} from 'https://www.gstatic.com/firebasejs/9.9.0/firebase-firestore.js';

import { dataRegister } from '../components/Register.js';
import { onNavigate } from '../main.js';

const isLoggedIn = () => {
  console.log(getAuth(app))
  return getAuth(app).currentUser;
}

const dataBase = getFirestore(app);
const auth = getAuth(app);



/* 1.- instancia del objeto proveedor de google */
const provider = new GoogleAuthProvider();

/* para poder registrar el usuario */
export const userRegister = getAuth();

const registrar = async () => {
  const data = dataRegister()

  try {
    const dataRegister = await createUserWithEmailAndPassword (auth, data.email, data.password)

    await updateProfile(dataRegister.user, {
      displayName: data.name,
    })
    console.log(dataRegister)

    alert(`hola ${data.name} ya estás registrado`)
    onNavigate('/home')
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert (errorMessage)
  };

}

export {
  dataBase,
  auth,
  isLoggedIn,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  registrar,
};