import firebase from "./firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCkaYwrPHLm9WO5KLb6k9mq-SjdPjhU4E4",
  authDomain: "docs-clone-3be4b.firebaseapp.com",
  projectId: "docs-clone-3be4b",
  storageBucket: "docs-clone-3be4b.appspot.com",
  messagingSenderId: "109453226048",
  appId: "1:109453226048:web:7a58fe79a9a44f15f8afa5",
  measurementId: "G-021XVKS5RC",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();

export { db };
