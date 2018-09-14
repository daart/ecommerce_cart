import { auth } from './firebase.js';

export const createUserWithEmailAndPassword = (email, password) => {
  return auth
    .createUserWithEmailAndPassword(email, password)
};

export const signInWithEmailAndPassword = (email, password) => {
  return auth
    .signInWithEmailAndPassword(email, password)
};

export const getCurrentlySignedInUser = () => {
  return auth
    .onAuthStateChanged((user) => {
      if (user) {
        let { uuid, email } = user;
        
        console.log("userInfo -> ", user);
        return { uuid, email };
      } else {
        console.log("no user is currently signed in -> ", user);
        return user
      }
    });
}

export const signOut = () => {
  return auth.signOut();
}

export const passwordReset = (email) => {
  return auth.sendPasswordResetEmail(email);
}

export const passwordUpdate = (password) => {
  return auth.currentUser.updatePassword(password);
}
