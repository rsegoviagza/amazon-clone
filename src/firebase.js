import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCkQg-jQXhmVIsDNUm5BY4C7MMwWX_NgJA",
  authDomain: "challenge-b13de.firebaseapp.com",
  databaseURL: "https://challenge-b13de.firebaseio.com",
  projectId: "challenge-b13de",
  storageBucket: "challenge-b13de.appspot.com",
  messagingSenderId: "459382266841",
  appId: "1:459382266841:web:327dbb6091bf9a4857d7c8",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

export { db, auth };
