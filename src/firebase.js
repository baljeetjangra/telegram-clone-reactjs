import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCCcyDc9Y4wdB4FJQiUZRuIm0Zu4KvrAO0",
  authDomain: "telegram-clone-web.firebaseapp.com",
  databaseURL: "https://telegram-clone-web.firebaseio.com",
  projectId: "telegram-clone-web",
  storageBucket: "telegram-clone-web.appspot.com",
  messagingSenderId: "836691427496",
  appId: "1:836691427496:web:3a04b3870bdd2294b7029d",
  measurementId: "G-F1EYZH8P6H",
};

export const firebaseApp = firebase.initializeApp(firebaseConfig);
export const db = firebaseApp.firestore();
export const auth = firebase.auth();
export const provider = new firebase.auth.GoogleAuthProvider();
