import firebase from './firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD-M6Z-cGbtgEzx8p3P31LKTbZKwg-m4Mc",
  authDomain: "facebook-clone-d862a.firebaseapp.com",
  databaseURL: "https://facebook-clone-d862a-default-rtdb.firebaseio.com",
  projectId: "facebook-clone-d862a",
  storageBucket: "facebook-clone-d862a.appspot.com",
  messagingSenderId: "801044480042",
  appId: "1:801044480042:web:bfcf484fefd26b40d30353",
  measurementId: "G-DYYMWPKFK5"
};

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth , provider}
export default db;