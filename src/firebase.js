import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD5FTkCE3cJgU2lvHnHP4ty-7wB2DOAgkY",
  authDomain: "copy-d0a49.firebaseapp.com",
  projectId: "copy-d0a49",
  storageBucket: "copy-d0a49.appspot.com",
  messagingSenderId: "589495627111",
  appId: "1:589495627111:web:ab4f2c505249ad27d013c2",
  measurementId: "G-JNS0Y4VHPV"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };