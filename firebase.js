import firebase from "firebase";
import "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyALw7p8lqTsZeZz3jzBS0pLBgOYp_hz1DI",
    authDomain: "fbook-bda58.firebaseapp.com",
    projectId: "fbook-bda58",
    storageBucket: "fbook-bda58.appspot.com",
    messagingSenderId: "754469553686",
    appId: "1:754469553686:web:5e32de46bc879dc8499737"
  };

  const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

  const db = app.firestore();
  const storage = firebase.storage();

  export { db, storage };