// aqui exportaras las funciones que necesites

export const publicPost = (input, divContainerPost, divHome, post, createPost) => {
  if (input !== '') {
    console.log('input', input);
    divContainerPost.appendChild(post);
    divHome.appendChild(divContainerPost);
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