import firebase from "firebase";
require("@firebase/firestore");

var firebaseConfig = {
  apiKey: "AIzaSyACUmBbg0VelCUHX1gmcb6ycFuEBC5jccU",
  authDomain: "e-ride-41883.firebaseapp.com",
  projectId: "e-ride-41883",
  storageBucket: "e-ride-41883.appspot.com",
  messagingSenderId: "659867939459",
  appId: "1:659867939459:web:dc95752901236d5768a1b6"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
