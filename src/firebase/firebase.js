import * as firebase from "firebase";

const config = {
  apiKey: "AIzaSyDizPhwFHuCKZBGoil5bch7Md_KFbUs6UE",
  authDomain: "ecommerce-cart-38430.firebaseapp.com",
  databaseURL: "https://ecommerce-cart-38430.firebaseio.com",
  projectId: "ecommerce-cart-38430",
  storageBucket: "ecommerce-cart-38430.appspot.com",
  messagingSenderId: "767936945909"
};

firebase.initializeApp(config);

const auth = firebase.auth();

export {
  auth
};
