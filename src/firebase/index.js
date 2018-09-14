import * as firebase from './firebase';
import * as auth from './auth';

export {
  firebase,
  auth,
};

// Initialize Firebase
// const config = {
//   apiKey: "AIzaSyDizPhwFHuCKZBGoil5bch7Md_KFbUs6UE",
//   authDomain: "ecommerce-cart-38430.firebaseapp.com",
//   databaseURL: "https://ecommerce-cart-38430.firebaseio.com",
//   projectId: "ecommerce-cart-38430",
//   storageBucket: "ecommerce-cart-38430.appspot.com",
//   messagingSenderId: "767936945909"
// };

// // export const app = firebase.initializeApp(config);

// // Initialize Cloud Firestore through Firebase
// const db = firebase.firestore();

// // Disable deprecated features
// db.settings({
//   timestampsInSnapshots: true
// });

// db.collection("users").get().then((querySnapshot) => {
//     querySnapshot.forEach((doc) => {
//         console.log(`${doc.id} => ${doc.data().login }`);
//     });
// });

