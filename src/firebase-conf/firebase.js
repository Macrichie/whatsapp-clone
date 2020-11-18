import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDb-GHtQXECzBYAt46PnUg9Nhfmqmf_ItY",
  authDomain: "whatsapp-clone-96d5c.firebaseapp.com",
  databaseURL: "https://whatsapp-clone-96d5c.firebaseio.com",
  projectId: "whatsapp-clone-96d5c",
  storageBucket: "whatsapp-clone-96d5c.appspot.com",
  messagingSenderId: "48443503577",
  appId: "1:48443503577:web:7db1c7eb1a738200ce5fc8",
  measurementId: "G-K46J7XM3P5",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
