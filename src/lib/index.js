// aqui exportaras las funciones que necesites
<<<<<<< HEAD
// eslint-disable-next-line import/newline-after-import, import/no-unresolved
=======
// Función que crea la publicación en Home
export const publicPost = (input, createPost) => {
  if (input !== '') {
    createPost(input);
  } else {
    alert('Ingresa un mensaje');
  }
};






// eslint-disable-next-line import/newline-after-import
// import { auth, onAuthStateChanged } from '../firebase/config.js';
// import { createUserWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.9.0/firebase-auth.js';
/*
export const authState = onAuthStateChanged(auth, (user) => {
  if (user != null) {
    return user
  } else {
    return null
  }
});

export const registerUser = async (email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password)
    console.log(userCredential.user)

    return userCredential
  } catch (error) {
    console.error(error.code);
    console.error(error.message);
  }
} */ 
>>>>>>> 643ee35ff7855f531b5e0820a53fe3f9dbcc2a25
